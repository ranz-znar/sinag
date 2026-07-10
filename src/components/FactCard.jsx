import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const FACTS = [
  "UV rays can pass through clouds, so you can still burn on overcast days.",
  "UV index peaks around solar noon, roughly halfway between sunrise and sunset.",
  "Snow, sand, and water can reflect up to 80% of UV rays, increasing exposure.",
  "SPF 30 blocks about 97% of UVB rays; SPF 50 blocks about 98%.",
  "UV exposure is cumulative — even short walks add up over the day.",
  "Higher altitudes have stronger UV because there's less atmosphere to filter it.",
  "Sunglasses block UV too — look for '100% UV protection' on the label.",
  "Your shadow is a rough UV gauge: shorter shadow means stronger UV.",
];

function FactCard() {
  const fact = useMemo(
    () => FACTS[Math.floor(Math.random() * FACTS.length)],
    [],
  );

  return (
    <Card
      sx={{
        border: "solid",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
      }}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
          <LightbulbIcon fontSize="small" color="warning" />
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight={600}
            sx={{ textTransform: "uppercase", letterSpacing: 0.5 }}
          >
            Did you know?
          </Typography>
        </Box>

        <Typography variant="body2" color="text.primary">
          {fact}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FactCard;
