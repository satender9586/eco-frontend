import { Box, Flex, Text, Button, IconButton } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { deleteToken, deleteUserID } from "../../../confitg/function";
import { logout } from "../../Redux/userSlice/authSlice";
import { clearUser } from "../../Redux/userSlice/userInfoSlice";
import { useDispatch } from "react-redux";


import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartInfo);
  const isAuthenticated = useSelector(
    (state) => state?.isAuth?.isAuthenticated
  );

    console.log("auth",isAuthenticated)

  const logOutHandler = () => {
    deleteToken();
    deleteUserID();
    dispatch(logout ())
    dispatch(clearUser())
    navigate("/");
  };

  return (
    <Box bg={"#6B46A5"} position={"sticky"} top={0} right={0} zIndex={1}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
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
              // Add hover effect for a premium look
              _hover={{ color: "gray.200" }}
            >
              Home
            </Button>
            <Button
              variant="none"
              color={"white"}
              onClick={() => navigate("/product")}
              mr={4}
              _hover={{ color: "gray.200" }}
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
                  _hover={{ color: "gray.200" }}
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
              _hover={{ color: "gray.200" }}
            >
              Contact
            </Button>
            <Box>
              <Button
                position="relative"
                variant="none"
                mr={4}
                onClick={() => navigate("/cart")}
                _hover={{ color: "gray.200" }}
              >
                <Text color={"white"} position="absolute" top="-15%" zIndex="1">
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
                  _hover={{ bgColor: "teal.500" }}
                >
                  Sign In
                </Button>
                <Button
                  ml={4}
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => navigate("/signup")}
                  _hover={{ bgColor: "teal.500" }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Flex>
          <Flex>
            {isAuthenticated && (
              <>
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      colorScheme="blue"
                      aria-label="Search database"
                      icon={<FaRegUserCircle />}
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />

                    <PopoverBody padding={"1.5rem"}>

                   
                       <Button variant={"none"} minW={"0px"} padding={"0px"} onClick={()=> navigate("/myprofile")}>
                       <Text
                          mt={"0.5rem"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                        >
                          My Profile
                        </Text>
                       </Button>
                     
                     
                      <NavLink onClick={logOutHandler}>
                        <Text
                          mt={"0.5rem"}
                          fontSize={"16px"}
                          fontWeight={"700"}
                        >
                          LogOut
                        </Text>
                      </NavLink>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
