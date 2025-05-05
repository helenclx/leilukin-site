export default {
    tags: "project pages",
    layout: "layouts/base",
    hasBreadcrumbs: true,
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title,
            parent: "Projects"
        }
    }
}
