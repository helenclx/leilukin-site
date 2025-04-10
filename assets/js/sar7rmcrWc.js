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

    const orasReleaseDate = new Date("2014-11-21").getFullYear();
    const orasAnniversary = year - orasReleaseDate;

    if (month === 11 && day === 21)
        return `
            Today is the ${orasAnniversary}-year anniversary of the release of <cite>Pokémon Omega Ruby"</cite> and <cite>Alpha Sapphire</cite>!
        `;
    else
        return null;
}