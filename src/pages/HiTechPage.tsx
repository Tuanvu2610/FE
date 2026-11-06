import { useEffect, useState } from "react";
import "../../src/styles/HiTechPage.css";

interface Article {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content: string;
}

interface RssResponse {
    success: boolean;
    total: number;
    data: Article[];
}

function getImage(content: string) {
    const match = content?.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : "";
}

function formatDate(date: string) {
    if (!date) return "";

    return new Date(date).toLocaleDateString("vi-VN");
}

function HiTechPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/thoitrangHitech")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu tin tức");
                }
                return response.json();
            })
            .then((result: RssResponse) => {
                if (!result.success || !Array.isArray(result.data)) {
                    throw new Error("Dữ liệu RSS không hợp lệ");
                }
                setArticles(result.data);
                setError("");
            })
            .catch((err: Error) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) {
        return (
            <div className="fashion-container">
                <p className="fashion-message">Đang tải tin tức...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="fashion-container">
                <p className="fashion-error">{error}</p>
            </div>
        );
    }
    if (articles.length === 0) {
        return (
            <div className="fashion-container">
                <p className="fashion-message">Chưa có bài viết nào.</p>
            </div>
        );
    }
    const featuredArticle = articles[0];
    const sideArticles = articles.slice(1, 4);
    const latestArticles = articles.slice(4);

    return (
        <main className="fashion-container">
            <div className="fashion-breadcrumb">
                <a href="/">Trang chủ</a>
                <span>›</span>
                <strong>Thời trang Hi-tech</strong>
            </div>

            <div className="fashion-heading">
                <h1>THỜI TRANG HI-TECH</h1>
            </div>

            <section className="fashion-layout">
                <div className="fashion-main">
                    <div className="fashion-featured">
                        <article className="fashion-main-article">
                            <a
                                href={featuredArticle.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {getImage(featuredArticle.content) && (
                                    <img
                                        src={getImage(featuredArticle.content)}
                                        alt={featuredArticle.title}
                                    />
                                )}

                                <h2>{featuredArticle.title}</h2>
                            </a>

                            <p>{featuredArticle.description}</p>
                            <span>{formatDate(featuredArticle.pubDate)}</span>
                        </article>

                        <div className="fashion-side-articles">
                            {sideArticles.map((article, index) => (
                                <article key={index}>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {getImage(article.content) && (
                                            <img
                                                src={getImage(article.content)}
                                                alt={article.title}
                                            />
                                        )}

                                        <h3>{article.title}</h3>
                                    </a>
                                    <span>{formatDate(article.pubDate)}</span>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="fashion-section-title">
                        <h2>TIN MỚI NHẤT</h2>
                    </div>

                    <div className="fashion-news-list">
                        {latestArticles.map((article, index) => (
                            <article className="fashion-news-item" key={index}>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {getImage(article.content) && (
                                        <img
                                            src={getImage(article.content)}
                                            alt={article.title}
                                        />
                                    )}
                                </a>

                                <div className="fashion-news-info">
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <h3>{article.title}</h3>
                                    </a>

                                    <p>{article.description}</p>

                                    <span>
                                        {formatDate(article.pubDate)}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <aside className="fashion-sidebar">
                    <div className="fashion-section-title">
                        <h2>ĐỌC NHIỀU</h2>
                    </div>

                    {articles.slice(0, 6).map((article, index) => (
                        <article className="fashion-popular" key={index}>
                            <span>{index + 1}</span>

                            <a
                                href={article.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {article.title}
                            </a>
                        </article>
                    ))}

                    <div className="fashion-ad">
                        <span>QUẢNG CÁO</span>
                    </div>
                </aside>
            </section>
        </main>
    );
}

export default HiTechPage;