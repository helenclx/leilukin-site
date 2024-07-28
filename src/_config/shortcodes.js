import slugify from "slugify";
import { markdownLibrary } from "./markdown-it.js";

export default function(eleventyConfig) {
    // <cite> tag
    eleventyConfig.addShortcode('cite', (str) => `<cite>${str}</cite>`);

    // Manual heading anchor
    eleventyConfig.addPairedShortcode('headingAnchor', (title, hLevel, id=slugify(title)) => {
        return `<div class="heading-wrapper h${hLevel}">
            <h${hLevel} id="${id}">${title}</h${hLevel}>
            <a class="heading-anchor" href="#${id}" aria-labelledby="${id}"><span hidden="">#</span></a>
        </div>`;
    });

    // Custom container
    eleventyConfig.addPairedShortcode('container', (children, el, className) => {
        const classMarkup = className ? ` class="${className}"` : "";
        const content = markdownLibrary.render(children);
        return `<${el}${classMarkup}>${content}</${el}>`;
    });

    // Image figure and figcaption
    eleventyConfig.addPairedShortcode('imgFigure', (caption, img, alt=caption, enableLazyLoading=true) => {
        const figcaption = markdownLibrary.renderInline(caption);
        return `<figure>
            <img src="${img}" alt="${alt}"${enableLazyLoading ? ' loading="lazy"' : ''}>
            <figcaption>${figcaption}</figcaption>
        </figure>`;
    });

    // Content accordion
    eleventyConfig.addPairedShortcode('accordion', (content, summary) => {
        const summaryMarkup = markdownLibrary.renderInline(summary);
        const contentMarkup = markdownLibrary.render(content);
        return `<details class="content-accordion">
            <summary class="content-accordion__summary">${summaryMarkup}</summary>
            <div class="content-accordion__content">${contentMarkup}</div>
        </details>`;
    });

    // Paired shorcode: Content warning accordion
    eleventyConfig.addPairedShortcode('contentWarning', (content, warning) => {
        const warningMarkup = markdownLibrary.renderInline(warning);
        const contentMarkup = markdownLibrary.render(content);
        return `<details class="contnet-warning">
            <summary class="contnet-warning__warning"><strong><span aria-hidden="true">⚠️</span> Content Warning:</strong> ${warningMarkup}</summary>
            <div class="contnet-warning__content">${contentMarkup}</div>
        </details>`;
    });
}