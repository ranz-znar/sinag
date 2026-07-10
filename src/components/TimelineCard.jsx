import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function OutdoorCard(props) {
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
          {<props.icon fontSize="small" />}
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {props.title}
          </Typography>
        </Box>

        <Typography variant="h5" fontWeight={700} lineHeight={1}>
          {props.timeRange}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OutdoorCard;
