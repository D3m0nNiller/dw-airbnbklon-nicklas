const wrapperDom = document.querySelector("#wrapper")
const bodyDom = document.querySelector("body")
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
        console.error("Failed to fetch the data", error)
    }
}

airbnbData()

function rent(){
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
        <div class="details"><i class="fa-regular fa-heart"></i> <p class="read_more">MORE</p></div>
        </div></a>
        `
    )
    
}