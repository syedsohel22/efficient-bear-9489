import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
const HomePageCarousel = ({ slides }) => {
  return (
    <Carousel infiniteLoop showArrows={true} showThumbs={true}>
      {slides.map((slide) => {
        return (
          <Image
            src={slide.image}
            height="auto"
            width="800px"
            alt={slide.image}
            key={slide.image}
          />
        );
      })}
    </Carousel>
  );
};

export default HomePageCarousel;
