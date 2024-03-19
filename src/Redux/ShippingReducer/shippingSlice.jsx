import { createSlice } from "@reduxjs/toolkit";

const shippingdataSlice = createSlice({
  name: "shippingAddress",
  initialState: {},
  reducers: {
    addAddress: (state, action) => {
      return action.payload;
    },
    removeAddress: (state, action) => {
      return {};
    },
  },
});

export const { addAddress, removeAddress } = shippingdataSlice.actions;

export default shippingdataSlice.reducer;
