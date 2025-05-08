export default {
    tags: "my features",
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Featured`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Featured"
        }
    }
}
