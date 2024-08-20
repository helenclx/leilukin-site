---
title: Colophon
keyword: colophon page
updated: 2024-08-20T09:55:39+0800
toc: true
eleventyNavigation:
    order: 14
---

Information about how this website is built.

## Technology
* Built with the static site generator [Eleventy](https://www.11ty.dev/) (version 3.0)
* Templating languages: Nunjucks and Markdown
* Code written with Visual Studio Code
* JavaScript runtime: [Bun](https://bun.sh)
* Tested browsers: Mozilla Firefox and Lynx
* Source code available on [GitHub](https://github.com/helenclx/leilukin-site) and its [Gitea mirror](https://git.32bit.cafe/Leilukin/leilukin-site)

## Host and Domain
* Deployed to [Hostinger](https://www.hostinger.my/) from this site's GitHub repository with a GitHub action
* The domain name, {{ sitemeta.siteDomain }}, was registered on 30 May 2024, was purchased from, registered on, and is managed by [Porkbun](https://porkbun.com/)

Previously, this website was hosted on [Neocities](https://neocities.org/) until 31 May 2024, and [Netlify](https://www.netlify.com/) until 25 July 2024.

## Plugins
* Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin
* Eleventy's official [Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin
* Eleventy's official [Syntax Highlighting](https://www.11ty.dev/docs/plugins/syntaxhighlight/) plugin
* Eleventy's official [Fetch](https://www.11ty.dev/docs/plugins/fetch/) plugin
* [@zachleat/details-utils](https://www.npmjs.com/package/@zachleat/details-utils)

### Eleventy Community Plugins
* [@11tyrocks/eleventy-plugin-emoji-readtime](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime)
* [eleventy-plugin-embed-everything](https://www.npmjs.com/package/eleventy-plugin-embed-everything)
* [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen)
* [@uncenter/eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)

### markdown-it plugins
Eleventy has the Markdown parser [markdown-it](https://www.npmjs.com/package/markdown-it) built in to render Markdown to HTML.
* [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [markdown-it-attribution](https://www.npmjs.com/package/markdown-it-attribution)
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)
* [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist)
* [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)

## Self-hosted Assets
* [Lexend](https://www.lexend.com/) font family — used as the default font of this site
* [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) typeface — used as the monospaced font of this site
* Eric Bailey's [a11y-syntax-highlighting](https://github.com/ericwbailey/a11y-syntax-highlighting) CSS dark mode stylesheet for Prism.js

## JavaScript
Due to this website being a static site, JavaScript is used to create dynamic and interactive components of this site. Here is a list of how JavaScript is used on this site:

* The header of every page uses JavaScript to detect the visitor's current date, so the header will display a top blurb and in some cases also changes the header background on certain dates, including:
    * LGBTQ+ events, International Women's Day, Disability Pride Month, website anniversary and my birthday;
    * Release anniversaries of media with dedicated shrines, including:
        * [{% cite "A Summer’s End — Hong Kong 1986" %}](/shrines/asummersend)
        * [{% cite "Star Wars: Knights of the Old Republic" %}](/shrines/starwarskotor)
        * [{% cite "Cassette Beasts" %}](/shrines/cassettebeasts)
    * Birthdays of characters from {% cite "A Summer’s End — Hong Kong 1986" %} on its shrine.
* Scott O'Hara's [ARIA Tooltips](https://github.com/scottaohara/a11y_tooltips) script is used to implement accessible tooltips that meet Web Content Accessibility Guidelines (WCAG) 2.2 success criterion for [1.4.13: Content on Hover or Focus (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html), by allowing visitors to see tooltips on keyboard focus and dismiss tooltips by pressing the Escape key.
* Zach Leatherman's [details-utils](https://www.npmjs.com/package/@zachleat/details-utils) JavaScript package is used to automatically expand sidebar table of contents on wide screens.
* [status.cafe](https://status.cafe/) widget, which is placed on the home page, uses JavaScript to fetch data of my latest status update.
* [Website Carbon Badge](https://www.websitecarbon.com/badge/), which is placed on the home page, uses JavaScript to calculate the carbon footprint of this website.
* [Links page](/links)'s [Joined tab](/links/#joined) includes webring widgets that use JavaScript.
* [Guestbook](/guestbook) uses JavaScript to render a form, send form data to my private Discord channel via Discord webhook, and fetch data from Google Sheets to display messages on the web page (guestbook code by [Vera Konigin](https://groundedwren.neocities.org/pages/controls/guestbookDemo)).

You can still access most of the content of this site with JavaScript disabled, but the above components will not work as intended.