import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import logo from "./assets/Yo.jpg";
import trabajo_en_equipo from "./assets/trabajo-en-equipo.png"
import resolucion_de_problemas from "./assets/resolucion-de-problemas.png"
import adaptabilidad from "./assets/adaptabilidad.png"
import email from "./assets/correo-electronico.png"
import comunicacion_eficaz from "./assets/comunicacion-eficaz.png"

import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, FaAws, 
  FaGitAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { SiSpringboot, SiTypescript, SiPython, SiMysql, SiPodman, SiAngular } from "react-icons/si";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const categories = [
    {
      title: "Frontend",
      technologies: [
        { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
        { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
        { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Angular", icon: <SiAngular color="#DD0031" /> },
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Java", icon: <FaJava color="#007396" /> },
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> },
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "SQL", icon: <SiMysql color="#4479A1" /> },
      ]
    },
    {
      title: "DevOps & Cloud",
      technologies: [
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Podman", icon: <SiPodman color="#892CA0" /> },
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
      ]
    },
    {
      title: "Herramientas",
      technologies: [
        { name: "Git", icon: <FaGitAlt color="#F05032" /> }, // Icono correcto de Git
        { name: "GitHub", icon: <FaGithub color="#181717" /> }, // Icono correcto de GitHub
      ]
    }
  ];

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container" id="Curriculum">
        <div className="text">
          <p>Hola, soy <span className="name">Santillan Bruno Alejo</span></p>
          <h1>Developer</h1>
          <h1>Functional Analyst</h1>

          <div className="buttons">
            <a href="/Curriculum_Santillan.pdf" download>
              <button className="btn">Descargar CV</button>
            </a>
          </div>
        </div>
        <div className="image">
          <img src={logo} alt="Santillan Bruno Alejo" width={400} />
        </div>
      </div>

      <div className="about-me" id="about-me">
      <p>
        Actualmente, curso el 5to año de Ingeniería en Sistemas de Información en la UTN FRLP, 
        con más del 80% de la carrera completada. <br></br>
        Mi formación académica, combinada con mi experiencia en liderazgo y análisis funcional, 
        me permite abordar desafíos desde una perspectiva integral, aportando soluciones estratégicas y eficientes. 
      </p>
      <p>
        Soy un profesional apasionado por la tecnología y el aprendizaje continuo, con un enfoque 
        basado en la innovación, la resolución de problemas y el trabajo en equipo. <br></br>
        A lo largo de mi trayectoria, he desarrollado habilidades en la coordinación y liderazgo de equipos, 
        fomentando la colaboración, la comunicación efectiva y la toma de decisiones estratégicas.
      </p>
      <p>
        Mi capacidad de adaptación a entornos dinámicos me ha permitido enfrentar proyectos complejos 
        con creatividad y eficiencia, siempre buscando aportar valor a cada desafío.
      </p>
      </div>

      {/* Sección de Tecnologías */}
      <div className="technologies" id="technologies">
        <h2>Tecnologías Destacadas</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div key={index} className="category">
              <h3>{category.title}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, i) => (
                  <div className="card" key={i}>
                    <div className="icon">{tech.icon}</div>
                    <h4>{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="experience" id="experience">
        <h2>Experiencia</h2>
        <div className="experience-container">
          <div className="left-container">
            <div className="experience-card">
              <h2>Analista de Accesibilidad Web</h2>
              <h3>2024 - Laboratorio de Innovación Abierta (LINA) [UTN-FRLP]</h3>
              <p>
                Me encargo de evaluar, optimizar y garantizar la accesibilidad de plataformas digitales, 
                asegurando el cumplimiento de normativas y estándares como WCAG (Web Content Accessibility Guidelines).
                Contribuyo a la creación de un entorno web más inclusivo, permitiendo que todas las personas, 
                independientemente de sus capacidades, accedan y utilicen la tecnología sin limitaciones.
              </p>
              <p>Mis responsabilidades incluyen:</p>
              <ul>
                <li>Auditoría y evaluación de sitios web para identificar barreras de accesibilidad.</li>
                <li>Implementación de buenas prácticas de diseño inclusivo y usabilidad.</li>
                <li>Pruebas con tecnologías de asistencia como lectores de pantalla y navegación por teclado.</li>
                <li>Capacitación y concienciación sobre accesibilidad digital para equipos de desarrollo.</li>
              </ul>
            </div>
          </div>
          <div className="right-container">
            <div className="experience-card">
              <h2>Ayudante Ad-Honorem - Análisis Matemático II</h2>
              <h3>+2 años - Marzo 2023 - Actualmente [UTN-FRLP] [Ciencias Basicas]</h3>
              <p>En este rol, asisto a los estudiantes en la resolución de dudas y en la comprensión de los contenidos matemáticos,
                brindando apoyo en el desarrollo de ejercicios y trabajos prácticos. 
                Además, participo en la corrección de evaluaciones,asegurando la correcta aplicación de los conceptos clave de la materia. También contribuyo a la organización y
                actualización de los materiales didácticos utilizados en el curso, con el objetivo de optimizar la calidad educativa y
                facilitar el aprendizaje de los estudiantes.
                </p>
            </div>
            <div className="experience-card">
              <h2>Analista Funcional - Desarrollador de Software</h2>
              <h3>2024 - Proyecto para el Club de Pádel Los Ciruelos [La Plata]</h3>
              <p>En colaboración con un equipo, desarrollé un sistema para el club de pádel Los Ciruelos, encargándome del análisis
                funcional para identificar y documentar los requisitos del usuario. Diseñé la interfaz y la estructura de la aplicación,
                asegurando que la solución fuera intuitiva y fácil de usar. Además, fui responsable del desarrollo de la página web,
                implementando las funcionalidades necesarias para satisfacer las necesidades del club. A lo largo del proyecto, trabajé
                para asegurar que todos los objetivos y especificaciones se cumplieran de manera eficiente, brindando una solución
                tecnológica efectiva y de calidad.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <Projects></Projects>
      </div>
      <div className="soft-skills" id="soft-skills">
        <h2>Habilidades Blandas</h2>
        <div className="soft-container">
            <div className="soft-card">
              <div className="soft-header">
                <img src={trabajo_en_equipo} alt="Trabajo en equipo" className="skill-img" />
                <h2>Trabajo en equipo</h2>
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
                <h2>Resolución de problemas</h2>
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
                <h2>Adaptabilidad</h2>
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
                <h2>Comunicación Eficaz</h2>
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
      <div className="contact" id="contact">
        <div className="email-container">
          <img src={email} alt="Email" className="email-img" />
          <span className="email-text">brunosaantillan@gmail.com</span>
        </div>
        <div className="social-icons">
          <a href="https://github.com/bsantillan  " target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></a>
          <a href="https://www.linkedin.com/in/bruno-santillan-50a91321a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
