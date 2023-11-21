import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box, Typography } from "@mui/material";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Rightbar() {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      {" "}
      <Typography
        variant="h4"
        align="center"
        sx={{ background: "#CAE7DF", mt: 1 }}
      >
        Products
      </Typography>
      <ImageList
        sx={{
          width: 350,
          height: 800,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "white" }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "http://www.manishsteels.com/iron-steel-traders-kolhapur/product/m-s-angle/m-s-angle-02.jpg",
    title: "Angle",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://s.alicdn.com/@sc04/kf/H5ea1a87c7cb74b398e6c966d7daed5d47.jpg_300x300.jpg",
    title: "Beam",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://img3.exportersindia.com/product_images/bc-small/2022/7/10516838/mild-steel-c-channel-1657694511-6442817.jpeg",
    title: "Channel",
    author: "@helloimnik",
  },
  {
    img: "https://5.imimg.com/data5/KX/DN/MY-8538014/gi-nut-bolt-500x500-500x500.png",
    title: "Bolt",
    author: "@nolanissac",
  },
  {
    img: "http://hindustanferro.com/images/1018%20MS%20Bright%20Round%20Bar.jpg",
    title: "Bright Rod",
    author: "@hjrc33",
  },
  {
    img: "https://5.imimg.com/data5/AW/CR/MY-4670614/hr-plate-500x500.jpg",
    title: "Hr plate",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2022/9/IM/QQ/HD/11383418/gp-sheet-1000x1000.jpg",
    title: "Gp sheet",
    author: "@tjdragotta",
  },
  {
    img: "https://5.imimg.com/data5/XU/QI/MY-29280946/hr-hot-rolled-sheets-500x500.jpg",
    title: "Cr sheet",
    author: "@katie_wasserman",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUns2ifZk3--63fd7cnZmUyUUTdQG9yWd2Nw&usqp=CAU",
    title: "Fence link",
    author: "@silverdalex",
  },
  {
    img: "https://www.bindingwire.org/img/galvanized-binding-wire.jpg",
    title: "Binding Wire",
    author: "@shelleypauls",
  },
  {
    img: "https://img1.exportersindia.com/product_images/bc-small/dir_20/593963/cutting-wheel-1509087213-3419108.jpeg",
    title: "Cutting wheel",
    author: "@peterlaster",
  },
  {
    img: "https://5.imimg.com/data5/AU/SY/MY-36538313/metal-grinding-wheel-500x500.jpg",
    title: "Grinding wheel",
    author: "@southside_customs",
  },
];
