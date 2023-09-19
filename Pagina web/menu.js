// JavaScript para controlar el menú hamburguesa
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("show");
});
