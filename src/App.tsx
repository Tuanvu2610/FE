
import './App.css'
import { HeaderComponent } from "./component";
import DailyNews from "./component/DailyNews";

function App() {
    return (
        <>
            <HeaderComponent />

            <main className="home-layout">
                <section className="main-content">
                </section>

                <aside className="right-sidebar">
                    <DailyNews />
                </aside>
            </main>
        </>
    );
}

export default App;
