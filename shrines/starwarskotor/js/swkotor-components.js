/* ------ STAR WARS KOTOR SHRINE HEADER COMPONENT ------ */
document.querySelector(".main-header").innerHTML = `
    <img src="/shrines/starwarskotor/img/swkotor-header.jpg" alt="">
`;

/* Navigation component content */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/starwarskotor/">Home</a></li>
        <li><a href="/shrines/starwarskotor/articles/">Articles</a></li>
        <li><a href="/shrines/starwarskotor/guides/">Guides</a></li>
        <li><a href="/shrines/starwarskotor/resources/">Resources</a></li>
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
document.querySelector(".right-sidebar").innerHTML = `
    <div class="sidebar--sticky">
        <h2>About</h2>
        <p><cite>Star Wars: Knights of the Old Republic</cite> is a space opera role-playing video game series that takes place in the <cite>Star Wars</cite> universe. The story takes place approximately 4,000 years before the rise of the Galactic Empire.</p>

        <h2>Fan Listings</h2>
        <p>I have joined these fan listings for the <cite>KotOR</cite> games:</p>
        <a href="https://glitterskies.org/kotor/" target="_blank"><img src="/links/fanlistings/kotor-100x50.png" alt="A website button of a Star Wars: Knights of the Old Republic fanlisting" title="Erased Identity - Star Wars: Knights of the Old Republic fanlisting"></a>
        <a href="https://glitterskies.org/kotor2/" target="_blank"><img src="/links/fanlistings/kotor2-100x50.jpg" alt="A website button of a Star Wars: Knights of the Old Republic 2 fanlisting" title="Mysteries of Malachor - Star Wars: Knights of the Old Republic 2: The Sith Lords fanlisting"></a>
    </div>
`;


/* ------ STAR WARS KOTOR SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ and the Force by Leilukin | Shrine Launched: February 17, 2023</p>
    <p><a href="#page-top">Back to top</a></p>
`;