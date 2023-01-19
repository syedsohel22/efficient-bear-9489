import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { GiShoppingBag } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { Divider } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Box w="100%">
      <Box justifyContent="space-between" width="70%">
        <Flex justify-content="space-between" width="max-content">
          <Text>Contact Us </Text>
          <Text>| 7 Day Returns </Text>
          <Text>| Track Order </Text>
          <Text>| Return Order </Text>
          <Text>| Sell on Mirraw </Text>
          <Text>| Survey </Text>
        </Flex>
        <Divider />
        <Flex justify-content="space-between" width="max-content">
          <Text>
            <FaUser />
            Login
          </Text>
          <Text>
            <GiShoppingBag /> Cart
          </Text>
        </Flex>
      </Box>
      <Divider />
      <Divider />
    </Box>
  );
};

export default Navbar;
