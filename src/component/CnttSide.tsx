import AdBanner from "./AdBanner";
import type {Article} from "./home/ArticleCard";
import {useArticles} from "./../hooks/useArticles";
import CnttImg from "./CnttImg";

function MiniItem({article}: { article: Article }) {
    return (
        <a className="cntt-mini" href={article.link} target="_blank" rel="noreferrer">
            <CnttImg content={article.content} alt={article.title} className="cntt-mini__img"/>
            <span className="cntt-mini__title">{article.title}</span>
        </a>
    );
}

interface CnttSideProps {
    top: Article[];      // 4 bài nhỏ trên cùng
    explore: Article[];  // khối KHÁM PHÁ CÔNG NGHỆ
}

function CnttSide({top, explore}: CnttSideProps) {
    const {items: hitech} = useArticles("thoitrangHitech");

    return (
        <aside className="cntt-side">
            {top.map((a) => (
                <MiniItem key={a.link} article={a}/>
            ))}

            <button type="button" className="cntt-feedback">
                <i className="fa-solid fa-paper-plane"></i> Gửi góp ý
            </button>

            <AdBanner/>

            {explore.length > 0 && (
                <section>
                    <h3 className="cntt-side__title">KHÁM PHÁ CÔNG NGHỆ</h3>
                    {explore.map((a) => (
                        <MiniItem key={a.link} article={a}/>
                    ))}
                </section>
            )}

            {hitech.length > 0 && (
                <section>
                    <h3 className="cntt-side__title cntt-side__title--plain">HI-TECH</h3>
                    {hitech.slice(0, 4).map((a) => (
                        <MiniItem key={a.link} article={a}/>
                    ))}
                </section>
            )}
        </aside>
    );
}

export default CnttSide;