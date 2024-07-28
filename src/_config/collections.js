export default function(eleventyConfig) {
    // Add content categories to a collection
    eleventyConfig.addCollection("categories", function(collectionApi) {
        let categories = new Set();
        let contents = collectionApi.getFilteredByTag('contents');
        contents.forEach(p => {
            let cats = p.data.categories;
            cats.forEach(c => categories.add(c));
        });
        return Array.from(categories).sort();
    });
}