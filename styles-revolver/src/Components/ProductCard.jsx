import React from "react";
import { Box, Img, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
const ProductCard = ({ img, name, price, oriprice, id }) => {
  return (
    <RouterLink to={`/product/${id}`}>
      <Box border="1px solid grey" p="5px">
        <Img src={img} alt={name} />
        <Text>{name}</Text>
        <Text>{price}</Text>
        <Text>{oriprice}</Text>
      
      </Box>
    </RouterLink>
  );
};

export default ProductCard;
