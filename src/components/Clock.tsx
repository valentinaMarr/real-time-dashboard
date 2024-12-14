"use client";

import { Stack, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

export const Clock = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [time, setTime] = useState<{ hours: string; minutes: string }>({
    hours: new Date().getHours().toString(),
    minutes: new Date().getMinutes().toString(),
  });

  useEffect(() => {
    const minutesNumber = new Date().getMinutes();
    const currentTime: { hours: string; minutes: string } = {
      hours: new Date().getHours().toString(),
      minutes:
        minutesNumber < 10 ? `0${minutesNumber}` : minutesNumber.toString(),
    };

    const timer = setTimeout(() => setTime(currentTime), 1000);

    return () => clearTimeout(timer);
  }, [setTime]);

  if (isMobile) {
    return (
      <Stack
        spacing="1px"
        direction="row"
        alignItems="center"
        component="span"
        aria-label="digital clock"
        sx={{
          width: "fit-content",
        }}
      >
        <Typography variant="h4">{time.hours}</Typography>
        <motion.h4
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
        >
          :
        </motion.h4>
        <Typography variant="h4">{time.minutes}</Typography>
      </Stack>
    );
  }

  return <></>;
};
