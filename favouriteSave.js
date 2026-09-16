function setupFavourites() {

    // Restore saved favourites
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    document.querySelectorAll("[data-fav]").forEach(fav => {
        const id = fav.dataset.fav;

        if (favourites.includes(id)) {
            fav.classList.add("favourite");
            fav.classList.remove("fa-regular");
            fav.classList.add("fa-solid");
        }
    });


    // Only add the click listener ONCE
    if (!window.favouriteListenerAdded) {

        document.addEventListener("click", (event) => {

            const fav = event.target.closest("[data-fav]");

            // Click wasn't on a favourite heart
            if (!fav) return;

            event.preventDefault();
            event.stopPropagation();

            const id = fav.dataset.fav;

            let favourites =
                JSON.parse(localStorage.getItem("favourites")) || [];


            if (favourites.includes(id)) {

                // Remove favourite
                favourites = favourites.filter(favId => favId !== id);

                fav.classList.remove("favourite");
                fav.classList.remove("fa-solid");
                fav.classList.add("fa-regular");

            } else {

                // Add favourite
                favourites.push(id);

                fav.classList.add("favourite");
                fav.classList.remove("fa-regular");
                fav.classList.add("fa-solid");
            }


            localStorage.setItem(
                "favourites",
                JSON.stringify(favourites)
            );

            console.log(favourites);
        });

        window.favouriteListenerAdded = true;
    }
}