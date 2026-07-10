import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function ExposureCard(props) {
  return (
    <Card
      sx={{
        border: "solid",
        borderRadius: 2,
        boxShadow: 1,
        p: 2,
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          p: 0,
          "&:last-child": { pb: 0 }, // MUI adds extra bottom padding by default, this removes it
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Left side: text content */}
        <Box>
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {props.skin}
          </Typography>

          <Box
            sx={{ display: "flex", alignItems: "baseline", gap: 0.5, my: 0.5 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, lineHeight: 1 }}>
              {props.time}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              min
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            {props.note}
          </Typography>
        </Box>

        {/* Right side: image */}
        <Box
          component="img"
          src={props.image}
          alt=""
          sx={{
            width: 60,
            height: 60,
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
      </CardContent>
    </Card>
  );
}

export default ExposureCard;
