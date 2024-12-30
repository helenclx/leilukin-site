export default {
    layout: "main/content",
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Links",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "Links"
        }
    }
}