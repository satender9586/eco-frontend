import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Layout from "../HomeComponents/Layout";
import { useParams } from "react-router-dom";
import { ShippingApi } from "../../Api/postApi";
import { toast } from "react-toastify";
import { getUserId } from "../../../confitg/function";
import { useSelector } from "react-redux";
import { getuserInfoData } from "../../Api/getApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAddress } from "../../Redux/ShippingReducer/shippingSlice";

const PlaceOrderPage = () => {
  const dispatch = useDispatch()
  const path = useParams();
  const navigate = useNavigate()
  const LoginUserInfo = useSelector((state) => state?.userInfo);
  const isAuthtentication = useSelector((state) => state?.isAuth?.isAuthenticated);

  const [formData, setFormData] = useState({
    name: LoginUserInfo?.name,
    phone: LoginUserInfo?.phone,
    // address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
  });

  const inputFieldChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getUserInfoFun = async () => {
    const id = getUserId();
    try {
      const response = await getuserInfoData(id);
      const { city, state, landmark, pincode } = response?.data?.user?.address;
      setFormData({ city, state, landmark, pincode });
    } catch (error) {
      console.log("Error From userInfo api", error);
    }
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const addObj = {
      userId: getUserId(),
      // phoneNo: formData.phone,
      state: formData?.state,
      // address: formData.address,
      city: formData?.city,
      pincode: formData?.pincode,
      landmark: formData?.landmark,
    }

    if (isAuthtentication) {
      try {
        const response = await ShippingApi(addObj);

        if (response.status === 200) {
          dispatch(addAddress(addObj))
          toast.success("Delivery Address Added");
          navigate("/payment")
        }
      } catch (error) {
        console.error("Error", error.message);
        toast.error(error.message);
      }
    }
  };

  useEffect(() => {
    getUserInfoFun();
  }, []);
  return (
    <Layout>
      <Box p="4" mx="auto" maxW="lg">
        <Heading as="h1" fontSize="2xl" mb="4" textAlign="center">
          Shipping Address
        </Heading>
        <form onSubmit={formSubmitHandler}>
          <Stack spacing="4">
            <Input
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={inputFieldChangeHandler}
              required
            />
            <Input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={inputFieldChangeHandler}
              required
            />
            <Input
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={inputFieldChangeHandler}
              required
            />
            <Input
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={inputFieldChangeHandler}
              required
            />
            <Textarea
              placeholder="Address"
              name="address"
              resize="none"
              value={formData.address}
              onChange={inputFieldChangeHandler}
              required
            />
            <Input
              placeholder="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={inputFieldChangeHandler}
              required
            />
            <Input
              placeholder="Landmark"
              name="landmark"
              value={formData.landmark}
              onChange={inputFieldChangeHandler}
            />
            <Button colorScheme="blue" type="submit" w="100%">
              Proceed Payment
            </Button>
          </Stack>
        </form>
      </Box>
    </Layout>
  );
};

export default PlaceOrderPage;
