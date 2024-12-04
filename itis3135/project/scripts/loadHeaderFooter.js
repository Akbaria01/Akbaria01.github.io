document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("components/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load header.");
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector("header").innerHTML = data;
        })
        .catch((error) => {
            console.error(error);
        });

    // Load footer
    fetch("components/footer.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load footer.");
            }
            return response.text();
        })
        .then((data) => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch((error) => {
            console.error(error);
        });
});



