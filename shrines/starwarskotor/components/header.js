class Header extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <header>
                <img src="/shrines/starwarskotor/img/swkotor-header.jpg" alt="">
            </header>
            <nav>
                <ul class="nav__menu">
                    <li class="nav__title"><a href="/shrines/starwarskotor/">Star Wars: KotOR</a></li>
                    <li class="nav__item"><a href="/shrines/starwarskotor/">Home</a></li>
                    <li class="nav__item"><a href="/shrines/starwarskotor/articles/">Articles</a></li>
                    <li class="nav__item"><a href="/shrines/starwarskotor/guides/">Guides</a></li>
                    <li class="nav__item"><a href="/shrines/starwarskotor/resources/">Resources</a></li>
                    <li class="nav__item"><a href="/home.html">Main Site</a></li>
                    <li class="nav__toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        `;
    }
}
  
customElements.define('header-component', Header);  