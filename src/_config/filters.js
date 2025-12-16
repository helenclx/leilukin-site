import { DateTime } from "luxon";

export default function(eleventyConfig) {
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
	eleventyConfig.addFilter("itemCount", (array) => array.length );

	// Filter: Thousands separator
	eleventyConfig.addFilter("thousands", function(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	});
}
