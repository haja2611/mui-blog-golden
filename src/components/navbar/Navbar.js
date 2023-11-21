import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const MenuItems = [
    { Name: "Home", Link: "/" },
    { Name: "products", Link: "#" },
    { Name: "Portfolio", Link: "#" },
    { Name: "Blog", Link: "#" },
    { Name: "Contact Us", Link: "#" },
  ];
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const [open, SetOpen] = useState(false);
  return (
    <AppBar sx={{ background: "#2A3166" }} position={"static"}>
      <StyledToolbar>
        <Box>
          <IconButton sx={{ color: "blue" }}>
            <Facebook />
          </IconButton>
          <IconButton
            sx={{
              color: " #bc1888 ",
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton sx={{ color: "#1DA1F2" }}>
            <Twitter />
          </IconButton>
        </Box>

        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          <Typography
            sx={{ cursor: "pointer", fontSize: "14px", display: "flex" }}
          >
            <Link
              href="http://localhost:3000/"
              sx={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Home{" "}
            </Link>
          </Typography>
          <Typography
            sx={{ cursor: "pointer", fontSize: "14px", display: "flex" }}
          >
            Products
          </Typography>
          <Typography
            sx={{ cursor: "pointer", fontSize: "14px", display: "flex" }}
          >
            Portfolio
          </Typography>
          <Typography
            sx={{ cursor: "pointer", fontSize: "14px", display: "flex" }}
          >
            Blog
          </Typography>
          <Typography
            sx={{ cursor: "pointer", fontSize: "14px", display: "flex" }}
          >
            <Link
              href="http://localhost:3000/details"
              sx={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Contact Us
            </Link>
          </Typography>
        </MenuBox>

        <SearchBox>
          <InputBase placeholder="Search..." sx={{ color: "white" }} />
          <MenuIcon
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box sx={{ width: 300, height: "90vh" }}>
            {MenuItems.map((item) => (
              <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
                {item.Name}
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
