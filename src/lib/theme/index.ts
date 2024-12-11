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
};

theme.components = {
  ...theme.components,
  MuiGrid2: {
    styleOverrides: {
      root: {
        width: "100%",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { variant: "forecastSection" },
            style: {
              "& .dawn": {
                backgroundColor: "#c2c5ea",
              },
              "& .sunset": {
                backgroundColor: "#d06580",
              },
              "& .evening": {
                backgroundColor: "#6b60bd",
              },
              "& .sunny": {
                backgroundColor: "#d1fffc",
              },
              "& .rainy": {
                backgroundColor: "#394e7a",
              },
              "& .snowy": {
                backgroundColor: "#b1c4d8",
              },
              [theme.breakpoints.down("md")]: {
                marginInline: "1.125rem",
                width: "100%",
                borderRadius: 5,
                padding: "0.75rem",
              },
            },
          },
        ],
      },
    },
  },
};

export default theme;
