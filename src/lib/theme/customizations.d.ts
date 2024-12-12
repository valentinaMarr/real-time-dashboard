import "@material-ui/core/styles/createPalette";
import { PaletteColorOptions } from "@mui/material";
import "@mui/material/Paper";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface Palette {
    forecastTheme: Palette["forecastTheme"];
  }

  interface PaletteOptions {
    forecastTheme?: PaletteOptions["forecastTheme"];
  }

  interface TypographyVariants {
    errorMessage: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    errorMessage?: React.CSSProperties;
  }
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    forecastTheme?: PaletteColorOptions;
  }

  interface ForecastThemePalette {
    dawn: string;
    sunset: string;
    evening: string;
    sunny: string;
    rainy: string;
    snowy: string;
  }

  interface ForecastThemePaletteOptions {
    dawn?: string;
    sunset?: string;
    evening?: string;
    sunny?: string;
    rainy?: string;
    snowy?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    errorMessage: true;
  }
}

/** COMPONENTS MODULES */

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    themedPaper: true;
    discreet: true;
  }
}
