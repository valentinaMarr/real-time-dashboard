import { Box } from "@mui/material";
import { WelcomeIcon } from "../icons/WelcomeIcon";

export const Header = () => {
  return (
    <Box component="header" sx={{ position: "fixed", top: { xs: 8, md: 16 } }}>
      <WelcomeIcon />
    </Box>
  );
};
