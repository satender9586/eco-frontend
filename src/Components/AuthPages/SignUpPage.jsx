import React, { useEffect, useState } from "react";
import Layout from "../HomeComponents/Layout";
import Header from "../HomeComponents/Header";
import { SinginputValidation } from "../../Validation/validationFuncltion.jsx";
import { SignupApi } from "../../Api/postApi.js";
import { toast } from "react-toastify";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const isError = Object.keys(formError).length !== 0;
    const isAnyFieldEmpty = Object.values(userData).some(
      (value) => value === ""
    );

    if (!isError && !isAnyFieldEmpty) {
      try {
        const data = {
          name: userData.name,
          phone: userData.phone,
          email: userData.email,
          password: userData.password,
        };

        const response = await SignupApi(data);
        if (response.status === 200) {
          console.log(response);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      console.log(
        "Form has errors or some fields are empty. API call not made."
      );
    }
  };

  useEffect(() => {
    if (isSubmit) {
      setFormError(SinginputValidation(userData));
      setIsSubmit(false);
    }
  }, [isSubmit, userData]);

  return (
    <>
      <Layout>
        <Header />
        <Box>
          <Modal isOpen={true}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Sign Up</ModalHeader>
              <ModalCloseButton onClick={() => navigate("/")} />
              <ModalBody>
                <FormControl mb="4">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                  />
                  <Text fontFamily={"14px"} color={"red.300"}>
                    {formError.name}
                  </Text>
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                  />
                  <Text fontFamily={"14px"} color={"red.300"}>
                    {formError.email}
                  </Text>
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Phone</FormLabel>
                  <Input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleChange}
                  />
                  <Text fontFamily={"14px"} color={"red.300"}>
                    {formError.phone}
                  </Text>
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                  />
                  <Text fontFamily={"14px"} color={"red.300"}>
                    {formError.password}
                  </Text>
                </FormControl>
              </ModalBody>
              <ModalFooter display={"flex"} justifyContent={"flex-start"}>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Sign Up
                </Button>
                <Button>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Layout>
    </>
  );
};

export default SignUpPage;
