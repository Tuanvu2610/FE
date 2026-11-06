import ArticleCard, {type Article} from "./ArticleCard";
import "../../styles/FeaturedArticle.css";

interface FeaturedArticleProps {
    article: Article;
}

function FeaturedArticle({article}: FeaturedArticleProps) {
    return (
        <div className="featured-article">
            <ArticleCard article={article}/>
        </div>
    );
}

export default FeaturedArticle;