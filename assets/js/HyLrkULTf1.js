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

        const cbReleaseDate = new Date("2023-04-26").getFullYear();
        const pierReleaseDate = new Date("2023-10-04").getFullYear();
        const cbAnniversary = year - cbReleaseDate;
        const pierAnniversary = year - pierReleaseDate;

        if (month === 4 && day === 26)
            return `
                Today is the ${cbAnniversary}-year anniversary of the release of <cite>Cassette Beasts</cite>!
            `;
        else if (month === 10 && day === 4)
            return `
                Today is the ${pierAnniversary}-year anniversary of the release of <cite>Pier of the Unknown</cite>, the first DLC expansion of <cite>Cassette Beasts</cite>!
            `;
        else
            return null;
    }