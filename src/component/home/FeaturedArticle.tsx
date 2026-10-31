import ArticleCard, {type Article} from "./ArticleCard";
import styles from "./FeaturedArticle.module.css";

interface FeaturedArticleProps {
    article: Article;
}

function FeaturedArticle({article}: FeaturedArticleProps) {
    return (
        <div className={styles.featuredArticle}>
            <ArticleCard article={article}/>
        </div>
    );
}

export default FeaturedArticle;