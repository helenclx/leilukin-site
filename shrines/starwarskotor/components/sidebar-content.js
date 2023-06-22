class RightSidebarContent extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `
            <h2>About</h2>
            <p><em>Star Wars: Knights of the Old Republic</em> is a space opera role-playing video game series that takes place in the <em>Star Wars</em> universe. The story takes place approximately 4,000 years before the rise of the Galactic Empire.</p>
        `;
    }
}
  
customElements.define('right-sidebar-component', RightSidebarContent);