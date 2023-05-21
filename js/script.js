const body = document.querySelector("body");

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-hamburger");
const logo = document.querySelector(".logo");
const intro = document.querySelector(".intro");
const spes = document.querySelector(".nos-specialitees");

hamburger.addEventListener("click", translate);

function translate() {
    body.classList.toggle("active");

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("active");
    intro.classList.toggle("active");
    spes.classList.toggle("active");
}

// title dynamique dans l'onglet
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Où vas tu ?";
});
window.addEventListener("focus", () => {
     document.title = docTitle;
});

// Affichage du coût total
var totalCost = 1500;