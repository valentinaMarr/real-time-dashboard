"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as StoreProvider } from "jotai";
import { ReactNode } from "react";
import theme from "./theme";

export const ProvidersAggrergator = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
};
