import './App.css'
import { HeaderComponent } from "./component";
import DailyNews from "./component/DailyNews";
import AdBanner from "./component/AdBanner";
import BackToTop from "./component/BackToTop";

function App() {
    return (
        <>
            <HeaderComponent />

            <main className="home-layout">
                <section className="main-content"></section>

                <aside className="right-sidebar">
                    <DailyNews />
                    <AdBanner />
                </aside>
            </main>

            <BackToTop />
        </>
    );
}

export default App;
