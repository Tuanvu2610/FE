import FeaturedArticle from "./home/FeaturedArticle";
import SmallArticleRow from "./home/SmallArticleRow";
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
                <>
                    <FeaturedArticle article={items[0]}/>
                    <SmallArticleRow articles={items.slice(1, 7)}/>
                </>
            )}
        </section>
    );
}

export default LichNews;