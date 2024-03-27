import { Box ,Text} from "@chakra-ui/react";
import React from "react";
import img from "../../assets/shop.jpg";


const Header = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"repeat(2,1fr)"}
    
      position={"relative"}
    
      overflow="hidden"
      padding={"0px"}
    >
       <Box padding={"3rem"}   bg={"blackAlpha.100"}>
          <Text lineHeight={"26px"} fontSize={"65px"} fontWeight={"700"}>Our</Text>
          <Text lineHeight={"130px"} fontSize={"65px"} fontWeight={"700"}>Mansoone</Text>
          <Text lineHeight={"50px"} fontSize={"65px"} fontWeight={"700"}>Sale</Text>
          <Text lineHeight={"80px"} fontSize={"27px"}>Pocket friendly products everywhere</Text>
      </Box>
      <Box padding={"0px"}  bg={"blackAlpha.100"}>
        <img
          src={img}
          alt="img"
          style={{ height: "400px", width: "100%", objectFit: "cover", opacity: 0.7 }}
        />
      </Box>
    </Box>
  );
};

export default Header;
