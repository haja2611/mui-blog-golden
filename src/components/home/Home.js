import { Box, Container, Stack } from "@mui/material";
import React from "react";
import Hero from "../navbar/hero/Hero";
import Categories from "../navbar/catagory/Catagories";
import Recents from "../recents/Recents";
import Rightbar from "../rightbar/Rightbar";
import Events from "../events/Events";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <Box sx={{ background: "#FAF0DC" }}>
      <Hero />
      <Container sx={{ background: "#2A3166", pt: "30px" }}>
        <Categories />

        <hr />
        <Stack direction={"row"} spacing={8} mt={8}>
          <Box flex={3} sx={{ padding: "18px 18px 100px 18px" }}>
            <Recents />
          </Box>
          <Box flex={1}>
            <Rightbar />
            <Events />
          </Box>
        </Stack>
      </Container>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
