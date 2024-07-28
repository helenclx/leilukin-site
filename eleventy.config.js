// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import embedEverything from "eleventy-plugin-embed-everything";
import metagen from 'eleventy-plugin-metagen';
import emojiReadTime from "@11tyrocks/eleventy-plugin-emoji-readtime";
import pluginTOC from '@uncenter/eleventy-plugin-toc';

// Custom Configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import copyConfig from "./src/_config/copy.js";
import collectionsConfig from "./src/_config/collections.js";
import filterConfig from "./src/_config/filter.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(embedEverything, { add: ['soundcloud'] });
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(emojiReadTime);
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: function (toc) {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });

    // Custom Configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(copyConfig);
    eleventyConfig.addPlugin(collectionsConfig);
    eleventyConfig.addPlugin(filterConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    return {
        dir: {
            input: "src"
        }
    };
};