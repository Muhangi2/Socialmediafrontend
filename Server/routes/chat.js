import express from "express";
import { createchat, userchats, findchat } from "../controllers/chat.js";

const chatrouter = express.Router();

chatrouter.post("/", createchat);
chatrouter.get("/:userId", userchats);
chatrouter.get("/find/:senderId/:receiverId", findchat);

export default chatrouter;
