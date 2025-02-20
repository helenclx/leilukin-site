export default {
    layout: "main/content",
    tags: ["posts", "contents", "feed items"],
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Blog",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "Blog Archive"
        }
    }
}