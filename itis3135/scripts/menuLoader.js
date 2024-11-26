document.addEventListener("DOMContentLoaded", function () {
    fetch("header.json")
        .then(response => response.json())
        .then(data => {
            const headerContainer = document.querySelector("header");

            // Add the title
            const h1 = document.createElement("h1");
            h1.textContent = data.title;
            headerContainer.appendChild(h1);

            // Add the navigation menu
            const nav = document.createElement("nav");
            data.navigation.forEach(link => {
                const a = document.createElement("a");
                a.textContent = link.name;
                a.href = link.url;
                nav.appendChild(a);
            });
            headerContainer.appendChild(nav);
        })
        .catch(error => console.error("Error loading header:", error));
});

