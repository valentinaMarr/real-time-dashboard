"use client";

import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { theme } from "./theme";

export const ProvidersAggrergator = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
