export default {
    tags: ["articles", "contents", "feed items"],
    layout: "layouts/content",
    permalink: "/articles/{{ page.fileSlug }}/",
    isArticle: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Articles`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Articles"
        }
    }
}
