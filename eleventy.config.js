// Installed Plugins
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginEmbedEverything from "eleventy-plugin-embed-everything";
import pluginMetagen from "eleventy-plugin-metagen";
import pluginWordcount from "eleventy-plugin-wordcount-extended";
import pluginTOC from "@uncenter/eleventy-plugin-toc";

// Custom Configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import filesConfig from "./src/_config/files.js";
import collectionsConfig from "./src/_config/collections.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Installed Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginEleventyNavigation);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(pluginEmbedEverything, { add: ['soundcloud'] });
    eleventyConfig.addPlugin(pluginMetagen);
    eleventyConfig.addPlugin(pluginWordcount);
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: function (toc) {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });

    // Custom Configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(filesConfig);
    eleventyConfig.addPlugin(collectionsConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};