export default {
    layout: "layouts/slashpage",
    permalink: "/links/{{ page.fileSlug }}/",
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: (data) => `${data.pageTitle} | Links`,
        eleventyNavigation: {
            key: (data) => data.pageTitle,
            parent: "Links"
        }
    }
}
