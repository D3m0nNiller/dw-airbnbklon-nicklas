const destinationWrapperDom = document.querySelector("#destination_wrapper")

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
        setupFavourites(destinationsData)

    } catch (error) {
        console.error("Error loading the page data:", error);
    }
}

airbnbData()

function destinationDom(choice) {
    destinationWrapperDom.insertAdjacentHTML("afterbegin",
        /* HTML */
        `
        <div id="chosen">
            <div id="destination_image">
                <div id="mark">
                    <i class="fa-regular fa-heart" data-fav="${choice.id}"></i><p>FAVORIT</p>
                </div>
                <img src="./img/${choice.image}" alt="${choice.title}">
            </div>

            <div id="chosen_details">
                <header>${choice.destination}</header>
                <h3>${choice.title}</h3>
                <p>${choice.subtitle}</p>
                <p>${choice.text}</p>
                <h3>Facliliteter</h3>
                <ul>
                    ${choice.facilities.map(facliliteter => `<li id="facility_items">${facliliteter}</li>`).join("")}
                </ul>
                
            </div>
        </div>
        `
    )
}