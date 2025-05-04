export default {
    layout: "layouts/content",
    tags: ["posts", "contents", "feed items"],
    isArticle: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Blog`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Blog Archive"
        }
    }
}
