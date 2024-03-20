import React, { useEffect, useState } from "react";
import NavBar from "../HomeComponents/NavBaar";
import { Box, Button, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { PaymentInitApi} from "../../Api/postApi";
import { isValidAmount } from "../../Validation/validationFuncltion";
import { loadScript } from "../../Validation/validationFuncltion";
import { PaymentConfirm } from "../../Api/postApi";
import { createOrderApi } from "../../Api/postApi";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/CartReducers/CartSlice";
import { useDispatch } from "react-redux";


const Payment = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartData = useSelector((state) => state.cartInfo);
  const isAuth = useSelector((state) => state.isAuth);
  const shippinAddress = useSelector((state) => state.shippinAddress);
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("RazarPay");
 

  console.log(isAuth)


  const PaymentSubmithandler = async (e) => {
     e.preventDefault()
      if(selectPaymentMethod==="RazarPay" && isAuth){
        displayRazorpay()
      }else{
          navigate("/cart")
      }
    };

    const displayRazorpay=async()=>{

      const totalAmmoutn = cartData.reduce((acc, curr)=> {
        return acc+curr.totalPrice
       },0)
        const actualAmmount = Math.floor(totalAmmoutn) 

          
      try{
        const res = await loadScript();
    
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }
    
       
        const response = await PaymentInitApi({amount: actualAmmount})
          if (!response) {
          alert("Server error. Are you online?");
          return;
        }
        const key_id=response.data.RazorPaykey_id;
        const { amount, id: order_id, currency } = response?.data?.data?.Summary

          
        const options = {
          key: key_id,  
          amount: amount.toString(),
          currency: currency,
          name: "Ahirwar Corporation",
          description: "Test Transaction",
          image:"https://res.cloudinary.com/practicaldev/image/fetch/s--CYyAcHOK--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/svo3oqttbs7joyvlfe5b.png",
          order_id: order_id,
          handler: async function (response) {
            const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            };
             try{ 
              const response=await PaymentConfirm(data)
              console.log(response,"payment success")
              
              if(response.status)
              {
                const apiData={ 
                  products:cartData, 
                  paymentId:response?.data.payment?._id,
                  amount:actualAmmount,
                  userId:shippinAddress.userId,
                  shippinAddress:shippinAddress
                }
                const order=await  createOrderApi(apiData)
                console.log(order)

                if(order.status)
                {
                  navigate("/")
                  dispatch(clearCart())
                }
              }
            }catch(error)
            {
              console.log(error)
            }
          },
          prefill: {
            name: "Satender Ahirwar",
            email: "sksatenderkumar59@gmail.com",
            contact: "9810411724",
          },
          notes: {
            address: "Ahirwar Store",
          },
          theme: {
            color: "salmon",
          },
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      }catch(error)
      {
        console.log(error)
      }
    } 






    
  return (
    <Box height={"100vh"}>
      <Box padding={"0 7%"} bg={"blue"} height={"4rem"}>
        <img alt="logo" style={{ height: "100%" }} src={Logo} />
      </Box>
      <Box padding={"5% 7%"}>
        <Box
          width={"100%"}
          height={"100%"}
          borderRadius={"10px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          padding={"1rem"}
        >
          <Text fontSize={"30px"}>Select Payment Method</Text>
          <Divider padding={"0 1rem"}></Divider>
          <form onSubmit={PaymentSubmithandler}>
            <RadioGroup
              display={"flex"}
              flexDir={"column"}
              gap={"2"}
              defaultValue="RazarPay"
              padding={"1rem 0"}
              onChange={setSelectPaymentMethod}
            >
              <Radio value="RazarPay">RazarPay</Radio>
              <Radio value="Cash">Cash On Delivery</Radio>
            </RadioGroup>
            <Button type="submit" variant="solid" colorScheme="blue">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
