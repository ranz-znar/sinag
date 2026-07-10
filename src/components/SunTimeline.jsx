import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TimelineCard from "./TimelineCard";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

function formatTime(isoString) {
  if (!isoString) return "--:--";
  return new Date(isoString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function SunTimeline(props) {
  const sunTimes = props.data?.sun_info?.sun_times;
  const ozone = props.data?.ozone;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#e35d2b",
        backgroundImage: "url(/cardbg2.png)",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          p: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: "#ffffff", mb: 2, fontWeight: 600 }}
        >
          FULL SUN TIMELINE
        </Typography>

        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Nautical dawn"
              timeRange={formatTime(sunTimes?.nauticalDawn)}
              icon={Brightness4Icon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Sunrise"
              timeRange={formatTime(sunTimes?.sunrise)}
              icon={WbTwilightRoundedIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Solar noon"
              timeRange={formatTime(sunTimes?.solarNoon)}
              icon={WbSunnyIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Sunset"
              timeRange={formatTime(sunTimes?.sunset)}
              icon={WbTwilightRoundedIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Night begins"
              timeRange={formatTime(sunTimes?.night)}
              icon={NightsStayIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <TimelineCard
              title="Ozone layer"
              timeRange={ozone != null ? `${ozone} DU` : "----"}
              icon={PanoramaFishEyeIcon}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SunTimeline;
