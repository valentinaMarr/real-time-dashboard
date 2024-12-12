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
  const welcomeMessage: string = useMemo(() => {
    const hours = date.getHours();
    {
      /* TO-DO: DYNAMICALLY CHANGE THE NAME */
    }

    const userName = "Valentina";

    if (hours > 3 && hours < 18) {
      return `Good morning, ${userName}`;
    }

    return `Good evening, ${userName}`;
  }, []);

  return (
    <Grid2
      id="welcome-message-container"
      spacing={{ xs: 1.75, md: "auto" }}
      component="section"
    >
      <Grid2
        display="flex"
        justifyContent="space-between"
        size={{ xs: 12, md: 6 }}
      >
        {isMobile && <WelcomeIcon hours={date.getHours()} />}
        <Typography variant="h1">{welcomeMessage}</Typography>
        <Divider />
        <Stack direction="column" spacing={1}>
          <Typography> {`${date.getMonth()}, ${date.getDate()}`} </Typography>
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
