/* ------ CASSETTE BEASTS SHRINE HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="/shrines/cassettebeasts/img/cassettebeasts-header.png" alt="">
`;


/* ------ CASSETTE BEASTS SHRINE NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/cassettebeasts/">Shrine Home</a></li>
        <li><a href="/shrines/cassettebeasts/articles">Articles</a></li>
        <li><a href="/shrines/cassettebeasts/gamelog">Game Log</a></li>
        <li><a href="/shrines/cassettebeasts/featured.html">Featured</a></li>
        <li><a href="/shrines/cassettebeasts/devinsights.html">Dev Insights</a></li>
        <li><a href="/shrines/cassettebeasts/trivia.html">Trivia</a></li>
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


/* ------ CASSETTE BEASTS SHRINE SIDEBAR COMPONENT ------ */
document.querySelector(".right-sidebar").innerHTML = `
    <div class="sidebar--sticky">
        <h2>About</h2>
        <p>Welcome to Leilukin's shrine for <cite>Cassette Beasts</cite>, an indie monster taming turn-based open-world RPG developed by Bytten Studio and published by Raw Fury.</p>
        <h3>Links</h3>
        <ul>
            <li><a href="https://www.cassettebeasts.com/" target="_blank">Official Website</a>
            </li>
            <li><a href="https://wiki.cassettebeasts.com/" target="_blank">Official Wiki</a></li>
            <li><a href="https://store.steampowered.com/app/1321440/Cassette_Beasts/" target="_blank">Steam</a></li>
            <li><a href="https://bytten-studio.com/" target="_blank">Bytten Studio</a></li>
        </ul>
    </div>
`;


/* ------ CASSETTE BEASTS SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | Shrine Launched: 3 August 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;