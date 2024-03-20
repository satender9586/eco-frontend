import React from 'react';
import { Box, Flex, Link, Text, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="blackAlpha.900" color="white" py="3%" >
      <Flex justify="space-between" align="center" maxW="1200px" height={"100%"}  mx="auto" px="4">
        <Box>
          <Text fontSize="3xl" fontWeight="bold">DevDynasty</Text>
          <Text mt="1" fontSize="18px">Narela , New Delhi , India</Text>
          <Text fontSize="18px">Phone: 9810411724</Text>
          <Text fontSize="18px">Email: sksatenderkumar59@gmail.com</Text>
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
