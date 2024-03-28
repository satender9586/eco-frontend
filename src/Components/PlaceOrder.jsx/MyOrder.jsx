import React, { useEffect, useState } from "react";
import Layout from "../HomeComponents/Layout";
import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import about from "../../assets/about.jpg";
import { useSelector } from "react-redux";
import { getAllOrdersApi } from "../../Api/getApi";

const MyOrder = () => {
  const user = useSelector((state) => state.userInfo);

  const [orders, setOrders] = useState([]);
  const [ammount, setAmmount] = useState(0)

  const HanderOrderFun = async () => {
    try {
      const response = await getAllOrdersApi(user._id);
      setOrders(response?.data?.orders);
    
      console.log(total)
    } catch (error) {}
  };

  console.log(orders);

  useEffect(() => {
    HanderOrderFun();
  }, []);

  return (
    <Layout>
      <Box position={"relative"} minHeight={"100vh"}>
        <Box
          bgColor={"blackAlpha.100"}
          zIndex={1}
          maxH={"350px"}
          display={"flex"}
          justifyContent={"center"}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7))",
          }}
        >
          <img
            style={{ height: "250px", zIndex: "-1" }}
            src={about}
            alt="img"
          />
          <Text
            position={"absolute"}
            top={"25%"}
            fontSize={"60px"}
            fontWeight={"600"}
            color={"whiteAlpha.700"}
          >
            #My Order
          </Text>
        </Box>
        <Box padding={"3% 5%"}>
          {orders.map((data, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p="1rem"
              boxShadow="md"
              mt={"1rem"}
              
            >
              <Heading textAlign={"end"} fontSize={15}>Payment Id : {data.paymentId}</Heading>
              {/* <Heading textAlign={"end"} fontSize={15}>Total Ammount : {"50"}</Heading> */}
              {data?.products?.map((data, index) => (
                <Flex align="center">
                  <Image
                    src={data?.product?.image}
                    borderRadius="md"
                    boxSize="100px"
                    mr="1rem"
                  />
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold">
                      {data?.product?.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      Price: ₹{data?.product?.price}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                     Quantity: ₹{data.quantity}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default MyOrder;
