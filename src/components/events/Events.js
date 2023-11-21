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

export default function Events() {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ background: "#CAE7DF", mt: 6 }}
      >
        Galleries
      </Typography>
      <ImageList
        sx={{
          width: 350,
          height: 900,
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
    img: "https://content.jdmagicbox.com/comp/karaikudi/b3/9999p4565.4565.101218230653.i5b3/catalogue/golden-steels-karaikudi-h-o-karaikudi-steel-dealers-1i7m73t-250.jpg",
    title: "Head Office",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://thumbs.dreamstime.com/b/different-design-shapes-mild-steel-railing-materials-shop-sale-using-building-construction-closeup-222248337.jpg",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://shop.kloeckner.co.uk/medias/Tubes-Pipe-Products-2.jpg?context=bWFzdGVyfGltYWdlc3wxNjYzNTh8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oOWYvaDJjL2gwMC84OTc2MjQ3Njg1MTUwLmpwZ3xmOTUxMmQ3YWI0NDg2MDkxZDY5Y2ZhZjBiYjhlYjVkMDJlYWUyMDhlNmQ3M2E3NTFlYTNiMGFhMTkwZTIzMmI0",

    author: "@helloimnik",
  },
  {
    img: "https://5.imimg.com/data5/ANDROID/Default/2022/4/RR/QG/BB/26945308/product-jpeg-1000x1000.jpg",

    author: "@nolanissac",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2022/8/GI/FN/RC/28487226/cement-shop-near-me-500x500.jpg",

    author: "@hjrc33",
  },
  {
    img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTu5awqJnpX6UTgYhkMuoGOAEWBdiG86l0A&usqp=CAU",

    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://5.imimg.com/data5/AH/IJ/MY-5993600/ss-chequered-plate-500x500.jpg",

    author: "@tjdragotta",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIAiDMF1pj9hpf4PCE3bNe58AM6_Qtfx6Ug&usqp=CAU",

    author: "@katie_wasserman",
  },
  {
    img: "https://dq3atogbtxhm1.cloudfront.net/Images/Medium/20220209111346-0e4a44eb-c564-4b84-8744-bbb3a7c1856f.jpg",

    author: "@silverdalex",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2022/8/OS/NQ/LP/8280931/gc-roofing-sheets-125x125.jpeg",

    author: "@shelleypauls",
  },
  {
    img: "https://www.microwiremesh.com/wp-content/uploads/2019/03/wiremesh.jpg",

    author: "@peterlaster",
  },
  {
    img: "https://4.imimg.com/data4/QD/EO/MY-20171543/ms-patti-500x500.jpg",

    author: "@southside_customs",
  },
];
