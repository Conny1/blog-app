import { createSlice } from "@reduxjs/toolkit";
import { AuthType } from "../../types";


const initialState:AuthType ={
    name : null,
    email : null,
    password : null,
    token : null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{}
})



export const authActions = AuthSlice.actions
export default AuthSlice.reducer