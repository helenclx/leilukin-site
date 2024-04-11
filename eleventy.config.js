// Installed Plug-ins
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const metagen = require('eleventy-plugin-metagen');

module.exports = function (eleventyConfig) {
    // Copy files
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({ "./src/assets/feed/": "/" });

    // Installed Plug-ins
    eleventyConfig.addPlugin(pluginWebc);
    eleventyConfig.addPlugin(metagen);

    return {
        dir: {
            input: "src"
        }
    };
};