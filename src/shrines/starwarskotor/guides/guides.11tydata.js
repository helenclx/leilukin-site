export default {
    tags: ["contents", "feed items", "kotor guides"],
    layout: "starwarskotor/content",
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Guides",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "KotOR Guides"
        }
    }
}