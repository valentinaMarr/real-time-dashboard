"use client";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { WelcomeIcon } from "../icons/WelcomeIcon";

export const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [isInView, setIsInView] = useState<boolean>(true);
  const date = new Date();
  const hours = date.getHours();

  const checkItemInView = () => {
    if (!window) {
      setIsInView(false);
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
  }, []);

  return (
    <header>
      {!isMobile || (isMobile && !isInView && <WelcomeIcon hours={hours} />)}
    </header>
  );
};
