export default {
    tags: ["articles", "contents", "feed items"],
    layout: "main/content",
    permalink: "/articles/{{ page.fileSlug }}/",
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Articles",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "Articles"
        }
    }
}