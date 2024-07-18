// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import metagen from 'eleventy-plugin-metagen';
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";

import slugify from "slugify";

import markdownPlugin from "./eleventy.config.md.js";

export default function (eleventyConfig) {
    // Copy files
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({
        "node_modules/@zachleat/details-utils/details-utils.js": "assets/js/details-utils.js",
    });

    // Custom Plugins
    eleventyConfig.addPlugin(markdownPlugin);

    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(emojiReadTime);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js");

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

    // Filter contents by category
    eleventyConfig.addFilter("filterByCategory", function(contents, cat) {
        cat = cat.toLowerCase();
        let result = contents.filter(item => {
            let cats = item.data.categories.map(c => c.toLowerCase());
            return cats.includes(cat);
        });
        return result;
    });

    // Filter: Format dates
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const dateTimeLocale = new Intl.DateTimeFormat("en-GB", dateOptions);
    eleventyConfig.addFilter("formatDate", function(date) {
        return dateTimeLocale.format(date);
    });

    // Filter: Limit number of items displayed
    eleventyConfig.addFilter("itemLimit", function(array, itemLimit) {
        return array.slice(0, itemLimit);
    });

    // Shortcode: <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);

    // Paired shortcode: Manual heading anchor
    eleventyConfig.addPairedShortcode('headingAnchor', (title, hLevel, id=slugify(title)) => {
        return `<div class="heading-wrapper h${hLevel}">
            <h${hLevel} id="${id}">${title}</h${hLevel}>
            <a class="heading-anchor" href="#${id}" aria-labelledby="${id}"><span hidden="">#</span></a>
        </div>`;
    });

    return {
        dir: {
            input: "src"
        }
    };
};