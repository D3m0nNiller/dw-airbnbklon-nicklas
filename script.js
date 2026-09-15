const wrapperDom = document.querySelector("#wrapper")
const bodyDom = document.querySelector("body")

async function airbnbData(airBnb) {
    try {
        const response = await fetch(`./data/destinations.json`)
        if (!response.ok) {
            throw new Error(`Didint get fetched right ${response.status}`)
        }

        const destinationsData = await response.json()
        destinationsData.destinations.forEach(destination => {
            htmlDom(destination)
            favouriteChoice(destination)
        });

    } catch (error) {
        console.error("Failed to fetch the data", error)
    }
}

airbnbData()

function rent() {
    bodyDom.insertAdjacentHTML("afterbegin",
        /* HTML */
        `
        <h1 id="rent">Apartments for rent</h1>
        `
    )
}
rent()

function htmlDom(destination) {
    wrapperDom.insertAdjacentHTML("beforeend",
        /* HTML */
        `
        <a href="destination.html?id=${destination.id}"><div class="location">
        <img src="./img/${destination.image}" alt="${destination.title}">
        <div class="details"><i class="fa-regular fa-heart" data-fav="${destination.id}"></i> <p class="read_more">MORE</p></div>
        </div></a>
        `
    )


}

function favouriteChoice(favourite) {
    const fav = document.querySelector(`[data-fav="${favourite.id}"]`)

    let favourites = JSON.parse(localStorage.getItem("favourites")) || []

    if (favourites.includes(favourite.id)) {
        fav.classList.add("favourite")
    }
    fav.addEventListener("click", (favouriteChosen) => {
    favouriteChosen.preventDefault()
    favouriteChosen.stopPropagation()

    let favourites = JSON.parse(localStorage.getItem("favourites")) || []

    if (favourites.includes(favourite.id)) {
        favourites = favourites.filter(id => id !== favourite.id)
        fav.classList.remove("favourite")
    } else {
        favourites.push(favourite.id)
        fav.classList.add("favourite")
        fav.classList.remove("fa-regular")
        fav.classList.add("fa-solid")
    }

    localStorage.setItem("favourites", JSON.stringify(favourites))

    console.log(favourites)
})        
}