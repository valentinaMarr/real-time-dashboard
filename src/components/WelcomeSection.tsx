"use client";

import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Clock } from "./Clock";
import { WelcomeIcon } from "./icons/WelcomeIcon";

export const WelcomeSection = ({ userName }: { userName: string }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const date = new Date();
  const longDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  const welcomeMessage = useMemo(() => {
    const hours = date.getHours();

    if (hours > 3 && hours < 18) {
      return "Good morning, ";
    }

    return "Good evening, ";
  }, [userName]);

  return (
    <Grid2 container id="welcome-message-container" component="section">
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          rowGap: { xs: 1.75 },
        }}
        size={{ xs: 12, md: 6 }}
      >
        {isMobile && <WelcomeIcon />}
        <motion.span
          aria-label="intro-message"
          initial={{
            transform: "translateY(2px)",
            opacity: 0,
          }}
          animate={{
            transform: "translateY(0px)",
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Typography component="h1" variant="h1">
            {welcomeMessage} {userName}
          </Typography>
        </motion.span>
        <Divider />
        <Stack direction="column" alignItems="center" spacing={1}>
          <Typography> {longDate} </Typography>
          {isMobile && <Clock />}
        </Stack>
      </Grid2>
      {!isMobile && (
        <Grid2
          size={6}
          display="flex"
          justifyItems="center"
          alignItems="center"
        >
          <Clock />
        </Grid2>
      )}
    </Grid2>
  );
};
