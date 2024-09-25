// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Código para futuras interacciones
    console.log("Página lista para interacciones JavaScript.");
});


document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = [
        "Sebastian Grisales"
      ];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;

    function typeEffect() {
        currentText = texts[index];

        if (isDeleting) {
            dynamicText.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                index = (index + 1) % texts.length;
            }
        } else {
            dynamicText.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
            }
        }

        setTimeout(typeEffect, isDeleting ? 50 : 200); // Velocidad de borrado y escritura
    }

    typeEffect(); // Inicia el efecto
});

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Añadir o quitar la clase 'active'
});
