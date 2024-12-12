import { NewsSection } from "@/components/NewsSection";
import { WeatherSection } from "@/components/WeatherSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import Grid2 from "@mui/material/Grid2";

export default function Home() {
  return (
    <Grid2
      component="main"
      spacing={{ xs: 1.75 }}
      sx={{
        paddingTop: {
          xs: "6.75rem",
        },
      }}
    >
      <WelcomeSection />
      <WeatherSection />
      <NewsSection />
      <Grid2 size={{ xs: 12, lg: 6 }}>
        {/* TO-DO LIST OR MOTIVATIONAL MESSAGES */}
      </Grid2>
    </Grid2>
  );
}
