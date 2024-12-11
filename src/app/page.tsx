import { WeatherSection } from "@/components/WeatherSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { Grid2 as Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid
      component="main"
      spacing={{ xs: 1.75 }}
      sx={{
        paddingInline: {
          xs: "1rem",
        },
        paddingTop: { xs: "6.75rem" },
      }}
    >
      <WelcomeSection />
      <WeatherSection />
      <Grid size={{ xs: 12, lg: 6 }}>
        {/* TO-DO LIST OR MOTIVATIONAL MESSAGES */}
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>{/* NEWS */}</Grid>
    </Grid>
  );
}
