import { Header } from "@/components/layout/Header";
import { NewsSection } from "@/components/NewsSection";
import { WeatherSection } from "@/components/WeatherSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import Grid2 from "@mui/material/Grid2";

export default function Home() {
  return (
    <>
      <Header />
      <Grid2
        component="main"
        container
        maxWidth="100vw"
        spacing={{ xs: 12 }}
        sx={{
          paddingTop: {
            xs: "6.75rem",
          },
        }}
      >
        <WelcomeSection />
        <WeatherSection />
        <NewsSection />
      </Grid2>
    </>
  );
}
