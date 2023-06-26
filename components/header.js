class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img src="/assets/Leilukins-Hub-website-banner.png" alt="">
            </header>
            <nav>
                <ul class="nav__menu">
                    <li class="nav__title"><a href="/">Leilukin's Hub</a></li>
                    <li class="nav__item"><a href="/home.html">Home</a></li>
                    <li class="nav__item"><a href="/about/">About</a></li>
                    <li class="nav__item"><a href="/blog/">Blog</a></li>
                    <li class="nav__item"><a href="/articles/">Articles</a></li>
                    <li class="nav__item"><a href="/mycreations/">My Creations</a></li>
                    <li class="nav__item nav__has-submenu">
                        <a tabindex="0">My Mods</a>
                        <ul class="nav__submenu">
                            <li class="nav__subitem"><a href="/mymods/">Index</a></li>
                            <li class="nav__subitem"><a href="/mymods/kotor1mods/">KotOR 1</a></li>
                            <li class="nav__subitem"><a href="/mymods/kotor2mods/">KotOR 2</a></li>
                        </ul>
                    </li>
                    <li class="nav__item"><a href="/playlists/">Playlists</a></li>
                    <li class="nav__item"><a href="/featured/">Featured</a></li>
                    <li class="nav__item"><a href="/resources/">Resources</a></li>
                    <li class="nav__item nav__has-submenu">
                        <a tabindex="1">Shrines</a>
                        <ul class="nav__submenu">
                            <li class="nav__subitem"><a href="/shrines/">Index</a></li>
                            <li class="nav__subitem"><a href="/shrines/asummersend/">A Summer's End</a></li>
                            <li class="nav__subitem"><a href="/shrines/starwarskotor/">Star Wars: KotOR</a></li>
                        </ul>
                    </li>
                    <li class="nav__item"><a href="/links/">Links</a></li>
                    <li class="nav__item"><a href="/sitemap.html">Site Map</a></li>
                    <li class="nav__toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        `;
    }
}
  
customElements.define('header-component', Header);  