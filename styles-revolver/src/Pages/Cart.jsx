// import React from "react";
// import { useParams, Link as RouterLink } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Box, Text, Img, Button, Flex } from "@chakra-ui/react";
// const Cart = () => {
//   const [cartProduct, setCartProduct] = useState([]);

//   const { id } = useParams();

//   // useEffect(() => {
//   //   fetch(`http://localhost:8080/product/${id}`)
//   //     .then((res) => res.json())
//   //     .then((res) => {
//   //       setCartProduct(res);
//   //       console.log(res);
//   //     });
//   // }, []);
//   return (
//     // <Box w="100%" display="flex" m="auto" mb={10}>
//     //   <Box w="40%">
//     //     <Img src={cartProduct.img} alt={cartProduct.name} w="30%" m="auto" />
//     //   </Box>
//     //   <Box>
//     //     <Text>Product Name - {cartProduct.name}</Text>
//     //     <Text>Offer Price - ₹{cartProduct.price}</Text>
//     //     <Text as="del" color="red">
//     //       origninal Price ₹{cartProduct.oriprice}
//     //     </Text>
//     //     <Text>To place quick COD order Click Here</Text>
//     //     <Box w="300px" h="300px">
//     //       <Text>Price :</Text>
//     //       <Text></Text>
//     //       <Flex>
//     //         <Button onClick={setCount(() => count + 1)}>+</Button>
//     //         <Text>{count}</Text>
//     //         <Button onClick={setCount(() => count - 1)}>-</Button>
//     //       </Flex>
//     //     </Box>
//     //     <RouterLink to={`/cart/${id}`}>
//     //       <Button color="white" bg="green">
//     //         Order Now
//     //       </Button>
//     //     </RouterLink>
//     //   </Box>
//     // </Box>
//  // );
// //};

// //export default Cart;
