export default {
    tags: ["changelogs", "feed items"],
    permalink: false,
    excludeFromSitemap: true,
    eleventyComputed: {
        title: function(data) {
            return `Changelog: ${this.formatDate(data.date)}`;
        }
    }
}
