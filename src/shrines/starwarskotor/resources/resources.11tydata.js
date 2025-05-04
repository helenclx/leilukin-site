export default {
    tags: ["contents", "kotor resources"],
    layout: "layouts/starwarskotor",
    hasBreadcrumbs: true,
    articleElement: true,
    eleventyComputed: {
        title: (data) => `${data.pageTitle} | Resources`,
        eleventyNavigation: {
            key: (data) => data.pageTitle,
            parent: "KotOR Resources"
        }
    }
}
