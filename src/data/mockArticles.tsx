import type { Article } from "../component/home/ArticleCard";

export const makeMock = (n: number, category: string): Article[] =>
    Array.from({ length: n }, (_, i) => ({
            id: i + 1,
            title: `Tiêu đề bài viết số ${i + 1} khá dài để thử xuống dòng`,
            summary: "Mô tả ngắn của bài viết, hiển thị khoảng hai đến ba dòng.",
            thumbnail: `https://picsum.photos/seed/${category}${i}/600/400`,
            category,
            hasVideo: i % 4 === 0,
    }));