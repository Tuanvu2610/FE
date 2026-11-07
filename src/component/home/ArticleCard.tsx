import VideoIcon from "./VideoIcon";
import "../../styles/ArticleCard.css";

export interface Article {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content: string;
    hasVideo?: boolean;
}
const getImageUrl = (content: string) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    return doc.querySelector("img")?.src || "";
};
interface ArticleCardProps {
    article: Article;
}

function ArticleCard({article}: ArticleCardProps) {
    return (
        <article className="card">
            <div className="imageBox">
                <img
                    src={getImageUrl(article.content)}
                    alt={article.title}
                    className="image"
                />
                {article.hasVideo && (
                    <div className="videoIcon">
                        <VideoIcon/>
                    </div>
                )}
            </div>

            <h3 className="title">
                {article.title}
            </h3>

            <p className="summary">
                {article.description}
            </p>
        </article>
    );
}

export default ArticleCard;