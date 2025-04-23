export default {
    tags: "project pages",
    layout: "main/content.html",
    hasBreadcrumbs: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}
