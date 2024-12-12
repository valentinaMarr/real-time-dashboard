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
      aria-label="error message"
      component="span"
      direction="column"
      spacing={0.5}
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
