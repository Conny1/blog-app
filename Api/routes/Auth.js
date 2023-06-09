import express from "express";
import { createAccnt, logIn } from "../contrllers/auth.js";

const Router = express.Router()

Router.post("/signup", createAccnt)

Router.post("/login", logIn)


 
export default Router