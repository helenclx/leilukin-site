/* ------ CASSETTE BEASTS SHRINE HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="./img/cassettebeasts-header.png" alt="">
`;


/* ------ CASSETTE BEASTS SHRINE NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/cassettebeasts/">Shrine Home</a></li>
        <li><a href="./featured.html">Featured</a></li>
        <li><a href="./trivia.html">Trivia</a></li>
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
        <p><cite>Cassette Beasts</cite> is an 80’s vibe Creature Collector turn-based RPG set in a vast and colourful open world. Record and collect awesome monster forms to use in turn-based battles, or for their abilities to traverse the world. Use the Fusion System to create unique and powerful by combining any two monsters.</p>
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
    <p>Made with ♥ by Leilukin | Shrine Launched: August 3, 2023</p>
    <p><a href="#page-top">Back to top</a></p>
`;