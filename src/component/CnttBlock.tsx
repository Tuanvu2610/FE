import type {Article} from "./home/ArticleCard";
import CnttImg from "./CnttImg";

interface CnttBlockProps {
    title: string;
    articles: Article[];
}

function CnttBlock({title, articles}: CnttBlockProps) {
    if (articles.length === 0) return null;
    const [first, ...rest] = articles;

    return (
        <section className="cntt-block">
            <h3 className="cntt-block__title">{title}</h3>
            <a className="cntt-block__lead" href={first.link} target="_blank" rel="noreferrer">
                <CnttImg content={first.content} alt={first.title} className="cntt-block__img"/>
                <span>{first.title}</span>
            </a>
            {rest.map((a) => (
                <a key={a.link} className="cntt-block__item" href={a.link} target="_blank" rel="noreferrer">
                    {a.title}
                </a>
            ))}
        </section>
    );
}

export default CnttBlock;