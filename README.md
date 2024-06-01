# Leilukin's Hub

Source code of my hobby website, [Leilukin's Hub](https://leilukin.com/). Built with [Eleventy](https://www.11ty.dev/).

Deployed [Netlify](https://www.netlify.com/) and [Neocities](https://neocities.org/). The [deploy-to-neocities](https://github.com/bcomnes/deploy-to-neocities) GitHub action is used to deploy this site to Neocities.

Originally, this website was hosted on Neocities exclusively. While I am still deploying this site to Neocities, visiting `leilukin.neocities.org` will redirect you to `leilukin.com`. That said, if you also have a Neocities account, you can still follow me through [my Neocities profile](https://neocities.org/site/leilukin).

## Dependencies
- [Eleventy](https://www.11ty.dev/)
- Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin
- Eleventy's official [Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin
- [@zachleat/details-utils](https://www.npmjs.com/package/@zachleat/details-utils)
- [netlify-plugin-cache](https://www.npmjs.com/package/netlify-plugin-cache)

### Eleventy Community Plugins
- [@11tyrocks/eleventy-plugin-emoji-readtime](https://www.npmjs.com/package/@11tyrocks/eleventy-plugin-emoji-readtime)
- [eleventy-plugin-embed-everything](https://www.npmjs.com/package/eleventy-plugin-embed-everything)
- [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen)
- [@uncenter/eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)

### markdown-it plugins
- [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
- [markdown-it-attribution](https://www.npmjs.com/package/markdown-it-attribution)
- [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
- [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)
- [markdown-it-deflist](https://www.npmjs.com/package/markdown-it-deflist)
- [markdown-it-footnote](https://www.npmjs.com/package/markdown-it-footnote)

## Self-hosted Assets
- [Lexend](https://www.lexend.com/) font family
- [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) typeface
- [Font Awesome](https://fontawesome.com/)

## Run Locally
Recommended JavaScript runtime: [Bun](https://bun.sh).

1. Clone this repository locally
    ```
    git clone https://github.com/helenclx/Neocities-Leilukin.git
    ```
1. Install dependencies
    ```
    bun install
    ```
1. Run the project
    ```
    bun run start
    ```
1. Open http://localhost:8080/ in your browser
