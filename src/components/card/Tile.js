import { Box, CardMedia, CardContent, Typography } from "@mui/material";

import React from "react";

const Tile = ({ tileImage }) => {
  return (
    <Box margin={"20px"}>
      <CardMedia
        component="img"
        height="400"
        width="100%"
        image={tileImage}
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
          Tile Sheets
          <br />
          <br />
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Best qualtiy Tile Sheets are available
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Tile;
