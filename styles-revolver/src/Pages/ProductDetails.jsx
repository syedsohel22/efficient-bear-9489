import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Text, Img, Button, Flex } from "@chakra-ui/react";
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [singleproduct, setSingleProduct] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:8080/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setSingleProduct(res);
        console.log(res);
      });
  }, [id]);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <Box w="100%" display="flex" m="auto" mb={10}>
      <Box w="40%">
        <Img
          src={singleproduct.img}
          alt={singleproduct.name}
          w="30%"
          m="auto"
        />
      </Box>
      <Box>
        <Text>Product Name - {singleproduct.name}</Text>
        <Text>Offer Price - ₹{singleproduct.price}</Text>
        <Text as="del" color="red">
          origninal Price ₹{singleproduct.oriprice}
        </Text>
        <Text>To place quick COD order Click Here</Text>
        <Box w="300px" h="300px" alignItems="center" border="1px solid grey" justifyContent="center">
          <Text>Price :{Math.floor(count * singleproduct.price)}</Text>
          <Text></Text>
          <Flex>
            <Button onClick={handleAdd}>+</Button>
            <Text>{count}</Text>
            <Button onClick={handleSub}>-</Button>
          </Flex>
        </Box>
        <RouterLink to={`/payment`}>
          <Button color="white" bg="green">
            Buy Now
          </Button>
        </RouterLink>
      </Box>
    </Box>
  );
};

export default ProductDetails;
