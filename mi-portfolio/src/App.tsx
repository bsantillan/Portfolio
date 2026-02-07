import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import div from "./assets/div.png"
import yo from "./assets/Yo.png";
import trabajo_en_equipo from "./assets/trabajo-en-equipo.png"
import resolucion_de_problemas from "./assets/resolucion-de-problemas.png"
import adaptabilidad from "./assets/adaptabilidad.png"
import comunicacion_eficaz from "./assets/comunicacion-eficaz.png"
import powerbi from "./assets/Power-bi.svg";
import powerapps from "./assets/Power-apps.svg";
import powerautomate from "./assets/Power-automate.svg";
import dataverse from "./assets/Dataverse.svg";
import azure from "./assets/Azure.svg";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, FaAws,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCogs,
  FaChartLine,
  FaFileAlt,
  FaProjectDiagram,
  FaSearch,
  FaCode,
  FaLayerGroup,
  FaCheckCircle,
  FaMicrosoft
} from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiPython, SiMysql, SiPodman, SiAngular, SiPostgresql } from "react-icons/si";
import Projects from "./components/Projects";
import { TbBrandReactNative } from "react-icons/tb";

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const techColors = {
    html: "#E34F26",
    css: "#1572B6",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    react: "#61DAFB",
    angular: "#DD0031",
    java: "#ED8B00",
    spring: "#6DB33F",
    python: "#3776AB",
    mysql: "#4479A1",
    postgresql: "#336791",
    docker: "#2496ED",
    podman: "#892CA0",
    aws: "#FF9900",
    azure: "#0078D4",
    git: "#F05032",
    github: "#181717",
    powerbi: "#F2C811",
    office: "#D83B01",
    api: "#0d6efd",
    architecture: "#6f42c1",
    validation: "#198754",

    analysis: "#20c997",
    process: "#fd7e14",
    documentation: "#6c757d",
    data: "#0dcaf0",

    cicd: "#ffc107",
    reactnative: "#00D8FF",   // cyan mobile
  };

  const categories = [
    {
      title: "Frontend",
      technologies: [
        { name: "Angular", icon: <SiAngular color={techColors.angular} /> },
        { name: "React", icon: <FaReact color={techColors.react} /> },
        { name: "HTML", icon: <FaHtml5 color={techColors.html} /> },
        { name: "CSS", icon: <FaCss3Alt color={techColors.css} /> },
        { name: "JavaScript", icon: <FaJs color={techColors.javascript} /> },
        { name: "TypeScript", icon: <SiTypescript color={techColors.typescript} /> },
        { name: "React Native", icon: <TbBrandReactNative color={techColors.reactnative} /> },
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Java", icon: <FaJava color={techColors.java} /> },
        { name: "Spring Boot", icon: <SiSpringboot color={techColors.spring} /> },
        { name: "Python", icon: <SiPython color={techColors.python} /> },
        { name: "APIs REST", icon: <FaCode color={techColors.api} /> },
        { name: "Arquitectura en capas", icon: <FaLayerGroup color={techColors.architecture} /> },
        { name: "Validaciones", icon: <FaCheckCircle color={techColors.validation} /> },
      ]
    },
    {
      title: "Análisis & Gestión",
      technologies: [
        { name: "Relevamiento", icon: <FaSearch color={techColors.analysis} /> },
        { name: "Modelado de procesos", icon: <FaProjectDiagram color={techColors.process} /> },
        { name: "Documentación", icon: <FaFileAlt color={techColors.documentation} /> },
        { name: "Análisis de datos", icon: <FaChartLine color={techColors.data} /> },
      ]
    },
    {
      title: "Bases de datos",
      technologies: [
        { name: "MySQL", icon: <SiMysql color={techColors.mysql} /> },
        { name: "PostgreSQL", icon: <SiPostgresql color={techColors.postgresql} /> },
        { name: "Dataverse", icon: <img src={dataverse} alt="Dataverse" /> },
      ]
    },
    {
      title: "DevOps",
      technologies: [
        { name: "Docker", icon: <FaDocker color={techColors.docker} /> },
        { name: "Podman", icon: <SiPodman color={techColors.podman} /> },
        { name: "CI/CD", icon: <FaCogs color={techColors.cicd} /> },
        { name: "Git", icon: <FaGitAlt color={techColors.git} /> },
        { name: "GitHub", icon: <FaGithub color={techColors.github} /> },
      ]
    },
    {
      title: "BI & Automatización",
      technologies: [
        { name: "Power BI", icon: <img src={powerbi} alt="Power BI" /> },
        { name: "Power Apps", icon: <img src={powerapps} alt="Power Apps" /> },
        { name: "Power Automate", icon: <img src={powerautomate} alt="Power Automate" /> },
      ]
    },
    {
      title: "Cloud",
      technologies: [
        { name: "AWS", icon: <FaAws color={techColors.aws} /> },
        { name: "Azure", icon: <img src={azure} alt="Azure" /> },
      ]
    },
    {
      title: "Ofimática",
      technologies: [
        { name: "Office", icon: <FaMicrosoft color={techColors.office} /> },
      ]
    },
  ];

  const totalTechnologies = categories.reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <header className="hero" id="Curriculum" aria-labelledby="hero-title">
        <div className="hero-content">

          <div className="hero-text">
            <h1 id="hero-title">
              Bruno Alejo Santillan
            </h1>

            <p className="hero-subtitle">
              Full Stack Developer · Functional Analyst · Accessibility Specialist
            </p>

            <p className="hero-description">
              Desarrollo soluciones digitales modernas, accesibles y escalables.
              Combino ingeniería, análisis funcional y accesibilidad para crear productos
              que realmente impactan en las personas.
            </p>

            <div className="hero-actions">
              <a
                href="https://bsantillan.github.io/Portfolio/Curriculum_Santillan.pdf"
                className="btn primary"
                download
                aria-label="Descargar currículum en PDF"
              >
                Descargar CV
              </a>

              <a
                href="mailto:brunosaantillan@gmail.com"
                className="btn secondary"
                aria-label="Enviar correo electrónico"
              >
                Contactar
              </a>
            </div>

            <div className="hero-social">
              <a aria-label="GitHub" href="https://github.com/bsantillan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/bruno-santillan-50a91321a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a aria-label="Enviar email" href="mailto:brunosaantillan@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src={yo} alt="Bruno - Desarrollador Full Stack" />
          </div>
        </div>
      </header>
      <div className="about-me" id="about-me">
        <div className="about-container">
          <div className="hero-image">
            <img
              src={div}
              alt="Ilustración representando desarrollo de software"
              loading="eager"
            />
          </div>

          <div className="about-content">
            <h2>Sobre mí</h2>

            <p>
              Soy <strong>Desarrollador Full Stack</strong> y <strong>Analista en Sistemas</strong>, con
              experiencia en el desarrollo de aplicaciones web y móviles, análisis funcional,
              accesibilidad digital y trabajo en equipos multidisciplinarios.
            </p>

            <p>
              Actualmente trabajo en el <strong>Gobierno de la Provincia de Buenos Aires</strong> como
              Desarrollador y Analista de Accesibilidad, participando en el diseño y evaluación
              de productos digitales bajo estándares nacionales e internacionales.
            </p>

            <p>
              Me motiva crear soluciones eficientes, escalables y accesibles, combinando
              tecnología, diseño centrado en el usuario y mejora continua.
            </p>

            <div className="about-stats">
              <div>
                <h3>+10</h3>
                <span>Proyectos realizados</span>
              </div>
              <div>
                <h3>+{totalTechnologies}</h3>
                <span>Tecnologías</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sección de Tecnologías */}
      <div className="technologies" id="technologies">
        <h2>Habilidades Técnicas</h2>
        <div className="tech-cards">

          {categories.map((category, index) => (
            <div key={index} className="tech-category-card">

              <h3>{category.title}</h3>

              <div className="tech-icons">
                {category.technologies.map((tech, i) => (
                  <div className="tech-icon" key={i} title={tech.name}>
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="soft-skills" id="soft-skills">
        <h2>Habilidades Blandas</h2>
        <div className="soft-container">
          <div className="soft-card">
            <div className="soft-header">
              <img src={trabajo_en_equipo} alt="Trabajo en equipo" className="skill-img" />
              <h3>Trabajo en equipo</h3>
            </div>
            <p>
              En el ámbito de IT, he tenido la oportunidad de colaborar en equipos multidisciplinarios,
              donde he aprendido que la colaboración es clave para el éxito de cualquier proyecto.
              Mi capacidad para escuchar las ideas de mis compañeros, aportar soluciones
              y trabajar juntos hacia un objetivo común ha sido fundamental para superar desafíos técnicos
              y alcanzar metas.
              Me esfuerzo por mantener un ambiente de trabajo positivo, facilitando la cooperación
              y el intercambio de ideas para lograr los mejores resultados posibles.
            </p>
          </div>
          <div className="soft-card">
            <div className="soft-header">
              <img src={resolucion_de_problemas} alt="Resolución de problemas" className="skill-img" />
              <h3>Resolución de problemas</h3>
            </div>
            <p>
              La resolución de problemas es una de mis fortalezas principales.
              A lo largo de mi carrera en IT, he enfrentado múltiples desafíos técnicos que me han permitido
              desarrollar una mentalidad analítica y detallista.
              Mi enfoque es descomponer los problemas en partes manejables, investigar posibles soluciones
              y evaluar la más eficaz.
              Me motiva encontrar soluciones innovadoras y eficientes, ya sea en la depuración de código,
              la optimización de procesos o la mejora de sistemas existentes.
            </p>
          </div>
          <div className="soft-card">
            <div className="soft-header">
              <img src={adaptabilidad} alt="Adaptabilidad" className="skill-img" />
              <h3>Adaptabilidad</h3>
            </div>
            <p>
              El mundo de la tecnología cambia rápidamente, y soy consciente de la necesidad de estar
              siempre dispuesto a aprender y adaptarme.
              Ya sea adoptando nuevas tecnologías, herramientas o metodologías, me considero una persona flexible
              y proactiva frente al cambio.
              He trabajado en proyectos que requerían adaptarme a nuevas plataformas o trabajar con
              tecnologías emergentes, lo cual me ha permitido mantenerme actualizado
              y ser eficiente en cualquier entorno de trabajo.
            </p>
          </div>
          <div className="soft-card">
            <div className="soft-header">
              <img src={comunicacion_eficaz} alt="Comunicación Eficaz" className="skill-img" />
              <h3>Comunicación Eficaz</h3>
            </div>
            <p>
              La comunicación es esencial para el éxito de cualquier proyecto de IT,
              y me esfuerzo por asegurarme de que mis ideas y soluciones sean comprendidas claramente
              por todos los involucrados.
              Ya sea comunicándome con clientes para entender sus necesidades, colaborando con mis compañeros de equipo
              o presentando avances a la gerencia, me enfoco en ser claro, conciso y abierto.
              También valoro la retroalimentación constructiva, ya que es una herramienta vital para
              mejorar continuamente tanto mis habilidades como los proyectos en los que participo.
            </p>
          </div>
        </div>
      </div>
      <div className="experience" id="experience">
        <h2>Experiencia</h2>
        <div className="soft-container">
          <div className="soft-card">
            <h3>Desarrollador y Analista de Accesibilidad</h3>
            <h4>Dirección Provincial de Innovación Digital - Sep 2025- Actualidad</h4>
            <p>
              En este rol, formo parte de un equipo multidisciplinario dedicado al diseño, desarrollo y comunicación de productos digitales centrados en la accesibilidad y la inclusión de todas las personas usuarias.<br></br>
              Mi trabajo abarca el desarrollo e implementación de soluciones accesibles en entornos web, junto con el análisis y la evaluación de accesibilidad digital según estándares nacionales e internacionales, identificando barreras y proponiendo mejoras.
            </p>
            <p>Mis responsabilidades incluyen:</p>
            <ul>
              <li>Auditoría y evaluación de sitios web para identificar barreras de accesibilidad.</li>
              <li>Implementación de buenas prácticas de diseño inclusivo y usabilidad.</li>
              <li>Pruebas con tecnologías de asistencia como lectores de pantalla y navegación por teclado.</li>
              <li>Capacitación y concienciación sobre accesibilidad digital para equipos de desarrollo.</li>
            </ul>
          </div>
          <div className="soft-card">
            <h3>Practicante Profesional Universitario</h3>
            <h4>YPF SA, Área de Inspección de Equipos Estaticos - Jun 2025 - Sep 2025</h4>
            <p>
              Gracias al marco de un convenio entre la UTN-FRLP e YPF S.A., trabajé junto a un equipo integrado por profesionales de diferentes ingenierías, lo que permitió una fuerte articulación interdisciplinaria y una comprensión más amplia de los procesos operativos. <br></br>
              Durante la práctica, participamos en el desarrollo de una solución que incluyó una Power App integrada con flujos de Power Automate y un tablero de control en Power BI. <br></br>
              Estas herramientas permitieron automatizar procesos, mejorar la trazabilidad de las tareas y optimizar la comunicación entre equipos y contratistas.
            </p>
          </div>
          <div className="soft-card">
            <h3>Ayudante de Analisis Matematico II</h3>
            <h4>UTN-FRLP. - Mar 2023 - Sep 2025</h4>
            <p>En este rol, asisto a los estudiantes en la resolución de dudas y en la comprensión de los contenidos matemáticos,
              brindando apoyo en el desarrollo de ejercicios y trabajos prácticos.<br></br>
              Además, participo en la corrección de evaluaciones,asegurando la correcta aplicación de los conceptos clave de la materia.
              <br></br>También contribuyo a la organización y
              actualización de los materiales didácticos utilizados en el curso, con el objetivo de optimizar la calidad educativa y
              facilitar el aprendizaje de los estudiantes.
            </p>
          </div>
          <div className="soft-card">
            <h3>Desarrollador FullStack Freelance</h3>
            <h4>Pasá la Página - Mar 2025 - Actualidad</h4>
            <p>En colaboración con un equipo, desarrollamos una applicacion donde cualquier lector puede intercambiar, donar o vender libros y apuntes de una forma rápida, segura y organizada.<br></br>
              La idea es que un libro que ya cumplió su ciclo con vos pueda seguir su viaje en manos de alguien más y a cambio vos también puedas descubrir nuevas lecturas sin gastar tanto.<br></br>
              Es como un punto de encuentro para lectores, pero llevado a una app simple y práctica.<br></br>
              A lo largo del proyecto, trabajé para asegurar que todos los objetivos y especificaciones se cumplieran de manera eficiente, brindando una solución tecnológica efectiva y de calidad.
            </p>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <Projects></Projects>
      </div>
      <div className="contact" id="contact">
        <div className="social-icons">
          <a href="https://github.com/bsantillan  " target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></a>
          <a href="https://www.linkedin.com/in/bruno-santillan-50a91321a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} /></a>
          <a href="mailto:brunosaantillan@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={50} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
