import { Box, Typography } from "@mui/material";
import React from "react";
import HeroImage from "../../../static/HeroImage.png";
import Logo from "../../../static/gs.png";

const Hero = () => {
  return (
    <Box sx={{ background: "#FAF0DC" }}>
      <Typography align="center" variant="h3" sx={{ fontweight: 900 }}>
        <b>
          {" "}
          <img src={Logo} alt="logo" align="center" height={50} /> Golden&nbsp;
        </b>
        <b style={{ color: "red" }}>steels</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontweight: 100 }}>
        If you choose wisely there is no other option but us
      </Typography>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",

          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8 " }}>
            <Typography variant="h6" color="tomato" align="center" pt={8}>
              Our building is our identity
            </Typography>
            <Typography variant="h4" align="center">
              A solid building is a strong hope for our generation
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              <i>
                'I am building a house. Where the floor is made up of strength.
                Where the walls are crafted of ambition. Where the roof is a
                masterpiece of forgiveness, i am building myself' — i am
                building{" "}
              </i>
              <b>-NOOR UNNAHAR</b>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
