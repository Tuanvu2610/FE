import SmallArticle from "./SmallArticle";
import type {Article} from "./ArticleCard";
import styles from "../../styles/SmallArticleRow.css";

interface SmallArticleRowProps {
    articles: Article[];
}

function SmallArticleRow({articles}: SmallArticleRowProps) {
    return (
        <div className="articleRow">
            {articles.slice(0, 4).map((article) => (
                <SmallArticle
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    );
}

export default SmallArticleRow;