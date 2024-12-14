import { Icon, Stack, Typography } from "@mui/material";
import { IconType } from "react-icons";
import { MdOutlineQuestionMark } from "react-icons/md";

export const ErrorMessage = ({
  headline,
  body,
  errorIcon,
}: {
  headline: string;
  body: string;
  errorIcon?: IconType;
}) => {
  return (
    <Stack
      component="main"
      direction="column"
      spacing={{ xs: 2 }}
      sx={{
        width: "100%",
        height: "100vh",
        paddingInline: "1rem",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {errorIcon ? <Icon component={errorIcon} /> : <MdOutlineQuestionMark />}
      <Typography component="h3" variant="errorMessage">
        {headline}
      </Typography>
      <Typography component="p" variant="body1">
        {body}
      </Typography>
    </Stack>
  );
};
