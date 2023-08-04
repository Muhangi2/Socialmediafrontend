import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authrouter from "./routes/auth.js";
import userrouter from "./routes/usercontroller.js";
import postrouter from "./routes/postrouter.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

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
