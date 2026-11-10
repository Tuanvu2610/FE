import './App.css'
import FeaturedArticle from "./component/home/FeaturedArticle";
import ArticleDetail from "./component/home/ArticleDetail";
import DailyNews from "./component/DailyNews";
import AdBanner from "./component/AdBanner";
import BackToTop from "./component/BackToTop";
import {FooterComponet, HeaderComponent} from "./component";
import {Routes, Route} from "react-router-dom";
import AsianCupPage from "./pages/AsianCupPage";
import CrimePage from "./pages/CrimePage";
import FashionPage from "./pages/FashionPage";
import HiTechPage from "./pages/HiTechPage";
import FinancePage from "./pages/FinancePage";
import TodayPage from "./pages/TodayPage.tsx";
import AmThucPage from "./pages/AmThucPage";
import GiaoDucPage from "./pages/GiaoDucPage";
import BanTreCuocSongPage from "./pages/BanTreCuocSongPage.tsx";

function HomePage() {
    const testArticle = {
        title: "Tin tức nổi bật trong ngày hôm nay",
        link: "#",
        description: "Đây là nội dung mô tả ngắn của bài báo.",
        pubDate: "2026-11-10",
        content: '<img src="https://picsum.photos/800/450" />',
        hasVideo: true,
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
            <main className="home-layout">
                <section className="main-content">
                    <FeaturedArticle article={testArticle}/>
                </section>

                <aside className="right-sidebar">
                    <DailyNews/>
                    <AdBanner/>
                </aside>
            </main>

            <ArticleDetail article={testArticleDetail}/>
        </>
    );
}

function App() {
    return (
        <>
            <HeaderComponent/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/asian-cup" element={<AsianCupPage/>}/>
                <Route path="/an-ninh-hinh-su" element={<CrimePage/>}/>
                <Route path="/thoi-trang" element={<FashionPage/>}/>
                <Route path="/thoi-trang-hi-tech" element={<HiTechPage/>}/>
                <Route path="/tai-chinh-bat-dong-san" element={<FinancePage/>}/>
                <Route path="/trong-ngay" element={<TodayPage/>}/>
                <Route path="/am-thuc" element={<AmThucPage/>}/>
                <Route path="/giao-duc-du-hoc" element={<GiaoDucPage/>}/>
                <Route path="/ban-tre-cuoc-song" element={<BanTreCuocSongPage/>}/>
            </Routes>

            <BackToTop/>
            <FooterComponet/>
        </>
    );
}

export default App;