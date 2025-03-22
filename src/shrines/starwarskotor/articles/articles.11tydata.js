export default {
    tags: ["contents", "feed items", "kotor articles"],
    layout: "starwarskotor/content",
    isArticle: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Articles`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "KotOR Articles"
        }
    }
}