import React, { useEffect, useState } from "react";
import { Box, Button, Text, Image, Select, Flex } from "@chakra-ui/react";
import Layout from "../HomeComponents/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../Redux/CartReducers/CartSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthtentication = useSelector(
    (state) => state?.isAuth?.isAuthenticated
  );
  const cart = useSelector((state) => state?.cartInfo);
  const [total, setTotal] = useState(0);

  const QuantityIncfun = (data) => {
    const id = data._id;
    dispatch(increaseQuantity(id));
  };

  const QuantityDecfun = (data) => {
    const id = data._id;
    dispatch(decreaseQuantity(id));
  };

  const RemoverItemFun = (data) => {
    const id = data._id;
    dispatch(removeItem(id));
  };

  const totalfun = () => {
    const totalamm = cart?.reduce((acc, curr) => {
      return acc + +curr?.totalPrice;
    }, 0);
    setTotal(totalamm);
  };

  // place Order function
  const placeOrderFun = async (e) => {
    e.preventDefault();

    if (isAuthtentication) {
      navigate("/placeorder");
    } else {
      // navigate("/login");
    }
  };

  useEffect(() => {
    totalfun();
  }, [cart]);

  return (
    <Layout>
      <Box p="3% 7%" minH={"90vh"}>
        <Flex justify="space-between">
          <Box w="65%">
            <Box p="2% 0%">
              <Text fontSize="4xl" fontWeight="bold" mb="2rem">
                Shopping Cart
              </Text>
            </Box>
            {cart?.map((data, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="1rem"
                boxShadow="md"
                mt={"1rem"}
              >
                <Flex align="center">
                  <Image
                    src={data.image}
                    borderRadius="md"
                    boxSize="100px"
                    mr="1rem"
                  />
                  <Box>
                    <Text fontSize="xl" fontWeight="semibold">
                      {data.name}
                    </Text>
                    <Text fontSize="md" color="gray.600">
                      Price: ₹{data.price}
                    </Text>
                    <Box
                      bgColor={"black"}
                      p="0.2rem"
                      boxShadow="md"
                      bgClip={"blue."}
                    >
                      <Button onClick={() => QuantityDecfun(data)}>DEC</Button>
                      <Button
                        variant={"none"}
                        bgColor={"black"}
                        color={"white"}
                        borderRadius={"none"}
                      >
                        <Text>{data.quantity}</Text>
                      </Button>
                      <Button onClick={() => QuantityIncfun(data)}>ENC</Button>
                    </Box>
                  </Box>
                  <Button
                    onClick={() => RemoverItemFun(data)}
                    colorScheme="red"
                    ml="auto"
                  >
                    Remove
                  </Button>
                </Flex>
              </Box>
            ))}
          </Box>
          <Box
            w="30%"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="1.5rem"
            boxShadow="lg"
            bg="white"
          >
            <form onSubmit={placeOrderFun}>
              <Text fontSize="2xl" fontWeight="bold" mb="1rem">
                Order Summary
              </Text>
              <Flex justify="space-between" mb="0.5rem">
                <Text>Subtotal:</Text>
                <Text>₹{total}</Text>
              </Flex>
              <Flex justify="space-between" mb="0.5rem">
                <Text>Delivery Cost:</Text>
                <Text>Free</Text>
              </Flex>
              <Flex justify="space-between" mb="0.5rem">
                <Text>Savings:</Text>
                <Text color="green"> 5% Discount {(total / 100) * 5}</Text>
              </Flex>
              <hr />
              <Flex justify="space-between">
                <Text>Total Amount:</Text>
                <Text fontSize="xl" fontWeight="semibold">
                  ₹{total - (total / 100) * 5}
                </Text>
              </Flex>
              <Button
                mt="1.5rem"
                colorScheme="blue"
                size="lg"
                width="100%"
                type="submit"
              >
                Place Order
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default CartPage;
