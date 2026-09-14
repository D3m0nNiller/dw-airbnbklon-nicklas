const wrapperDom = document.querySelector("#wrapper")

async function airbnbData() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const paramId = urlParams.get('id');

        if (!paramId) {
            throw new Error("No ID found in the URL search parameters.");
        }

        const response = await fetch(`./data/${paramId}.json`);
        if (!response.ok) {
            throw new Error(`Didnt get fetched right ${response.status}`);
        }

        const destinationsData = await response.json();

        destinationDom(destinationsData);

    } catch (error) {
        console.error("Error loading the page data:", error);
    }
}

airbnbData()

function destinationDom(choice) {
    wrapperDom.insertAdjacentHTML("afterbegin",
        /* HTML */
        `
        <div id="chosen">
            <div id="destination_image">
                <img src="./img/${choice.image}" alt="${choice.title}">
            </div>
        </div>
        `
    )
}