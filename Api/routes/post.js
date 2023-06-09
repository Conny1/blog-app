import express from "express";
import { createpost, deletePost, getAllpost, getonepost, suggestPost, updatePost } from "../contrllers/posts.js";

const Router = express.Router()

Router.post("/addpost", createpost )

Router.put("/updatepost/:userid/:postid", updatePost )

Router.get("/getall", getAllpost )

Router.get("/getone/:postid", getonepost )

Router.delete("/deletepost/:userid/:postid", deletePost )

// suggested category
Router.get("/suggest/:category", suggestPost)



export default Router  