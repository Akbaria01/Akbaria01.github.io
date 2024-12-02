document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    fetch("scripts/header.json")
        .then((response) => response.json())
        .then((headerData) => {
            const headerContainer = document.querySelector("header");

            // Add Title
            const h1 = document.createElement("h1");
            h1.textContent = headerData.title;
            headerContainer.appendChild(h1);

            // Add Main Navigation
            const mainNav = document.createElement("nav");
            headerData.mainNav.forEach((link) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.name;
                mainNav.appendChild(a);
            });
            headerContainer.appendChild(mainNav);

            headerContainer.appendChild(document.createElement("hr"));


            // Add Secondary Navigation
            const secondaryNav = document.createElement("nav");
            headerData.secondaryNav.forEach((link) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.name;
                secondaryNav.appendChild(a);
            });
            headerContainer.appendChild(secondaryNav);
        })
        .catch((error) => console.error("Error loading header:", error));

    // Load Footer
    fetch("scripts/footer.json")
        .then((response) => response.json())
        .then((footerData) => {
            const footerContainer = document.querySelector("footer");

            // Add Slogan
            const slogan = document.createElement("em");
            slogan.textContent = footerData.slogan;
            footerContainer.appendChild(slogan);

            footerContainer.appendChild(document.createElement("hr"));

            // Add Contact Links
            const contactNav = document.createElement("nav");
            footerData.contactLinks.forEach((link) => {
                const a = document.createElement("a");
                a.href = link.url;
                a.textContent = link.name;
                contactNav.appendChild(a); 
                let dividers = document.createElement("span");
                dividers.innerText = " || ";
                contactNav.appendChild(dividers);
                
            });
            footerContainer.appendChild(contactNav);

            // Add Certifications

            const certifications = document.createElement("p");
            const certspan = document.createElement("span");
            certspan.innerHTML = `Page designed by <a href="aadesignltd.com/">Awkward Alpacas</a> &copy;2024, `;
            footerData.certifications.forEach((cert, i) => {
                const a = document.createElement("a");
                a.href = cert.url;

                const b = document.createElement("em");

                b.textContent = cert.text;
                a.target = "_blank";
                a.appendChild(b);
                certspan.appendChild(a);
                if (i === 0)
                certspan.append(" , "); // Add space between certifications

            });
            certifications.appendChild(certspan);
            footerContainer.appendChild(certifications);

            // Add Validation Links
            const validation = document.createElement("div");
            const htmlLink = document.createElement("a");
            htmlLink.href = footerData.validationLinks.html + location.href;
            htmlLink.innerHTML = `<img src="images/validation_html.gif" alt="Validate HTML">`;
            validation.appendChild(htmlLink);

            const cssLink = document.createElement("a");
            cssLink.href = footerData.validationLinks.css + location.href;
            cssLink.innerHTML = `<img src="images/validation_css.gif" alt="Validate CSS">`;
            validation.appendChild(cssLink);

            footerContainer.appendChild(validation);
        })
        .catch((error) => console.error("Error loading footer:", error));
});


