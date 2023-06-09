import express from "express";
import dotenv from "dotenv";
import "./configs/db.js"
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import PostRouter from "./routes/post.js";
import AuthRouter from "./routes/Auth.js";

dotenv.config()
const port = process.env.SERVER
const app = express()

// configs
app.use(express.json())
app.use(cors())
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

// middleware
app.use("/post", PostRouter)
app.use("/auth", AuthRouter)


app.use((err,req,res,next)=>{
    const errstatus = err.status || 500
    const errmessage = err.message || "Something went wrong"

    res.status(errstatus).json({
        success: false,
        status: errstatus,
        errmessage: errmessage,
        stack:err.stack
    })
})

app.listen(port, ()=>{
    console.log("Connected to back-end")
} )