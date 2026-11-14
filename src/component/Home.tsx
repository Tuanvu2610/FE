import FeaturedArticle from "./home/FeaturedArticle";
import SmallArticleRow from "./home/SmallArticleRow";
import NewsUpdate from "./home/NewsUpdate";
import MarketNews from "./home/MarketNews";
import AdBanner from "./AdBanner";
import {useArticles} from "../hooks/useArticles";
import "../styles/Home24h.css";

const Home = () => {
    // Lấy dữ liệu từ các chuyên mục của backend
    const {items: hotNews, loading, error} = useArticles("trongngay");
    const {items: footballNews} = useArticles("bongda");
    const {items: businessNews} = useArticles("kinhdoanh");
    const {items: techNews} = useArticles("congnghe");
    const {items: healthy} = useArticles("suckhoedoisong");
    const {items: thitruongtieudung} = useArticles("thitruongTieudung");

    if (loading) return <div className="home-status">Đang tải tin tức 24h...</div>;
    if (error) return <div className="home-status error">{error}</div>;
    if (!hotNews || hotNews.length === 0) return <div className="home-status">Không có bài viết nào.</div>;

    // Tạo danh sách tin cột giữa kết hợp nhiều chuyên mục giống báo 24h
    const middleFeed = [
        {category: "Kinh doanh", article: businessNews?.[0] || hotNews[4]},
        {category: "Tin tức trong ngày", article: hotNews[5]},
        {category: "Bóng đá", article: footballNews?.[0] || hotNews[6]},
        {category: "Công nghệ", article: techNews?.[0] || hotNews[7]},
        {category: "Tin tức trong ngày", article: hotNews[8]},
        {category: "Bóng đá", article: footballNews?.[1] || hotNews[9]},
    ].filter(item => item.article);

    return (
        <div className="page-24h-wrapper">
            {/* TẦNG 1: KHỐI TIN NỔI BẬT 3 CỘT */}
            <section className="hero-3-cols">
                {/* Cột 1: Bài lớn + 3 bài nhỏ */}
                <div className="hero-col-left">
                    <FeaturedArticle article={hotNews[0]}/>
                    <div className="hero-sub-row">
                        <SmallArticleRow articles={hotNews.slice(1, 4)}/>
                    </div>
                </div>

                {/* Cột 2: Danh sách tin theo chuyên mục ở giữa */}
                <div className="hero-col-middle">
                    {middleFeed.map((item, idx) => (
                        <div className="middle-news-item" key={item.article.link || idx}>
                            <span className="cat-tag">{item.category}</span>
                            <a href={item.article.link} className="middle-news-title">
                                {item.article.title}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Cột 3: Banner quảng cáo */}
                <aside className="hero-col-right">
                    <AdBanner/>
                </aside>
            </section>

            {/* TẦNG 2: THÂN TRANG 2 CỘT (CHUYÊN MỤC BÊN TRÁI + TIN ĐỌC NHIỀU BÊN PHẢI) */}
            <section className="body-2-cols">
                <div className="body-left-categories">
                    {/* Box chuyên mục Bóng đá */}
                    {footballNews && footballNews.length > 0 && (
                        <div className="category-box-24h">
                            <div className="box-header-24h">
                                <h2>BÓNG ĐÁ</h2>
                                <div className="sub-links">
                                    <span>Ngoại hạng Anh</span>
                                    <span>Lịch thi đấu</span>
                                    <span>Video bàn thắng</span>
                                </div>
                            </div>
                            <div className="box-content-24h">
                                {footballNews.slice(0, 4).map((art) => (
                                    <NewsUpdate key={art.link} article={art}/>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Box chuyên mục Kinh doanh */}
                    {businessNews && businessNews.length > 0 && (
                        <div className="category-box-24h">
                            <div className="box-header-24h">
                                <h2>KINH DOANH</h2>
                                <div className="sub-links">
                                    <span>Tài chính</span>
                                    <span>Bất động sản</span>
                                    <span>Giá vàng</span>
                                </div>
                            </div>
                            <div className="box-content-24h">
                                {businessNews.slice(0, 4).map((art) => (
                                    <NewsUpdate key={art.link} article={art}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Cột phải: Tin thị trường & Tin mới cập nhật */}
                <aside className="body-right-sidebar">
                    <div className="sidebar-box-24h">
                        <h3 className="sidebar-title-green">TIN TỨC TRONG NGÀY</h3>
                        {hotNews.slice(10, 16).map((art) => (
                            <MarketNews key={art.link} article={art}/>
                        ))}
                    </div>
                </aside>
            </section>
            <section className="cover-news-3">
                <div className="body-left-3">
                    {/* Box chuyên mục sức khỏe */}
                    {healthy && healthy.length > 0 && (
                        <div className="category-box-24h">
                            <div className="box-header-24h">
                                <h2>SỨC KHỎE</h2>
                                <div className="sub-links">
                                    <span>Bệnh tim</span>
                                    <span>Đột quỵ</span>
                                    <span>Ung thư</span>
                                </div>
                            </div>
                            <div className="box-content-24h">
                                {healthy.slice(0, 4).map((art) => (
                                    <NewsUpdate key={art.link} article={art}/>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="body-right-3">
                    {/* Box chuyên mục THỊ TRƯỜNG TIÊU DÙNG*/}
                    {thitruongtieudung && thitruongtieudung.length > 0 && (
                        <div className="category-box-24h">
                            <div className="box-header-24h">
                                <h2>THỊ TRƯỜNG TIÊU DÙNG</h2>
                                <div className="sub-links">
                                    <span>Thị trường 24h</span>
                                </div>
                            </div>
                            <div className="box-content-24h">
                                {thitruongtieudung.slice(0, 4).map((art) => (
                                    <NewsUpdate key={art.link} article={art}/>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
};

export default Home;