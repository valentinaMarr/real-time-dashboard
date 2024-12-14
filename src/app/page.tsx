"use client";

import { Header } from "@/components/layout/Header";
import { NewsSection } from "@/components/NewsSection";
import { WeatherSection } from "@/components/WeatherSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { useGetLocalForecast, useGetNewsReports } from "@/lib/queries";
import { ForecastDetails, NewsDetails } from "@/lib/types";
import Grid2 from "@mui/material/Grid2";
import Skeleton from "@mui/material/Skeleton";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Home() {
  // const [{ forecast, countryCode, location }, setAtom] = useAtom(realTimeData);

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
  const { data: geolocationData, pending: geolocationPending } =
    useGetLocalForecast(latitude, longitude);
  const { data: newsData, isLoading: newsLoading } = useGetNewsReports();

  const locationDetails: ForecastDetails = useMemo(() => {
    const geolocationResults = geolocationData?.[1]?.[0];
    const weatherResults = geolocationData?.[0];

    return {
      city: geolocationResults?.name || "",
      state: geolocationResults?.state || "",
      description: weatherResults?.weather?.[0]?.main || "",
      icon: weatherResults?.weather?.[0]?.icon || "",
      temperature: weatherResults?.main?.temp || "",
      min_temperature: weatherResults?.main?.temp_min || "",
      max_temperature: weatherResults?.main?.temp_max || "",
      humidity: weatherResults?.main?.humidity || "",
      wind: weatherResults?.wind?.speed || "",
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

  return (
    <>
      <Header />
      <Grid2
        component="main"
        container
        maxWidth="100vw"
        spacing={{ xs: 12 }}
        sx={{
          paddingTop: {
            xs: "6.75rem",
          },
        }}
      >
        <WelcomeSection />
        {geolocationPending ? (
          <SkeletonGridCell />
        ) : (
          <WeatherSection forecastDetails={locationDetails} />
        )}
        {newsLoading ? (
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
      <Skeleton width="100%" />
    </Grid2>
  );
};
