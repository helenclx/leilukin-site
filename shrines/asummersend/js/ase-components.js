/* ------ A SUMMER'S END SHRINE HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="./img/asummersend_header.png" alt="">
`;


/* ------ A SUMMER'S END SHRINE NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/asummersend/">Shrine Home</a></li>
        <li><a href="./playlists.html">Playlists</a></li>
        <li><a href="./trivia.html">Trivia</a></li>
        <li><a href="./gallery.html">Gallery</a></li>
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


/* ------ A SUMMER'S END SHRINE SIDEBAR COMPONENT ------ */
document.querySelector(".right-sidebar").innerHTML = `
    <div class="sidebar--sticky">
        <h2>About</h2>
        <p><cite>A Summer’s End — Hong Kong 1986</cite> is a visual novel set in 1980s Hong Kong. It tells of a love story between two women. Lush and vibrant visuals, the game features over 400 unique hand-drawn artwork inspired by Asian cinema and 1980s anime.</p>
        <h3>Links</h3>
        <ul>
            <li><a href="https://www.asummersend.com/" target="_blank">Official Website</a>
            </li>
            <li><a href="https://store.steampowered.com/app/1111370/A_Summers_End__Hong_Kong_1986/" target="_blank">Steam</a></li>
            <li><a href="https://oracleandbone.itch.io/a-summers-end" target="_blank">itch.io</a></li>
        </ul>
    </div>
`;


/* ------ A SUMMER'S END SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | Shrine Launched: 16 February 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;