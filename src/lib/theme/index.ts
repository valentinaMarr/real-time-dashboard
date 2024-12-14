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
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "0.5%",
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
    },
  },
  a: {
    textTransform: "uppercase",
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.875rem",
      lineHeight: "1.06rem",
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
    rainy: "#394E7A",
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
          paddingInline: "1rem",
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
              borderRadius: 5,
              "&.dawn": {
                backgroundColor: theme.palette.forecastTheme.dawn,
                color: theme.palette.grey["100"],
              },
              "&.sunset": {
                backgroundColor: theme.palette.forecastTheme.sunset,
                color: theme.palette.grey["100"],
              },
              "&.evening": {
                backgroundColor: theme.palette.forecastTheme.evening,
                color: theme.palette.grey["100"],
              },
              "&.sunny": {
                backgroundColor: theme.palette.forecastTheme.sunny,
                color: theme.palette.grey["900"],
              },
              "&.rainy": {
                backgroundColor: theme.palette.forecastTheme.rainy,
                color: theme.palette.grey["100"],
              },
              "&.snowy": {
                backgroundColor: theme.palette.forecastTheme.snowy,
                color: theme.palette.grey["900"],
              },
              [theme.breakpoints.down("md")]: {
                padding: "0.75rem",
              },
            },
          },
          {
            props: { variant: "discreet" },
            style: {
              display: "flex",
              flexDirection: "column",
              rowGap: "0.875rem",
              alignItems: "stretch",
              justifyContent: "left",
              borderRadius: 5,
              "&.contrasting-dark": {
                backgroundColor: theme.palette.grey["100"],
              },
              "&.contrasting-light": {
                backgroundColor: theme.palette.grey["400"],
              },
              [theme.breakpoints.down("md")]: {
                paddingInline: "1.25rem",
                paddingTop: "0.93rem",
                paddingBottom: "1rem",
                height: "30rem",
              },
            },
          },
        ],
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        width: "5.25rem",
        borderTopWidth: "1px",
        borderTopColor: theme.typography.h1.color,
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderColor: theme.palette.grey["900"],
        "& .MuiInputBase-root": {
          animation: "none",
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        variants: {
          props: {
            variant: "text",
          },
          style: {
            display: "flex",
            alignItems: "center",
            fontWeight: 600,
            textTransform: "capitalize",
            [theme.breakpoints.down("md")]: {
              fontSize: "0.875rem",
            },
          },
        },
      },
    },
  },
};

export default theme;
