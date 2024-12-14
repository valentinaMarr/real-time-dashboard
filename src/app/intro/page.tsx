"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
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

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const submit = useCallback(async () => {
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
  }, [userName, setInputError]);

  const skip = useCallback(() => {
    setUserName("User");

    submit();
  }, [userName, submit, setUserName]);

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
      <motion.div
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
        <Typography component="h2" variant="h2">
          Hi
        </Typography>
      </motion.div>
      <motion.div
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
          delay: 1,
        }}
      >
        <Typography component="p" variant="h4">
          How would you like to be called?
        </Typography>
      </motion.div>

      <motion.div
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
          delay: 2,
        }}
      >
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
          <Button variant="text" onClick={skip}>
            Skip <MdArrowForwardIos />
          </Button>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default Intro;
