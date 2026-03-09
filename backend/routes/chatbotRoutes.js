import express from "express";
import { chatWithBot } from "../controllers/chatbotController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, chatWithBot);

export default router;
