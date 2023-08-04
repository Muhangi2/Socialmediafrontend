import express from "express";
import { addpost } from "../controllers/postcontroller.js";

const postrouter = express.Router();

postrouter.get("/add", addpost);
export default postrouter;
