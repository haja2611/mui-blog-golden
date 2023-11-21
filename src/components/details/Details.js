import { Box, Stack } from "@mui/material";
import React from "react";
import detailImage from "../../static/details.png";
import Footer from "../footer/Footer";
import Contact from "./Contact";
import Contactimage from "./Contactimage";

const Details = () => {
  return (
    <Box sx={{ background: "#FAF0DC" }}>
      <Box
        sx={{
          backgroundImage: `url(${detailImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",

          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 700,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      ></Box>
      <Stack direction={"row"}>
        <Box flex={2}>
          <Contact />
        </Box>
        <Box flex={4}>
          <Contactimage />
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Details;
