"use client";

import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";
import { Clock } from "./Clock";
import { WelcomeIcon } from "./icons/WelcomeIcon";

export const WelcomeSection = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const date = new Date();
  const longDate = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  const welcomeMessage = useMemo(async () => {
    const hours = date.getHours();
    const getNicknameResponse = await fetch("/api/getUserNickname");

    if (getNicknameResponse.status !== 200) {
      return "Hello, stranger";
    }

    const userName = await getNicknameResponse.json();

    if (hours > 3 && hours < 18) {
      return `Good morning, ${userName.message}`;
    }

    return `Good evening, ${userName.message}`;
  }, []);

  return (
    <Grid2 container id="welcome-message-container" component="section">
      <Grid2
        display="flex"
        flexDirection="column"
        alignItems="center"
        size={{ xs: 12, md: 6 }}
        rowGap={{ xs: 1.75 }}
      >
        {isMobile && <WelcomeIcon />}
        <Typography variant="h1">{welcomeMessage}</Typography>
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
