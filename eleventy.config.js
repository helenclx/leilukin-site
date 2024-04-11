// Installed Plug-ins
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const metagen = require('eleventy-plugin-metagen');
const anchors_plugin = require('@orchidjs/eleventy-plugin-ids');

module.exports = function (eleventyConfig) {
    // Copy files
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({ "./src/assets/feed/": "/" });

    // Installed Plug-ins
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
        components: "./src/_includes/**/*.webc",
    });
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(anchors_plugin, {
        selectors: ['h2','h3','h4','h5','h6'],
    });

    return {
        dir: {
            input: "src"
        }
    };
};