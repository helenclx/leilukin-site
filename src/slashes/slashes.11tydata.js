export default {
    tags: "pages",
    layout: "layouts/content",
    permalink: "/{{ page.fileSlug }}/",
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => data.title
        }
    }
}
