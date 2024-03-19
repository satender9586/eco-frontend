import React from "react";
import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import contact from "../../assets/contact.png";

const AboutUs = () => {
  return (
   <Box padding={"3% 7%"} >
    <Box >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"}>
          About Us
        </Text>
      </Box>
     <Flex align="center" justify="center" h="80vh">
      <Box maxW="800px" p="4">
        <Heading as="h1" size="xl" mb="4">
          Welcome to Our Company
        </Heading>
        <Text fontSize="lg" mb="4">
          We are a team of passionate individuals dedicated to providing
          high-quality products and services to our customers. Our mission is to
          exceed expectations and create lasting relationships with our clients.
        </Text>
        <Text fontSize="lg" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </Text>
        <Text fontSize="lg" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </Text>
        <Text fontSize="lg" mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
        </Text>
      </Box>
      <Box
        ml="8"
        display={{ base: "none", md: "block" }}
        maxHeight="400px"
        maxWidth="400px"
      >
        <img
          src={contact}
          alt="Placeholder"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>{" "}
    </Flex>
   </Box>
  );
};

export default AboutUs;
