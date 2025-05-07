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

    // Filter: Filter contents by category
    eleventyConfig.addFilter("filterByCategory", function(contents, cat) {
        cat = cat.toLowerCase();
        let result = contents.filter(item => {
            let cats = item.data.categories.map(c => c.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });
}
