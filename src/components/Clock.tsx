"use client";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [time, setTime] = useState<{ hours: number; minutes: number }>({
    hours: new Date().getHours() || 0,
    minutes: new Date().getMinutes() || 0,
  });
  const getTime = () => {
    const currentTime: { hours: number; minutes: number } = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };

    setTimeout(() => setTime((prev) => ({ ...prev, currentTime })), 1000);
  };

  useEffect(() => {
    return getTime();
  }, []);

  if (isMobile) {
    return (
      <Stack
        spacing="1px"
        direction="row"
        component="span"
        aria-label="digital clock"
      >
        <Typography variant="h4">{time.hours}</Typography>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
          }}
        >
          :
        </motion.p>
        <Typography variant="h4">{time.minutes}</Typography>
      </Stack>
    );
  }

  return <></>;
};
