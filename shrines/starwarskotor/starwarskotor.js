/* --- SCRIPT FOR THE NAVIGATION BAR --- */
var navBarHTML = `
    <ul>
        <li><a href="/shrines/starwarskotor/">Home</a></li>
        <li><a href="/shrines/starwarskotor/articles/">Articles</a></li>
        <li><a href="/shrines/starwarskotor/guides/">Guides</a></li>
        <li><a href="/shrines/starwarskotor/resources/">Resources</a></li>
        <li><a href="/home.html">Main Site</a></li>
    </ul>
`;

document.querySelector("#navbar").innerHTML = navBarHTML;


/* --- SCRIPT FOR THE RIGHT SIDEBAR --- */
var leftSidebarHTML = `
    <h2>About</h2>
        <p><em>Star Wars: Knights of the Old Republic</em> is a space opera role-playing video game series that takes place in the <em>Star Wars</em> universe. The story takes place approximately 4,000 years before the rise of the Galactic Empire.</p>
`;

document.querySelector("#leftSidebarContent").innerHTML = leftSidebarHTML;