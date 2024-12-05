---
layout: cassettebeasts/content
title: Articles
pageTitle: Cassette Beasts Articles
desc: List of articles written by me or other people that I recommend for Cassette Beasts.
tags: cassette beasts shrine page
toc: true
eleventyNavigation:
    key: Cassette Beasts Articles
    parent: Cassette Beasts Shrine
    title: Articles
    order: 1
---

## My {% cite "Cassette Beasts" %} Articles
<ul>
{%- for article in collections["cassette beasts articles"] -%}
    <li>
        <p class="item-list__title">
            <a href="{{ article.url }}">{{ article.data.articleTitle }}</a>
        </p>
        <time datetime="{{ article.date }}">{{ article.date | formatDate }}</time>
    </li>
{%- endfor -%}
</ul>

## {% cite "Cassette Beasts" %} Articles I Recommend

* [Cassette Beasts Level-Up Dialogue Summaries (Meredith)](https://www.pillowfort.social/posts/3642949) by ArgentDandelion on Pillowfort

    An analysis of Meredith's character.{.item-list__indent}

* [Cassette Beasts Level-Up Dialogue Summaries (Viola)](https://www.pillowfort.social/posts/3792935) by ArgentDandelion on Pillowfort

    An analysis of Viola's character.{.item-list__indent}

* [A Case Of Autism: Meredith (Cassette Beasts)](https://www.youtube.com/watch?v=jFJ6tMeGsLg) by Optical Drop

    A video analysis of Meredith's autistic coding.{.item-list__indent}