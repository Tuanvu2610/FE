import { useSearchParams } from "react-router-dom";
import {useArticles} from "../hooks/useArticles.tsx";
import NewsUpdate from "../component/home/NewsUpdate.tsx";
import "../styles/SearchPage.css"

const SearchPage = () => {
    const {items: listNews, loading, error} = useArticles("oto");
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("q") || "";

    return (
        <div className="search-page">
            <h2>Kết quả tìm kiếm: {keyword}</h2>
            <p>Tìm thấy {listNews.length} bài viết</p>
            {loading && <p>Đang tải tin...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && listNews.length === 0 && <p>Không tìm thấy bài viết phù hợp.</p>}

            {!loading && !error && listNews.length > 0 && (
                <div className="search-list">
                    {listNews.map((item, index) => (
                        <NewsUpdate key={index} article={item}/>
                    ))}
                </div>
                )}
        </div>
    );
};

export default SearchPage;
