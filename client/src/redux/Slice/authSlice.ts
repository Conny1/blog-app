import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../types";

type InitialType = {
  authDetails?: AuthType;
};
const initialState: InitialType = {
  authDetails: undefined,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserDetails: (state, { payload }) => {
      state.authDetails = payload;
    },
    logout: (state) => {
      state.authDetails = undefined;
    },
  },
});

export const { getUserDetails, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
