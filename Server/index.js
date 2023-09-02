import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authrouter from "./routes/auth.js";
import userrouter from "./routes/usercontroller.js";
import postrouter from "./routes/postrouter.js";
import messagerouter from "./routes/message.js";
import chatrouter from "./routes/chat.js";
import cors from "cors";
import uploadrouter from "./routes/Uploadfile.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

// app.use(express.static("public"));
app.use(express.static("public"));
app.use("/images", express.static("images"));

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`listening to ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

app.use("/auth", authrouter);
app.use("/user", userrouter);
app.use("/post", postrouter);
app.use("/chat", chatrouter);
app.use("/message", messagerouter);
app.use("/file", uploadrouter);
