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
import shipping from "../../assets/shipping.png";

const PlaceOrderPage = () => {
  const dispatch = useDispatch();
  const path = useParams();
  const navigate = useNavigate();
  const LoginUserInfo = useSelector((state) => state?.userInfo);
  const isAuthtentication = useSelector(
    (state) => state?.isAuth?.isAuthenticated
  );

  const [formData, setFormData] = useState({
    name: LoginUserInfo?.name,
    phone: LoginUserInfo?.phone,
    address: "",
    city: "",
    state: "",
    pincode: "",
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
      phoneNo: formData.phone,
      state: formData?.state,
      address: formData.address,
      city: formData?.city,
      pincode: formData?.pincode,
    };

    if (isAuthtentication) {
      try {
        const response = await ShippingApi(addObj);

        if (response.status === 200) {
          dispatch(addAddress(addObj));
          toast.success("Delivery Address Added");
          navigate("/payment");
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
      <Box
        display={"grid"}
        height={"100vh"}
        gridTemplateColumns={"repeat(2,1fr)"}
        padding={"3% 5%"}
      >
        <Box>
          <img style={{ height: "500px", width: "100%" }} src={shipping} />
        </Box>
        <Box borderWidth="1px" borderRadius="lg" boxShadow="lg">
          <Box>
            <Text fontSize={"40px"} textAlign={"center"}>
              Shipping Address
            </Text>
            <form onSubmit={formSubmitHandler}>
              <Stack spacing="3" mt={"1rem"} paddingX={"5rem"}>
                <Input
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={inputFieldChangeHandler}
                  required
                />
                <Input
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={inputFieldChangeHandler}
                  required
                />
                <Input
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={inputFieldChangeHandler}
                  required
                />
                <Input
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={inputFieldChangeHandler}
                  required
                />
                <Textarea
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="Address"
                  name="address"
                  resize="none"
                  value={formData.address}
                  onChange={inputFieldChangeHandler}
                  required
                />
                <Input
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  height={"2.8rem"}
                  fontSize={"18px"}
                  _focusVisible={"none"}
                  placeholder="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={inputFieldChangeHandler}
                  required
                />

                <Button
                  borderRadius={"3px"}
                  border={"1px solid #DADCE0"}
                  colorScheme="blue"
                  fontSize={"20px"}
                  type="submit"
                  w="100%"
                >
                  Proceed Payment
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default PlaceOrderPage;
