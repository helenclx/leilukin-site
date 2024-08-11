---
articleTitle: How I (Tried to) Implement Accessible Footnotes
date: 2024-08-06T00:04:00+0800
desc: "How I implement accessible footnotes, at least to the best of my ability. Written for 32-Bit Cafe's Community Code Jam #5."
categories: ["32-bit cafe", "accessibility", "html", "css", "eleventy", "markdown-it"]
toc: true
---

[![32-Bit Cafe "Back to School" Code Jam button](/assets/images/articles/accessible-footnotes/32bitcafe-backtoschool.png)](https://32bit.cafe/~xandra/events/codejam5/){.inline-img}
{.center-text}

(32-Bit Cafe "Back to School" button made by [Loren](https://ribo.zone/)){.center-text}

[32-Bit Cafe](https://32bit.cafe/) is holding its fifth community code jam, titled ["Back to School"](https://32bit.cafe/~xandra/events/codejam5/), from 4 to 17 August 2024. I have been looking forward to participating in 32-Bit Cafe's community code jam for the first time, so I am excited. This motivates me to finally write a how-to article I have been meaning to do for a while: how to implement accessible footnotes on Leilukin's Hub, or at least, I tried to do so to the best of my abilities.

On [32-Bit Cafe's Discourse forum](https://discourse.32bit.cafe/), I made a [post on 28 June 2024](https://discourse.32bit.cafe/t/handling-citations-and-or-footnotes/1061/2?u=leilukin) in response to [solaria](https://solaria.neocities.org/)'s thread ["Handling Citations and/or Footnotes"](https://discourse.32bit.cafe/t/handling-citations-and-or-footnotes/1061) to share my methods of adding footnotes on my website. Now, I am writing an extended version of that post of mine in the form of this article, so I could share what I learned about web page footnotes on my website as well.

(Note: This article assumes a foundational familiarity with HTML and CSS)

## About Footnotes

Plagiarism.org [defines footnotes](https://www.plagiarism.org/article/what-are-footnotes) as notes placed at the bottom of a page, and what footnotes do is to cite references or comment on a designated part of the text above it.

My use case of footnotes is citing sources of information, particularly citing the same source multiple times on the same page when information from the same source is spread across my page. As of this writing, my website pages that use footnotes include the [trivia page of my {% cite "A Summer’s End — Hong Kong 1986" %} shrine 1](https://leilukin.com/shrines/asummersend/trivia/) and the [facts page of my {% cite "Cassette Beasts" %} shrine](https://leilukin.com/shrines/cassettebeasts/facts/). You are free to look at the HTML and CSS for reference, including when you are reading this article as I am explaining how I implement the footnotes.

Footnotes are used both on print and on the web. However, maintaining footnotes on the web can be tedious, especially if you want to update a web page to add or remove them, since you will need to change the number references of existing footnotes.

## Attempted to Use CSS Counters

When I was searching for how to implement accessible footnotes, I discovered [Kitty Giraudel](https://kittygiraudel.com/)'s article, ["Accessible Footnotes with CSS"](https://www.sitepoint.com/accessible-footnotes-css/) which teaches the method of using the combination of HTML [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute and [CSS counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) to add numbered references, to reduce the hassle of manually re-numbering all existing footnotes in case you want to update or reorder the references.

Her article also teaches adding a highlight background colour when heading to a footnote from a reference, as well as providing back links to head back to a reference from a footnote, by using the combination of the backlink Unicode icon (↩) and the HTML `aria-label` attribute with a value of “Back to content”. The uses of ARIA labels make footnotes more screen reader-friendly.

Furthermore, Kitty created the [eleventy-plugin-footnotes plugin](https://github.com/KittyGiraudel/eleventy-plugin-footnotes) for the static site generator [Eleventy](https://www.11ty.dev/), and wrote a blog post about it, ["Footnotes in 11ty"](https://kittygiraudel.com/2020/12/02/footnotes-in-11ty/). Since I already had begun to [use Eleventy to build my website](/blog/posts/2024-04-21-april-2024-leilukins-hub-overhaul-with-eleventy), I tried Kitty's plugin.

Unfortunately, a known limitation of using CSS counter method to generate footnotes is [not being able to reference the same footnote multiple times](https://github.com/KittyGiraudel/eleventy-plugin-footnotes/issues/83). As I want to be able to reference the same footnote more than once when I am citing sources on my shrine pages, I had to give up the plugin and look for an alternative.

## Starting with markdown-it-footnote Plugin's Default Footnote Markup

Kitty Giraudel's blog post about creating footnotes in Eleventy mentioned [markdown-it-footnote](https://github.com/markdown-it/markdown-it-footnote), the footnotes plugin for [markdown-it](https://github.com/markdown-it/markdown-it) Markdown parser, which is integrated in Eleventy by default to convert Markdown to HTML. Kitty commented on the accessibility shortcomings of markdown-it-footnote in the blog post:

> [...]it’s not super accessible (let alone by default), even considering all the customisation options. That’s because the footnote references end up being numbers (e.g. [1]) which are meaningless when listed or tabbed through because devoid of their surrounding context.

That said, since the plugin is customisable, I still wanted to give it a shot to see if I could make configurations to improve its accessibility, so I installed markdown-it-footnote and looked into the plugin's default HTML markup output.

Here is a sample of what the HTML markup output of markdown-it-footnote looks like:

```html
<p>This is a paragraph with the first footnote reference. <sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup></p>

<p>Here is the second paragraph with the second footnote reference. <sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>

<p>This the third paragraph, but with a foootnote reference that points to the first footnote. <sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[1:1]</a></sup></p>

<hr class="footnotes-sep">
<section class="footnotes">
    <ol class="footnotes-list">
        <li id="fn1" class="footnote-item">First footnote <a href="#fnref1" class="footnote-backref">↩︎</a> <a href="#fnref1:1" class="footnote-backref">↩︎</a></li>
        <li id="fn2" class="footnote-item">Second footnote <a href="#fnref2" class="footnote-backref">↩︎</a></li>
    </ol>
</section>
```

This is what this HTML markup will look like on a live web page:

![Web page footnotes sample screenshot](/assets/images/articles/accessible-footnotes/footnote-sample.avif)

What this HTML markup does:
- Adding a footnote reference as a superscript by using the [`<sup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup) tag with numbers as the content.
- Using a `<hr>` horizontal line element to separate the main body of the page and the footnote section;
- Using the `<ol>` tag to render the footnotes as a numbered list;
- Each footnote list item has an `id` attribute
- If a footnote is referenced more than once, the additional footnote references are labelled with colons.

(Note: the class names were added by markdown-it-footnote, but if you do not use it, you can rename the class name to whatever you want, and even if you use markdown-it-footnote, you can still change the class names if you want to go deep into it)

Next step is trying to improve this HTML markup by making it accessible.

## Make markdown-it-footnote's Markup More Accessible

### Clarify Footnote Reference Labels

As pointed out by Kitty Giraudel, labelling the footnote reference as mere numbers like [1] is an accessibility shortcoming, because these reference links become meaningless when being focused on by tabbing through the links, as these reference links would be devoid of context.

What I did to tackle this was changing the reference labels by adding a word "Footnote" to clarify that these links are for footnotes. For example, [1] becomes [Footnote #1], so when screen readers focus on a footnote reference link, it will be read out as "Footnote number one link".
```html
<sup class="footnote-ref">
	<a href="#fn1" id="fnref1">[1]</a>
</sup>
```

Optionally, if you want your footnote labels to still display only numbers on screen, you can use a CSS class to [visually hide](https://www.a11yproject.com/posts/how-to-hide-content/) the extra characters in the footnote label. This `.visually-hidden` utility class is a useful tool in your arsenal for accessible web design, as it is often used to hide a content that you do not mean to show on screen, but you still want it to be read by assistive technology.

```css
.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
```

To make my footnote reference labels display only a number on screen, I use a `span` tag with `visually-hidden` as the value of the `class` attribute to wrap around "Footnote #", so on screen, [Footnote #1] is changed to [1].

```html
<sup class="footnote-ref">
	<a href="#fn1" id="fnref1">
		[<span class="visually-hidden">Footnote #</span>1]
	</a>
</sup>
```

### Add ARIA Label to Footnote Back Links

Next step is adding an ARIA label to the footnote backlinks, by adding an `aria-label` attribute with "Back to reference #[Insert reference number]" as its value. For example:

```html
<a aria-label="Back to reference #1" href="#fnref1" class="footnote-backref">↩︎</a>
```

When a footnote back link is focused on via tabbing, screen readers will read it out as "Back to reference number one link".

### Add Heading to Footnote Section

To make it clear that the section is for footnotes, I add a HTML heading before the list of footnotes, such as:
```html
<h2>Footnotes</h2>
```

## Final HTML Markup for Accessible Footnotes

Here is my final HTML markup sample to create accessible footnotes:

```html
<p>This is a paragraph with the first footnote reference. <sup class="footnote-ref"><a href="#fn1" id="fnref1">[<span class="visually-hidden">Footnote #</span>1]</a></sup></p>

<p>Here is the second paragraph with the second footnote reference. <sup class="footnote-ref"><a href="#fn2" id="fnref2">[<span class="visually-hidden">Footnote #</span>2]</a></sup></p>

<p>This the third paragraph, but with a foootnote reference that points to the first footnote. <sup class="footnote-ref"><a href="#fn1" id="fnref1:1">[<span class="visually-hidden">Footnote #</span>1:1]</a></sup></p>

<hr class="footnotes-sep">
<section class="footnotes">
	<h2>Footnotes</h2>
    <ol class="footnotes-list">
        <li id="fn1" class="footnote-item">
	        First footnote
	        <a aria-label="Back to reference #1" href="#fnref1" class="footnote-backref">↩︎</a>
	        <a aria-label="Back to reference #1:1" href="#fnref1:1" class="footnote-backref">↩︎</a>
	    </li>
        <li id="fn2" class="footnote-item">
	        Second footnote
	        <a aria-label="Back to reference #2" href="#fnref2" class="footnote-backref">↩︎</a>
	    </li>
    </ol>
</section>
```

As for the CSS, in addition to using the `.visually-hidden` utility class, I refer to Kitty Giraudel's  ["Accessible Footnotes with CSS"](https://www.sitepoint.com/accessible-footnotes-css/) article to style the highlight background color when heading to a footnote from a reference.

## Configure markdown-it-footnote in Eleventy's Configuration File

(If you do not use Eleventy, you may skip this section)

My final step was to configure the markdown-it-footnote plugin, by editing Eleventy's configuration file (I named mine `eleventy.config.js`), so the plugin would render my accessible footnote HTML markup.

```js
// markdown-it plugins
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
let markdownLibrary;

module.exports = function (eleventyConfig) {
    /* Markdown Overrides */
    markdownLibrary = markdownIt({
        html: true,
    }).use(markdownItFootnote);

    // Configure markdown-it-footnote
    markdownLibrary.renderer.rules.footnote_block_open = () => (
        '<hr class="footnotes-sep">\n' +
        '<section class="footnotes">\n' +
        `<h2>Footnotes</h2>\n`
    );

    markdownLibrary.renderer.rules.footnote_anchor = (tokens, idx, options, env, slf) => {
        let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

        if (tokens[idx].meta.subId > 0) id += `:${tokens[idx].meta.subId}`;

        /* ↩ with escape code to prevent display as Apple Emoji on iOS */
        return ` <a aria-label="Back to reference #${id}" href="#fnref${id}" class="footnote-backref">\u21a9\uFE0E</a>`;
    };

    const renderRules = {
        footnote_caption: ['[', '[<span class="visually-hidden">Footnote #</span>'],
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
```

If you are a fellow Eleventy user, feel free to borrow my markdown-it-footnote configurations in your own. Make sure you install markdown-it-footnote first by keying in the installation command in the terminal:

```powershell
npm install markdown-it-footnote --save
```

## Bonus: Alternatives to Footnotes

As you likely have realised, footnotes are really tricky to implement on web pages, so you may be wondering: is there any alternative to footnotes?

For extra comments and tangents, by favourite approach is using HTML's details disclosure element with the `<details>` tag, with a [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) element and a sibling element wrapping the content displayed when the disclosure is expanded.

I have been using the disclosure element for additional comments or information on this website, like in my blog post, ["My Cassette Beasts Fanlisting Application has been Approved"](/blog/posts/2024-06-24-cassette-beasts-fanlisting-approved/). As for the styling, initially I indented the content inside the disclosure to differentiate the disclosure content from the rest of the content of the page, but recently I switched to adding top and bottom borders after being inspired by [Starbreaker](https://starbreaker.org/)'s website, who also has a post about footnotes, ["Footnotes: No Fun to Create, Either"](https://starbreaker.org/blog/tech/footnotes-no-fun-to-create-either/index.html).

{% disclosure "More ways to use `<details>` and `<summary>` elements" %}
`<details>` and `<summary>` have become among my favourite HTML elements due to how useful they are. In addition to extra comments and info, Leilukin's Hub has also used the elements for the following purposes:
- Table of contents, like the one this very article has
- Hiding spoilers, like in my {% cite "Cassette Beasts" %} shrine article, ["How Cassette Beasts is Much More than a Pokémon Clone"](/shrines/cassettebeasts/articles/cassette-beasts-more-than-a-pokemon-clone/)
- Content warnings, like in my [{% cite "A Summer’s End — Hong Kong 1986" %} shrine's gallery page](/shrines/asummersend/gallery/), with its styling being inspired by another Kitty Giraudel's blog post, ["A content warning component"](https://kittygiraudel.com/2022/09/04/a-content-warning-component/)
{% enddisclosure %}

As for citing sources, the simplest way would be naming and linking to the source in the main text of your page, though it does mean you may end up repeating the title of the source if you want to attribute to it more than once on your page. This was once the approach of my shrine pages, though I found the pages looked rather cluttered, so I eventually chose to use markdown-it-footnote alongside Eleventy.

## Wrapping Up

Creating and maintaining footnotes on web pages is tricky, so I hope my article about accessible footnotes is helpful if you want to create them.

I am still not completely certain if my method is the best, although I tried to the best of my abilities, so I am interested in hearing feedback for my way of implementing accessible footnotes.