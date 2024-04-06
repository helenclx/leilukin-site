/* ------ CASSETTE BEASTS SHRINE HEADER COMPONENT ------ */
const header = document.querySelector(".main-header");

header.innerHTML = loadHeader();

function loadHeader() {
    const headerTopBar = `<div class="main-header__top-bar"></div>`;
    const headerImg = `<img src="/shrines/cassettebeasts/img/cassettebeasts-header.png" alt="">`;
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

	if (month == 4 && day == 26)
		return "CB Anniversary";
	else if (month == 9 && day == 12)
		return "Pier Anniversary";
	else
		return "No event";
}

function getBlurbHtml(day) {
	switch (day) {
        case "CB Anniversary":
            return `
                Today is the anniversary of the release of <cite>Cassette Beasts</cite>!
            `;
            break;
        case "Pier Anniversary":
            return `
                Today is the anniversary of the release of <cite>Pier of the Unknown</cite>, the first DLC expansion of <cite>Cassette Beasts</cite>!
            `;
            break;
        default:
            return ``;
	}
}


/* ------ CASSETTE BEASTS SHRINE NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/cassettebeasts/">Shrine Home</a></li>
        <li><a href="/shrines/cassettebeasts/articles">Articles</a></li>
        <li><a href="/shrines/cassettebeasts/gamelog">Game Log</a></li>
        <li><a href="/shrines/cassettebeasts/featured.html">Featured</a></li>
        <li><a href="/shrines/cassettebeasts/trivia.html">Trivia</a></li>
        <li><a href="/shrines/cassettebeasts/resources.html">Resources</a></li>
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


/* ------ CASSETTE BEASTS SHRINE SIDEBAR COMPONENT ------ */
document.querySelector(".right-sidebar").innerHTML = `
    <div class="sidebar--sticky">
        <h2>About</h2>
        <p>Welcome to Leilukin's shrine for <cite>Cassette Beasts</cite>, an indie monster collecting turn-based open-world RPG developed by Bytten Studio and published by Raw Fury.</p>
        <h3>Links</h3>
        <ul>
            <li><a href="https://www.cassettebeasts.com/" target="_blank">Official Website</a>
            </li>
            <li><a href="https://wiki.cassettebeasts.com/" target="_blank">Official Wiki</a></li>
            <li><a href="https://store.steampowered.com/app/1321440/Cassette_Beasts/" target="_blank">Steam</a></li>
            <li><a href="https://bytten-studio.com/" target="_blank">Bytten Studio</a></li>
        </ul>
    </div>
`;


/* ------ CASSETTE BEASTS SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | Shrine Launched: 3 August 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;