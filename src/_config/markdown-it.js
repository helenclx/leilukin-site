// markdown-it plugins
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItAttribution from "markdown-it-attribution";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from 'markdown-it-bracketed-spans';
import markdownItDefList from "markdown-it-deflist";
import markdownItFootnote from "markdown-it-footnote";

// Configure slug filter
import slugify from "slugify";

// Enable exporting markdown-it library to another module
export let markdownLibrary;

export default function(eleventyConfig) {
    // Configure markdown-it-anchor plugins
    eleventyConfig.setLibrary('md', markdownIt().use(markdownItAnchor))
    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "heading-anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });
    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(idx, 0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(idx + 4, 0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };

    /* Markdown Overrides */
    markdownLibrary = markdownIt({
        html: true,
        linkify: true,
    })
        .use(markdownItAnchor, markdownItAnchorOptions)
        .use(markdownItAttribution)
        .use(markdownItAttrs)
        .use(markdownItBracketedSpans)
        .use(markdownItDefList)
        .use(markdownItFootnote);

    // Configure linkify
    markdownLibrary.linkify.set({ fuzzyLink: false });

    // Configure markdown-it-footnote
    markdownLibrary.renderer.rules.footnote_block_open = () => (
        '<hr class="footnotes-sep">\n' +
        '<section class="footnotes" aria-labelledby="footnotes">\n' +
        `<div class="heading-wrapper h2">
            <h2 id="footnotes" class="footnotes__title">Footnotes</h2>
            <a class="heading-anchor" href="#footnotes" aria-labelledby="footnotes"><span hidden="">#</span></a>
        </div>\n` +
        '<ol class="footnotes-list">\n'
    );

    markdownLibrary.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
        let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;

        /* ↩ with escape code to prevent display as Apple Emoji on iOS */
        return `
            <p class="footnote-item__back">
                <a href="#fnref${id}" class="footnote-backref">
                    <span aria-hidden="true">\u21a9\uFE0E</span>
                    Back to reference ${id}
                </a>
            </p>
        `;
    };

    const renderRules = {
        footnote_caption: ['[', '[Note ']
    };
    Object.keys(renderRules).map(rule => {
        let defaultRender = markdownLibrary.renderer.rules[rule];
        markdownLibrary.renderer.rules[rule] = (tokens, idx, options, env, self) => {
            return defaultRender(tokens, idx, options, env, self).replace(...renderRules[rule]);
        }
    });

    /* This is the part that tells 11ty to swap to our custom config */
    eleventyConfig.setLibrary("md", markdownLibrary);
}