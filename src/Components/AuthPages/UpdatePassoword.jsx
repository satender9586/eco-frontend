import React, { useState } from "react";
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
} from "@chakra-ui/react";
import Layout from "../HomeComponents/Layout";
import Header from "../HomeComponents/Header";

const UpdatePasswordModal = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onClose = () => {
    setIsOpen(false);
    setEmail("");
    setOtp("");
    setNewPassword("");
    setMessage("");
    setError("");
  };

  return (
    <>
      <Layout>
        <Header />
        <Button onClick={() => setIsOpen(true)}>Update Password</Button>
        <Modal isOpen={isOpen} size={"sm"} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb="4">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
              <Button colorScheme="blue" mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default UpdatePasswordModal;
