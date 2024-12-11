import { Box } from "@mui/material";
import { LuMoon } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

export const WelcomeIcon = ({ hours }: { hours: number }) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        height: {
          xs: "1.75rem",
          md: "2.62rem",
        },
        width: "auto",
        color: "inherit",
        fontSize: { xs: "1.5rem", md: "2.56rem" },
        position: "fixed",
        top: { xs: 8, md: 16 },
      }}
    >
      {hours > 6 && hours < 18 ? <MdOutlineWbSunny /> : <LuMoon />}
    </Box>
  );
};
