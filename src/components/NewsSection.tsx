import { NewsDetails } from "@/lib/types";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { ErrorMessage } from "./ErrorMessage";
import { NewsPaper } from "./NewsPaper";

export const NewsSection = ({
  articles,
  error,
}: {
  articles: Array<NewsDetails>;
  error?: unknown;
}) => {
  if (error) {
    return (
      <Grid2 component="section" size={12} aria-label="country news section">
        <ErrorMessage
          body={(error as Error).message}
          headline={
            ((error as Error)?.cause as string) || "An error has occurred"
          }
        />
      </Grid2>
    );
  }

  return (
    <Grid2
      container
      size={12}
      component="section"
      spacing={{ xs: 1.75, md: 3 }}
      aria-labelledby="section-title"
    >
      <Grid2
        component="span"
        size={12}
        sx={{
          textAlign: "left",
        }}
      >
        <Typography component="h2" variant="h2" id="section-title">
          News
        </Typography>
        <Divider />
      </Grid2>
      <Grid2
        size={12}
        sx={{
          gap: "1.375rem",
          justifyContent: "space-evenly",
          alignItems: "center",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {articles?.map((item: NewsDetails, index) => (
          <NewsPaper
            key={`report-card-${index}`}
            reportBody={item.reportBody}
            reportUrl={item.reportUrl}
            headline={item.headline}
            imgSrc={item.imgSrc}
            source={item?.source}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};
