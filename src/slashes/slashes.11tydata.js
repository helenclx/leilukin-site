export default {
    tags: "pages",
    layout: "main/content",
    permalink: "/{{ page.fileSlug }}/",
    eleventyComputed: {
        eleventyNavigation: {
            key: "{{ title }}"
        }
    }
}