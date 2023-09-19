// JavaScript para controlar el carrusel
const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showCurrentSlides() {
    slides.forEach((slide, i) => {
        if (i >= currentIndex && i < currentIndex + 2) {
            slide.style.display = "block"; // Muestra las dos imágenes actuales
        } else {
            slide.style.display = "none"; // Oculta las demás imágenes
        }
    });
}

function nextSlides() {
    currentIndex += 2; // Avanza dos imágenes
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Vuelve al principio si llega al final
    }
    showCurrentSlides();
}

function prevSlides() {
    currentIndex -= 2; // Retrocede dos imágenes
    if (currentIndex < 0) {
        currentIndex = slides.length - 2; // Vuelve al final si está al principio
    }
    showCurrentSlides();
}

// Mostrar las dos primeras imágenes al cargar la página
showCurrentSlides();

// Iniciar el desplazamiento automático cada 5 segundos
setInterval(nextSlides, 5000);

// Agregar eventos de clic para avanzar y retroceder manualmente
document.getElementById("prevButton").addEventListener("click", prevSlides);
document.getElementById("nextButton").addEventListener("click", nextSlides);
