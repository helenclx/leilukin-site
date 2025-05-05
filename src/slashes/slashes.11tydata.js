export default {
    tags: "pages",
    layout: "layouts/base",
    permalink: "/{{ page.fileSlug }}/",
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title
        }
    }
}
