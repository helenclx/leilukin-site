export default {
    tags: "archive",
    eleventyComputed:{
        eleventyNavigation: {
            key: (data) => data.title
        }
    }
}