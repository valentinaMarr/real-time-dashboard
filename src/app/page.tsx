"use client";

import { Header } from "@/components/layout/Header";
import { Loading } from "@/components/Loading";
import { NewsSection } from "@/components/NewsSection";
import { WeatherSection } from "@/components/WeatherSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import {
  useGetLocalForecast,
  useGetNewsReports,
  useGetUserName,
} from "@/lib/queries";
import { Forecast, ForecastDetails, NewsDetails } from "@/lib/types";
import Grid2 from "@mui/material/Grid2";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  // GET COORDINATES
  const [{ longitude, latitude }, setCoords] = useState<{
    latitude: number;
    longitude: number;
  }>(
    {} as {
      latitude: number;
      longitude: number;
    }
  );

  const writeLocation = (input: GeolocationPosition) => {
    const longitude = input.coords.longitude;
    const latitude = input.coords.latitude;

    setCoords({ longitude, latitude });
  };

  const writeError = (input: GeolocationPositionError) => {
    const errorCode = input.code;
    switch (errorCode) {
      case input.PERMISSION_DENIED:
        throw new Error(
          "It seems that you denied us the access to your location details. Would you please change your browser preferences?",
          { cause: "Permission denied." }
        );
      case input.POSITION_UNAVAILABLE:
        throw new Error(
          "It seems that your location is unavailable at the moment.",
          { cause: "Unknown location" }
        );
      case input.TIMEOUT:
        throw new Error(
          "It seems that the request is taking too long to be fulfilled. Have you tried to check your connection?",
          { cause: "Time request exceeded" }
        );
      default:
        throw new Error(input.message);
    }
  };

  const getLocation = useCallback(() => {
    const currentLocation = navigator.geolocation.getCurrentPosition(
      writeLocation,
      writeError
    );

    return currentLocation;
  }, [writeLocation, writeError]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  // QUERIES
  const {
    data: geolocationData,
    pending: forecastPending,
    error: geolocationError,
  } = useGetLocalForecast(latitude, longitude);
  const {
    data: newsData,
    isLoading: reportsLoading,
    error: reportsError,
  } = useGetNewsReports();

  const {
    data: userName,
    isLoading: userNameLoading,
    error: userNameError,
  } = useGetUserName();

  const locationDetails: ForecastDetails = useMemo(() => {
    const geolocationResults = geolocationData?.[1]?.[0];
    const weatherResults = geolocationData?.[0];

    return {
      city: geolocationResults?.name || "",
      state: geolocationResults?.state || "",
      description: weatherResults?.weather?.[0]?.description || "",
      icon: weatherResults?.weather?.[0]?.icon || "",
      temperature: `${weatherResults?.main?.temp.toFixed(0)}°` || "",
      min_temperature: `${weatherResults?.main?.temp_min.toFixed(0)}°` || "",
      max_temperature: `${weatherResults?.main?.temp_max.toFixed(0)}°` || "",
      humidity: `${weatherResults?.main?.humidity}%` || "",
      wind: `${weatherResults?.wind?.speed} m/s` || "",
    };
  }, [geolocationData]);

  const newsDetails: Array<NewsDetails> = useMemo(() => {
    const relevantData = newsData?.articles;

    if (!relevantData?.length) {
      return [];
    }

    const articles: Array<NewsDetails> = relevantData?.map((item: any) => ({
      headline: item?.title,
      imgSrc: item?.urlToImage,
      reportBody: item?.description,
      reportUrl: item?.url,
      source: item?.source?.id,
    }));

    const filteredList = articles.filter(
      (item: any, index: number) =>
        articles.findIndex((article) => article.headline === item.headline) ===
        index
    );

    return filteredList;
  }, [newsData]);

  // THEMING
  const timeKeys: {
    sunriseTime: unknown;
    sunsetTime: unknown;
  } = useMemo(() => {
    const sunsetTime = geolocationData?.[0]?.sys.sunset;
    const sunriseTime = geolocationData?.[0]?.sys.sunrise;

    return {
      sunriseTime,
      sunsetTime,
    };
  }, [locationDetails, geolocationData]);

  const weatherKey: Forecast | string = useMemo(() => {
    const forecastDescription = locationDetails.description;
    const { sunriseTime, sunsetTime } = timeKeys;
    const now = new Date().getTime();

    if (now == sunriseTime) {
      return "dawn";
    }

    if (now == sunsetTime) {
      return "sunset";
    }

    if (now > (sunsetTime as number)) {
      return "evening";
    }

    switch (forecastDescription) {
      case "clear sky":
        return "sunny";
      case "snow":
        return "snowy";
      case "rain":
        return "rainy";
      default:
        return "none";
    }
  }, [locationDetails, geolocationData, timeKeys]);

  if (userNameLoading || forecastPending || reportsLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header
        sunrise={timeKeys.sunriseTime as number}
        sunset={timeKeys.sunsetTime as number}
      />
      <Grid2
        className={`body-${weatherKey}`}
        component="main"
        container
        maxWidth="100vw"
        size={{ xs: 12 }}
        spacing={{ xs: 12, md: 12 }}
        sx={{
          paddingInline: { xs: "1.5rem", md: "2rem" },
          paddingBlock: {
            xs: "6.75rem",
          },
        }}
      >
        <WelcomeSection
          userName={userName}
          error={userNameError}
          sunrise={timeKeys.sunriseTime as number}
          sunset={timeKeys.sunsetTime as number}
        />
        <WeatherSection
          forecastDetails={locationDetails}
          themeKey={weatherKey}
          error={geolocationError[0]}
        />
        <NewsSection articles={newsDetails} error={reportsError} />
      </Grid2>
    </>
  );
}
