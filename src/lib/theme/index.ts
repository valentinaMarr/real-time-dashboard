"use client";

import { createTheme } from "@mui/material";

const theme = createTheme();

// TODO: ADD TYPOGRAPHY VARIANT FOR ERROR
// TODO: ADD PAPER VARIANT FOR NEWS

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: "var(--font-alata-regular)",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      lineHeight: "2.06rem",
    },
  },
  h2: {
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.875rem",
      lineHeight: "2.31rem",
    },
  },
  h3: {
    fontFamily: "var(--font-alata-regular)",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.25rem",
    },
  },
  h4: {
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
  },
  body1: {
    fontFamily: "var(--font-montserrat)",
    letterSpacing: "1%",
    color: "inherit",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
      lineHeight: "1.06rem",
    },
  },
  errorMessage: {
    fontFamily: "var(--font-alata-regular)",
    color: "inherit",
    letterSpacing: "0.5%",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
    },
  },
};

theme.palette = {
  ...theme.palette,
  forecastTheme: {
    dawn: "#c2c5ea",
    sunset: "#d06580",
    evening: "#6b60bd",
    sunny: "#d1fffc",
    rainy: "#394e7a",
    snowy: "#b1c4d8",
  },
};

theme.components = {
  ...theme.components,
  MuiGrid2: {
    styleOverrides: {
      root: {
        width: "100%",
        [theme.breakpoints.down("md")]: {
          paddingX: "1rem",
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { variant: "themedPaper" },
            style: {
              width: "100%",
              borderRadius: 5,
              "& .dawn": {
                backgroundColor: theme.palette.forecastTheme.dawn,
                color: theme.palette.grey["900"],
              },
              "& .sunset": {
                backgroundColor: theme.palette.forecastTheme.sunset,
                color: theme.palette.grey["300"],
              },
              "& .evening": {
                backgroundColor: theme.palette.forecastTheme.evening,
                color: theme.palette.grey["300"],
              },
              "& .sunny": {
                backgroundColor: theme.palette.forecastTheme.sunny,
                color: theme.palette.grey["300"],
              },
              "& .rainy": {
                backgroundColor: theme.palette.forecastTheme.rainy,
                color: theme.palette.grey["300"],
              },
              "& .snowy": {
                backgroundColor: theme.palette.forecastTheme.snowy,
                color: theme.palette.grey["900"],
              },
              [theme.breakpoints.down("md")]: {
                marginInline: "1.125rem",
                padding: "0.75rem",
              },
            },
          },
          {
            props: { variant: "discreet" },
            style: {
              width: "100%",
              display: "flex",
              flexDirection: "column",
              rowGap: "0.875rem",
              alignItems: "stretch",
              justifyContent: "left",
              borderRadius: 5,
              textAlign: "left",
              textWrap: "wrap",
              wordBreak: "break-word",
              overflow: "hidden",
              textOverflow: "ellipsis",
              "& .contrasting-dark": {
                backgroundColor: theme.palette.grey["100"],
              },
              "& .contrasting-light": {
                backgroundColor: theme.palette.grey["400"],
              },
              [theme.breakpoints.down("md")]: {
                marginInline: "1.125rem",
                paddingX: "1.25rem",
                paddingTop: "0.93rem",
                paddingBottom: "1rem",
                height: "19.38rem",
              },
            },
          },
        ],
      },
    },
  },
};

export default theme;
