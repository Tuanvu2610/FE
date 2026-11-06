import Parser from "rss-parser";
import rssSources from "../config/rssSources.js";

const parser = new Parser();

export async function getNews(category) {
    const rssUrl = rssSources[category];

    if (!rssUrl) {
        throw new Error("Không tìm thấy RSS");
    }

    const feed = await parser.parseURL(rssUrl);

    return feed.items.map(item => ({
        title: item.title,
        link: item.link,
        description: item.contentSnippet,
        pubDate: item.pubDate,
        content: item["content:encoded"] || item.content
    }));
}