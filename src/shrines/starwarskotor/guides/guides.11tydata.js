export default {
    tags: ["contents", "feed items", "kotor guides"],
    layout: "starwarskotor/content",
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle }} | Guides",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "KotOR Guides"
        }
    }
}