import express from "express";
import {
  addpost,
  getpost,
  updatepost,
  deletepost,
  likingpost,
} from "../controllers/postcontroller.js";

const postrouter = express.Router();

postrouter.post("/addpost", addpost);
postrouter.get("/:id/getpost", getpost);
postrouter.put("/:id/updatepost", updatepost);
postrouter.delete("/:id/deletepost", deletepost);
postrouter.put("/:id/liking", likingpost);
// postrouter.put("/:id/unliking", likingpost);
export default postrouter;
