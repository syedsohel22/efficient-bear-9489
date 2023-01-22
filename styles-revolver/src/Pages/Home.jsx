import React from "react";
import { Flex, Box, Img } from "@chakra-ui/react";
import HomePageCarousel from "../Components/HomePageCarousel";
import HomeCard from "../Components/HomeCard";
import { SlideData } from "../Components/SlideData";
const Home = () => {
  return (
    <>
      <Box w="100%" alignContent="center" marginTop={10}>
        <Box w="100%" p={4} color="white">
          <HomePageCarousel slides={SlideData} />
        </Box>
        {/* <HomePageCarousel /> */}
        <Flex align="center" justify="center" marginTop={10}>
          <Img
            src={require("../assets/homepage-img1.jpg")}
            w="1200px"
            alt="home-1"
            h="100vh"
          />
        </Flex>
        <HomeCard />
      </Box>
    </>
  );
};

export default Home;
