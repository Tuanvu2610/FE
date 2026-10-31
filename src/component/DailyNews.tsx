import styles from "../styles/DailyNews.css";

interface NewsItem {
    id: number;
    category: string;
    title: string;
    hasVideo: boolean;
}

const newsItems: NewsItem[] = [
    {
        id: 1,
        category: "Thời sự",
        title: "Những thông tin đáng chú ý trong ngày hôm nay",
        hasVideo: true,
    },
    {
        id: 2,
        category: "Thế giới",
        title: "Cập nhật tình hình thế giới và những diễn biến mới nhất",
        hasVideo: false,
    },
    {
        id: 3,
        category: "Kinh doanh",
        title: "Thị trường kinh tế có những chuyển biến đáng chú ý",
        hasVideo: true,
    },
    {
        id: 4,
        category: "Công nghệ",
        title: "Những xu hướng công nghệ nổi bật hiện nay",
        hasVideo: false,
    },
    {
        id: 5,
        category: "Giải trí",
        title: "Các sự kiện giải trí thu hút sự quan tâm của công chúng",
        hasVideo: true,
    },
    {
        id: 6,
        category: "Thể thao",
        title: "Tin tức thể thao và những kết quả mới nhất",
        hasVideo: false,
    },
];

function DailyNews() {
    return (
        <section className="dailyNews">
            <h2 className="heading">TIN TỨC TRONG NGÀY</h2>

            <div className="newsList">
                {newsItems.map((item) => (
                    <article className="newsItem" key={item.id}>
            <span className="category">
              {item.category}
            </span>

                        <div className="titleWrapper">
                            <h3 className="title">
                                {item.title}
                            </h3>

                            {item.hasVideo && (
                                <svg
                                    className="videoIcon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-label="Video"
                                    role="img"
                                >
                                    <rect
                                        x="2"
                                        y="5"
                                        width="14"
                                        height="14"
                                        rx="2"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    />
                                    <path
                                        d="M16 10L22 7V17L16 14V10Z"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default DailyNews;
