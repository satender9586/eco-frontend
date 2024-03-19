import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
        clearUser: (state) => {
            return null;
        }
    }
});

export const { setUser, clearUser } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
