export default {
    tags: ["changelogs", "feed items"],
    permalink: false,
    eleventyComputed: {
        "title": "Changelog: {{ date | formatDate }}"
    }
}