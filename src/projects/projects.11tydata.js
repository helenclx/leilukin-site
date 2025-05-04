export default {
    tags: "project pages",
    layout: "layouts/content",
    hasBreadcrumbs: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}
