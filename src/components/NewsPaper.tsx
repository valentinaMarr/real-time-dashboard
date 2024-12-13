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
}: NewsDetails) => {
  return (
    <Paper elevation={1} component="article" variant="discreet">
      {imgSrc && (
        <Box
          sx={{
            position: "relative",
            height: {
              xs: "10rem",
            },
            width: "100%",
          }}
        >
          <Image
            alt="news-cover-image"
            fill
            src={imgSrc}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
      )}
      <Stack
        direction="column"
        component="span"
        spacing={1}
        sx={{
          height: "13vh",
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordBreak: "break-word",
        }}
      >
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
