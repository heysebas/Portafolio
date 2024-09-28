// Objeto para los textos en diferentes idiomas
const texts = {
    es: {
        home: "Inicio",
        services: "Servicios",
        resume: "Currículum",
        work: "Trabajos",
        contact: "Contacto",
        hire: "Contrátame",
        whyHireTitle: "Por qué contratarme",
        whyHireText: "Soy ingeniero de software con 6 años de experiencia en desarrollo full-stack y DevOps. Domino Java, Spring Boot, Google Cloud y herramientas como Docker y K8s. Mi enfoque está en crear soluciones eficientes y de calidad.",
        experienceTitle: "Mi experiencia",
        experienceText: "Tengo 6 años de experiencia como ingeniero de software, trabajando en desarrollo full-stack con tecnologías como Java, Spring Boot, y GCP. También cuento con un año de experiencia en DevOps, utilizando Docker, Kubernetes y CI/CD con Concourse.",
        optionsTitle: "Opciones",
        experienciaBtn: "Experiencia",
        educacionBtn: "Educación",
        habilidadesBtn: "Habilidades",
        sobreMiBtn: "Sobre mí",
        educationTitle: "Mi Educación",
        educationText: "Graduado en Ingeniería de Software por la Universidad XYZ. También he completado varios cursos y certificaciones en tecnologías como Docker, Kubernetes, y desarrollo full-stack.",
        skillsTitle: "Mis Habilidades",
        aboutMeTitle: "Sobre Mí",
        aboutMeText: "Soy ingeniero de software con una pasión por crear soluciones eficientes y escalables. Me especializo en desarrollo full-stack y tecnologías de DevOps.",
        welcomeTitle: "Bienvenido",
        welcomeText: "Selecciona una opción para ver más información."
    },
    en: {
        home: "Home",
        services: "Services",
        resume: "Resume",
        work: "Work",
        contact: "Contact",
        hire: "Hire me",
        whyHireTitle: "Why hire me",
        whyHireText: "I am a software engineer with 6 years of experience in full-stack development and DevOps. I master Java, Spring Boot, Google Cloud, and tools like Docker and K8s. My focus is on creating efficient and quality solutions.",
        experienceTitle: "My Experience",
        experienceText: "I have 6 years of experience as a software engineer, working in full-stack development with technologies like Java, Spring Boot, and GCP. I also have one year of experience in DevOps, using Docker, Kubernetes, and CI/CD with Concourse.",
        optionsTitle: "Options",
        experienciaBtn: "Experience",
        educacionBtn: "Education",
        habilidadesBtn: "Skills",
        sobreMiBtn: "About me",
        educationTitle: "My Education",
        educationText: "Graduated in Software Engineering from XYZ University. I have also completed various courses and certifications in technologies like Docker, Kubernetes, and full-stack development.",
        skillsTitle: "My Skills",
        aboutMeTitle: "About Me",
        aboutMeText: "I am a software engineer with a passion for creating efficient and scalable solutions. I specialize in full-stack development and DevOps technologies.",
        welcomeTitle: "Welcome",
        welcomeText: "Select an option to see more information."
    }
};

// Detectar el idioma del navegador
const userLang = navigator.language || navigator.userLanguage;
const language = userLang.startsWith('es') ? 'es' : 'en';

// Cambiar textos según el idioma detectado
function translatePage() {
    document.getElementById("home-link").textContent = texts[language].home;
    document.getElementById("services-link").textContent = texts[language].services;
    document.getElementById("resume-link").textContent = texts[language].resume;
    document.getElementById("work-link").textContent = texts[language].work;
    document.getElementById("contact-link").textContent = texts[language].contact;
    document.getElementById("hire-link").textContent = texts[language].hire;
    document.getElementById("why-hire-title").textContent = texts[language].whyHireTitle;
    document.getElementById("why-hire-text").textContent = texts[language].whyHireText;
    document.getElementById("experience-title").textContent = texts[language].experienceTitle;
    document.getElementById("experience-text").textContent = texts[language].experienceText;
    document.getElementById("options-title").textContent = texts[language].optionsTitle;
    document.getElementById("experiencia-btn").textContent = texts[language].experienciaBtn;
    document.getElementById("educacion-btn").textContent = texts[language].educacionBtn;
    document.getElementById("habilidades-btn").textContent = texts[language].habilidadesBtn;
    document.getElementById("sobre-mi-btn").textContent = texts[language].sobreMiBtn;

    // Traducción del contenido dinámico
    document.getElementById("contenido-dinamico").querySelector("h2").textContent = texts[language].welcomeTitle;
    document.getElementById("contenido-dinamico").querySelector("p").textContent = texts[language].welcomeText;
}

// Función para mostrar contenido dinámico
function mostrarContenido(opcion) {
    const contenidoDinamico = document.getElementById('contenido-dinamico');

    if (opcion === 'experiencia') {
        contenidoDinamico.innerHTML = `
            <h2>${texts[language].experienceTitle}</h2>
            <div class="experiencia-grid">
                <div class="experiencia-card">
                    <div class="periodo">2024 - 2024</div>
                    <div class="detalles">
                        <h3>Desarrollador Full stack</h3>
                        <p>CDA Cenda Armenia</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2021 - 2024</div>
                    <div class="detalles">
                        <h3>Desarrollador Full stack</h3>
                        <p>Soluciones Electronica</p>
                    </div>
                </div>
            </div>
        `;
    } else if (opcion === 'educacion') {
        contenidoDinamico.innerHTML = `
            <h2>${texts[language].educationTitle}</h2>
            <p>${texts[language].educationText}</p>
        `;
    } else if (opcion === 'habilidades') {
        contenidoDinamico.innerHTML = `
            <h2>${texts[language].skillsTitle}</h2>
            <div class="experiencia-grid">
                <div class="habilidades-card">
                    <img src="/asset/icons/angular_logo_icon_169595.png" alt="Logo de Angular">
                    <img src="/asset/icons/c_original_logo_icon_146611.png" alt="Logo de C">
                    <img src="/asset/icons/docker_original_wordmark_logo_icon_146557.png" alt="Logo de Docker">
                    <img src="/asset/icons/file_type_flutter_icon_130599.png" alt="Logo de Flutter">
                    <img src="/asset/icons/file_type_html_icon_130541.png" alt="Logo de HTML">
                    <img src="/asset/icons/file_type_kotlin_icon_130487.png" alt="Logo de Kotlin">
                    <img src="/asset/icons/file_type_php_icon_130266.png" alt="Logo de PHP">
                    <img src="/asset/icons/icons8-c-240.png" alt="Logo de C">
                    <img src="/asset/icons/icons8-node-js-240.png" alt="Logo de Node.js">
                    <img src="/asset/icons/icons8-spring-boot-480.png" alt="Logo de Spring Boot">
                    <img src="/asset/icons/java_original_wordmark_logo_icon_146459.png" alt="Logo de Java">
                    <img src="/asset/icons/python_94570.png" alt="Logo de Python">
                    <img src="/asset/icons/react_original_wordmark_logo_icon_146375.png" alt="Logo de React">
                    <img src="/asset/icons/kubernetes_logo_icon_168359.png" alt="Logo de Kubernetes"> 
                </div>
            </div>
            <div class="habilidades-iconos"></div>
        `;
    } else if (opcion === 'sobre-mi') {
        contenidoDinamico.innerHTML = `
            <h2>${texts[language].aboutMeTitle}</h2>
            <p>${texts[language].aboutMeText}</p>
        `;
    }
}

// Llamar a la función de traducción al cargar la página
translatePage();
