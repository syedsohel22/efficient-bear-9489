import React from "react";
import { Box, Flex, Text, Input, Divider, Spacer, Img } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Flex p={1}>
        <Flex gap="2">
          <Text>Contact Us</Text>
          <Text> | Save Later</Text>
          <Text> | Order Cancle</Text>
          <Text> | Return Order</Text>
          <RouterLink to="/admin">
            <Text> | Admin</Text>
          </RouterLink>
        </Flex>
        <Spacer />
        <Flex gap="2" p={1}>
          <RouterLink to="/login">
            <Text>Login</Text>
          </RouterLink>
          <RouterLink to="/cart">
            <Text>Cart</Text>
          </RouterLink>
        </Flex>
      </Flex>
      <Divider />

      <Flex p={1}>
        <Box>
          <RouterLink to="/">
            <Img
              src={require("../assets/styles resolvers logo.png")}
              alt="logo"
              w={170}
              h="80px"
              borderRadius={5}
            />
          </RouterLink>
        </Box>
        <Spacer />
        <Input placeholder="Search Something..!" size="md" w="40%" />
      </Flex>
      <Divider />
      <Flex
        alignitem="center"
        justify="Center"
        gap="2"
        p={1}
        mb={10}
        // #7b0e1d
        // _hover={{ bg: "#7b0e1d", color: " white" }}
      >
        <RouterLink to="/saree">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Saree
          </Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Lehngas
          </Text>
        </RouterLink>
        <RouterLink to="/salwarkameez">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Salwar Kameez
          </Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            kutis
          </Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Jewellery
          </Text>
        </RouterLink>
        <RouterLink to="/kids">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Kids
          </Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Men
          </Text>
        </RouterLink>
        <RouterLink to="/product">
          <Text _hover={{ bg: "#7b0e1d", color: " white" }} p={1}>
            Home & Liveing
          </Text>
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
