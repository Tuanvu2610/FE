import VideoIcon from "./VideoIcon.tsx";
import "../../styles/MarketNews.css";
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
const MarketNews = ({article}: ArticleCardProps) => {
  return (
      <>
          <article className="card-market">
              <div className="imageBox-market">
                  <img
                      src={getImageUrl(article.content)}
                      alt={article.title}
                      className="image-market"
                  />
                  {article.hasVideo && (
                      <div className="videoIcon-market">
                          <VideoIcon/>
                      </div>
                  )}
              </div>
              <div>
                  <h3 className="title-market">
                      {article.title}
                  </h3>
                  <p className="description-market">
                      {article.description}
                  </p>
              </div>
          </article>
      </>
  )
}
export default MarketNews;