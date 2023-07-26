/* Header component content */
document.querySelector("header").innerHTML = `
    <img src="/shrines/starwarskotor/img/swkotor-header.jpg" alt="">
`;

/* Navigation component content */
document.querySelector("nav").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/starwarskotor/">Home</a></li>
        <li><a href="/shrines/starwarskotor/articles/">Articles</a></li>
        <li><a href="/shrines/starwarskotor/guides/">Guides</a></li>
        <li><a href="/shrines/starwarskotor/resources/">Resources</a></li>
        <li><a href="/home.html">Main Site</a></li>
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