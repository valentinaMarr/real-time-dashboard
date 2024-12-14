import { Box } from "@mui/material";
import Image from "next/image";

export const WeatherIcon = ({ forecastIcon }: { forecastIcon: string }) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: "3.12rem",
        height: "3.12rem",
        justifySelf: "center",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <Image
        alt="forecast icon"
        src={`https://openweathermap.org/img/wn/${forecastIcon}@2x.png`}
        fill
      />
    </Box>
  );
};
