import type {Article} from "./home/ArticleCard";
import CnttImg from "./CnttImg";

function CnttHero({article}: { article: Article }) {
    return (
        <a className="cntt-hero" href={article.link} target="_blank" rel="noreferrer">
            <CnttImg content={article.content} alt={article.title} className="cntt-hero__img"/>
            <h2 className="cntt-hero__title">{article.title}</h2>
        </a>
    );
}

export default CnttHero;