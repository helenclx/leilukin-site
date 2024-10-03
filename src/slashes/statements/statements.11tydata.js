export default {
    layout: "main/statement",
    tags: "statements",
    articleElement: true,
    eleventyComputed: {
        desc: "{{ sitemeta.siteName | safe }}'s {{ keyword }}.",
        eleventyNavigation:{
            key: "{{ title }}"
        }
    }
}