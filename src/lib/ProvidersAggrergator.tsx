"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import theme from "./theme";

export const ProvidersAggrergator = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <AnimatePresence>{children}</AnimatePresence>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
};
