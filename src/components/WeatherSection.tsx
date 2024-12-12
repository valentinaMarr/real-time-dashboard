"use client";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { WeatherIcon } from "./icons/WeatherIcon";

export const WeatherSection = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  // PLACEHOLDER!! SHOULD BE CHANGED WHEN REAL DATA IS READY
  // TODO: THE LOCATION STATE SHOULD NOT BE HERE BUT IN A GLOBAL STATE INSTEAD
  const location = "Bologna, Italy";
  const forecast = {
    temperature: "6°",
    description: "Rainy",
    max: "6°",
    min: "5°",
    wind: "8km/7h",
    humidity: "50",
  };
  const [errorMessage, setErrorMessage] = useState<{
    headline?: string;
    body?: string;
  }>({});

  const writeLocation = (input: GeolocationPosition) => {};

  const writeError = (input: GeolocationPositionError) => {
    const errorCode = input.code;
    switch (errorCode) {
      case input.PERMISSION_DENIED:
        setErrorMessage((prev) => ({
          ...prev,
          headline: "Permission denied.",
          body: "It seems that you denied us the access to your location details. Would you please change your browser preferences?",
        }));
        break;
      case input.POSITION_UNAVAILABLE:
        setErrorMessage((prev) => ({
          ...prev,
          headline: "Where are you?",
          body: "It seems that your location is unavailable at the moment. ",
        }));
        break;
      case input.TIMEOUT:
        setErrorMessage((prev) => ({
          ...prev,
          headline: "Time request exceeded",
          body: "It seems that the request is taking too long to be fulfilled. Have you tried to check your connection?",
        }));
        break;
      default:
        setErrorMessage((prev) => ({
          ...prev,
          headline: "Something went wrong",
          body: input.message,
        }));
        break;
    }
  };

  const getLocation = useCallback(() => {
    const currentLocation = navigator.geolocation.getCurrentPosition(
      writeLocation,
      writeError
    );
  }, []);

  if (!location) {
    <Grid2
      component="section"
      size={{ xs: 12, md: 6 }}
      aria-label="local weather forecast section"
    >
      <ErrorMessage
        headline={errorMessage.headline || "Where are you?"}
        body={
          errorMessage.body ||
          "It seems that your location is unavailable at the moment."
        }
      />
    </Grid2>;
  }

  return (
    <Grid2
      component="section"
      size={{ xs: 12, md: 6 }}
      aria-label="local weather forecast section"
    >
      <Paper elevation={1} variant="themedPaper" className="sunny">
        <Grid2 size={{ xs: 12, md: 6 }} spacing={{ xs: 1.75 }}>
          <Grid2 size={{ xs: 12, md: 6 }} aria-labeledby="location">
            <Typography id="location" component="p" variant="body1">
              {location}
            </Typography>
          </Grid2>
          {isMobile && (
            <Grid2 size={12} aria-hidden="true">
              <WeatherIcon forecast="sunny" />
            </Grid2>
          )}
          <Grid2
            size={{ xs: 12, md: 6 }}
            offset={{ md: 6 }}
            aria-label="weather forecast"
          >
            <Typography component="h2" variant="h2">
              {forecast.temperature}
            </Typography>
            <Typography component="h4" variant="h4">
              {forecast.description}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} wrap="wrap">
            <Stack
              direction={{ xs: "row", md: "column" }}
              divider={!isMobile ? <Divider orientation="horizontal" /> : null}
              display="flex"
              justifyContent="space-between"
            >
              {Object.entries(forecast).map((item, index) => {
                if (item[0] === "temperature" || item[0] === "description") {
                  return null;
                }

                return (
                  <Stack
                    component="span"
                    direction={{ xs: "column", md: "row" }}
                    key={`weather-details-span-${index}`}
                  >
                    <Typography
                      component="p"
                      variant="body1"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {item[0]}
                    </Typography>
                    <Typography component="p" variant="body1">
                      {item[1]}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Grid2>
        </Grid2>
      </Paper>
    </Grid2>
  );
};
