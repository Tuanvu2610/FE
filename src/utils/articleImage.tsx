export const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">' +
        '<rect width="100%" height="100%" fill="#e5e5e5"/>' +
        '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" ' +
        'fill="#999" font-size="48" font-family="sans-serif">24h</text></svg>'
    );

export function getArticleImage(content?: string): string {
    if (!content) return PLACEHOLDER;
    const doc = new DOMParser().parseFromString(content, "text/html");
    return doc.querySelector("img")?.getAttribute("src") || PLACEHOLDER;
}