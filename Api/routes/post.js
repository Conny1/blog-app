import express from "express";
import {
  createpost,
  deletePost,
  getAllpost,
  getonepost,
  suggestPost,
  updatePost,
} from "../contrllers/posts.js";
import { VerifyUser } from "../configs/verifyTokens.js";

const Router = express.Router();

Router.post("/addpost/:userid", VerifyUser, createpost);

Router.put("/updatepost/:userid/:postid", VerifyUser, updatePost);

Router.get("/getall", getAllpost);

Router.get("/getone/:postid", getonepost);

Router.delete("/deletepost/:userid/:postid", VerifyUser, deletePost);

// suggested category
Router.get("/suggest/:category", suggestPost);

export default Router;
