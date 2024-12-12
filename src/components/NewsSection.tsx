import { NewsDetails } from "@/lib/types";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { NewsPaper } from "./NewsPaper";

export const NewsSection = () => {
  const articles = new Array(5).fill({
    headline: "An important title",
    imgSrc:
      "https://images.pexels.com/photos/21627/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    articleBody:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fugit, perspiciatis voluptas provident, accusantium consectetur quos, corporis vero in eius sit! Quia, aut natus provident ipsum error eius. Quia, fugiat!",
    articleUrl: "#",
  });
  return (
    <Grid2
      size={{ xs: 12, md: 6 }}
      component="section"
      spacing={{ xs: 1.75 }}
      aria-labelledby="section-title"
    >
      <Grid2 component="span" size={12} display="flex" justifyContent="left">
        <Typography component="h2" variant="h2" id="section-title">
          News
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }} spacing={{ xs: 2.75, md: 3 }}>
        {articles?.map((item: NewsDetails, index) => (
          <NewsPaper
            key={`article-card-${index}`}
            articleBody={item.articleBody}
            articleUrl={item.articleUrl}
            headline={item.headline}
            imgSrc={item.imgSrc}
          />
        ))}
      </Grid2>
    </Grid2>
  );
};
