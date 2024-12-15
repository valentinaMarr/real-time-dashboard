import { NewsDetails } from "@/lib/types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

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
              xs: "30vh",
            },
          }}
        >
          <Image
            alt="news-cover-image"
            fill
            sizes="(max-width: 1200px) 300px, 240px"
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
          overflow: "clip",
          textWrap: "pretty",
          textOverflow: "ellipsis",
          wordBreak: "break-word",
          height: "fit-content",
          maxHeight: "30vh",
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
      <Button variant="text" component="a" href={reportUrl} target="_blank">
        {" "}
        Read more
      </Button>
    </Paper>
  );
};
