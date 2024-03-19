import { createSlice } from "@reduxjs/toolkit";


const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return []; 
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return []; 
  }
};

const initialState = loadStateFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item._id === newItem._id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.push({ ...newItem, quantity: 1, totalPrice: newItem.price });
      }
      saveStateToLocalStorage(state); 
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item._id === itemId);
      if (item) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
        saveStateToLocalStorage(state); 
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.find((item) => item._id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice = item.price * item.quantity;
          saveStateToLocalStorage(state); 
        } else {
          state = state.filter((item) => item._id !== itemId);
          saveStateToLocalStorage(state); 
        }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state = state.filter((item) => item._id !== itemId);
      saveStateToLocalStorage(state); 
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
