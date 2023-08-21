import express from "express";
import { addMessage, getmessage } from "../controllers/message.js";

const messagerouter = express.Router();

messagerouter.post("/", addMessage);
messagerouter.get("/:chatId", getmessage);

export default messagerouter;
