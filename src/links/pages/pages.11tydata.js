export default {
    layout: "main/content",
    permalink: "/links/{{ page.fileSlug }}/",
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Links",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "Links"
        }
    }
}