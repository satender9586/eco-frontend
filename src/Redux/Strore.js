import { configureStore } from "@reduxjs/toolkit"
import userInfoSlice from "./userSlice/userInfoSlice"
import ProductRetriveSlice from "./ProductSlice/ProductRetriveSlice"
import CartSlice from "./CartReducers/CartSlice"
import authSlice from "./userSlice/authSlice"
import shippingSlice from "./ShippingReducer/shippingSlice"




export const Store = configureStore({
    reducer:{
        userInfo:userInfoSlice,
        AllProdcuts:ProductRetriveSlice,
        cartInfo : CartSlice,
        isAuth: authSlice,
        shippinAddress : shippingSlice,
      
    }
})