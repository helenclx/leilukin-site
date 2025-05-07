export default function(eleventyConfig) {
    // Add content topics to a collection
    eleventyConfig.addCollection("topics", function(collectionApi) {
        let topics = new Set();
        let contents = collectionApi.getFilteredByTag("contents");
        contents.forEach(p => {
            let tops = p.data.topics;
            if (tops) {
                tops.forEach(c => topics.add(c));
            }
        });
        return Array.from(topics).sort();
    });

    // Filter: Filter contents by topicegory
    eleventyConfig.addFilter("filterByTopic", function(contents, topic) {
        topic = topic.toLowerCase();
        let result = contents.filter(item => {
            let tops = item.data.topics.map(c => c.toLowerCase());
            if (tops) {
                return tops.includes(topic);
            }
        });
        return result;
    });
}
