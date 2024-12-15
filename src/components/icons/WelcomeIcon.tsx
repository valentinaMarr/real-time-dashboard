"use client";

import { Box } from "@mui/material";
import { useMemo } from "react";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export const WelcomeIcon = ({
  sunrise,
  sunset,
}: {
  sunrise: number;
  sunset: number;
}) => {
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
          xs: "5vh",
          md: "5vh",
        },
        width: "auto",
        color: time > sunrise && time < sunset ? "darkgray" : "lightgrey",
        fontSize: { xs: "1.5rem", md: "2.56rem" },
        backgroundColor: "transparent",
        zIndex: 100,
      }}
    >
      {time > sunrise && time < sunset ? <MdOutlineWbSunny /> : <LuMoon />}
    </Box>
  );
};
