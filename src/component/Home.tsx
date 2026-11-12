import { useEffect, useState } from "react";
import ArticleCard, { type Article } from "./home/ArticleCard.tsx";

const Home = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/trongngay");
                const result = await response.json();

                if (result.success) {
                    setNews(result.data);
                } else {
                    setError(result.message || "Không tải được tin tức");
                }
            } catch (err) {
                setError("Lỗi kết nối tới server (kiểm tra đã bật server cổng 4000 chưa)");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) return <div style={{ padding: "20px" }}>Đang tải tin tức...</div>;
    if (error) return <div style={{ padding: "20px", color: "red" }}>{error}</div>;

    return (
        <div className="home-container">
            {news.map((item, index) => (
                <ArticleCard key={item.link || index} article={item} />
            ))}
        </div>
    );
};

export default Home;