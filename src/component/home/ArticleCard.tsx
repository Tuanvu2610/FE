import VideoIcon from "./VideoIcon";
import styles from "./ArticleCard.module.css";

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
        <article className={styles.card}>
            <div className={styles.imageBox}>
                <img
                    src={article.thumbnail}
                    alt={article.title}
                    className={styles.image}
                />

                {article.hasVideo && (
                    <div className={styles.videoIcon}>
                        <VideoIcon/>
                    </div>
                )}
            </div>

            <h3 className={styles.title}>
                {article.title}
            </h3>

            <p className={styles.summary}>
                {article.summary}
            </p>
        </article>
    );
}
export default ArticleCard;