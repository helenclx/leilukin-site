/* ------ STAR WARS KOTOR SHRINE HEADER COMPONENT ------ */
const header = document.querySelector(".main-header");

header.innerHTML = loadHeader();

function loadHeader() {
    const headerTopBar = `<div class="main-header__top-bar"></div>`;
    const headerImg = `<img src="/shrines/starwarskotor/img/swkotor-header.jpg
    " alt="">`;
    const todayEvent = getTodayEvent();

    if (todayEvent == "No event") {
        return headerImg;
    } else {
        return headerTopBar + headerImg;
    };
}

const todayEvent = getTodayEvent();
const headerTopBarEl = document.querySelector(".main-header__top-bar");

if (todayEvent != "No event") {
	headerTopBarEl.innerHTML = getBlurbHtml(todayEvent);
};

function getTodayEvent() {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
		
	if (month == 7 && day == 16)
		return "KotOR 1 Anniversary";
	else if (month == 12 && day == 6)
		return "KotOR 2 Anniversary";
	else
		return "No event";
}

function getBlurbHtml(day) {
	switch (day) {
        case "KotOR 1 Anniversary":
            return `
                Today is the anniversary of the release of <cite>Star Wars: Knihgts of the Old Republic</cite>
            `;
            break;
        case "KotOR 2 Anniversary":
            return `
                Today is the anniversary of the release of <cite>Star Wars: Knights of the Old Republic II — The Sith Lords</cite>
            `;
            break;
        default:
            return ``;
	}
}

/* Navigation component content */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/starwarskotor/">Shrine Home</a></li>
        <li><a href="/shrines/starwarskotor/articles/">Articles</a></li>
        <li><a href="/shrines/starwarskotor/guides/">Guides</a></li>
        <li><a href="/shrines/starwarskotor/resources/">Resources</a></li>
        <li><a href="/shrines/starwarskotor/universes/">Universes</a></li>
        <li><a href="/home.html">Main Site</a></li>
    </ul>
`;

// Make the navigation bar sticky
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
// document.querySelector(".right-sidebar").innerHTML = `
    
// `;


/* ------ STAR WARS KOTOR SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ and the Force by Leilukin | Shrine Launched: 17 February 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;