"use client";

import { Header } from "@/components/layout/Header";
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
import Skeleton from "@mui/material/Skeleton";
import { useIsFetching } from "@tanstack/react-query";
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
  const { data: geolocationData } = useGetLocalForecast(latitude, longitude);
  const { data: newsData } = useGetNewsReports();

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

    const articles: Array<NewsDetails> = relevantData?.map((item: any) => ({
      headline: item?.title,
      imgSrc: item?.urlToImage,
      reportBody: item?.description,
      reportUrl: item?.url,
      source: item?.source?.id,
    }));

    return articles || [];
  }, [newsData]);

  const { data: userName } = useGetUserName();

  const queriesAreFetching = useIsFetching({
    queryKey: [
      "username",
      "getNewsReports",
      "getWeatherForecast",
      "getLocalInfo",
    ],
  });

  // THEMING
  const weatherKey: Forecast = useMemo(() => {
    const forecastDescription = locationDetails.description;

    switch (forecastDescription) {
      case "clear sky":
        return "sunny";
      case "snow":
        return "snowy";
      default:
        return "rainy";
    }
  }, [locationDetails]);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].classList.add(`body-${weatherKey}`);
  }, [weatherKey]);

  return (
    <>
      <Header />
      <Grid2
        component="main"
        container
        maxWidth="100vw"
        minHeight="100vh"
        spacing={{ xs: 12 }}
        sx={{
          paddingBlock: {
            xs: "6.75rem",
          },
        }}
      >
        {queriesAreFetching > 0 ? (
          <SkeletonGridCell />
        ) : (
          <WelcomeSection userName={userName} />
        )}
        {queriesAreFetching > 0 ? (
          <SkeletonGridCell />
        ) : (
          <WeatherSection
            forecastDetails={locationDetails}
            themeKey={weatherKey}
          />
        )}
        {queriesAreFetching > 0 ? (
          <SkeletonGridCell />
        ) : (
          <NewsSection articles={newsDetails} />
        )}
      </Grid2>
    </>
  );
}

const SkeletonGridCell = () => {
  return (
    <Grid2
      component="section"
      size={{ xs: 12, md: 6 }}
      aria-label="section loading"
    >
      <Skeleton width="100%" height="18.75rem" />
    </Grid2>
  );
};

