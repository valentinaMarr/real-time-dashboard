"use client";

import { createTheme } from "@mui/material";

const theme = createTheme();

theme.typography = {
  ...theme.typography,
  h1: {
    fontFamily: "var(--font-alata-regular)",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    fontSize: "2.25rem",
    lineHeight: "2.81rem",
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
    fontSize: "2.75rem",
    lineHeight: "2.81rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.875rem",
      lineHeight: "2.435rem",
    },
  },
  h3: {
    fontFamily: "var(--font-alata-regular)",
    color: "inherit",
    letterSpacing: 0,
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.125rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.125rem",
      lineHeight: "1.685rem",
    },
  },
  h4: {
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 400,
    fontSize: "1.25rem",
    lineHeight: "1.81rem",
  },
  body1: {
    fontFamily: "var(--font-montserrat)",
    letterSpacing: "1%",
    color: "inherit",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.435rem",
  },
  errorMessage: {
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "0.5%",
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.685rem",
  },
  clock: {
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "0.5%",
    fontWeight: 500,
    fontSize: "4.75rem",
    lineHeight: "5.2rem",
  },
  a: {
    textTransform: "uppercase",
    fontFamily: "var(--font-montserrat)",
    color: "inherit",
    letterSpacing: "1%",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.06rem",
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
        overflow: "hidden",
        flexWrap: "wrap",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        "&.dawn": {
          backgroundColor: `${theme.palette.forecastTheme.dawn}56`,
          color: theme.palette.grey["900"],
          borderColor: theme.palette.grey["900"],
        },
        "&.sunset": {
          backgroundColor: `${theme.palette.forecastTheme.sunset}56`,
          color: theme.palette.grey["100"],
          borderColor: theme.palette.grey["100"],
        },
        "&.evening": {
          backgroundColor: `${theme.palette.forecastTheme.evening}56`,
          color: theme.palette.grey["100"],
          borderColor: theme.palette.grey["100"],
        },
        "&.sunny": {
          backgroundColor: `${theme.palette.forecastTheme.sunny}56`,
          color: theme.palette.grey["900"],
          borderColor: theme.palette.grey["900"],
        },
        "&.rainy": {
          backgroundColor: `${theme.palette.forecastTheme.rainy}56`,
          color: theme.palette.grey["100"],
          borderColor: theme.palette.grey["100"],
        },
        "&.snowy": {
          backgroundColor: `${theme.palette.forecastTheme.snowy}56`,
          color: theme.palette.grey["900"],
          borderColor: theme.palette.grey["900"],
        },
        "&.none": {
          backgroundColor: `${theme.palette.grey["A200"]}56`,
          color: theme.palette.grey["900"],
          borderColor: theme.palette.grey["900"],
        },
        variants: [
          {
            props: { variant: "themedPaper" },
            style: {
              borderRadius: 5,
              border: `1px solid`,
              padding: "1.25rem",
              height: "max-content",
              width: "100%",
              marginInline: 0,

              [theme.breakpoints.down("md")]: {
                padding: "0.75rem",
              },
            },
          },
          {
            props: { variant: "discreet" },
            style: {
              display: "grid",
              gridTemplateRows: "40% 40% 10%",
              rowGap: "1.75rem",
              borderRadius: 5,
              paddingInline: "1.25rem",
              paddingTop: "0.93rem",
              paddingBottom: "1rem",
              width: "30vw",
              height: "80vh",
              backgroundColor: `${theme.palette.grey["A200"]}96`,
              [theme.breakpoints.down("md")]: {
                width: "50vw",
              },
              [theme.breakpoints.down("sm")]: {
                width: "auto",
                display: "flex",
                flexDirection: "column",
                rowGap: "0.875rem",
              },
            },
          },
          {
            props: { variant: "clock" },
            style: {
              color: "inherit",
              backgroundColor: "transparent",
              borderRadius: "5px",
              border: "1px solid",
              borderColor: theme.typography.h1.color,
              height: "30vh",
              width: "15vw",
              padding: "0.75rem",
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          },
        ],
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        width: "10vw",
        borderTopWidth: "1px",
        borderTopColor: theme.typography.h1.color,
        marginBlock: "0.5rem",
        [theme.breakpoints.down("md")]: {
          width: "25vw",
        },
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderColor: theme.palette.grey["900"],
        width: "30vw",
        "& .MuiInputBase-root": {
          animation: "none",
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        variants: [
          {
            props: {
              variant: "text",
            },
            style: {
              display: "flex",
              alignItems: "center",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 600,
              textTransform: "uppercase",
              alignSelf: "end",
              justifySelf: "end",
              color: "inherit",
              [theme.breakpoints.down("md")]: {
                fontSize: "0.875rem",
              },
            },
          },
        ],
      },
    },
  },
};

export default theme;
