var currentPath = window.location.pathname;


/* --- SCRIPT FOR THE RIGHT SIDEBAR --- */

// HTML template for the right sidebar
var leftSidebarHTML = `
    <h2>Navigation</h2>
        <ul class="nav-links"></ul>
`;
document.querySelector("#leftSidebarContent").innerHTML = leftSidebarHTML;

// Variables for the list of navigation links
var navList = "";
var navLinks = [
    `<li><a href="home.html">Home</a></li>`,
    `<li><a href="about/index.html">About</a></li>`,
    `<li><a href="blog/index.html">Blog</a></li>`,
    `<li><a href="articles/index.html">Articles</a></li>`,
    `<li><a href="mycreations/index.html">My Creations</a></li>`,
    `<li><a href="mymods/index.html">My Mods</a></li>`,
    `<li><a href="playlists/index.html">Playlists</a></li>`,
    `<li><a href="featured/index.html">Featured</a></li>`,
    `<li><a href="resources/index.html">Resources</a></li>`,
    `<li><a href="shrines/index.html">Shrines</a></li>`,
    `<li><a href="links/index.html">Links</a></li>`,
    `<li><a href="changelog/index.html">Changelog</a></li>`,
    `<li><a href="sitemap.html">Site Map</a></li>`
];

// To show subpage links when visiting certain pages
if (currentPath.includes("mymods/")) {
    navLinks.splice(6, 0, `
    <ul>
        <li><a href="mymods/kotor1mods/index.html">KotOR 1</a></li>
        <li><a href="mymods/kotor2mods/index.html">KotOR 2</a></li>
    </ul>
    `);
}

if (currentPath.includes("changelog/")) {
    navLinks.splice(12, 0, `
    <ul>
        <li><a href="changelog/2022.html">2022</a></li>
        <li><a href="changelog/layouts.html">Layout Archive</a></li>
    </ul>
    `);
}

// Go through the list of navigation link and display them
for (let i = 0; i < navLinks.length; i++) {
    navList += navLinks[i];
}
document.querySelector(".nav-links").innerHTML = navList;


/* --- SCRIPT FOR THE FOOTER --- */

// Generate footer content
var footerHTML = `
    Site Launched: September 11, 2022 by Leilukin
`;
document.querySelector("#footer").innerHTML = footerHTML;