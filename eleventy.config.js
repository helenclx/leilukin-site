// Plugins
import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginEleventyNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginEmbedEverything from "eleventy-plugin-embed-everything";
import pluginWordcount from "eleventy-plugin-wordcount-extended";
import pluginTOC from "@uncenter/eleventy-plugin-toc";
import { VentoPlugin } from 'eleventy-plugin-vento';

// Custom Configurations
import markdownItConfig from "./src/_config/markdown-it.js";
import filesConfig from "./src/_config/files.js";
import topicsConfig from "./src/_config/topics.js";
import filtersConfig from "./src/_config/filters.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // ----- Plugins
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(pluginEleventyNavigation);
    eleventyConfig.addPlugin(pluginSyntaxHighlight, { preAttributes: { tabindex: 0 } });
    eleventyConfig.addPlugin(pluginEmbedEverything, {
        youtube: {
            options: {
                lazy: true,
                recommendSelfOnly: true,
            }
        }
    });
    eleventyConfig.addPlugin(pluginWordcount);
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: function (toc) {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });

    // ----- Custom Configurations
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(filesConfig);
    eleventyConfig.addPlugin(topicsConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // ----- Eleventy bundle plugin
    eleventyConfig.addBundle("css");
    eleventyConfig.addBundle("js", { toFileDirectory: "assets/js" });

    // ----- Vento plugin for Eleventy
    // Must be loaded after plugins that modify filters
    eleventyConfig.addPlugin(VentoPlugin, {
        autotrim: true,
    });

    return {
        markdownTemplateEngine: "vto",
        htmlTemplateEngine: "vto",
        dir: {
            input: "src"
        }
    };
};
