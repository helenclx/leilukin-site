---
title: Articles
desc: List of articles published on my website.
toc: true
eleventyNavigation:
    order: 5
---

{% from "global/macros.njk" import articleList with context %}

## My Articles
Articles I have written.
{{ articleList("my articles") }}

## My Articles for Video Games with Their Own Pages
* My {% cite "Cassette Beasts" %} shrine [Articles](/shrines/cassettebeasts/articles/) page
* My {% cite "Star Wars: Knights of the Old Republic" %} shrine [Articles](/shrines/starwarskotor/articles/) page

## Featured Articles
Articles featuring other people's interview with me.
{{ articleList("featured articles") }}