const wrapperDom = document.querySelector("#wrapper")
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

console.log(id);

async function airbnbData(airBnb) {
    try {
        const response = await fetch(`./data/destinations.json`)
        if (!response.ok) {
            throw new Error(`Didint get fetched right ${response.status}`)
        }

        const destinationsData = await response.json()

    } catch (error) {
        console.error("Faiæed to fetch the data", error)
    }
}

airbnbData()

function destinationDom(choice) {
    wrapperDom.insertAdjacentHTML("afterbegin",
        /* HTML */
        `
        
        `
    )
}