/* ------ STAR WARS KOTOR SHRINE HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="/shrines/starwarskotor/img/swkotor-header.jpg" alt="">
`;

/* Navigation component content */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/starwarskotor/">Shrine Home</a></li>
        <li><a href="/shrines/starwarskotor/articles/">Articles</a></li>
        <li><a href="/shrines/starwarskotor/guides/">Guides</a></li>
        <li><a href="/shrines/starwarskotor/resources/">Resources</a></li>
        <li><a href="/shrines/starwarskotor/universes/">Universes</a></li>
        <li><a href="/home.html">Main Site</a></li>
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


/* ------ STAR WARS KOTOR SHRINE SIDEBAR COMPONENT ------ */
// document.querySelector(".right-sidebar").innerHTML = `
    
// `;


/* ------ STAR WARS KOTOR SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ and the Force by Leilukin | Shrine Launched: 17 February 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;