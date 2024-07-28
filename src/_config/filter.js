export default function(eleventyConfig) {
    // Filter contents by category
    eleventyConfig.addFilter("filterByCategory", function(contents, cat) {
        cat = cat.toLowerCase();
        let result = contents.filter(item => {
            let cats = item.data.categories.map(c => c.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    // Format dates
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const dateTimeLocale = new Intl.DateTimeFormat("en-GB", dateOptions);
    eleventyConfig.addFilter("formatDate", function(date) {
        return dateTimeLocale.format(date);
    });

    // Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, itemLimit) {
        return array.slice(0, itemLimit);
    });
}