"use client";

import { useQuery } from "@tanstack/react-query";

export function useGetWeatherForecast(lat: number, lon: number) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
  return useQuery({
    queryKey: ["getWeatherForecast"],
    queryFn: async () => {
      const response = await fetch(apiUrl);
      return await response.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: 60 * 60 * 12,
  });
}

export function useGetNewsReports(countryCode: string) {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}`;
  return useQuery({
    queryKey: ["getNewsReports"],
    queryFn: async () => {
      const response = await fetch(apiUrl);
      return await response.json();
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
