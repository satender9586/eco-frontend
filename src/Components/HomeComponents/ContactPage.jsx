import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import contact from "../../assets/contact.png";

const ContactPage = () => {
  return (
    <Box padding={"3% 7%"}>
      <Box>
        <Text fontSize="5xl" fontWeight={"600"} textAlign={"center"}>
          Free Contact Us
        </Text>
      </Box>
      <Flex align="center" justify="center" h="100vh" gap={4}>
        <Box
          ml="8"
          display={{ base: "none", md: "block" }}
          maxHeight="600px"
          maxWidth="600px"
        >
          <img
            src={contact}
            alt="Placeholder"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          maxW="600px"
          p="8"
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
        >
          <Flex direction="column" align="center">
            <Text fontSize="4xl" fontWeight={"600"} textAlign={"center"}>
              Contact Us
            </Text>
            <Box w="100%" mt={"1rem"}>
              <Input
                borderRadius={"3px"}
                border={"1px solid #DADCE0"}
                height={"2.8rem"}
                fontSize={"18px"}
                _focusVisible={"none"}
                placeholder="Your Name"
                mb="2"
              />
              <Input
                borderRadius={"3px"}
                border={"1px solid #DADCE0"}
                height={"2.8rem"}
                fontSize={"18px"}
                _focusVisible={"none"}
                placeholder="Your Email"
                mb="2"
              />
              <Textarea
                resize={"none"}
                borderRadius={"3px"}
                border={"1px solid #DADCE0"}
                height={"2.8rem"}
                fontSize={"18px"}
                _focusVisible={"none"}
                placeholder="Your Message"
                mb="4"
              />
              <Button
                borderRadius={"5px"}
                border={"1px solid #DADCE0"}
                height={"2.8rem"}
                fontSize={"18px"}
                _focusVisible={"none"}
                colorScheme="teal"
              >
                Send
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactPage;
