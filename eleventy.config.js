// Installed Plug-ins
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const metagen = require('eleventy-plugin-metagen');

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

    return {
        dir: {
            input: "src"
        }
    };
};