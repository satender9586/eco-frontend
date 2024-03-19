import { Box } from "@chakra-ui/react";
import React from "react";
import { Audio } from "react-loader-spinner";
const Loaders = () => {
  return (
    <Box width={"100vw"} height={"100vh"}  display={"flex"} justifyContent={"center" } alignItems={"center"}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green.200"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </Box>
  );
};

export default Loaders;
