import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OurProductsPage = () => {
  const navigate = useNavigate();
  const productreduxdata = useSelector(
    (state) => state?.AllProdcuts?.products?.products
  );

  return (
    <Box padding={"3% 7%"} bgColor={"#F9F9F9"}>
      <Box>
        <Text fontSize="5xl" fontWeight={"600"} textAlign={"center"}>
          Our Exciting Products
        </Text>
        <Text fontSize="2xl" textAlign={"center"}>
          Cost Effective and Easy to purchase
        </Text>
      </Box>
      <Box
        padding={"2rem 0"}
        display={"grid"}
        gridTemplateColumns={"repeat(4,1fr)"}
        gap={5}
      >
        {productreduxdata?.slice(0, 8)?.map((product, index) => (
          <Card
            borderRadius="lg"
            boxShadow="lg"
            maxW="300px"
            key={index}
            onClick={() => navigate(`/aboutproduct/${product._id}`)}
            style={{ transform: "0.3s ease" }}
            _hover={{
              transform: "scale(1.1)",
              transition: "transform 0.5s ease",
            }}
          >
            <CardBody padding={"0px"}>
              <Image
                src={product.image}
                width={"100%"}
                height={"180px"}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack padding={"1rem"} height={"100%"} mt="3" spacing="2">
                <Heading size="md" fontWeight={"500"}>
                  {product.name}
                </Heading>
                <Text fontSize="17px">{product.about.slice(0, 50)}...</Text>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text color="blue.600" fontSize="16px">
                    ${product.price}
                  </Text>
                  <Button borderRadius={"3px"} variant="none" bg={"green.400"}>
                    Add to cart
                  </Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default OurProductsPage;
