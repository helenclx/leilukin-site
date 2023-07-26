/* Header component content */
document.querySelector("header").innerHTML = `
    <img src="./img/asummersend_header.png" alt="">
`;


/* Navigation component content */
document.querySelector("nav").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/asummersend/">Shrine Home</a></li>
        <li><a href="./playlists.html">Playlists</a></li>
        <li><a href="./trivia.html">Trivia</a></li>
        <li><a href="./gallery.html">Gallery</a></li>
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