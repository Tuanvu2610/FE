import SmallArticle from "./SmallArticle";
import type {Article} from "./ArticleCard";
import "../../styles/SmallArticleRow.css";
import { useRef } from "react";

interface SmallArticleRowProps {
    articles: Article[];
}

function SmallArticleRow({articles}: SmallArticleRowProps) {
    const articleRowRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: number) => {
        if (articleRowRef.current) {
            const row = articleRowRef.current;
            const firstArticle = row.children[0] as HTMLElement;

            row.scrollBy({
                left: direction * (firstArticle.offsetWidth + 16),
                behavior: "smooth"
            });
        }
    };
    return (
        <div className="smallArticleRow">
            <div className="articleRow" ref={articleRowRef}>
                {articles.slice(0, 8).map((article) => (
                    <SmallArticle
                        key={article.link}
                        article={article}
                    />
                ))}
            </div>

            <button onClick={() => handleScroll(1)} className="arrow-right btn-hover"><i className='fa-solid fa-chevron-right'></i></button>
            <button onClick={() => handleScroll(-1)} className="arrow-left btn-hover"><i className='fa-solid fa-chevron-left'></i></button>
        </div>
    );
}

export default SmallArticleRow;