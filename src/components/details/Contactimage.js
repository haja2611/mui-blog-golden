import { LocationCity, LocationOn, WhatsApp } from "@mui/icons-material";
import { Box, Icon, IconButton, Stack, Typography } from "@mui/material";

import React from "react";

const Contactimage = () => {
  return (
    <Box
      sx={{
        height: 520,
        margin: "10px 10px",
        borderRadius: "10px",
        backgroundColor: "#FEE12B",
      }}
    >
      <Box flex={1} align="center">
        <Typography variant="h4" pt={5} color="#2A3166">
          <Icon sx={{ color: "red", ml: "-30px" }}>
            <LocationOn />
          </Icon>
          <b>GODOWN</b>
        </Typography>
        <Typography variant="body1">
          <b>
            {" "}
            Mr.Haja Mydeen <br />
            No.10
            <br /> XYZ Road
            <br />
            Karaikudi-630001
            <br />
            Cell:123456789 &nbsp;
          </b>
          <Icon sx={{ mt: "-10px", color: "green" }}>
            <WhatsApp />
          </Icon>
        </Typography>
      </Box>
      <Stack direction={"row"}>
        {" "}
        <Box flex={1} align="center">
          <Typography variant="h4" pt={5} color="#2A3166">
            <Icon sx={{ color: "red", ml: "-30px" }}>
              <LocationOn />
            </Icon>
            <b> HEAD OFFICE</b>
          </Typography>
          <Typography variant="body1">
            <b>
              {" "}
              Mr.Name
              <br />
              No.11
              <br /> 123 Road
              <br />
              Karaikudi-630002
              <br />
              Cell:123456789
            </b>
            <Icon sx={{ mt: "-10px", color: "green" }}>
              <WhatsApp />
            </Icon>
          </Typography>
        </Box>
        <Box flex={1} align="center">
          <Typography variant="h4" pt={5} color="#2A3166">
            <Icon sx={{ color: "red", ml: "-30px" }}>
              <LocationOn />
            </Icon>{" "}
            <b> BRANCH</b>
          </Typography>
          <Typography variant="body1">
            <b>
              {" "}
              Mr.Name2 <br />
              No.12
              <br /> ABC Road
              <br />
              Karaikudi-630003
              <br /> Cell:123456789
            </b>
            <Icon sx={{ mt: "-10px", color: "green" }}>
              <WhatsApp />
            </Icon>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contactimage;
