import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { motion } from "motion/react";

export const Loading = () => {
  return (
    <Stack
      className="body-loading"
      component="main"
      direction="column"
      spacing={2}
      sx={{
        width: "100%",
        height: "100vh",
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction="row" spacing={1}>
        {Array(3)
          .fill(".")
          .map((item, index) => (
            <motion.div
              key={`loading-dot-${index}`}
              initial={{ transform: "translateY(0px)" }}
              animate={{ transform: ["translateY(-3px)", "translateY(0px)"] }}
              transition={{
                duration: 0.5,
                type: "spring",
                delay: 0.5 * index,
              }}
            >
              <Typography component="p" variant="h1">
                {item}
              </Typography>
            </motion.div>
          ))}
      </Stack>
      <Typography component="h2" variant="h3">
        Just a moment...
      </Typography>
    </Stack>
  );
};
