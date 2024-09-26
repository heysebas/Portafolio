document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.getElementById('dynamic-text');
    const texts = [
        "Sebastian Grisales"
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = texts[index];

        if (isDeleting) {
            // Borrado del texto
            dynamicText.textContent = currentText.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                index = (index + 1) % texts.length; // Cambia al siguiente texto
                setTimeout(typeEffect, 500); // Pausa antes de empezar a escribir el siguiente texto
                return;
            }
        } else {
            // Escribiendo el texto
            dynamicText.textContent = currentText.substring(0, charIndex++);
            if (charIndex > currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1000); // Pausa antes de empezar a borrar
                return;
            }
        }

        setTimeout(typeEffect, isDeleting ? 100 : 200); // Velocidad de borrado y escritura
    }

    typeEffect(); // Inicia el efecto de escritura/borrado
});

document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Añadir o quitar la clase 'active'
});

// Objeto para los textos en diferentes idiomas
const texts = {
    es: {
        home: "Inicio",
        services: "Servicios",
        resume: "Currículum",
        work: "Trabajos",
        contact: "Contacto",
        hire: "Contrátame",
        role: "Desarrollador de Software",
        hello: "Hola, soy",
        description: `# 💫 Soy un apasionado ingeniero de software con cinco años de experiencia en el desarrollo y mantenimiento de software y aplicaciones informáticas. Mi enfoque principal ha sido el diseño de sistemas y la programación en varios lenguajes, incluyendo C++, Java y Python. He trabajado en proyectos de diversos tamaños, destacándome por mi capacidad para resolver problemas técnicos y ofrecer soluciones eficientes.`,
        downloadCV: "Descargar CV",
        experience: "Años de experiencia",
        projects: "Proyectos completados",
        technologies: "Tecnologías dominadas",
        commits: "Commits de código"
    },
    en: {
        home: "Home",
        services: "Services",
        resume: "Resume",
        work: "Work",
        contact: "Contact",
        hire: "Hire me",
        role: "Software Developer",
        hello: "Hello, I'm",
        description: `# 💫 I am a passionate software engineer with five years of experience in software development and maintenance. My main focus has been on system design and programming in various languages, including C++, Java, and Python. I have worked on projects of different sizes, standing out for my ability to solve technical problems and provide efficient solutions.`,
        downloadCV: "Download CV",
        experience: "Years of experience",
        projects: "Projects completed",
        technologies: "Technologies mastered",
        commits: "Code commits"
    }
};

// Detectar el idioma del navegador
const userLang = navigator.language || navigator.userLanguage;
const language = userLang.startsWith('es') ? 'es' : 'en';

// Cambiar textos según el idioma detectado
document.getElementById("home-link").textContent = texts[language].home;
document.getElementById("services-link").textContent = texts[language].services;
document.getElementById("resume-link").textContent = texts[language].resume;
document.getElementById("work-link").textContent = texts[language].work;
document.getElementById("contact-link").textContent = texts[language].contact;
document.getElementById("hire-link").textContent = texts[language].hire;
document.getElementById("role-text").textContent = texts[language].role;
document.getElementById("hello-text").innerHTML = `${texts[language].hello} <br><span id="dynamic-text">Sebastian Grisales</span>`;
document.getElementById("description-text").textContent = texts[language].description;
document.getElementById("download-cv").textContent = texts[language].downloadCV;
document.getElementById("experience-text").textContent = texts[language].experience;
document.getElementById("projects-text").textContent = texts[language].projects;
document.getElementById("technologies-text").textContent = texts[language].technologies;
document.getElementById("commits-text").textContent = texts[language].commits;
