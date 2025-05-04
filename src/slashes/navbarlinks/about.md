---
title: About
desc: About this website and its webmaster.
isContentDivided: true
toc: true
eleventyNavigation:
    key: About
    order: 2
---

{% container "article", "content__section" %}
## About the Website

{{ sitemeta.siteName }} is a literal queer-coded website (as in, this website is coded by a queer person) that serves as a personal hub for my interests and self-expression.

On this site, you can find various stuff I have created or curated. Furthermore, as a web developer, this website serves as a hobby project for me to practice and experiment web development.

Feel free to drop a message and say hi on [my guestbook](/guestbook)!

### Disclaimer

Since I am an adult, I made my website with an adult audience in mind. Therefore, this website may contain profanity, heavy topics and mature content. Viewer discretion is advised.

### Site Meta

{{ sitemeta.siteDomain }} is hosted on [Hostinger](https://www.hostinger.my/).

Initially, {{ sitemeta.siteName }} was hosted on [Neocities](https://neocities.org/). Now visiting leilukin.neocities.org will redirect you to leilukin.com. That said, I still post about updates to Leilukin's Hub on my Neocities profile, so if you also have a Neocities account, you can still follow me through [my Neocities profile](https://neocities.org/site/leilukin).

More information about this site can be found on the following pages:
- [Accessibility statement](/accessibility) for accessibility information
- [Colophon page](/colophon) for technical information

### Link to This Site

{% include "components/my-button.vto" %}
{% /container %}

{% container "article", "content__section" %}
## About the Webmaster

{% imgFigure "/assets/leilukin/leilukin-bee.avif", "Leilukin bee avatar", "avatar" %}
[Image description: Digital illustration of a bee wearing red glasses with an oval-shaped body and wings on a light green background. Leilukin's signature is at the bottom right of the bee. Description ends]
{% endimgFigure %}

{%- css %}
.avatar img {
    border-radius: 50%;
    width: 15rem;
    margin: 0.5em auto;
}
{% endcss %}

You can call me {{ sitemeta.siteAuthor.name }}. I am a Malaysian Chinese, queer, non-binary lesbian on the asexual and aromantic spectrum born in the early 90s. My pronouns are they/them and she/her in English, [他]{lang="zh"} and [她]{lang="zh"} in Chinese. I am a web deevloper with 8 years of experience in the graphic design field.

I speak Mandarin, English, Cantonese and Malay, though I am most fluent in Mandarin and English.

I am also disabled — I am neurodivergent, specifically autistic (so making this website has been a great way to catalogue my interests), and visually impaired, specifically I have [retinitis pigmentosa (RP)](/articles/living-with-retinitis-pigmentosa).

Leilukin is not my real name, but it is an internet pseudonym that I have used since I was a teenager, so the name has become my online identity, and I tend to go by Leilukin in informal and hobbyist online spaces.

[Check out my Now page](/now) to learn what I am doing currently.

### Contact Me

The best way to contact me is via email: [{{ sitemeta.siteAuthor.emailEncoded | safe }}]({{ sitemeta.siteAuthor.emailDecoyUrl }}){rel="nofollow, noindex"}. Using [plain text email](https://useplaintext.email/) is encouraged.

Other online platforms you can find me on:

* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"/></svg> [Mastodon](https://dragonscave.space/@Leilukin)
* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg> [Pixelfed](https://pixel.32bit.cafe/leilukin)
* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"/></svg> [Bluesky](https://bsky.app/profile/leilukin.com){.external-link}
* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg> [YouTube](https://www.youtube.com/Leilukin) (though my channel merely consists of video game footages I recorded)
* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5 .2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9 .1 76.2-33.9 76.2-76.2z"/></svg> [Steam](https://steamcommunity.com/id/leilukin/)
* <svg class="inline-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z"/></svg> [The StoryGraph](https://app.thestorygraph.com/profile/leilukin)

### Support Me

{% include "main/support-me.html" %}
{% /container %}
