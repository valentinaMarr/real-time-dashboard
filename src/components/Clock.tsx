"use client";

import { useMediaQuery } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Clock = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const [time, setTime] = useState<{
    hours: string;
    minutes: string;
  }>({
    hours:
      new Date().getHours() < 10
        ? `0${new Date().getHours().toString()}`
        : new Date().getHours().toString(),
    minutes:
      new Date().getMinutes() < 10
        ? `0${new Date().getMinutes().toString()}`
        : new Date().getMinutes().toString(),
  });

  useEffect(() => {
    const minutesNumber = new Date().getMinutes();
    const currentTime: { hours: string; minutes: string } = {
      hours: new Date().getHours().toString(),
      minutes:
        minutesNumber < 10 ? `0${minutesNumber}` : minutesNumber.toString(),
    };
    setTimeout(() => setTime(currentTime), 1000);
  }, [time]);

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
        <Typography component="p" variant="h4">
          {time.hours}
        </Typography>
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
        <Typography component="p" variant="h4">
          {time.minutes}
        </Typography>
      </Stack>
    );
  }

  return (
    <Paper
      variant="clock"
      component="div"
      aria-label={`analog clock showing ${time.hours}:${time.minutes}`}
      elevation={1}
    >
      <Typography component="p" variant="clock">
        {time.hours}
      </Typography>
      <motion.hr
        style={{
          width: "3vw",
        }}
        initial={{
          borderColor: "lightgrey",
          opacity: 0,
        }}
        animate={{
          borderColor: "darkgrey",
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      />
      <Typography component="p" variant="clock">
        {time.minutes}
      </Typography>
    </Paper>
  );
};
