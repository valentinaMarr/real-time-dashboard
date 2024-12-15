"use client";
import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { WelcomeIcon } from "../icons/WelcomeIcon";

export const Header = ({
  sunrise,
  sunset,
}: {
  sunrise: number;
  sunset: number;
}) => {
  const [isInView, setIsInView] = useState<boolean>(true);
  const checkItemInView = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const item = document.getElementById("welcome-message-container");

    if (!item) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });

    observer.observe(item as Element);
  }, [setIsInView]);

  useEffect(() => {
    checkItemInView();
  }, [checkItemInView]);

  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: { xs: "0.25rem", md: "1rem" },
        left: { xs: "0.25rem", md: "1rem" },
        zIndex: 10,
      }}
    >
      {!isInView && <WelcomeIcon sunrise={sunrise} sunset={sunset} />}
    </Box>
  );
};
