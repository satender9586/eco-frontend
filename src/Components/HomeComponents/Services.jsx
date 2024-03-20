import React from "react";
import { Box, Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";

const Services = () => {
  const services = [
    {
      name: "Service 1",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
    {
      name: "Service 2",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
    {
      name: "Service 3",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
    {
      name: "Service 4",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
    {
      name: "Service 5",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
    {
      name: "Service 6",
      description:
        "Description for service 1 Description for service 1 Description for service 1 Description for service 1Description for service 1",
    },
  ];

  return (
    <Box p="3% 7%">
      <Text fontSize="5xl" fontWeight={"600"} textAlign={"center"}>
        Services
      </Text>
      <Grid padding={"1rem 0"} templateColumns="repeat(3, 1fr)" gap={6}>
        {services.map((service, index) => (
          <GridItem key={index}>
            <Box
              p="2rem"
              bg="white"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              transition="box-shadow 0.3s ease-in-out"
              _hover={{ boxShadow: "xl" }}
            >
              <Flex direction="column" justify="space-between" h="100%">
                <Box>
                  <Heading fontSize="xl" mb="2">
                    {service.name}
                  </Heading>
                  <Text>{service.description}</Text>
                </Box>
                <Box mt="4">
                  <Text color="gray.500" fontSize="sm">
                    Learn more →
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
