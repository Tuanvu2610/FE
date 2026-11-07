import { useEffect, useMemo, useState } from "react";
import "../styles/FinancePage.css";

const API_URL = "/api/taichinhBatdongsan";
const PAGE_SIZE = 8;

interface Article {
    id: string;
    title: string;
    link: string;
    description: string;
    image: string;
    pubDate: string;
}

const extractImage = (html: string): string => {
    const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1] : "";
};

const stripHtml = (html: string): string => {
    const doc = new DOMParser().parseFromString(html || "", "text/html");
    return (doc.body.textContent || "").trim();
};

const normalize = (raw: any, index: number): Article => {
    const image: string =
        raw.image || extractImage(raw.content ?? "") || extractImage(raw.description ?? "");

    return {
        id: String(raw.link ?? index),
        title: stripHtml(raw.title ?? ""),
        link: raw.link ?? "#",
        description: stripHtml(raw.description ?? ""),
        image,
        pubDate: raw.pubDate ?? "",
    };
};

const formatDate = (value: string): string => {
    const d = new Date(value);
    if (isNaN(d.getTime())) return "";
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} | ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const FinancePage = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(PAGE_SIZE);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            try {
                setLoading(true);
                setError("");
                const res = await fetch(API_URL, { signal: controller.signal });
                if (!res.ok) throw new Error(`Lỗi server: ${res.status}`);
                const json = await res.json();
                console.log("DATA TỪ SERVER:", json);
                const list = Array.isArray(json) ? json : json.data ?? [];
                setArticles(list.map(normalize));
            } catch (err) {
                if ((err as Error).name !== "AbortError") {
                    setError("Không tải được dữ liệu, vui lòng thử lại.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => controller.abort();
    }, []);

    const featured = articles[0];
    const sideList = useMemo(() => articles.slice(1, 5), [articles]);
    const restList = useMemo(() => articles.slice(5), [articles]);
    const shownRest = restList.slice(0, visible);

    return (
        <div className="fin-page">
            <h1 className="fin-page-title">BẤT ĐỘNG SẢN</h1>

            {loading && <p className="fin-status">Đang tải...</p>}
            {error && <p className="fin-status fin-error">{error}</p>}
            {!loading && !error && articles.length === 0 && (
                <p className="fin-status">Chưa có bài viết nào.</p>
            )}

            {!loading && !error && featured && (
                <div className="fin-layout">
                    {/* ===== CỘT TRÁI ===== */}
                    <div className="fin-left">
                        <a href={featured.link} target="_blank" rel="noreferrer" className="fin-featured">
                            <img src={featured.image} alt={featured.title} />
                            <h2 className="fin-featured-title">{featured.title}</h2>
                        </a>

                        <div className="fin-list">
                            {shownRest.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fin-list-item"
                                >
                                    <div className="fin-list-thumb">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="fin-list-body">
                                        <h3 className="fin-list-title">{item.title}</h3>
                                        <p className="fin-list-desc">{item.description}</p>
                                        <span className="fin-list-meta">
                                            Thị trường bất động sản | {formatDate(item.pubDate)}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {visible < restList.length && (
                            <button
                                className="fin-load-more"
                                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                            >
                                Xem thêm
                            </button>
                        )}
                    </div>

                    {/* ===== CỘT PHẢI ===== */}
                    <aside className="fin-right">
                        {sideList.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="fin-side-item"
                            >
                                <div className="fin-side-thumb">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h3 className="fin-side-title">{item.title}</h3>
                            </a>
                        ))}

                        <button className="fin-feedback">
                            <i className="fa-regular fa-paper-plane"></i> GỬI GÓP Ý
                        </button>
                        <div className="fin-ad">Quảng cáo</div>
                    </aside>
                </div>
            )}
        </div>
    );
};

export default FinancePage;