export type Forecast = "sunny" | "rainy" | "snowy";
export type ForecastDetails = {
  temperature: string;
  description: string;
  icon?: string;
  maxTemp: string;
  minTemp: string;
  wind: string;
  humidity: string;
};
export type NewsDetails = {
  headline: string;
  imgSrc?: string;
  articleBody: string;
  articleUrl: string;
};
