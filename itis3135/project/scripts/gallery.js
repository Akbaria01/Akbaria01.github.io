const albums = {
    cultural: [
        { src: "images/CF.jpeg", alt: "Cultural Festival 2024" },
        { src: "images/CF2.webp", alt: "Cultural Festival 2024" },
        { src: "images/CF3.jpg", alt: "Cultural Festival 2024" },
        { src: "images/CF4.jpg", alt: "Cultural Festival 2024" },
        { src: "images/CF5.jpg", alt: "Cultural Festival 2024" },
        { src: "images/CF6.webp", alt: "Cultural Festival 2024" },
        { src: "images/CF7.jpeg", alt: "Cultural Festival 2024" }
    ],
    community: [
        { src: "images/CG.jpeg", alt: "Community Gathering" },
        { src: "images/CG2.jpg", alt: "Community Gathering" },
        { src: "images/CG3.jpg", alt: "Community Gathering" },
        { src: "images/CG4.jpeg", alt: "Community Gathering" },
        { src: "images/CG5.png", alt: "Community Gathering" },
        { src: "images/CG6.jpg", alt: "Community Gathering" },
        { src: "images/CG7.jpg", alt: "Community Gathering" }
        
    ],
    workshops: [
        { src: "images/PCW.jpg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW2.jpg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW3.jpg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW4.jpg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW5.jpg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW6.jpeg", alt: "Pashai Cultural Workshop" },
        { src: "images/PCW7.jpeg", alt: "Pashai Cultural Workshop" }
    ],
    language: [
        { src: "images/LES.jpg", alt: "Language Enrichment Session" },
        { src: "images/LES2.jpg", alt: "Language Enrichment Session" },
        { src: "images/LES3.png", alt: "Language Enrichment Session" },
        { src: "images/LES4.jpg", alt: "Language Enrichment Session" },
        { src: "images/LES5.jpg", alt: "Language Enrichment Session" },
        { src: "images/LES6.jpg", alt: "Language Enrichment Session" },
        { src: "images/LES7.jpg", alt: "Language Enrichment Session" }

    ]
};

function loadAlbum(albumName) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; 

    
    albums[albumName].forEach((image) => {
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.classList.add("gallery-image");
        gallery.appendChild(img);
    });
}
function loadCultural(){

    loadAlbum('cultural');

}
function loadCommunity(){
    loadAlbum('community');
    
}
function loadWorkshops(){
    loadAlbum('workshops');
    
}
function loadLanguage(){
    loadAlbum('language');
    
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cultural').addEventListener('click', loadCultural );
    document.getElementById('community').addEventListener('click', loadCommunity );
    document.getElementById('workshops').addEventListener('click', loadWorkshops );
    document.getElementById('language').addEventListener('click', loadLanguage);



    });

window.onload = () => loadAlbum('cultural');
