class Footer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <footer>
                Made with ♥ by Leilukin | <a href="#page-top">Back to top</a>
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);  