import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../confitg/function";
import { TokenVerifyApi } from "../Api/postApi";
import {login ,logout} from "../../src/Redux/userSlice/authSlice"
import { useDispatch } from "react-redux";
import {setUser, clearUser} from "../Redux/userSlice/userInfoSlice"

export const USERPROTECTEDROUTES = Object.freeze({
  CART: "/cart",
});

export const USERROUTEOBJ = Object.freeze({
  LANDING: "/",
});


const isBrowser = () => typeof window !== "undefined";

export const PUBLICROUTES = Object.freeze({
  LANDING: "/",
  LOGIN: "/login",
  OTP: "/otp",
  SIGN_UP: "/signup",
  FORGET: "/forget",
});

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const token =  getToken();

     console.log("tolen",token)
    


    const userProtectedRoutefun = ()=>{
        let myRoutes = [
            USERPROTECTEDROUTES.CART,        
          ];

          const currentLocation = location.pathname;
          const PathNotFound = myRoutes.indexOf(currentLocation === -1)

          if(isBrowser() && PathNotFound){
            navigate(USERROUTEOBJ.LANDING)
          }
    }
    const userUnProtectedRoutefun = ()=>{
        let myRoutes = [
            USERPROTECTEDROUTES.LANDING,
            USERPROTECTEDROUTES.LOGIN,
            USERPROTECTEDROUTES.SIGN_UP,
            USERPROTECTEDROUTES.FORGET,
            USERPROTECTEDROUTES.OTP,
          ];

          const currentLocation = location.pathname;
          const PathNotFound = myRoutes.indexOf(currentLocation === -1)

          if(isBrowser() && PathNotFound){
            navigate(USERROUTEOBJ.LANDING)
          }
    }
    const publicRoutefun = ()=>{
        let myRoutes = [
            PUBLICROUTES.LANDING,
            PUBLICROUTES.LOGIN,
            PUBLICROUTES.SIGN_UP,
            PUBLICROUTES.FORGET,
            PUBLICROUTES.OTP,
          ];

          const currentLocation = location.pathname;
          const PathNotFound = myRoutes.indexOf(currentLocation === -1)

          if(isBrowser() && PathNotFound){
            navigate(USERROUTEOBJ.LANDING)
          }
    }

   const fetchUser = async ()=>{
        if(token){
          dispatch(login())
          const userInfo = await TokenVerifyApi()
          dispatch(setUser({...userInfo?.data?.user}))
            console.log("tokenverify",await TokenVerifyApi())
           
           
            userProtectedRoutefun()
        }else{
            userUnProtectedRoutefun()
            publicRoutefun();
            dispatch(logout())
            dispatch(clearUser())
            // setIsLoading(true)
        }
   }

   useEffect(()=>{
        fetchUser()
   },[isLoading])

   if(isLoading){
    return null
   }else{
    return children;
   }
  
};

export default ProtectedRoute;
