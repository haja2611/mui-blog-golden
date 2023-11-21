import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import pipesImage from "../../../static/pipes.png";
import tmtImage from "../../../static/tmt.jpg";
import cementImage from "../../../static/cement.jpg";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box sx={{ background: "#CAE7DF" }} padding={" 20px 30px 30px 20px"}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <StyledBox sx={{ backgroundImage: `url(${pipesImage})` }}>
          <StyledTypography align="center" variant="h3">
            PIPES
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${tmtImage})` }}>
          <StyledTypography align="center" variant="h3">
            TMT
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(${cementImage})` }}>
          <StyledTypography align="center" variant="h3">
            CEMENT
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
