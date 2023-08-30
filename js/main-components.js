/* ------ MAIN HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="/assets/Leilukins-Hub-website-banner.png" alt="">
`;


/* ------ MAIN NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/home.html">Home</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/articles/">Articles</a></li>
        <li><a href="/mycreations/">My Creations</a></li>
        <li><a href="/mymods/">My Mods</a></li>
        <li><a href="/playlists/">Playlists</a></li>
        <li><a href="/featured/">Featured</a></li>
        <li><a href="/resources/">Resources</a></li>
        <li><a href="/shrines/">Shrines</a></li>
        <li><a href="/links/">Links</a></li>
        <li><a href="https://leilukin.123guestbook.com/">Guestbook</a></li>
    </ul>
`;

// Make the navigation bar sticky
const header = document.querySelector(".main-header");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", e => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const stickyLine = header.scrollHeight - navbar.scrollHeight;
    if (scrollPos > stickyLine) {
            navbar.classList.add("sticky-nav");
    } else {
            navbar.classList.remove("sticky-nav");
    }
});


/* ------ MAIN FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | <a href="/sitemap.html">Site Map</a></p>
    <p>Site Launched: 11 September 2022 | <a href="/changelog">Website Changelog</a></p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;