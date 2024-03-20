import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";


const NavBar = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartInfo);
  const isAuthenticated = useSelector((state) => state?.isAuth?.isAuthenticated);
  

  return (
    <Box bg={"#6B46A5"}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
       
      >
        <Text fontSize="xl" fontWeight="bold">
          <img
            src={logo}
            style={{ height: "40px", objectFit: "cover" }}
            alt="logo"
          />
        </Text>

        <Box display={"flex"}>
          <Flex align="center">
            <Button
              variant="none"
              color={"white"}
              onClick={() => navigate("/")}
              mr={4}
            >
              Home
            </Button>
            <Button
              variant="none"
              color={"white"}
              onClick={() => navigate("/product")}
              mr={4}
            >
              Products
            </Button>
            {isAuthenticated && (
              <>
                <Button
                  variant="none"
                  color={"white"}
                  onClick={() => navigate("/myorder")}
                  mr={4}
                >
                  My Order
                </Button>
              </>
            )}
            <Button
              variant="none"
              color={"white"}
              onClick={() => navigate("/contact")}
              mr={4}
            >
              Contact
            </Button>
            <Box>
              <Button
                position="relative"
                variant="none"
                mr={4}
                onClick={() => navigate("/cart")}
              >
                <Text
                  bgColor="blue.300"
                  padding="5px"
                  borderRadius="50%"
                  color="red"
                  position="absolute"
                  top="-15%"
                  zIndex="1"
                >
                  {cartData.length}
                </Text>
                <IoCartOutline fontSize="30px" />
              </Button>
            </Box>
          </Flex>

          <Flex>
            {!isAuthenticated && (
              <>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
                <Button
                  ml={4}
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Flex>
          <Flex>
            {isAuthenticated && (
              <>
                <Button ml={4} colorScheme="teal" variant="solid">
                  Log Out
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
