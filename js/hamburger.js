const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", translate);

function translate() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}