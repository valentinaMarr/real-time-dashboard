"use client";

import { Box } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export const WelcomeIcon = ({ hours }: { hours?: number }) => {
  const [isInView, setIsInView] = useState<boolean>(true);

  const time = useMemo(() => {
    const date = new Date();
    const hours = date.getHours();
    return hours;
  }, []);

  const checkItemInView = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const item = document.getElementById("welcome-message-container");

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

  if (isInView) {
    return <></>;
  }

  return (
    <Box
      aria-hidden="true"
      sx={{
        height: {
          xs: "1.75rem",
          md: "2.62rem",
        },
        width: "auto",
        color: "inherit",
        fontSize: { xs: "1.5rem", md: "2.56rem" },
        backgroundColor: "transparent",
        zIndex: 100,
      }}
    >
      {time > 6 && time < 18 ? <MdOutlineWbSunny /> : <LuMoon />}
    </Box>
  );
};
