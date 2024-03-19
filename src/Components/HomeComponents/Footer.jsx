import React from 'react';
import { Box, Flex, Link, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py="3%">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px="4">
        <Box>
          <Text fontSize="xl" fontWeight="bold">Company Name</Text>
          <Text mt="1" fontSize="md">123 Street Name, City, Country</Text>
          <Text fontSize="md">Phone: +1234567890</Text>
          <Text fontSize="md">Email: info@example.com</Text>
        </Box>
        
        <Flex>
          <IconButton
            as={Link}
            href="#"
            aria-label="Facebook"
            icon={<FaFacebook size="lg" />}
            variant="ghost"
            colorScheme="whiteAlpha"
            mr="2"
            fontSize="lg"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter size="lg" />}
            variant="ghost"
            colorScheme="whiteAlpha"
            mr="2"
            fontSize="lg"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="lg" />}
            variant="ghost"
            colorScheme="whiteAlpha"
            mr="2"
            fontSize="lg"
          />
          <IconButton
            as={Link}
            href="#"
            aria-label="Instagram"
            icon={<FaInstagram size="lg" />}
            variant="ghost"
            colorScheme="whiteAlpha"
            fontSize="lg"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
