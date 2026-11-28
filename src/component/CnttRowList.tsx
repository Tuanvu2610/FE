import type {Article} from "./home/ArticleCard";
import CnttImg from "./CnttImg";

function CnttRowList({articles}: { articles: Article[] }) {
    return (
        <div>
            {articles.map((a) => (
                <a key={a.link} className="cntt-row" href={a.link} target="_blank" rel="noreferrer">
                    <CnttImg content={a.content} alt={a.title} className="cntt-row__img"/>
                    <div>
                        <h3 className="cntt-row__title">{a.title}</h3>
                        <p className="cntt-row__desc">{a.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default CnttRowList;