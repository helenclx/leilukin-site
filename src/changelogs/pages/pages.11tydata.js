export default {
    tags: "changelog pages",
    layout: "main/changelogs",
    permalink: "/changelogs/{{ page.fileSlug }}/",
    eleventyComputed: {
        eleventyNavigation: {
            key: "{{ changelogNav }}",
            parent: "Changelogs"
        }
    }
}