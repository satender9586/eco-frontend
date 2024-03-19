import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Flex,
  IconButton,
  Spacer,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/logo.png"


const CustomLink = ({ children }) => (
  <Link>
    <Box
      _hover={{ bg: "teal.200", color: "white", transform: "translateX(3px)" }}
      borderRadius="md"
      p={2}
      cursor="pointer"
      transition="transform 0.2s ease-in-out"
    >
      {children}
    </Box>
  </Link>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("sales");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Box display="flex" height="100vh">
      <Box spacing={6} align="stretch" w={64} bgGradient="linear(to-b, #0f0c29, #302b63, #24243e)">
        <Box   h={"4.5rem"}>
          <img style={{height:"100%"}}  width={"100%"} objectFit="cover" src={logo} alt="logo"/>
        </Box>

        <VStack spacing={4} p={4} align="stretch" color="white">
        <CustomLink>
            <Flex align="center">
              <CgProfile fontSize={"20px"} />
              <Text ml={2}>Products</Text>
            </Flex>
          </CustomLink>
          <CustomLink>
            <Flex align="center">
              <CgProfile fontSize={"20px"} />
              <Text ml={2}>My Profile</Text>
            </Flex>
          </CustomLink>
          <CustomLink>
            <Flex align="center">
              <CgProfile fontSize={"20px"} />
              <Text ml={2}>My Orders</Text>
            </Flex>
          </CustomLink>
          <CustomLink>
            <Flex align="center">
              <CgProfile fontSize={"20px"} />
              <Text ml={2}>Order Summary</Text>
            </Flex>
          </CustomLink>
          <CustomLink>
            <Flex align="center">
              <CgProfile fontSize={"20px"} />
              <Text ml={2}>Log Out</Text>
            </Flex>
          </CustomLink>
        </VStack>
      </Box>
      <Box flex={1}>
        <Box
          p={4}
          bg="whitesmoke.100"
          boxShadow="0.5px 4px 5px 0px rgba(0,0,0,0.75)"
        >
          <Flex align="center">
            <Spacer />
            <IconButton
              icon={<FiSearch />}
              aria-label="Search"
              color="black"
              bg="transparent"
              _hover={{ bg: "blue.700" }}
              _active={{ bg: "blue.800" }}
            />
            <IconButton
              icon={<FiShoppingCart />}
              aria-label="Cart"
              color="black"
              bg="transparent"
              _hover={{ bg: "blue.700" }}
              _active={{ bg: "blue.800" }}
            />
            <Box ml={4}>
              <Text color="black">User Name</Text>
            </Box>
          </Flex>
        </Box>
        <Box p={6}>
            aad
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
