"use client";
import { ForecastDetails } from "@/lib/types";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ErrorMessage } from "./ErrorMessage";
import { WeatherIcon } from "./icons/WeatherIcon";

export const WeatherSection = ({
  forecastDetails,
}: {
  forecastDetails: ForecastDetails;
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { city, state, temperature, description, icon } = forecastDetails;
  const detailsListInfo = {
    max_temperature: forecastDetails?.max_temperature,
    min_temperature: forecastDetails?.min_temperature,
    wind: forecastDetails?.wind,
    humidity: forecastDetails?.humidity,
  };

  if (!city?.length || !temperature?.length) {
    <Grid2
      container
      component="section"
      size={{ xs: 12, md: 6 }}
      aria-label="local weather forecast section"
    >
      <ErrorMessage
        headline={"We were unable to find your location."}
        body={"Without your location, this service will not load properly"}
      />
    </Grid2>;
  }

  return (
    <Grid2
      component="section"
      size={{ xs: 12, md: 6 }}
      aria-label="local weather forecast section"
    >
      <Paper elevation={1} variant="themedPaper" className={`rainy`}>
        <Grid2
          container
          size={{ xs: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            rowGap: { xs: 1.75 },
          }}
        >
          <Grid2 size={{ xs: 12, md: 6 }} aria-labelledby="location">
            <Typography id="location" component="p" variant="body1">
              {`${city}, ${state}`}
            </Typography>
          </Grid2>
          {isMobile && (
            <Grid2 size={12} aria-hidden="true">
              {!!icon && <WeatherIcon forecastIcon={icon} />}
            </Grid2>
          )}
          <Grid2
            size={{ xs: 12, md: 6 }}
            offset={{ md: 6 }}
            aria-label="weather forecast"
          >
            <Typography component="h2" variant="h2">
              {temperature}
            </Typography>
            <Typography component="h4" variant="h4">
              {description}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} wrap="wrap">
            <Stack
              direction={{ xs: "row", md: "column" }}
              divider={!isMobile ? <Divider orientation="horizontal" /> : null}
              display="flex"
              justifyContent="space-between"
            >
              {Object.entries(detailsListInfo).map((item, index) => {
                if (item[0] === "temperature" || item[0] === "description") {
                  return null;
                }

                const noUnderscores = item[0].toString().replaceAll("_", " ");

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
                      {noUnderscores}
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
