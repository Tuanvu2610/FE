
import './App.css'
import FeaturedArticle from "./component/home/FeaturedArticle";
import {HeaderComponent} from "./component";
import DailyNews from "./component/DailyNews";
import AdBanner from "./component/AdBanner";
import BackToTop from "./component/BackToTop";

function App() {
    const testArticle = {
        id: 1,
        title: "Tin tức nổi bật trong ngày hôm nay",
        summary: "Đây là nội dung mô tả ngắn của bài báo.",
        thumbnail: "https://picsum.photos/800/450",
        category: "Tin tức",
        hasVideo: true
    };

    return (
        <>
            <HeaderComponent/>

            <main className="home-layout">
                <section className="main-content">
                    <FeaturedArticle article={testArticle}/>
                </section>

                <aside className="right-sidebar">
                    <DailyNews/>
                    <AdBanner/>
                </aside>
            </main>

            <BackToTop/>
        </>
    );
}

export default App;
