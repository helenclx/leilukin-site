import { DateTime } from "luxon";

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
    eleventyConfig.addFilter("formatDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toFormat("d LLLL yyyy");
    });

    // Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, itemLimit) {
        return array.slice(0, itemLimit);
    });
}