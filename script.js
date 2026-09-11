const wrapperDom = document.querySelector("#wrapper")

async function airBnb(airBnbData) {
    const reponse = await fetch(`data/destinations.json`)

    const data = await reponse.json()

    console.log(data)
}
airBnb()
// data/destinations.forEach(airBnb => {
//     const divBox = document.createElement("div")
//     const airBngImg = document.createElement("img")
//     airBngImg.setAttribute("src", airBnb.image)

//     divBox.append(airBngImg)
// });