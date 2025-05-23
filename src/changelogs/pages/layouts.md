---
layout: partials/changelogs
title: Website Layout Archive
desc: An archive for the page layout designs mt website has used.
changelogNav: Website Layouts
toc: true
eleventyNavigation:
    order: 1
---

{{ function siteLayout(params) }}
## {{ params.title }}
{{ for screenshot of params.screenshots }}
<img src="/assets/layouts/{{ screenshot.imgFile }}" alt="{{ screenshot.imgAlt }}" loading="lazy">
{{ /for }}
{{ /function }}

{{ siteLayout({
    title: "20 April 2024",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2024-04.avif",
            imgAlt: "Leilukin's Hub home page on 11 September 2023"
        },
        {
            imgFile: "Leilukins-Hub-blog-layout-2024-04.avif",
            imgAlt: "Leilukin's Hub blog on 11 September 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "11 September 2023 Blog Layout",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-blog-layout-2023-09.avif",
            imgAlt: "Leilukin's Hub blog on 11 September 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "23 June 2023",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2023-06.avif",
            imgAlt: "Leilukin's Hub home page on 23 June 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "26 January 2023",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2023-01.avif",
            imgAlt: "Leilukin's Hub home page on 26 January 2023"
        }
    ]
}) }}

{{ siteLayout({
    title: "11 September 2022 (Site Launch)",
    screenshots: [
        {
            imgFile: "Leilukins-Hub-layout-2022-index.avif",
            imgAlt: "Leilukin's Hub index page during the site's launch on 11 September 2022"
        },
        {
            imgFile: "Leilukins-Hub-layout-2022-page.avif",
            imgAlt: "Leilukin's Hub My Creation page during the site's launch on 11 September 2022"
        }
    ]
}) }}
