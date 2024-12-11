"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme();

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: "Alata, sans-serif",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      lineHeight: "2.06rem",
    },
  },
  h2: {
    fontFamily: "Montserrat, sans-serif",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.875rem",
      lineHeight: "2.31rem",
    },
  },
  h3: {
    fontFamily: "Alata, sans-serif",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.25rem",
    },
  },
  h4: {
    fontFamily: "Montserrat, sans-serif",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
    },
  },
  body1: {
    fontFamily: "Montserrat, sans-serif",
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
        paddingInline: "1rem",
        paddingTop: "6.75rem",
      },
    },
  },
};
