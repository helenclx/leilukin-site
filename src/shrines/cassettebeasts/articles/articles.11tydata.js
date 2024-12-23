export default {
    tags: ["contents", "feed items", "cassette beasts articles"],
    layout: "cassettebeasts/content",
    isArticle: true,
    eleventyComputed: {
        title: "{{ articleTitle | safe }} | Articles",
        eleventyNavigation: {
            key: "{{ articleTitle }}",
            parent: "Cassette Beasts Articles"
        }
    }
}