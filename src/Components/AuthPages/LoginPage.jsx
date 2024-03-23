import React, { useEffect, useState } from "react";
import Header from "../HomeComponents/Header";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import Layout from "../HomeComponents/Layout";
import { LoginValidation } from "../../Validation/validationFuncltion";
import { toast } from "react-toastify";
import { LoginApi } from "../../Api/postApi";
import { setToken, setUserID } from "../../../confitg/function";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/userSlice/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);

    const isError = Object.keys(formError).length !== 0;
    const isAnyFieldEmpty = Object.values(userData).some((value) => value === "");

    if (!isError && !isAnyFieldEmpty) {
      try {  
        const data = {
          email: userData.email,
          password: userData.password,
        };     
        const response = await LoginApi(data);   
        if (response.status === 200) {
          const Token= response.data.token
          const UserId =  response.data.user.userId
          localStorage.setItem("Token",Token)
          localStorage.setItem("userId",UserId)
          setToken(Token)
          setUserID(UserId)
          dispatch(login())
          toast.success("Login Successfully");
          navigate("/cart")
        } else {    
          toast.error("Login failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during login:", error);
        toast.error("An error occurred. Please try again later.");
      }
    } else {
      console.log("Form has errors or some fields are empty");
    }
  };

  useEffect(() => {
    if (isSubmit) {
      setFormError(LoginValidation(userData));
      setIsSubmit(false);
    }
  }, [isSubmit, userData]);

  return (
    <>
      <Layout>
        <Header />
        <Modal isOpen={true} size={"sm"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton onClick={() => navigate("/")} />
            <ModalBody>
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

            <ModalFooter display={"flex"} justifyContent={"space-between"}>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Submit
              </Button>
             <Text><Button variant={"none"} minW={"0"} padding={"0"} onClick={()=> navigate("/updatepass")}>Forget Passowrd ? </Button></Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default LoginPage;
