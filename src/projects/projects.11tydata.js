export default {
    tags: "project pages",
    layout: "main/content.njk",
    hasBreadcrumbs: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}