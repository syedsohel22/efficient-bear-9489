import React from "react";
import { Box, Flex, Text, Input, Divider, Spacer } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box>
      <Flex p={1}>
        <Flex gap="2">
          <Text>Contact Us</Text>
          <Text> | Save Later</Text>
          <Text> | Order Cancle</Text>
          <Text> | Return Order</Text>
          <Text> | Survey</Text>
        </Flex>
        <Spacer />
        <Flex gap="2" p={1}>
          <Text>Login</Text>
          <Text>Cart</Text>
        </Flex>
      </Flex>
      <Divider />

      <Flex p={1}>
        <Box>LOGO</Box>
        <Spacer />
        <Input placeholder="Search Something..!" size="md" w="40%" />
      </Flex>
      <Divider />
      <Flex alignItem="center" justify="Center" gap="2" p={1}>
        <Text>Saree</Text>
        <Text>Lehngas</Text>
        <Text>Salwar Kameez</Text>
        <Text>kutis</Text>
        <Text>Jewellery</Text>
        <Text>Kids</Text>
        <Text>Men</Text>
        <Text>Home & Liveing</Text>
      </Flex>
    </Box>
  );
};

export default Navbar;
