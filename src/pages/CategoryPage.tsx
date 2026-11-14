import {Link} from "react-router-dom";
import SmallArticle from "../component/home/SmallArticle.tsx";
import FeaturedArticle from "../component/home/FeaturedArticle.tsx";
import SmallArticleRow from "../component/home/SmallArticleRow.tsx";
import MarketNews from "../component/home/MarketNews.tsx";
import NewsUpdate from "../component/home/NewsUpdate.tsx";
import {useArticles} from "../hooks/useArticles";
import "../styles/PageHeading.css";
import "../styles/TodayPage.css";
import {useState} from "react";

interface NavItem {
    icon: string;
    label: string;
}

interface CategoryPageProps {
    title: string;
    source: string;
    navItems?: NavItem[];
    sideTitle: string;
    updateTitle: string;
}

function CategoryPage({title, source, navItems = [], sideTitle, updateTitle}: CategoryPageProps) {
    const {items: articles, loading, error} = useArticles(source);
    const [showAll, setShowAll] = useState(false);
    return (
        <div className="main-content">
            <div className="today-heading">
                <div className="fashion-breadcrumb">
                    <Link to="/">Trang chủ</Link>
                    <span>›</span>
                    <strong>{title}</strong>
                </div>

                <div className="fashion-heading">
                    <h1>{title}</h1>
                </div>
            </div>

            {loading && <p>Đang tải tin...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && articles.length === 0 && <p>Không có bài viết nào.</p>}

            {!loading && !error && articles.length > 0 && (
                <>
                    <div className="new-container">
                        <div className="cover-news-col">
                            {articles.slice(1, 3).map((a) => (
                                <SmallArticle key={a.link} article={a}/>
                            ))}
                        </div>
                        <div className="cover-news-feature">
                            <FeaturedArticle article={articles[0]}/>
                        </div>
                        <div className="cover-news-col">
                            {articles.slice(3, 5).map((a) => (
                                <SmallArticle key={a.link} article={a}/>
                            ))}
                        </div>
                    </div>
                    {navItems?.length > 0 && (
                        <div className="nav-banner">
                            {navItems.map((item) => (
                                <div className="cover-nav-banner" key={item.label}>
                                    <i className={`fa-solid ${item.icon}`}></i>
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="cover-news">
                        <div className="cover-news-left">
                            <h3>NHIỀU NGƯỜI ĐỌC</h3>
                            <div>
                                <SmallArticleRow articles={articles.slice(5, 14)}/>
                            </div>
                            <div>
                                <h3>{updateTitle}</h3>
                                {articles.slice(15, showAll ? 24 : 20).map((a) => (
                                    <NewsUpdate key={a.link} article={a}/>
                                ))}
                                <button className="btn-show" onClick={() => setShowAll(!showAll)}>
                                    {showAll ? "- Ẩn bớt tin tức" : "+ Xem thêm tin mới"}
                                </button>
                            </div>
                        </div>
                        <div className="cover-news-right">
                            <button className="style-btn">
                                <i className="fa-solid fa-paper-plane"></i> Gửi góp ý
                            </button>
                            <h3 style={{color: "#518f02"}}>{sideTitle}</h3>
                            <div>
                                {articles.slice(9, 15).map((a) => (
                                    <MarketNews key={a.link} article={a}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CategoryPage;