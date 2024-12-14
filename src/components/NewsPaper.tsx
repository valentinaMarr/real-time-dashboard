import { NewsDetails } from "@/lib/types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export const NewsPaper = ({
  headline,
  imgSrc,
  reportBody,
  reportUrl,
  source,
}: NewsDetails) => {
  return (
    <Paper elevation={1} component="div" variant="discreet">
      {imgSrc && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: {
              xs: "15rem",
            },
          }}
        >
          <Image
            alt="news-cover-image"
            fill
            src={imgSrc}
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </Box>
      )}
      <Stack
        direction="column"
        component="article"
        spacing={1}
        sx={{
          textOverflow: "ellipsis",
          wordBreak: "break-word",
          height: "fit-content",
          maxHeight: { xs: "30rem" },
        }}
      >
        <Typography component="h4" variant="body1">
          {source}
        </Typography>
        <Typography component="h3" variant="h3">
          {headline}
        </Typography>
        <Typography component="p" variant="body1">
          {reportBody}
        </Typography>
      </Stack>
      <Link href={reportUrl} target="_blank">
        <Typography
          component="p"
          variant="a"
          sx={{ textAlign: "center", textTransform: "uppercase" }}
        >
          {" "}
          Read more
        </Typography>
      </Link>
    </Paper>
  );
};
