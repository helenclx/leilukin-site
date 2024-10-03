export default {
    tags: ["contents", "kotor resources"],
    layout: "starwarskotor/content",
    hasBreadcrumbs: true,
    eleventyComputed: {
        title: "{{ pageTitle }} | Resources",
        eleventyNavigation: {
            key: "{{ pageTitle }}",
            parent: "KotOR Resources"
        }
    }
}