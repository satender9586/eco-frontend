import React from "react";
import Layout from "../HomeComponents/Layout";
import { Box ,Text} from "@chakra-ui/react";
import about from "../../assets/about.png";

const MyOrder = () => {
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
          <Text position={"absolute"} top={"25%"} fontSize={"60px"} fontWeight={"600"} color={"whiteAlpha.700"}>#My Order</Text>
        </Box>
         
      </Box>
    </Layout>
  );
};

export default MyOrder;
