---
title: Projects
isContentDivided: true
toc: true
eleventyNavigation:
    order: 6
eleventyComputed:
    desc: Things {{ sitemeta.siteAuthor.name }} has created.
---

{% container "section", "content__section" %}
## My Other Websites
* [Leilukin's Hub Tumbleblog](https://tumbleblog.leilukin.com/) — My tumbleblog powered by [Chyrp Lite](https://chyrplite.net/)
* [Beehive](https://fan.leilukin.com/) — My fanlisting collective
{% endcontainer %}

{% container "section", "content__section" %}
## My Code Projects
<ul>
{%- for project in collections["code projects"] -%}
    <li><a href="{{ project.url }}">{{ project.data.title }}</a> — {{ project.data.desc }}</li>
{%- endfor -%}
</ul>
{% endcontainer %}

{% container "section", "content__section" %}
## My Drawings

My drawings can be found on my art blog on Tumblr:

[🎨 Leilukin's Art Blog](https://leilukinart.tumblr.com/){.link-btn}
{% endcontainer %}

{% container "section", "content__section" %}
## My Video Game Mods

I have created mods (short for "modifications") for the following video games:
<ul>
{%- for mods in collections["video game mods"] -%}
    <li>
        <a href="{{ mods.url }}">{{ mods.data.title }}</a>
    </li>
{%- endfor -%}
</ul>
{% endcontainer %}

{% container "section", "content__section" %}
## My Playlists

You can check out the playlists I have made on [my dedicated page](./playlists/).
{% endcontainer %}

{% container "section", "content__section" %}
## My Characters

I have created my own characters for various media and universes. [You can check out my characters here](https://www.notion.so/leilukin/Leilukin-s-Characters-b377e277f01b4474945e85cf4cb15ada?pvs=4).
{% endcontainer %}