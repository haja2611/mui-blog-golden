import { Box, CardMedia, CardContent, Typography } from "@mui/material";

import React from "react";

const Card = ({ cardImage }) => {
  return (
    <Box margin={"20px"}>
      <CardMedia
        component="img"
        height="400"
        width="100%"
        image={cardImage}
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
          Roofing Sheets
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Best qualtiy Roofing Sheets are available
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Card;
