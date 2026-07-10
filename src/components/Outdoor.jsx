import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import OutdoorCard from "./OutdoorCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import NightsStayIcon from "@mui/icons-material/NightsStay";

function formatTime(isoString) {
  if (!isoString) return "--:--";
  return new Date(isoString).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Outdoor(props) {
  const sunTimes = props.data?.sun_info?.sun_times;
  const uv = props.data?.uv;

  const isSafeNow = uv != null ? uv < 3 : null;

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
          BEST OUTDOOR WINDOWS TODAY
        </Typography>

        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <OutdoorCard
              title="Golden Hour (morning)"
              timeRange={`${formatTime(sunTimes?.sunrise)} - ${formatTime(sunTimes?.goldenHourEnd)}`}
              description="Soft warm light"
              icon={CameraAltIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <OutdoorCard
              title="Golden Hour (evening)"
              timeRange={`${formatTime(sunTimes?.goldenHour)} - ${formatTime(sunTimes?.sunset)}`}
              description="Soft warm light"
              icon={WbTwilightIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <OutdoorCard
              title="Safe for outdoor run"
              timeRange={
                isSafeNow === null
                  ? "----"
                  : isSafeNow
                    ? "Safe now"
                    : "Not safe now"
              }
              description="UV < 3"
              icon={DirectionsRunIcon}
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3 }}>
            <OutdoorCard
              title="Sunset"
              timeRange={formatTime(sunTimes?.dusk)}
              description={`Civil dusk: ${formatTime(sunTimes?.dusk)}`}
              icon={NightsStayIcon}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Outdoor;
