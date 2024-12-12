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
  articleBody,
  articleUrl,
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
          height: "15vh",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography component="h3" variant="h3">
          {headline}
        </Typography>
        <Typography component="p" variant="body1">
          {articleBody}
        </Typography>
      </Stack>
      <Button
        component="a"
        variant="text"
        href={articleUrl}
        sx={{ justifySelf: "end" }}
      >
        Read all
      </Button>
    </Paper>
  );
};
