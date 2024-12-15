"use client";
import { ForecastDetails } from "@/lib/types";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ErrorMessage } from "./ErrorMessage";
import { WeatherIcon } from "./icons/WeatherIcon";

export const WeatherSection = ({
  forecastDetails,
  themeKey,
  error,
}: {
  forecastDetails: ForecastDetails;
  themeKey: string;
  error?: unknown;
}) => {
  const { city, state, temperature, description, icon } = forecastDetails;
  const detailsListInfo = {
    max_temperature: forecastDetails?.max_temperature,
    min_temperature: forecastDetails?.min_temperature,
    wind: forecastDetails?.wind,
    humidity: forecastDetails?.humidity,
  };

  const iterableList = Object.entries(detailsListInfo);

  if (error) {
    <Grid2
      container
      component="section"
      size={{ xs: 12, md: 4 }}
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
      size={{ xs: 12, md: 4 }}
      aria-label="local weather forecast section"
    >
      <Paper elevation={1} variant="themedPaper" className={themeKey}>
        <Grid2
          container
          size={12}
          columns={12}
          maxWidth="100%"
          sx={{
            textAlign: { xs: "center", md: "left" },
            rowGap: { xs: 1.75, md: 0.5 },
          }}
        >
          <Grid2
            size={12}
            aria-labelledby="location"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              position: "relative",
            }}
          >
            <Typography id="location" component="p" variant="body1">
              {`${city}, ${state}`}
            </Typography>
            {!!icon && <WeatherIcon forecastIcon={icon} />}
          </Grid2>
          <Grid2
            aria-label="weather forecast"
            size={{ xs: 12, md: 4 }}
            sx={{ alignContent: { md: "center" } }}
          >
            <Typography component="h2" variant="h2">
              {temperature}
            </Typography>
            <Typography component="h4" variant="h4">
              {description}
            </Typography>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 8 }}
            aria-label="weather forecast"
            columns={{ xs: 3, md: 1 }}
            sx={{
              paddingTop: { xs: 4, md: 0 },
              gap: { xs: 2 },
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              justifyContent: "space-between",
              alignContent: "baseline",
              flexWrap: "wrap",
            }}
          >
            {iterableList.map((item, index) => {
              if (item[0] === "temperature" || item[0] === "description") {
                return null;
              }

              const noUnderscores = item[0].toString().split("_")[0];

              return (
                <Stack
                  sx={{
                    width: {
                      xs: index < iterableList.length - 1 ? "25%" : "100%",
                      md: "100%",
                    },
                    justifyContent: { md: "space-between" },
                    borderBottom: { xs: "none", md: "1px solid" },
                  }}
                  direction={{ xs: "column", md: "row" }}
                  key={`weather-details-grid-cell-${index}`}
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
          </Grid2>
        </Grid2>
      </Paper>
    </Grid2>
  );
};
