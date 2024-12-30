export default {
    layout: false,
    tags: ["link groups"],
    permalink: false,
    eleventyComputed: {
        title: "{{ title }}",
        eleventyNavigation: {
            key: "{{ title }}",
            parent: "Links"
        }
    }
}