const wrapperDom = document.querySelector("#wrapper")
console.log(wrapperDom)

async function airbnbData(airBnb) {
    try {
        const response = await fetch(`./data/destinations.json`)
        if (!response.ok) {
            throw new Error(`Didint get fetched right ${response.status}`)
        }

        const destinationsData = await response.json()
        destinationsData.destinations.forEach(destination => {
            htmlDom(destination)
        });

    } catch (error) {
        console.error("Faiæed to fetch the data", error)
    }
}

airbnbData()

function htmlDom(destination) {
    wrapperDom.insertAdjacentHTML("afterbegin",
        /* HTML */
        `
        <div>
        <img src="./img/${destination.image}" alt="./img/${destination.title}">
        <div><span>&copy;</span> <p>MORE</p></div>
        </div>
        `
    )
}