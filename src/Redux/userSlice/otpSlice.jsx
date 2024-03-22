import { createSlice } from "@reduxjs/toolkit";


const otpVerfy =  createSlice({
    name:"otp",
    initialState:{email:""},

    reducers:{
        addEmail : (state, action)=>{
            state.email = action.payload
        },
        removeEmail : ()=>{
            state.email = ""
        }
    }   

})

export const {addEmail, removeEmail} = otpVerfy.actions;
export default otpVerfy.reducer