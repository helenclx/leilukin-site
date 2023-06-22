class Footer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <footer>
                Made with ♥ and the Force by Leilukin | <a href="#page-top">Back to top</a>
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);  