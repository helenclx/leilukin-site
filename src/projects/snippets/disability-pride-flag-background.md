---
title: Responsive Disability Pride flag CSS Background
desc: CSS code snippet of Disability Pride flag background that can adapt to different widths and screen sizes.
eleventyNavigation:
    order: 5
---

There have been CSS code snippets of LGBTQ+ pride flag backgrounds out there, such as [Alvaro Montoro's LGBTQ+ Flags Coded in CSS demo](https://codepen.io/alvaromontoro/full/NWyBrZJ), but I could not find one for the [Disability Pride flag](https://www.womansday.com/life/a43964487/disability-pride-flag/), which was created by [Ann Magill](https://capri0mni.dreamwidth.org/837596.html) and released in 2021.

Therefore, at the start of [Disability Pride Month](https://en.wikipedia.org/wiki/Disability_Pride_Month) in July 2024, I decided to code a Disability Pride flag background in CSS, and now I am releasing my code snippet for public use.

My Disability Pride flag CSS background is done with a combination of the CSS [`background` property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) and [`linuear-gradient()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient), and designed to be responsive, so it can adapt to different screen sizes and devices.

I have used JavaScript to set up the header of the main part of this website, so it will display the Disability Pride flag as its background during July.

Since Ann Magill released the Disability Pride flag to the public domain under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/), I am doing the same to my responsive Disability Pride flag CSS background. Therefore, you are free to use my code and do what you want with it without asking for permission or crediting me.

## Demo
{%- css %}
.flag-disability.demo {
    width: 100%;
    height: 20rem;
}
{% endcss %}

<div class="flag-disability demo" role="img" aria-label="Demo of the Disability Pride flag coded in CSS"></div>

## Code

CSS:

```css
.disability-pride-flag {
    background:
        linear-gradient(
            37deg,
            #595959 0 35%,
            #CF7280 30% 41%,
            #EEDE77 30% 47%,
            #E8E8E8 30% 53%,
            #7bc2e0 30% 59%,
            #3BB07D 30% 65%,
            #595959 0
        );
}
```

After copying the above snippet in a CSS stylesheet or the HTML `<style>` tags, to apply the background to an HTML element, simply add the CSS class name `disability-pride-flag` (you can rename the class name if you want) to the HTML element's `class` attribute.