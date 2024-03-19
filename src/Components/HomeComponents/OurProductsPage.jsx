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
  const navigate = useNavigate()
  const productreduxdata = useSelector((state)=>state?.AllProdcuts?.products?.products)

  

  return (
    <Box padding={"3% 7%"} >
      <Box >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"}>
          Our Exciting Products
        </Text>
      </Box>
      <Box padding={"2rem 0"} display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gap={3}>
       {
        productreduxdata?.map((product, index)=>(
          <Card maxW="300px" key={index} onClick={()=>navigate(`/aboutproduct/${product._id}`)}>
          <CardBody>
            <Image
            src={product.image}
            width={"100%"}
            height={"180px"}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="3" spacing="2">
              <Heading size="md">{product.name}</Heading>
              <Text>{product.about}</Text>
              <Text color="blue.600" fontSize="2xl">
                ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="1">
              <Button variant="solid" colorScheme="blue" >
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        ))
       }
      
      </Box>
    </Box>
  );
};

export default OurProductsPage;
