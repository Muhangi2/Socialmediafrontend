import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import nodemon from "nodemon";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose
  .connect(
    "mongodb+srv://seconddatabse:Reset@password16@cluster0.dyyxrc5.mongodb.net/seconddatabse?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => app.listen(5000, () => console.log("listening")));
