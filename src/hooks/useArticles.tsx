import { useEffect, useState } from "react";
import type { Article } from "../component/home/ArticleCard";

const decode = (text: string) =>
    new DOMParser().parseFromString(text, "text/html").documentElement.textContent ?? "";

export function useArticles(source: string) {
    const [items, setItems] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch(`/api/${source}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Không thể tải dữ liệu");
                }
                return response.json();
            })
            .then((data) => {
                if (!data.success || !Array.isArray(data.data)) {
                    throw new Error("Dữ liệu RSS không hợp lệ");
                }
                setItems(
                    data.data.map((a: Article) => ({
                        ...a,
                        title: decode(a.title),
                        description: decode(a.description),
                    }))
                );
                setError("");
            })
            .catch((err: Error) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [source]);

    return { items, loading, error };
}