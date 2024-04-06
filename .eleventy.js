module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    eleventyConfig.addPassthroughCopy({ "./src/assets/feed/": "/" });

    return {
        dir: {
            input: "src"
        }
    };
};