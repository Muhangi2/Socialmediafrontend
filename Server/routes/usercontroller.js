import express from "express";

//lets import controllers

import {
  deleteuser,
  followuser,
  getuser,
  unfollowuser,
  updateuser,
} from "../controllers/usercontroller.js";

const userrouter = express.Router();

userrouter.get("/:id", getuser);
userrouter.put("/:id", updateuser);
userrouter.delete("/:id", deleteuser);
userrouter.put("/:id/follow", followuser);
userrouter.put("/:id/unfollow", unfollowuser);

export default userrouter;
