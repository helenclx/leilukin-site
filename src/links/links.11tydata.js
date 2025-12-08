export default {
    layout: "layouts/slashpage",
    tags: ["link pages"],
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: (data) => `${data.pageTitle} | Links`,
        eleventyNavigation: {
            key: (data) => data.pageTitle,
            parent: "Links"
        }
    }
}
