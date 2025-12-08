export default {
    layout: "layouts/main",
    tags: ["notes", "contents"],
    isArticle: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Notes`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Notes"
        }
    }
}
