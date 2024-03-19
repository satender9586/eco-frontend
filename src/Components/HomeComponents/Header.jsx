import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import img from "../../assets/shop.jpg";

const Header = () => {
  return (
   
    <Box bg={"#6B46A5"} position={"relative"}   overflow="hidden" padding={"0px"}>
    <Box>
      <img src={img} alt="img" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
    </Box>
  </Box>
       
   
  );
};

export default Header;
