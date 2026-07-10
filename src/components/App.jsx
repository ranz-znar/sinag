import React, { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import axios from "axios";
import Search from "./Search";
import CurrentUV from "./CurrentUV";
import Exposure from "./Exposure";
import Outdoor from "./Outdoor";
import SunTimeline from "./SunTimeline";
import FactCard from "./FactCard";
import Footer from "./Footer";

const geocodify_API = import.meta.env.VITE_GEOCODIFY_API_KEY;
const openUV_API = import.meta.env.VITE_OPENUV_API_KEY;

function App() {
  const [uvData, setUvData] = useState(() => {
    const saved = localStorage.getItem("uvData");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (uvData) {
      localStorage.setItem("uvData", JSON.stringify(uvData));
    }
  }, [uvData]);

  const handleSearch = async (query) => {
    try {
      const resultGeocodify = await axios.get(
        "https://api.geocodify.com/v2/geocode",
        {
          params: {
            api_key: geocodify_API,
            q: query,
          },
        },
      );

      const longitude =
        resultGeocodify.data.response.features[0].geometry.coordinates[0];
      const latitude =
        resultGeocodify.data.response.features[0].geometry.coordinates[1];

      const resultOpenUV = await axios.get("https://api.openuv.io/api/v1/uv", {
        headers: {
          "x-access-token": openUV_API,
        },
        params: {
          lat: latitude,
          lng: longitude,
        },
      });
      setUvData(resultOpenUV.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "100vh",
          height: { xs: "auto", md: "100vh" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/*  SCREEN LEFT SIDE  */}

        <Box
          sx={{
            width: { xs: "100%", md: 300 },
            flexShrink: 0,
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: { xs: "auto", md: "100%" },
            overflowY: { xs: "visible", md: "auto" },
          }}
        >
          <Stack spacing={2} sx={{ flex: 1, minHeight: 0 }}>
            {/* SINAG LOGO */}
            <Box
              component="img"
              src="./skin-icons/sinag.png"
              alt="Sinag logo"
              sx={{
                width: 100,
                height: 50,
                objectFit: "contain",
              }}
            />

            <Search onSearch={handleSearch} />

            <FactCard />

            {/* LEMUR PICTURE */}
            <Box
              component="img"
              src="./skin-icons/lemur.png"
              alt=""
              sx={{
                width: "100%",
                maxHeight: 300,
                objectFit: "contain",
                mt: { xs: 2, md: "auto" },
              }}
            />

            <Footer />
          </Stack>
        </Box>

        {/*  SCREEN RIGHT SIDE  */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
          }}
        >
          <CurrentUV data={uvData} />
          <Stack spacing={2}>
            <Exposure data={uvData} />
            <Outdoor data={uvData} />
            <SunTimeline data={uvData} />
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default App;
