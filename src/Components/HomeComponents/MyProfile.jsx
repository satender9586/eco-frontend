import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import aboutImg from "../../assets/about.jpg";
import { useSelector } from "react-redux";

const MyProfile = () => {

  const [userData, setUserData] = useState({})
  
  const userInfo = useSelector((state)=> state.userInfo)
  console.log(userData)
 
  useEffect(()=>{
    setUserData(userInfo)
  },[])

  return (
    <>
      <Layout>
        <Box minH={"100vh"} padding={"3% 7%"}>
          <Box
            display={"grid"}
            gridTemplateColumns={"repeat(2,1fr)"}
            w={"100%"}
          >
            <Image src={aboutImg} height={"100%"} width={"100%"} />
            <Box maxW="600px" p="8">
              <Text fontSize={"30px"} textAlign={"center"}>
                My Profile
              </Text>
              <Text fontSize={"15px"} textAlign={"center"} fontWeight={"500"}>
                Feel Free To Connect With Us Always
              </Text>
              <Box mt={"1rem"} padding={"0 4rem"}>
                <Input type="text" value={userData?.name || ""} borderRadius={"3px"}></Input>
              </Box>
              <Box mt={"1rem"} padding={"0 4rem"} display={"flex"} gap={2}>
                <Input type="text" value={userData?.phone || ""}  borderRadius={"3px"}></Input>{" "}
                <Input type="text" value={userData?.email || ""} borderRadius={"3px"}></Input>
              </Box>
              <Box mt={"1rem"} padding={"0 4rem"} display={"flex"} gap={2}>
                <Input type="text"  value={userData?.address?.state || ""}  borderRadius={"3px"}></Input>{" "}
                <Input type="text"  value={userData?.address?.pincode || ""} borderRadius={"3px"}></Input>
              </Box>
              <Box mt={"1rem"} padding={"0 4rem"} display={"flex"} gap={2}>
                <Input type="text" value={userData?.address?.state || ""} borderRadius={"3px"}></Input>{" "}
                <Input type="text" value={userData?.address?.city || ""} borderRadius={"3px"}></Input>
              </Box>
              <Box mt={"1rem"} padding={"0 4rem"}>
                <Textarea value={userData?.address?.address + userData?.address?.city || ""} resize={"none"} borderRadius={"3px"}></Textarea>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default MyProfile;
