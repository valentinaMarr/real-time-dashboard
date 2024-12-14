import { Box } from "@mui/material";

export const WeatherIcon = ({ forecastIcon }: { forecastIcon: string }) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        height: "3.68rem",
        width: "auto",
        color: "inherit",
        fontSize: "3rem",
        backgroundColor: "transparent",
      }}
    >
      <img
        alt="forecast icon"
        src={`https://openweathermap.org/img/wn/${forecastIcon}@2x.png`}
        width="auto"
      />
    </Box>
  );
};
