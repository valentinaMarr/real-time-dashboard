"use client";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { WelcomeIcon } from "../icons/WelcomeIcon";

export const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [isInView, setIsInView] = useState<boolean>(true);
  const date = new Date();
  const hours = date.getHours();

  const checkItemInView = () => {
    if (!window) {
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
  };

  useEffect(() => {
    checkItemInView();
  }, [isInView]);

  return (
    <Box component="header" sx={{ position: "fixed", top: { xs: 8, md: 16 } }}>
      {!isMobile || (isMobile && !isInView && <WelcomeIcon hours={hours} />)}
    </Box>
  );
};
