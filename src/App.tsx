import './App.css'
import FeaturedArticle from "./component/home/FeaturedArticle";
import ArticleDetail from "./component/home/ArticleDetail";
import {HeaderComponent} from "./component";
import DailyNews from "./component/DailyNews";
import AdBanner from "./component/AdBanner";
import BackToTop from "./component/BackToTop";
import SmallArticleRow from "./component/home/SmallArticleRow";
import FooterComponet from "./component/FooterComponet.tsx";

function App() {
    const smallArticles = [
        {
            id: 2,
            title: "Video bóng đá Hà Nội - Ninh Bình: Những pha bóng đáng chú ý",
            summary: "",
            thumbnail: "https://picsum.photos/seed/news1/400/250",
            category: "Bóng đá",
            hasVideo: true
        },
        {
            id: 3,
            title: "Video bóng đá Thanh Hóa - Hà Tĩnh: Trận đấu hấp dẫn",
            summary: "",
            thumbnail: "https://picsum.photos/seed/news2/400/250",
            category: "Bóng đá",
            hasVideo: true
        },
        {
            id: 4,
            title: "Giới chủ MU nói chuyện về kế hoạch phát triển đội bóng",
            summary: "",
            thumbnail: "https://picsum.photos/seed/news3/400/250",
            category: "Thể thao",
            hasVideo: false
        }
    ];
    const testArticle = {
        id: 1,
        title: "Tin tức nổi bật trong ngày hôm nay",
        summary: "Đây là nội dung mô tả ngắn của bài báo.",
        thumbnail: "https://picsum.photos/800/450",
        category: "Tin tức",
        hasVideo: true
    };
    const testArticleDetail = {
        title: "Công nghệ trí tuệ nhân tạo đang thay đổi cuộc sống như thế nào?",
        author: "Nguyễn Văn A",
        date: "31/10/2026",
        image: "https://picsum.photos/1200/600",
        category: "Công nghệ",
        content: [
            "Trí tuệ nhân tạo đang ngày càng phát triển và được ứng dụng trong nhiều lĩnh vực của đời sống.",
            "Từ giáo dục, y tế cho đến sản xuất, các hệ thống AI đang hỗ trợ con người xử lý công việc nhanh chóng và hiệu quả hơn.",
            "Trong tương lai, công nghệ này được kỳ vọng sẽ tiếp tục tạo ra nhiều thay đổi quan trọng."
        ]
    };

    return (
        <>
            <HeaderComponent/>

            <main className="home-layout">
                <section className="main-content">
                    <FeaturedArticle article={testArticle}/>
                </section>
                <section className="main-content">
                    <FeaturedArticle article={testArticle}/>
                    <SmallArticleRow articles={smallArticles}/>
                </section>
                <aside className="right-sidebar">
                    <DailyNews/>
                    <AdBanner/>
                </aside>
            </main>

            <ArticleDetail article={testArticleDetail}/>

            <BackToTop/>

            <FooterComponet/>

        </>
    );
}

export default App;
