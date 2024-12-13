"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Intro = () => {
  const [userName, setUserName] = useState<string>("User");
  const [inputError, setInputError] = useState<{
    status: boolean;
    message?: string;
  }>({ status: false });
  const router = useRouter();

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const submit = useCallback(async () => {
    const response = await fetch("./api/rememberUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userName),
    });

    if (response.status !== 200) {
      const requestJson = await response.json();

      setInputError({ status: true, message: requestJson.message });
      return;
    }

    router.push("/");
  }, [userName, router, setInputError]);

  const skip = useCallback(() => {
    setUserName("User");

    setTimeout(() => submit(), 10);
  }, [submit, setUserName]);

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
          <form onSubmit={() => submit()}>
            <TextField
              variant="standard"
              value={userName}
              onChange={inputChange}
              error={inputError.status}
              helperText={inputError?.message}
            />
          </form>
          <Button
            variant="text"
            sx={{ alignSelf: "end" }}
            onClick={() => skip()}
          >
            Skip <MdArrowForwardIos />
          </Button>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default Intro;
