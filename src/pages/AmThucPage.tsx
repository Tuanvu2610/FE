import { useEffect, useState } from "react";
import SmallArticle from "../component/home/SmallArticle.tsx";
import FeaturedArticle from "../component/home/FeaturedArticle.tsx";
import SmallArticleRow from "../component/home/SmallArticleRow.tsx";
import MarketNews from "../component/home/MarketNews.tsx";
import NewsUpdate from "../component/home/NewsUpdate.tsx";
import "../styles/TodayPage.css";

interface Article {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content: string;
}

const AmThucPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/amthuc")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu tin ẩm thực");
                }
                return response.json();
            })
            .then((data) => {
                if (!data.success || !Array.isArray(data.data)) {
                    throw new Error("Dữ liệu RSS không hợp lệ");
                }
                setArticles(data.data);
                setError("");
            })
            .catch((err: Error) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className="main-content">
                <div className="today-heading">
                    <div className="fashion-breadcrumb">
                        <a href="/">Trang chủ</a>
                        <span>›</span>
                        <strong>Ẩm thực</strong>
                    </div>

                    <div className="fashion-heading">
                        <h1>ẨM THỰC</h1>
                    </div>
                </div>

                {loading && <p>Đang tải tin ẩm thực...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && articles.length === 0 && (
                    <p>Không có bài viết nào.</p>
                )}

                {!loading && !error && articles.length > 0 && (
                    <div className="new-container">
                        <div className="cover-news-col">
                            {articles.slice(1, 3).map((article) => (
                                <SmallArticle key={article.link} article={article} />
                            ))}
                        </div>
                        <div className="cover-news-feature">
                            <FeaturedArticle article={articles[0]} />
                        </div>
                        <div className="cover-news-col">
                            {articles.slice(4, 6).map((article) => (
                                <SmallArticle key={article.link} article={article} />
                            ))}
                        </div>
                    </div>
                )}

                <div className="nav-banner">
                    <div className="cover-nav-banner">
                        <i className="fa-solid fa-utensils"></i>
                        <p>CÔNG THỨC</p>
                    </div>
                    <div className="cover-nav-banner">
                        <i className="fa-solid fa-store"></i>
                        <p>QUÁN NGON</p>
                    </div>
                    <div className="cover-nav-banner">
                        <i className="fa-solid fa-kitchen-set"></i>
                        <p>MẸO VẶT BẾP</p>
                    </div>
                    <div className="cover-nav-banner">
                        <i className="fa-solid fa-book-open"></i>
                        <p>THỰC ĐƠN MỖI NGÀY</p>
                    </div>
                </div>

                <div className="cover-news">
                    <div className="cover-news-left">
                        <h3>NHIỀU NGƯỜI ĐỌC</h3>
                        <div>
                            <SmallArticleRow articles={articles} />
                        </div>
                        <div>
                            <h3>TIN ẨM THỰC MỚI CẬP NHẬT</h3>
                            {articles.slice(13, 18).map((article) => (
                                <NewsUpdate key={article.link} article={article} />
                            ))}
                        </div>
                    </div>
                    <div className="cover-news-right">
                        <button className="style-btn">
                            <i className="fa-solid fa-paper-plane"></i> Gửi góp ý
                        </button>
                        <h3 style={{ color: "#518f02" }}>GÓC ẨM THỰC</h3>
                        <div>
                            {articles.slice(7, 12).map((article) => (
                                <MarketNews key={article.link} article={article} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AmThucPage;