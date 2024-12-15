"use client";
import { ErrorMessage } from "@/components/ErrorMessage";
import Stack from "@mui/material/Stack/Stack";
import { MdErrorOutline } from "react-icons/md";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const message = error.message;
  const headline = (error.cause as string) || "An error occurred";

  return (
    <Stack
      className="body-none"
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
      <ErrorMessage
        body={message}
        headline={headline}
        errorIcon={MdErrorOutline}
      />
    </Stack>
  );
}
