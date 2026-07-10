import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ExposureCard from "./ExposureCard";

function Exposure(props) {
  const safeExposure = props.data?.safe_exposure_time;
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
          SAFE EXPOSURE TIME - BY SKIN TYPE
        </Typography>

        <Grid container columnSpacing={1} rowSpacing={1}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type I"
              note="Always burns, never tans"
              time={safeExposure?.st1 ?? "--"}
              image="./skin-icons/st1.png"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type II"
              note="Burns easily, tans slightly"
              time={safeExposure?.st2 ?? "--"}
              image="./skin-icons/st2.png"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type III"
              note="Burns first, then tans"
              time={safeExposure?.st3 ?? "--"}
              image="./skin-icons/st3.png"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type IV"
              note="Rarely burns, tans easily"
              time={safeExposure?.st4 ?? "--"}
              image="./skin-icons/st4.png"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type V"
              note="Almost never burns, tans deeply"
              time={safeExposure?.st5 ?? "--"}
              image="./skin-icons/st5.png"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <ExposureCard
              skin="Skin Type VI"
              note="	Never burns, always tans deeply"
              time={safeExposure?.st6 ?? "--"}
              image="./skin-icons/st6.png"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Exposure;
