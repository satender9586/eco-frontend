import React, { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Layout from '../HomeComponents/Layout';
import Header from '../HomeComponents/Header';

const ForgetPasswordModal = () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
 
 

  const onClose = () => {
    setIsOpen(false);
    setEmail('');
    setMessage('');
    setError('');
  };

  return (
    <>
        <Layout>
            <Header/>
            <Button onClick={() => setIsOpen(true)}>Forgot Password?</Button>
      <Modal isOpen={isOpen} size={"sm"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Forget Password</ModalHeader>
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
          
          </ModalBody>
          <ModalFooter display={"flex"} justifyContent={"flex-start"}>
            <Button colorScheme="blue" mr={3} >
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

export default ForgetPasswordModal;
