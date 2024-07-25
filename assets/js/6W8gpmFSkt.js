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

        const kotor1ReleaseDate = new Date("2003-07-15").getFullYear();
        const kotor2ReleaseDate = new Date("2004-12-06").getFullYear();
        const kotor1Anniversary = year - kotor1ReleaseDate;
        const kotor2Anniversary = year - kotor2ReleaseDate;

        if (month === 7 && day === 15)
            return `
                Today is the ${kotor1Anniversary}-year anniversary of the release of <cite>Star Wars: Knihgts of the Old Republic</cite>
            `;
        else if (month === 12 && day === 6)
            return `
                Today is the ${kotor2Anniversary}-year anniversary of the release of <cite>Star Wars: Knights of the Old Republic II — The Sith Lords</cite>
            `;
        else
            return null;
    }