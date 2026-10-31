import ArticleCard, {type Article} from "./ArticleCard";
import styles from "./SmallArticle.module.css";

interface SmallArticleProps {
    article: Article;
}

function SmallArticle({article}: SmallArticleProps) {
    return (
        <div className={styles.smallArticle}>
            <ArticleCard article={article}/>
        </div>
    );
}

export default SmallArticle;