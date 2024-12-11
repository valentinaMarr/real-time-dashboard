import { Forecast } from "@/lib/types";
import { Box } from "@mui/material";
import { IoMdRainy } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { RiSnowyFill } from "react-icons/ri";

export const WeatherIcon = ({ forecast }: { forecast: Forecast }) => {
  return (
    <Box
      aria-hidden="true"
      sx={{
        height: "3.68rem",
        width: "auto",
        color: "inherit",
        fontSize: "3rem",
        backgroundColor: "transparent",
      }}
    >
      {forecast === "rainy" ? (
        <IoMdRainy />
      ) : forecast === "snowy" ? (
        <RiSnowyFill />
      ) : (
        <MdOutlineWbSunny />
      )}
    </Box>
  );
};
