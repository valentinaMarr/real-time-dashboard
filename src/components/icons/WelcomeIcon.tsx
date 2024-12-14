"use client";

import { Box } from "@mui/material";
import { useMemo } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export const WelcomeIcon = () => {
  const time = useMemo(() => {
    const date = new Date();
    const hours = date.getHours();
    return hours;
  }, []);

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
