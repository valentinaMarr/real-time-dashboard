import { ErrorMessage } from "@/components/ErrorMessage";
import { Stack } from "@mui/material";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = error.message;
  const headline = (error.cause as string) || "An error occurred";

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
      <ErrorMessage
        body={message}
        headline={headline}
        errorIcon={MdErrorOutline}
      />
    </Stack>
  );
}
