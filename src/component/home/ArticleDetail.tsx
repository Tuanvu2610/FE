
import "./ArticleDetail.css";

interface ArticleDetailProps {
    title: string;
    author: string;
    date: string;
    image: string;
    category: string;
    content: string[];
}

function ArticleDetail({ article }: { article: ArticleDetailProps }) {
    return (
        <article className="article-detail">
            <div className="article-detail-category">{article.category}</div>

            <h1 className="article-detail-title">{article.title}</h1>

            <div className="article-detail-meta">
                <span>Tác giả: <strong>{article.author}</strong></span>
                <span>{article.date}</span>
            </div>

            <img
                className="article-detail-image"
                src={article.image}
                alt={article.title}
            />

            <div className="article-detail-content">
                {article.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}

export default ArticleDetail;
