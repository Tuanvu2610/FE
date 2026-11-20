import FeaturedArticle from "./home/FeaturedArticle.tsx";
import SmallArticleRow from "./home/SmallArticleRow";
import DailyNews from "./DailyNews";
import AdBanner from "./AdBanner";
import {useArticles} from "../hooks/useArticles";
import "../styles/LichNews.css";

function LichNews() {
    const {items, loading, error} = useArticles("trongngay");

    return (
        <section className="lich-news">
            <h2 className="lich-news__title">TIN NỔI BẬT TRONG NGÀY</h2>

            {loading && <p>Đang tải tin...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && items.length > 0 && (
                <div className="lich-news__layout">
                    <div className="lich-news__main">
                        <FeaturedArticle article={items[0]}/>
                        <SmallArticleRow articles={items.slice(1, 7)}/>
                    </div>
                    <aside className="lich-news__side">
                        <DailyNews/>
                        <AdBanner/>
                    </aside>
                </div>
            )}
        </section>
    );
}

export default LichNews;