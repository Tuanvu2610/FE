import './App.css'
import ArticleCard from "./component/home/ArticleCard";
import {HeaderComponent} from "./component";
import DailyNews from "./component/DailyNews";

function App() {
    //test
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
                </section>
                <section className="main-content">
                    <ArticleCard article={testArticle}/>
                </section>
                <aside className="right-sidebar">
                    <DailyNews/>
                </aside>
            </main>
        </>
    );
}

export default App;
