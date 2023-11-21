import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "../card/Card";
import Gic from "../card/Gic";
import Asb from "../card/Asb";
import Poly from "../card/Poly";
import roofImage from "../../static/roofsheets.png";
import gicImage from "../../static/gic.jpg";
import asbImage from "../../static/asb.jpg";
import polyImage from "../../static/poly.jpg";
import tileImage from "../../static/tile.jpeg";
import Tile from "../card/Tile";

const Recents = () => {
  return (
    <Box sx={{ background: "#CAE7DF" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage={roofImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Gic gicImage={gicImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Asb asbImage={asbImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Poly polyImage={polyImage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tile tileImage={tileImage} />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Recents;
