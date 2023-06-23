class Footer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <footer>
                Site Launched: September 11, 2022 by Leilukin | <a href="/changelog">Website Changelog</a> | <a href="#page-top">Back to top</a>
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);  