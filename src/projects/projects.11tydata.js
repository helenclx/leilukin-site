export default {
    tags: "project pages",
    layout: "layouts/content.html",
    hasBreadcrumbs: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}
