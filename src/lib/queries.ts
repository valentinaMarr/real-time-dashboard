"use client";

import { useQueries, useQuery } from "@tanstack/react-query";

const weather_key = process.env.NEXT_PUBLIC_OPENWEATHERKEY;
const news_key = process.env.NEXT_PUBLIC_NEWSAPIKEY;

export function useGetLocalForecast(lat: number, lon: number) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${weather_key}`;
  const geolocationUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${weather_key}`;

  return useQueries({
    queries: [
      {
        queryKey: ["getWeatherForecast", lat, lon],
        queryFn: async () => {
          const response = await fetch(weatherUrl);
          const data = await response.json();

          if (response.status !== 200) {
            throw new Error("Weather forecast unavailable", {
              cause: "Weather map query failure",
            });
          }

          return data;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: 60 * 60 * 24,
        retry: 0,
      },
      {
        queryKey: ["getLocalInfo", lat, lon],
        queryFn: async () => {
          const response = await fetch(geolocationUrl);
          const data = await response.json();

          if (response.status !== 200) {
            throw new Error("Geolocation data unavailable", {
              cause: "Reverse geolocation query failure",
            });
          }

          return data;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: 60 * 60 * 24,
        retry: 0,
      },
    ],
    combine: (results) => {
      const error = results.filter((item: unknown) => item instanceof Error);

      return {
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
        error,
      };
    },
  });
}

export function useGetNewsReports() {
  const apiUrl = `https://newsapi.org/v2/everything?domains=ansa.it&pageSize=6&apiKey=${news_key}`;
  return useQuery({
    queryKey: ["getNewsReports"],
    queryFn: async () => {
      const response = await fetch(apiUrl);
      if (response.status !== 200) {
        throw new Error("There was some trouble in getting today's news", {
          cause: "Can not reach news source website",
        });
      }

      return await response.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
  });
}

export function useGetUserName() {
  return useQuery({
    queryKey: ["userName"],
    queryFn: async () => {
      const response = await fetch("/api/getUserNickname");
      if (response.status !== 200) {
        return "stranger";
      }
      const result = await response.json();

      return result.message;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 2,
  });
}
