import { GoogleGenerativeAI } from "@google/generative-ai";
import Expense from "../models/Expense.js";
import User from "../models/User.js";
import Asset from "../models/Asset.js";
import Liability from "../models/Liability.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const chatWithBot = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ message: "Message is required" });
        }

        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ message: "GEMINI_API_KEY is not configured in environment variables." });
        }

        // Fetch family members to scope expenses
        const familyMembers = await User.find({ familyId: req.user.familyId }).select('_id name');
        const familyUserIds = familyMembers.map(m => m._id);

        // Map userId to name for better context
        const userMap = {};
        familyMembers.forEach(m => {
            userMap[m._id.toString()] = m.name;
        });

        // Fetch expenses belonging to the family
        const expenses = await Expense.find({ user: { $in: familyUserIds } }).sort({ date: -1 });

        // Fetch assets and liabilities belonging to the family
        const assets = await Asset.find({ user: { $in: familyUserIds } });
        const liabilities = await Liability.find({ user: { $in: familyUserIds } });

        // Format expenses for the prompt
        let expenseContext = "Here is the recent spending history for the user's family:\n";
        if (expenses.length === 0) {
            expenseContext += "No expenses recorded yet.\n";
        } else {
            expenseContext += expenses.map(e => {
                const dateStr = new Date(e.date).toLocaleDateString() + " " + new Date(e.date).toLocaleTimeString();
                const userName = userMap[e.user.toString()] || "Unknown User";
                return `- ${dateStr} | ${userName} spent ₹${e.amount} on ${e.category}. Description: ${e.description ? e.description : "None"}`;
            }).join("\n");
        }

        // Format assets and liabilities for the prompt
        let netWorthContext = "\nHere is the family's current Asset and Liability data:\n";
        if (assets.length === 0 && liabilities.length === 0) {
            netWorthContext += "No assets or liabilities recorded yet.\n";
        } else {
            netWorthContext += "Assets:\n";
            if (assets.length === 0) {
                netWorthContext += "- None\n";
            } else {
                assets.forEach(a => {
                    const userName = userMap[a.user.toString()] || "Unknown User";
                    netWorthContext += `- ${a.name} (${a.type}): ₹${a.currentValue} (Owned by ${userName})\n`;
                });
            }

            netWorthContext += "\nLiabilities:\n";
            if (liabilities.length === 0) {
                netWorthContext += "- None\n";
            } else {
                liabilities.forEach(l => {
                    const userName = userMap[l.user.toString()] || "Unknown User";
                    netWorthContext += `- ${l.name} (${l.type}): ₹${l.amount} (Owned by ${userName})\n`;
                });
            }
        }

        const systemPrompt = `You are a helpful, professional, and friendly financial assistant chatbot.
You are chatting with a user who wants insights on their spending, assets, liabilities, and overall net worth. Use the context below to answer their questions accurately. Give concise and insightful answers. You can calculate their total net worth by subtracting the sum of liabilities from the sum of assets.

Context Data:
${expenseContext}
${netWorthContext}

User Query: ${message}`;

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const result = await model.generateContent(systemPrompt);
        const responseText = result.response.text();

        res.status(200).json({ reply: responseText });
    } catch (error) {
        console.error("Error in chatWithBot:", error);
        res.status(500).json({ message: "Failed to generate a response from the chatbot." });
    }
};
