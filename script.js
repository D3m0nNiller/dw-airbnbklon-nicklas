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
        console.error("Faiæed to fetch the data", error)
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
        <div class="location">
        <a href=""><img src="./img/${destination.image}" alt="./img/${destination.title}"></a>
        <div class="details"><span>&copy;</span> <p class="read_more">MORE</p></div>
        </div>
        `
    )
    
}