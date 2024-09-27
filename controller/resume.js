function mostrarContenido(opcion) {
    const contenidoDinamico = document.getElementById('contenido-dinamico');

    if (opcion === 'experiencia') {
        contenidoDinamico.innerHTML = `
            <h2>Mi Experiencia</h2>
            <div class="experiencia-grid">
                <div class="experiencia-card">
                    <div class="periodo">2020 - 2021</div>
                    <div class="detalles">
                        <h3>Freelance Web Developer</h3>
                        <p>E-commerce Startup</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2019 - 2020</div>
                    <div class="detalles">
                        <h3>Teaching Assistant</h3>
                        <p>Tech Academy</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2018 - 2019</div>
                    <div class="detalles">
                        <h3>UI/UX Designer</h3>
                        <p>Digital Agency</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2017 - 2018</div>
                    <div class="detalles">
                        <h3>Junior Developer</h3>
                        <p>Software Development Firm</p>
                    </div>
                </div>



                <div class="experiencia-card">
                    <div class="periodo">2020 - 2021</div>
                    <div class="detalles">
                        <h3>Freelance Web Developer</h3>
                        <p>E-commerce Startup</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2019 - 2020</div>
                    <div class="detalles">
                        <h3>Teaching Assistant</h3>
                        <p>Tech Academy</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2018 - 2019</div>
                    <div class="detalles">
                        <h3>UI/UX Designer</h3>
                        <p>Digital Agency</p>
                    </div>
                </div>
                <div class="experiencia-card">
                    <div class="periodo">2017 - 2018</div>
                    <div class="detalles">
                        <h3>Junior Developer</h3>
                        <p>Software Development Firm</p>
                    </div>
                </div>
            </div>
        `;
    } else if (opcion === 'educacion') {
        contenidoDinamico.innerHTML = `
            <h2>Mi Educación</h2>
            <p>Graduado en Ingeniería de Software por la Universidad XYZ. También he completado varios cursos y certificaciones en tecnologías como Docker, Kubernetes, y desarrollo full-stack.</p>
        `;
    } else if (opcion === 'habilidades') {
        contenidoDinamico.innerHTML = `
            <h2>Mis Habilidades</h2>
            <p>Java, Spring Boot, Google Cloud, Docker, Kubernetes, CI/CD, Angular, Node.js.</p>
            <div class="habilidades-iconos">
                <i class="fab fa-java"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-angular"></i>
                <i class="fab fa-docker"></i>
                <i class="fab fa-kubernetes"></i>
            </div>
        `;
    } else if (opcion === 'sobre-mi') {
        contenidoDinamico.innerHTML = `
            <h2>Sobre Mí</h2>
            <p>Soy ingeniero de software con una pasión por crear soluciones eficientes y escalables. Me especializo en desarrollo full-stack y tecnologías de DevOps.</p>
        `;
    }
}
