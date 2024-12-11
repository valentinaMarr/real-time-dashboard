import { WelcomeSection } from "@/components/WelcomeSection";
import { Grid2 as Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid component="main" spacing={{ xs: 1.75 }}>
      <WelcomeSection />
      <Grid size={{ xs: 12, lg: 6 }}>{/* WHEATHER FORECAST */}</Grid>
      <Grid size={{ xs: 12, lg: 6 }}>
        {/* TO-DO LIST OR MOTIVATIONAL MESSAGES */}
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }}>{/* NEWS */}</Grid>
    </Grid>
  );
}
