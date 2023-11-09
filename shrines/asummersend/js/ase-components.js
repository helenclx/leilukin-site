/* ------ A SUMMER'S END SHRINE HEADER COMPONENT ------ */
const header = document.querySelector(".main-header");

header.innerHTML = loadHeader();

function loadHeader() {
    const headerTopBar = `<div class="main-header__top-bar"></div>`;
    const headerImg = `<img src="./img/asummersend_header.png" alt="">`;
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
		
	if (month == 2 && day == 16)
		return "Michelle's Birthday";
	else if (month == 4 && day == 23)
		return "ASE Anniversary";
	else if (month == 8 && day == 9)
		return "Cecelia's Birthday";
	else if (month == 12 && day == 28)
		return "Sam's Birthday";
	else
		return "No event";
}

function getBlurbHtml(day) {
	switch (day) {
        case "Michelle's Birthday":
            return `
                Today is Michelle Cheung's birthday. Happy Birthday Michelle!
            `;
            break;
        case "ASE Anniversary":
            return `
                Today is the anniversary of the release of <cite>A Summer’s End — Hong Kong 1986</cite>!
            `;
            break;
        case "Cecelia's Birthday":
            return `
                Today is Cecelia Cortes' birthday. Happy Birthday Cecelia!
            `;
            break;
        case "Sam's Birthday":
            return `
                Today is Sam Wong's birthday. Happy Birthday Sam!
            `;
            break;
        default:
            return ``;
	}
}


/* ------ A SUMMER'S END SHRINE NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/shrines/asummersend/">Shrine Home</a></li>
        <li><a href="./playlists.html">Playlists</a></li>
        <li><a href="./trivia.html">Trivia</a></li>
        <li><a href="./gallery.html">Gallery</a></li>
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


/* ------ A SUMMER'S END SHRINE SIDEBAR COMPONENT ------ */
document.querySelector(".right-sidebar").innerHTML = `
    <div class="sidebar--sticky">
        <h2>About</h2>
        <p>Welcome to Leilukin's shrine for <cite>A Summer’s End — Hong Kong 1986</cite>, an indie visual novel developed by Oracle and Bone. Set in 1980s Hong Kong, it tells of a love story between two women.</p>
        <h3>Links</h3>
        <ul>
            <li><a href="https://www.asummersend.com/" target="_blank">Official Website</a>
            </li>
            <li><a href="https://store.steampowered.com/app/1111370/A_Summers_End__Hong_Kong_1986/" target="_blank">Steam</a></li>
            <li><a href="https://oracleandbone.itch.io/a-summers-end" target="_blank">itch.io</a></li>
        </ul>
    </div>
`;


/* ------ A SUMMER'S END SHRINE FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | Shrine Launched: 16 February 2023</p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;