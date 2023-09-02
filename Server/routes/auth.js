
import express from "express";
import { registeruser, login } from "../controllers/auth.js";

const router = express.Router();
//routes
router.post("/register", registeruser);
router.post("/login", login);

 
export default router;
