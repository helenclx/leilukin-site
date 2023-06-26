class Footer extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>Made with ♥ by Leilukin</p>
                <p>Site Launched: September 11, 2022</p>
                <p><a href="/changelog">Website Changelog</a> | <a href="#page-top">Back to top</a></p>
            </footer>
        `;
    }
}
  
customElements.define('footer-component', Footer);  