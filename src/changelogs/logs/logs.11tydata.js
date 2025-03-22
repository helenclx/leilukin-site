export default {
    tags: ["changelogs", "feed items"],
    permalink: false,
    eleventyComputed: {
        title: function(data) {
            return `Changelog: ${this.formatDate(data.date)}`;
        }
    }
}