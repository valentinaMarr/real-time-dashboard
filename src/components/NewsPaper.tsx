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
    <Paper component="article" variant="discreet">
      {imgSrc && (
        <Box
          sx={{
            height: {
              xs: 243,
            },
            width: "100%",
          }}
        >
          <Image alt="news-cover-image" fill src={imgSrc} placeholder="blur" />
        </Box>
      )}
      <Stack direction="column" component="span" spacing={1}>
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
