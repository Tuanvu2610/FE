import {useEffect, useState} from "react";
import SmallArticle from "../component/home/SmallArticle.tsx";
import "../styles/TodayPage.css"
import FeaturedArticle from "../component/home/FeaturedArticle.tsx";
import SmallArticleRow from "../component/home/SmallArticleRow.tsx";
interface Article {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    content: string;
}

const TodayPage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        fetch("api/trongngay")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu tin tức");
                }
                return response.json();
            })
            .then((data) => {
                if (!data.success || !Array.isArray(data.data)) {
                    throw new Error("Dữ liệu RSS không hợp lệ");
                }
                setArticles(data.data);
                setError("");
            })
            .catch((err: Error) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
  return (
      <>
      <div className="main-content">
          <div className="today-heading">
              <div className="fashion-breadcrumb">
                  <a href="/">Trang chủ</a>
                  <span>›</span>
                  <strong>Tin tức trong ngày</strong>
              </div>

              <div className="fashion-heading">
                  <h1>TIN TỨC TRONG NGÀY</h1>
              </div>
          </div>
          {loading && <p>Đang tải tin tức...</p>}

          {error && <p>{error}</p>}

          {!loading && !error && articles.length === 0 && (
              <p>Không có bài viết nào.</p>
          )}
          {!loading && !error && articles.length > 0 && (
              <div className="new-container">
                  <div className="cover-news-col">
                      {articles.slice(1, 3).map((article, index) => (
                          <SmallArticle
                              key={index}
                              article={article}
                          />
                      ))}
                  </div>
                  <div className="cover-news-feature">
                      <FeaturedArticle article={articles[0]} />
                  </div>
                  <div className="cover-news-col">
                      {articles.slice(4, 6).map((article, index) => (
                          <SmallArticle
                              key={index}
                              article={article}
                          />
                      ))}
                  </div>
              </div>
          )}
          <div className="nav-banner">
              <div className="cover-nav-banner">
                  <i className="fa-solid fa-cloud-sun"></i>
                  <p>THỜI TIẾT</p>
              </div>
              <div className="cover-nav-banner">
                  <i className="fa-regular fa-newspaper"></i>
                  <p>NÓNG TRÊN MẠNG</p>
              </div>
              <div className="cover-nav-banner">
                  <i className="fa-solid fa-car-burst"></i>
                  <p>AN TOÀN GIAO THÔNG</p>
              </div>
              <div className="cover-nav-banner">
                  <i className="fa-solid fa-calendar-days"></i>
                  <p>LỊCH VẠN NIÊN</p>
              </div>
          </div>
          <div className="cover-news">
              <div className="cover-news-left">
                  <h3>NHIỀU NGƯỜI ĐỌC</h3>
                  <div>
                      <SmallArticleRow articles={articles}/>
                  </div>
              </div>
              <div className="cover-news-right">
                  <button className="style-btn"><i className="fa-solid fa-paper-plane"></i> Gửi góp ý</button>
                  <h3>TIN TỨC THỊ TRƯỜNG</h3>
                  <div>
                      {articles.slice(7, 12).map((article, index) => (
                          <SmallArticle
                              key={index}
                              article={article}
                          />
                      ))}
                  </div>
              </div>
          </div>
      </div>
      </>
  )
}
export default TodayPage;