export default {
    tags: ["contents", "feed items", "kotor articles"],
    layout: "starwarskotor/content",
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle }} | Articles",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "KotOR Articles"
        }
    }
}