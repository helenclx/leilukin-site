---
title: Articles
desc: List of articles published on my website.
toc: true
eleventyNavigation:
    order: 5
---

## My Articles
Articles I have written.
<ul>
{%- for article in collections["my articles"] -%}
    <li>
        <p class="item-list__title">
            <a href="{{ article.url }}">{{ article.data.articleTitle }}</a>
        </p>
        <time datetime="{{ article.date }}">{{ article.date | formatDate }}</time>
    </li>
{%- endfor -%}
</ul>

## My Articles for Video Games with Their Own Pages
* My {% cite "Cassette Beasts" %} shrine [Articles](/shrines/cassettebeasts/articles/) page
* My {% cite "Star Wars: Knights of the Old Republic" %} shrine [Articles](/shrines/starwarskotor/articles/) page

## Featured Articles
Articles featuring other people's interview with me.
<ul>
{%- for article in collections["featured articles"] -%}
    <li>
        <p class="item-list__title">
            <a href="{{ article.url }}">{{ article.data.articleTitle }}</a>
        </p>
        <time datetime="{{ article.date }}">{{ article.date | formatDate }}</time>
    </li>
{%- endfor -%}
</ul>