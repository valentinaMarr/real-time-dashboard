"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";
import { ChangeEvent, useCallback, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

export const Intro = () => {
  const [userName, setUserName] = useState<string>("User");
  // const router = useRouter()

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const submit = useCallback(() => {
    console.log("user name", userName);
  }, [userName]);
  const skip = () => {
    submit();

    // redirect to homepage
  };

  return (
    <Grid2 container maxWidth="md" component="main" size={12}>
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
          duration: "0.5s",
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
          duration: "0.5s",
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
          duration: "0.5s",
          delay: 2,
        }}
      >
        <form onSubmit={submit}>
          <TextField
            variant="standard"
            value={userName}
            onChange={inputChange}
          />
        </form>
        <Button variant="text">
          Skip{" "}
          <Box
            component="span"
            sx={{
              display: "inline",
            }}
          >
            <MdArrowForwardIos />
          </Box>
        </Button>
      </motion.div>
    </Grid2>
  );
};
