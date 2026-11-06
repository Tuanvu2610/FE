import VideoIcon from "./VideoIcon";
import styles from "../../styles/ArticleCard.css";

export interface Article {
    id: number;
    title: string;
    summary: string;
    thumbnail: string;
    category: string;
    hasVideo: boolean;
}

interface ArticleCardProps {
    article: Article;
}

function ArticleCard({article}: ArticleCardProps) {
    return (
        <article className="card">
            <div className="imageBox">
                <img
                    src={article.thumbnail}
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
                {article.summary}
            </p>
        </article>
    );
}

export default ArticleCard;