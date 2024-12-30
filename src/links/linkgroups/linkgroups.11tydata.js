export default {
    layout: false,
    tags: ["link groups"],
    permalink: false,
    eleventyComputed: {
        title: "{{ title }}",
        eleventyNavigation: {
            key: false,
            parent: false
        }
    }
}