import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, Text, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Layout from '../HomeComponents/Layout';
import Header from '../HomeComponents/Header';
import { OtpverifyApi } from '../../Api/postApi';
import { toast } from "react-toastify";

const OtpVerify = () => {
  const [formData, setFormData] = useState({ otp: "" });
  const [isOpen, setIsOpen] = useState(false);
  

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const isAnyFieldEmpty = Object.values(formData).some(value => value === "");
  
    if (!isAnyFieldEmpty) {
      try {
        const data = {
          email: "sksatenderkumar59@gmail.com",
          otp: formData.otp,
        };
        const response = await OtpverifyApi(data);
        if(response.status===200){
          toast.success("OTP Verified")
        }    
      } catch (error) {
        console.log("Error:", error.message);
        toast.error("Invalid OTP")
      }
    } else {
      console.log("Form has errors or some fields are empty. API call not made.");
    }
  };
  
 

  return (
    <>
      <Layout>
        <Header />
        <Button onClick={() => setIsOpen(true)}>Open OTP Modal</Button>
        <Modal isOpen={true} onClose={() => setIsOpen(false)} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>OTP Verification</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl mb="4">
                <FormLabel>Enter OTP</FormLabel>
                <Input
                  type="text"
                  name='otp'
                  value={formData.otp}
                  onChange={changeHandler}
                />   
              </FormControl>
            </ModalBody>
            <ModalFooter display="flex" justifyContent="space-between">
              <Text>OTP will expire with in 180</Text>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Verify
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default OtpVerify;
