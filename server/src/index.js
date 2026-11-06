import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getNews } from "../services/rssService.js";
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_ORIGIN
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "RSS Server is running!"
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
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
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});