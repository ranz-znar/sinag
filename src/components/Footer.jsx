import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 1 }}>
      <Typography variant="caption" color="text.secondary">
        © {new Date().getFullYear()} Sinag. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
