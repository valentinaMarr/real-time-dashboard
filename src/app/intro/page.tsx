"use client";

import { SlideToTopContainer } from "@/components/animated-containers/SlideToTopContainer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { redirect } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const appUrl = process.env.NEXT_PUBLIC_APPURL;

const Intro = () => {
  const [userName, setUserName] = useState<string>("");
  const [inputError, setInputError] = useState<{
    status: boolean;
    message?: string;
  }>({ status: false });

  const inputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);

    if (inputError) {
      setInputError({ status: false });
    }
  }, []);

  const submit = useCallback(async () => {
    if (!userName?.length) {
      setInputError({
        status: true,
        message: "Don't want to share your name? Click the skip button",
      });
      return;
    }

    const response = await fetch("/api/rememberUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName }),
    });

    const requestJson = await response.json();
    if (response.status !== 200) {
      setInputError({ status: true, message: requestJson.message });
      return;
    }

    redirect(appUrl as string);
  }, [userName]);

  const skip = useCallback(async () => {
    setUserName("User");
    const response = await fetch("/api/rememberUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: "User" }),
    });

    const requestJson = await response.json();
    if (response.status !== 200) {
      setInputError({ status: true, message: requestJson.message });
      return;
    }

    redirect(appUrl as string);
  }, []);

  return (
    <Stack
      component="main"
      direction="column"
      spacing={{ xs: 4 }}
      sx={{
        width: "100%",
        height: "100vh",
        paddingInline: "1rem",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <SlideToTopContainer aria-label="intro-message" delay={0}>
        <Typography component="h2" variant="h2">
          Hi
        </Typography>
      </SlideToTopContainer>
      <SlideToTopContainer aria-label="intro-message" delay={1}>
        <Typography component="p" variant="h4">
          How would you like to be called?
        </Typography>
      </SlideToTopContainer>

      <SlideToTopContainer aria-label="intro-message" delay={2}>
        <Stack direction="column" spacing={0.75} sx={{ width: "fit-content" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <TextField
              variant="standard"
              value={userName}
              onChange={inputChange}
              error={inputError.status}
              helperText={inputError?.message}
              placeholder="User"
            />
          </form>
          <Button variant="text" onClick={() => skip()}>
            Skip <MdArrowForwardIos />
          </Button>
        </Stack>
      </SlideToTopContainer>
    </Stack>
  );
};

export default Intro;
