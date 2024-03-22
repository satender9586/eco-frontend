import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./Redux/ProductSlice/ProductRetriveSlice";
import MainHome from "./Components/HomeComponents/MainHome";
import LoginPage from "./Components/AuthPages/LoginPage";
import SignUpPage from "./Components/AuthPages/SignUpPage";
import OtpVerify from "./Components/AuthPages/otpVerify";
import ForgetPassoword from "./Components/AuthPages/ForgetPassoword";
import UpdatePassoword from "./Components/AuthPages/UpdatePassoword";
import AboutProduct from "./Components/Products/AboutProduct";
import CartPage from "./Components/Cart/CartPage";
import PlaceOrderPage from "./Components/PlaceOrder.jsx/PlaceOrderPage";
import Products from "./Components/Products/Products";
import Contact from "./Components/HomeComponents/Contact";
import Dashboard from "./Components/Dashbord/Dashboard";
import Payment from "./Components/Payment/Payment";
import MyOrder from "./Components/PlaceOrder.jsx/MyOrder";


function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.AllProdcuts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  

  return (
    <Routes>
      <Route exact path="/" element={<MainHome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/otp" element={<OtpVerify />} />
      <Route path="/forget" element={<ForgetPassoword />} />
      <Route path="/updatepass" element={<UpdatePassoword />} />
      <Route path="/aboutproduct/:id" element={<AboutProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/placeorder" element={<PlaceOrderPage />} />
      <Route path="/product" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/myorder" element={<MyOrder />} />
    </Routes>
  );
}

export default App;
