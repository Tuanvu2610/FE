import VideoIcon from "./VideoIcon.tsx";
import "../../styles/updateNews.css";
const getImageUrl = (content: string) => {
    const doc = new DOMParser().parseFromString(content, "text/html");
    return doc.querySelector("img")?.src || "";
};

interface Article {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content: string;
    hasVideo?: boolean;
}

interface ArticleCardProps {
    article: Article;
}
const NewsUpdate = ({article}: ArticleCardProps) => {
    return (
        <>
            <article className="card-update">
                <div className="imageBox-update">
                    <img
                        src={getImageUrl(article.content)}
                        alt={article.title}
                        className="image-update"
                    />
                    {article.hasVideo && (
                        <div className="videoIcon-update">
                            <VideoIcon/>
                        </div>
                    )}
                </div>
                <div>
                    <h3 className="title-update">
                        {article.title}
                    </h3>
                    <p className="description-update">
                        {article.description}
                    </p>
                </div>
            </article>
        </>
    )
}
export default NewsUpdate;