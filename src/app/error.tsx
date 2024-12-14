"use client";
import { ErrorMessage } from "@/components/ErrorMessage";
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
    <ErrorMessage
      body={message}
      headline={headline}
      errorIcon={MdErrorOutline}
    />
  );
}
