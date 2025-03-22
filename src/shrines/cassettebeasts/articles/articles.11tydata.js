export default {
    tags: ["contents", "feed items", "cassette beasts articles"],
    layout: "cassettebeasts/content",
    isArticle: true,
    eleventyComputed: {
        title: (data) => `${data.articleTitle} | Articles`,
        eleventyNavigation: {
            key: (data) => data.articleTitle,
            parent: "Cassette Beasts Articles"
        }
    }
}