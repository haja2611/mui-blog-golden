import { Facebook, Gradient, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ background: "#2A3166", height: "250px", mt: "20px" }}>
      <Stack direction={{ xs: "row", md: "row" }} pt={7}>
        <Box flex={1} align="center">
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            <Link
              href="http://localhost:3000/details"
              sx={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Contact Us
            </Link>
          </Typography>
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            About Us
          </Typography>
        </Box>
        <Box flex={1} align="center">
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            Data Policy
          </Typography>
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            Cookies
          </Typography>
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1} align="center">
          <Typography color={"white"} variant="h6" sx={{ cursor: "pointer" }}>
            Catagories
          </Typography>
          <Typography
            color={"white"}
            variant="body1"
            sx={{ cursor: "pointer" }}
          >
            Pipes
          </Typography>
          <Typography
            color={"white"}
            variant="body1"
            sx={{ cursor: "pointer" }}
          >
            TMT
          </Typography>
          <Typography
            color={"white"}
            variant="body1"
            sx={{ cursor: "pointer" }}
          >
            Cement
          </Typography>
        </Box>
        <Box
          flex={1}
          sx={{
            color: "white",
            cursor: "pointer",
          }}
        >
          <Typography variant="h6" color={"white"} align="center">
            Follow Us
          </Typography>
          <Box align="center">
            <IconButton sx={{ color: "blue", backgroundColor: " #fff" }}>
              <Facebook />
            </IconButton>
            &nbsp;
            <IconButton
              sx={{
                backgroundColor: " #fff",

                color: " #bc1888 ",
              }}
            >
              <Instagram />
            </IconButton>
            &nbsp;
            <IconButton sx={{ color: "#1DA1F2", backgroundColor: " #fff" }}>
              <Twitter />
            </IconButton>
            &nbsp;
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
