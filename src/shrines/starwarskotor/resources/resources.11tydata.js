export default {
    tags: ["contents", "kotor resources"],
    layout: "starwarskotor/content",
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