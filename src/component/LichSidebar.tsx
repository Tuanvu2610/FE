import AdBanner from "./AdBanner";
import DailyNews from "./DailyNews";
import MarketNews from "./home/MarketNews";
import {useArticles} from "../hooks/useArticles";
import "../styles/LichSidebar.css";

function LichSidebar() {
    const {items} = useArticles("thitruongTieudung");

    return (
        <aside className="lich-sidebar">
            <AdBanner/>

            {items.length > 0 && (
                <section>
                    <h3 className="lich-sidebar__title">TIN TỨC THỊ TRƯỜNG</h3>
                    {items.slice(0, 5).map((a) => (
                        <MarketNews key={a.link} article={a}/>
                    ))}
                </section>
            )}

            <DailyNews/>
        </aside>
    );
}

export default LichSidebar;