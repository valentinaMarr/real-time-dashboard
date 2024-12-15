import { Box } from "@mui/material";
import Image from "next/image";

export const WeatherIcon = ({ forecastIcon }: { forecastIcon: string }) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: "5vw",
        height: "5vh",
        justifySelf: { xs: "center", md: "end" },
        alignSelf: { xs: "center", md: "start" },
        transform: {
          lg: "translateY(-12px)",
        },
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      <Image
        alt="forecast icon"
        src={`https://openweathermap.org/img/wn/${forecastIcon}@2x.png`}
        fill
        objectFit="cover"
        // sizes="(max-width: 1200px) 50px, 50px"
      />
    </Box>
  );
};
