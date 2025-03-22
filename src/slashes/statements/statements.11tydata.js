export default {
    layout: "main/statement",
    tags: "statements",
    articleElement: true,
    eleventyComputed: {
        desc: (data) => `${data.sitemeta.siteName}'s ${data.keyword}`,
        eleventyNavigation:{
            key: (data) => data.title
        }
    }
}