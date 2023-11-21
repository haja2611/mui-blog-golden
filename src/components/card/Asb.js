import { Box, CardMedia, CardContent, Typography } from "@mui/material";

import React from "react";

const Asb = ({ asbImage }) => {
  return (
    <Box margin={"20px"}>
      <CardMedia
        component="img"
        height="400"
        width="100%"
        image={asbImage}
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
          Asbestos Sheets
          <br />
          <br />
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Best qualtiy Asbestos Sheets are available
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Asb;
