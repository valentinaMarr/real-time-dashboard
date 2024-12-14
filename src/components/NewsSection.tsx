import { NewsDetails } from "@/lib/types";
import Divider from "@mui/material/Divider";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { NewsPaper } from "./NewsPaper";

export const NewsSection = ({ articles }: { articles: Array<NewsDetails> }) => {
  return (
    <Grid2
      container
      size={{ xs: 12, md: 6 }}
      component="section"
      spacing={{ xs: 1.75 }}
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
        size={{ xs: 12, md: 3 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          rowGap: "1.375rem",
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
