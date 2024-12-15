"use client";

import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useMemo } from "react";
import { Clock } from "./Clock";
import { ErrorMessage } from "./ErrorMessage";
import { WelcomeIcon } from "./icons/WelcomeIcon";

export const WelcomeSection = ({
  userName,
  error,
  sunset,
  sunrise,
}: {
  userName: string;
  error?: unknown;
  sunrise: number;
  sunset: number;
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const date = new Date();
  const longDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  const welcomeMessage = useMemo(() => {
    const hours = date.getHours();

    if (hours > sunrise && hours < sunset) {
      return "Good morning, ";
    }

    return "Good evening, ";
  }, [userName, sunrise, sunset]);

  if (error) {
    return (
      <Grid2 container id="welcome-message-container" component="section">
        <ErrorMessage
          body={(error as Error).message}
          headline={
            ((error as Error)?.cause as string) || "An error has occurred"
          }
        />
      </Grid2>
    );
  }

  return (
    <Grid2
      container
      id="welcome-message-container"
      component="section"
      size={{ xs: 12, md: 6 }}
      sx={{
        display: { md: "grid" },
        gridTemplateColumns: "50% 50%",
        justifyItems: "stretch",
      }}
    >
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          textAlign: { xs: "center", md: "left" },
          rowGap: { xs: 1.75, md: 3 },
        }}
        size={{ xs: 12, md: 9 }}
      >
        {isMobile && <WelcomeIcon sunrise={sunrise} sunset={sunset} />}
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
          <Typography component="h4" variant="h4">
            {" "}
            {longDate}{" "}
          </Typography>
          {isMobile && <Clock />}
        </Stack>
      </Grid2>
      {!isMobile && (
        <Grid2
          size={3}
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "start",
          }}
        >
          <Clock />
        </Grid2>
      )}
    </Grid2>
  );
};
