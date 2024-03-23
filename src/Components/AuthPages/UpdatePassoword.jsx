import React, { useEffect, useState } from "react";
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
  InputLeftAddon,
  Stack,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import Layout from "../HomeComponents/Layout";
import Header from "../HomeComponents/Header";
import { OtpGenderate } from "../../Api/postApi";
import { toast } from "react-toastify";
import { UpdatePasswordApi } from "../../Api/postApi";
import { useNavigate } from "react-router-dom";

const UpdatePasswordModal = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState({ email: "" });
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const emailHandler = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };
  const OtpHandler = async () => {
    try {
      if (email.email) {
        const response = await OtpGenderate({ email: email.email });

        if (response.status == 200) {
          toast.success("Otp Generate Succesflly");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePawwordHandler = async(e)=>{
  try {
    if(email.email && newPassword && otp){
      const response = await UpdatePasswordApi({email:email.email,newPassword, otp})
      if(response.status==200){
        toast.success("Updated Password Successfully")
        navigate ("/")
      }
  }
  } catch (error) {
    console.log(error) 
  }
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Layout>
        <Header />

        <Modal isOpen={isOpen} size={"sm"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb="4">
                <Stack>
                  <FormLabel>Email</FormLabel>
                  <InputGroup>
                    <Input
                      name="email"
                      type="email"
                      value={email.email}
                      onChange={emailHandler}
                    />
                    <InputRightAddon>
                      <Button
                        variant={"none"}
                        minW={"0"}
                        onClick={OtpHandler}
                        padding={"0"}
                      >
                        click
                      </Button>
                    </InputRightAddon>
                  </InputGroup>
                </Stack>
              </FormControl>
              <FormControl mb="4">
                <FormLabel>OTP</FormLabel>
                <Input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </FormControl>
              <FormControl mb="4">
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter display={"flex"} justifyContent={"flex-start"}>
              <Button colorScheme="blue" onClick={updatePawwordHandler} mr={3}>
                Update Password
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default UpdatePasswordModal;
