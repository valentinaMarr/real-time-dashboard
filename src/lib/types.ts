export type Forecast = "sunny" | "rainy" | "snowy";
export type ForecastDetails = {
  city: string;
  state: string;
  temperature: string;
  description: string;
  icon: string;
  max_temperature: string;
  min_temperature: string;
  wind: string;
  humidity: string;
};
export type NewsDetails = {
  headline: string;
  imgSrc?: string;
  reportBody: string;
  reportUrl: string;
  source: string;
};
