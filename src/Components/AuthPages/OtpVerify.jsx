import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  Text,
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
import { OtpverifyApi } from "../../Api/postApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeEmail } from "../../Redux/userSlice/otpSlice";
import { useNavigate } from "react-router-dom";
import { ResendotpApi } from "../../Api/postApi";


const OtpVerify = () => {
  const [formData, setFormData] = useState({ otp: "" });
  const [isOpen, setIsOpen] = useState(false);
  const reduxData = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [timeOut, setTimeOut] = useState(90);
  const [isResend, setIsResend] = useState(false);
  

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );

    if (!isAnyFieldEmpty) {
      try {
        const data = {
          email: reduxData?.otp?.email,
          otp: formData.otp,
        };
        const response = await OtpverifyApi(data);
        if (response.status === 200) {
          navigate("/");
          toast.success("OTP Verified");
          dispatch(removeEmail());
          
        }
      } catch (error) {
        console.log("Error:", error.message);
       
      }
    } else {
      console.log(
        "Form has errors or some fields are empty. API call not made."
      );
    }
  };

  // Timer component
  const timerfun = () => {
    const interval = setInterval(() => {
      setTimeOut((prevState) => {
        if (prevState <= 1) {
          clearInterval(interval);
          setIsResend(false);
          return 0;
        } else {
          return prevState - 1;
        }
      });
      return () => clearInterval(interval);
    }, 1000);
  };

  useEffect(() => {
    timerfun();


  }, [timeOut === 0 && isResend]);

  const ResendHandler = async () => {
    try {
      const response = await ResendotpApi({ email: reduxData?.otp?.email });
      if (response.status === 200) {
        setTimeOut(90);
        setIsResend(true);
        timerfun(); // Call the timer function again to reset the timer
      }
    } catch (error) {
      console.error("Error while resending OTP:", error);
      toast.error("Error while resending OTP");
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
                  name="otp"
                  value={formData.otp}
                  onChange={changeHandler}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter display="flex" justifyContent="space-between">
              <Text fontSize={"16px"}>
                OTP will expire within {timeOut} seconds
              </Text>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Verify
              </Button>
              {timeOut === 0 && (
                <Button colorScheme="blue" mr={3} onClick={ResendHandler}>
                  Resend
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Layout>
    </>
  );
};

export default OtpVerify;
