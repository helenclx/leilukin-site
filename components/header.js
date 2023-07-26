/* Header component content */
document.querySelector("header").innerHTML = `
    <img src="/assets/Leilukins-Hub-website-banner.png" alt="">
`;


/* Navigation component content */
document.querySelector("nav").innerHTML = `
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


/* MAKE THE NAVBAR STICKY */
const header = document.querySelector("header");
const navbar = document.querySelector("nav");

window.addEventListener("scroll", e => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
    const stickyLine = header.scrollHeight - navbar.scrollHeight;
    if (scrollPos > stickyLine) {
            navbar.classList.add("sticky-nav");
    } else {
            navbar.classList.remove("sticky-nav");
    }
});