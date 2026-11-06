import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getNews } from "../services/rssService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174"
    ]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "RSS Server is running!"
    });
});

app.get("/api/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const news = await getNews(category);

        res.json({
            success: true,
            total: news.length,
            data: news
        });

    } catch (error) {
        console.error("RSS ERROR:", error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`RSS Server running at http://localhost:${PORT}`);
});