const hero = document.querySelector(".hero");
const heroTopBarEl = document.querySelector(".hero__top-bar");
const headerImgEl = document.querySelector(".hero__img");


const todayEvent = getTodayEvent();

if (todayEvent) {
    heroTopBarEl.classList.remove('hidden');
    heroTopBarEl.innerHTML = todayEvent;
}

function getTodayEvent() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    const aseReleaseDate = new Date("2020-04-23").getFullYear();
    const aseAnniversary = year - aseReleaseDate;

    if (month === 2 && day === 16)
        return `
            Today is Michelle Cheung's birthday. Happy Birthday Michelle!
        `;
    else if (month === 4 && day === 23)
        return `
            Today is the ${aseAnniversary}-year anniversary of the release of <cite>A Summer’s End — Hong Kong 1986</cite>!
        `;
    else if (month === 8 && day === 9)
        return `
            Today is Cecelia Cortes' birthday. Happy Birthday Cecelia!
        `;
    else if (month === 12 && day === 28)
        return `
            Today is Sam Wong's birthday. Happy Birthday Sam!
        `;
    else
        return null;
}