import React from "react";
import { Box, Img } from "@chakra-ui/react";
const HomePageCarousel = () => {
  return (
    <Box>
      <Img
        src={require("../assets/01_main_webp.webp")}
        w="1600px"
        alt="home-1"
        h="400px"
      />
    </Box>
  );
};

export default HomePageCarousel;
