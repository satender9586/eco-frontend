import React from 'react';
import { Box, Flex, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';
import contact from  "../../assets/contact.png"

const ContactPage = () => {
  return (
   <Box padding={"3% 7%"}>
     <Box >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"}>
          Free Contact Us
        </Text>
      </Box>
     <Flex align="center" justify="center" h="100vh" gap={4}>
      
      <Box ml="8" display={{ base: 'none', md: 'block' }} maxHeight="600px" maxWidth="600px">
        <img src={contact} alt="Placeholder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box maxW="600px" p="8" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <Flex direction="column" align="center">
          <Heading mb="4">Contact Us</Heading>
          <Box w="100%">
            <Input placeholder="Your Name" mb="2" />
            <Input placeholder="Your Email" mb="2" />
            <Textarea placeholder="Your Message" mb="4" />
            <Button colorScheme="teal">Send</Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
   </Box>
  );
};

export default ContactPage;
