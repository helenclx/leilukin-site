export default {
    layout: "main/content",
    permalink: "/links/{{ page.fileSlug }}/",
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Links`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Links"
        }
    }
}