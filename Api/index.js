import express, { response } from "express";
import dotenv from "dotenv";
import "./configs/db.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import PostRouter from "./routes/post.js";
import AuthRouter from "./routes/Auth.js";
import multer from "multer";

dotenv.config();
const port = process.env.SERVER;
const app = express();

// configs
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// file upload to server
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/uploads", upload.single("file"), function (req, resp, next) {
  console.log(req.file.filename);
  resp.status(200).json(req.file.filename);
});
// middleware
app.use("/post", PostRouter);
app.use("/auth", AuthRouter);

app.use((err, req, res, next) => {
  const errstatus = err.status || 500;
  const errmessage = err.message || "Something went wrong";

  console.log(err);
  res.status(errstatus).json({
    success: false,
    status: errstatus,
    errmessage: errmessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log("Connected to back-end");
});
