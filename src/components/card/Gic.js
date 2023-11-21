import { Box, CardMedia, CardContent, Typography } from "@mui/material";

import React from "react";

const Gic = ({ gicImage }) => {
  return (
    <Box margin={"20px"}>
      <CardMedia
        component="img"
        height="400"
        width="100%"
        image={gicImage}
        alt="Roofing sheets"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          component="div"
          color={"#2A3166"}
        >
          Galvanized corrugated sheets
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Best qualtiy Galvanized corrugated sheets are available
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Gic;
