/* ------ MAIN HEADER COMPONENT ------ */
const header = document.querySelector(".main-header");

header.innerHTML = loadHeader();

function loadHeader() {
    const headerTopBar = `<div class="main-header__top-bar"></div>`;
    const headerImg = `
        <div class="main-header__img">
            <img src="/assets/Leilukins-Hub-website-banner.png" alt="">
        </div>
    `;
    const todayEvent = getTodayEvent();

    if (todayEvent == "No event") {
        return headerImg;
    } else {
        return headerTopBar + headerImg;
    };
}

const todayEvent = getTodayEvent();
const headerTopBarEl = document.querySelector(".main-header__top-bar");
const headerImgEl = document.querySelector(".main-header__img");

if (todayEvent != "No event") {
    if (todayEvent == "Leilukin's Birthday" || todayEvent == "Leilukin's Hub Anniversary") {
        headerTopBarEl.innerHTML = getBlurbHtml(todayEvent);
    } else {
        headerImgEl.classList.add(getBanner(todayEvent));
        headerTopBarEl.innerHTML = getBlurbHtml(todayEvent);
    }
};

function getTodayEvent() {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
		
	if (month == 3 && day == 1)
		return "Zero Discrimination Day";
	else if (month == 3 && day == 31)
		return "Trans Day of Visibility";
	else if (month == 4 && day == 6)
		return "International Asexuality Day";
	else if (month == 4 && day == 26)
		return "Lesbian Visibility Day";
	else if (month == 5 && day == 17)
		return "IDAHOBIT";
    else if (month == 5 && day == 19)
		return "Agender Pride Day";        
	else if (month == 5 && day == 25)
		return "Pansexual and Panromantic Awareness & Visibility Day";
	else if (month == 6)
		return "Pride Month";
	else if (month == 7 && day == 14)
		return "Non-Binary People's Day";
    else if (month == 7 && day == 28)
		return "Leilukin's Birthday";
    else if (month == 9 && day == 11)
		return "Leilukin's Hub Anniversary";
	else if (month == 9 && day == 23)
		return "Bi Visibility Day";
	else if (month == 10 && day == 8)
		return "International Lesbian Day";
	else if (month == 10 && day == 11)
		return "National Coming Out Day";
	else if (month == 10 && day == 26)
		return "Intersex Awareness Day";
	else
		return "No event";
}

function getBanner(day) {
	switch (day) {
        case "Zero Discrimination Day":
            return "flag-progress-intersex";
            break;
        case "Trans Day of Visibility":
            return "flag-trans";
            break;
        case "International Asexuality Day":
            return "flag-ace";
            break;
        case "Lesbian Visibility Day":
            return "flag-lesbian";
            break;
        case "IDAHOBIT":
            return "flag-progress";
            break;
        case "Agender Pride Day":
            return "flag-agender";
            break;
        case "Pansexual and Panromantic Awareness & Visibility Day":
            return "flag-pan";
            break;
        case "Pride Month":
            return "flag-progress-intersex";
            break;
        case "Non-Binary People's Day":
            return "flag-non-binary";
            break;  
        case "Bi Visibility Day":
            return "flag-bi";
            break;
        case "International Lesbian Day":
            return "flag-lesbian";
            break;
        case "National Coming Out Day":
            return "flag-rainbow";
            break;
        case "Intersex Awareness Day":
            return "flag-intersex";
            break;
        default:
            return "";
	}
}

function getBlurbHtml(day) {
	switch (day) {
        case "Zero Discrimination Day":
            return `
                Today is <a href="https://www.unaids.org/en/zero-discrimination-day" target="_blank">Zero Discrimination Day</a>
            `;
            break;
        case "Trans Day of Visibility":
            return `
                Today is <a href="https://www.manygendersonevoice.org/tdov.html" target="_blank">Trans Day of Visibility</a>
            `;
            break;
        case "International Asexuality Day":
            return `
                Today is <a href="https://internationalasexualityday.org/en" target="_blank">International Asexuality Day</a>
            `;
            break;
        case "Lesbian Visibility Day":
            return `
                Today is <a href="https://www.lesbianvisibilityweek.com" target="_blank">Lesbian Visibility Day</a>
            `;
            break;
        case "IDAHOBIT":
            return `
                Today is <a href="https://may17.org" target="_blank">International Day Against Homophobia, Biphobia and Transphobia</a></span>
            `;
            break;
        case "Agender Pride Day":
            return `
                Today is <a href="https://www.believeoutloud.com/voices/article/agender-pride-day/" target="_blank">Agender Pride Day</a></span>
            `;
            break;
        case "Pansexual and Panromantic Awareness & Visibility Day":
            return `
                Today is <a href="https://genderedintelligence.co.uk/panvisibilityday" target="_blank">Pansexual and Panromantic Visibility Day</a>
            `;
            break;
        case "Pride Month":
            return `
                Happy <a href="https://www.loc.gov/lgbt-pride-month/about/" target="_blank">Pride Month</a>!
            `;
            break;
        case "Non-Binary People's Day":
            return `
                Today is <a href="https://www.manygendersonevoice.org/non-binary-peoples-day.html" target="_blank">Non-Binary People's Day</a>
            `;
            break;
        case "Leilukin's Birthday":
            return `
                Today is Leilukin's birthday
            `;
            break;
        case "Leilukin's Hub Anniversary":
            return `
                Today is the anniversary of the launch of Leilukin's Hub
            `;
            break;
        case "Bi Visibility Day":
            return `
                Today is <a href="https://bivisibilityday.com/about" target="_blank">Bi Visibility Day</a>
            `;
            break;
        case "International Lesbian Day":
            return `
                Today is <a href="https://www.lgbtiqhealth.org.au/international_lesbian_day2" target="_blank">International Lesbian Day</a>
            `;
            break;
        case "National Coming Out Day":
            return `
                Today is <a href="https://www.hrc.org/resources/national-coming-out-day" target="_blank">National Coming Out Day</a>
            `;
            break;
        case "Intersex Awareness Day":
            return `
                Today is <a href="https://interactadvocates.org/intersex-awareness-day" target="_blank">Intersex Awareness Day</a>
            `;
            break;
        default:
            return ``;
	}
}


/* ------ MAIN NAVIGATION BAR COMPONENT ------ */
document.querySelector(".navbar").innerHTML = `
    <ul class="nav__menu">
        <li><a href="/home.html">Home</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/articles/">Articles</a></li>
        <li><a href="/mycreations/">My Creations</a></li>
        <li><a href="/featured/">Featured</a></li>
        <li><a href="/resources/">Resources</a></li>
        <li><a href="/shrines/">Shrines</a></li>
        <li><a href="/links/">Links</a></li>
        <li><a href="https://leilukin.123guestbook.com/">Guestbook</a></li>
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


/* ------ MAIN FOOTER COMPONENT ------ */
document.querySelector(".main-footer").innerHTML = `
    <p>Made with ♥ by Leilukin | <a href="/sitemap.html">Site Map</a></p>
    <p>Site Launched: 11 September 2022 | <a href="/changelog">Website Changelog</a></p>
    <p>
        <a href="#page-top">
            <i class="fa fa-arrow-up"></i> Back to top <i class="fa fa-arrow-up"></i>
        </a>
    </p>
`;