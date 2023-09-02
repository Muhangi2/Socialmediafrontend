import express from "express";

//lets import controllers

import {
  deleteuser,
  followuser,
  getallusers,
  getuser,
  unfollowuser,
  updateuser,
} from "../controllers/usercontroller.js";
import authmiddleware from "../middleware/authMiddleware.js";

const userrouter = express.Router();

userrouter.get("/:id", getuser);
userrouter.get("/", getallusers);
userrouter.put("/:id/update", authmiddleware, updateuser);
userrouter.delete("/:id", authmiddleware, deleteuser);
userrouter.put("/:id/follow", authmiddleware, followuser);
userrouter.put("/:id/unfollow", authmiddleware, unfollowuser);

export default userrouter;
