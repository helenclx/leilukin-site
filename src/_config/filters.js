import { DateTime } from "luxon";

export default function(eleventyConfig) {
    // Filter: Filter contents by category
    eleventyConfig.addFilter("filterByCategory", function(contents, cat) {
        cat = cat.toLowerCase();
        let result = contents.filter(item => {
            let cats = item.data.categories.map(c => c.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    // Filter: Format dates
    eleventyConfig.addFilter("formatDate", (date) => {
        const dateFormat = "d LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).toFormat(dateFormat);
    });

    // Filter: Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, maximum) {
        return array.slice(0, maximum);
    });

    // Filter: Collection item count
    eleventyConfig.addFilter("itemCount", (array) => array.length() );

    // Filter: Thousands separator
    eleventyConfig.addFilter("thousands", function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
}
