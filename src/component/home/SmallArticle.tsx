import ArticleCard, {type Article} from "./ArticleCard";
import  "../../styles/SmallArticle.css";

interface SmallArticleProps {
    article: Article;
}

function SmallArticle({article}: SmallArticleProps) {
    return (
        <div className="smallArticle">
            <ArticleCard article={article}/>
        </div>
    );
}

export default SmallArticle;