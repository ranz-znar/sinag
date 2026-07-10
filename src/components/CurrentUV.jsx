import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function getLevel(uv) {
  if (uv == null || uv <= 0)
    return { text: "There is no sun right now", color: "#546e7a" };
  if (uv < 3) return { text: "Low UV right now", color: "#4caf50" };
  if (uv < 6) return { text: "Moderate UV right now", color: "#fbc02d" };
  if (uv < 8) return { text: "High UV right now", color: "#fb8c00" };
  if (uv < 11) return { text: "Very high UV right now", color: "#e53935" };
  return { text: "Extreme UV right now", color: "#8e24aa" };
}

function CurrentUV(props) {
  const level = getLevel(props.data?.uv);
  const currentUV = props.data?.uv;
  const peakUV = props.data?.uv_max;

  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Typography
        variant="overline"
        sx={{ color: "text.secondary", fontWeight: 600, letterSpacing: 1.5 }}
      >
        Current Conditions
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        sx={{
          color: level.color,
          lineHeight: 1.1,
          mb: 1.5,
          fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
        }}
      >
        {level.text}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: { xs: 1, sm: 4 },
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Current:{" "}
          <Typography
            component="span"
            fontWeight={700}
            sx={{ color: level.color }}
          >
            {currentUV ?? "----"}
          </Typography>
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Today's Peak:{" "}
          <Typography component="span" fontWeight={700}>
            {peakUV ?? "----"}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default CurrentUV;
