import { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import divImg from "./assets/div.png";
import yo from "./assets/Yo.png";
import trabajo_en_equipo from "./assets/trabajo-en-equipo.png";
import resolucion_de_problemas from "./assets/resolucion-de-problemas.png";
import adaptabilidad from "./assets/adaptabilidad.png";
import comunicacion_eficaz from "./assets/comunicacion-eficaz.png";
import powerbi from "./assets/Power-bi.svg";
import powerapps from "./assets/Power-apps.svg";
import powerautomate from "./assets/Power-automate.svg";
import dataverse from "./assets/Dataverse.svg";
import azure from "./assets/Azure.svg";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDocker, FaAws,
  FaGitAlt, FaGithub, FaLinkedin, FaEnvelope, FaCogs, FaChartLine,
  FaFileAlt, FaProjectDiagram, FaSearch, FaCode, FaLayerGroup,
  FaCheckCircle, FaMicrosoft, FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiSpringboot, SiTypescript, SiPython, SiMysql,
  SiPodman, SiAngular, SiPostgresql,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import Projects from "./components/Projects";

/* ─── Intersection Observer hook ─────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

/* ─── Data ────────────────────────────────────────────────── */
const techColors: Record<string, string> = {
  html: "#E34F26", css: "#1572B6", javascript: "#F7DF1E", typescript: "#3178C6",
  react: "#61DAFB", angular: "#DD0031", java: "#ED8B00", spring: "#6DB33F",
  python: "#3776AB", mysql: "#4479A1", postgresql: "#336791", docker: "#2496ED",
  podman: "#892CA0", aws: "#FF9900", azure: "#0078D4", git: "#F05032",
  github: "#181717", powerbi: "#F2C811", office: "#D83B01", api: "#0d6efd",
  architecture: "#6f42c1", validation: "#198754", analysis: "#20c997",
  process: "#fd7e14", documentation: "#6c757d", data: "#0dcaf0",
  cicd: "#ffc107", reactnative: "#00D8FF",
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
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Java", icon: <FaJava color={techColors.java} /> },
      { name: "Spring Boot", icon: <SiSpringboot color={techColors.spring} /> },
      { name: "Python", icon: <SiPython color={techColors.python} /> },
      { name: "APIs REST", icon: <FaCode color={techColors.api} /> },
      { name: "Arquitectura capas", icon: <FaLayerGroup color={techColors.architecture} /> },
      { name: "Validaciones", icon: <FaCheckCircle color={techColors.validation} /> },
    ],
  },
  {
    title: "Análisis & Gestión",
    technologies: [
      { name: "Relevamiento", icon: <FaSearch color={techColors.analysis} /> },
      { name: "Modelado procesos", icon: <FaProjectDiagram color={techColors.process} /> },
      { name: "Documentación", icon: <FaFileAlt color={techColors.documentation} /> },
      { name: "Análisis de datos", icon: <FaChartLine color={techColors.data} /> },
    ],
  },
  {
    title: "Bases de datos",
    technologies: [
      { name: "MySQL", icon: <SiMysql color={techColors.mysql} /> },
      { name: "PostgreSQL", icon: <SiPostgresql color={techColors.postgresql} /> },
      { name: "Dataverse", icon: <img src={dataverse} alt="Dataverse" /> },
    ],
  },
  {
    title: "DevOps",
    technologies: [
      { name: "Docker", icon: <FaDocker color={techColors.docker} /> },
      { name: "Podman", icon: <SiPodman color={techColors.podman} /> },
      { name: "CI/CD", icon: <FaCogs color={techColors.cicd} /> },
      { name: "Git", icon: <FaGitAlt color={techColors.git} /> },
      { name: "GitHub", icon: <FaGithub color={techColors.github} /> },
    ],
  },
  {
    title: "BI & Automatización",
    technologies: [
      { name: "Power BI", icon: <img src={powerbi} alt="Power BI" /> },
      { name: "Power Apps", icon: <img src={powerapps} alt="Power Apps" /> },
      { name: "Power Automate", icon: <img src={powerautomate} alt="Power Automate" /> },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS", icon: <FaAws color={techColors.aws} /> },
      { name: "Azure", icon: <img src={azure} alt="Azure" /> },
    ],
  },
  {
    title: "Ofimática",
    technologies: [
      { name: "Office", icon: <FaMicrosoft color={techColors.office} /> },
    ],
  },
];

const totalTech = categories.reduce((t, c) => t + c.technologies.length, 0);

const softSkills = [
  {
    img: trabajo_en_equipo,
    alt: "Trabajo en equipo",
    title: "Trabajo en equipo",
    body: "Colaboro en equipos multidisciplinarios de IT aportando soluciones, escuchando activamente y manteniendo un ambiente positivo orientado a resultados. La cooperación y el intercambio de ideas son clave para superar desafíos técnicos.",
  },
  {
    img: resolucion_de_problemas,
    alt: "Resolución de problemas",
    title: "Resolución de problemas",
    body: "Descompongo problemas en partes manejables, investigo alternativas y evalúo la solución más eficaz. Me motiva encontrar respuestas innovadoras, ya sea depurando código, optimizando procesos o mejorando sistemas existentes.",
  },
  {
    img: adaptabilidad,
    alt: "Adaptabilidad",
    title: "Adaptabilidad",
    body: "El mundo tech cambia rápidamente. Adopto nuevas tecnologías, herramientas y metodologías con flexibilidad y proactividad, manteniéndome actualizado y siendo eficiente en cualquier entorno.",
  },
  {
    img: comunicacion_eficaz,
    alt: "Comunicación Eficaz",
    title: "Comunicación Eficaz",
    body: "Me aseguro de que ideas y soluciones sean comprendidas por todos los involucrados: clientes, equipo técnico y gerencia. Valoro la retroalimentación constructiva como herramienta de mejora continua.",
  },
];

const experiences = [
  {
    role: "Desarrollador y Analista de Accesibilidad",
    company: "Dirección Provincial de Innovación Digital",
    period: "Sep 2025 – Actualidad",
    description:
      "Formo parte de un equipo multidisciplinario dedicado al diseño, desarrollo y comunicación de productos digitales centrados en la accesibilidad e inclusión.",
    bullets: [
      "Auditoría y evaluación de sitios web para identificar barreras de accesibilidad.",
      "Implementación de buenas prácticas de diseño inclusivo y usabilidad.",
      "Pruebas con tecnologías de asistencia: lectores de pantalla y navegación por teclado.",
      "Capacitación sobre accesibilidad digital para equipos de desarrollo.",
    ],
  },
  {
    role: "Practicante Profesional Universitario",
    company: "YPF SA — Inspección de Equipos Estáticos",
    period: "Jun 2025 – Sep 2025",
    description:
      "En el marco del convenio UTN-FRLP / YPF S.A., trabajé en un equipo interdisciplinario desarrollando una Power App integrada con Power Automate y un tablero Power BI para automatizar procesos y mejorar la trazabilidad.",
    bullets: [],
  },
  {
    role: "Ayudante de Análisis Matemático II",
    company: "UTN-FRLP",
    period: "Mar 2023 – Sep 2025",
    description:
      "Asistencia a estudiantes en resolución de dudas, corrección de evaluaciones y actualización de materiales didácticos para optimizar la calidad educativa.",
    bullets: [],
  },
  {
    role: "Desarrollador Full Stack Freelance",
    company: "Pasá la Página",
    period: "Mar 2025 – Actualidad",
    description:
      "Desarrollo de una app para que lectores intercambien, donen o vendan libros y apuntes de forma rápida, segura y organizada. Trabajo en equipo asegurando el cumplimiento de objetivos y especificaciones.",
    bullets: [],
  },
];

/* ─── Reveal wrapper ──────────────────────────────────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Section header ──────────────────────────────────────── */
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="section-header">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}

/* ─── App ─────────────────────────────────────────────────── */
export default function App() {
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* ── HERO ── */}
      <header className="hero" id="Curriculum" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">
              Ingeniero en Sistemas · Full Stack Developer · Accesibilidad
            </p>

            <h1 id="hero-title">
              Bruno Alejo<br />
              <span>Santillan</span>
            </h1>

            <p className="hero-description">
              Desarrollo soluciones digitales modernas, accesibles y escalables.
              Combino ingeniería de software, análisis funcional y estándares
              de accesibilidad para crear productos que impactan a las personas.
            </p>

            <div className="hero-actions">
              <a
                href="https://bsantillan.github.io/Portfolio/CV —  Ing. Santillan Bruno.pdf"
                className="btn primary"
                download
                aria-label="Descargar currículum en PDF"
              >
                Descargar CV
              </a>
              <a
                href="#contact"
                className="btn secondary"
                aria-label="Ir a contacto"
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
            <img src={yo} alt="Bruno Santillán — Desarrollador Full Stack" />
          </div>
        </div>
      </header>

      {/* ── SOBRE MÍ ── */}
      <section className="about-me" id="about-me" aria-label="Sobre mí">
        <div className="about-container">
          <div className="hero-image">
            <img
              src={divImg}
              alt="Ilustración de desarrollo de software"
              loading="eager"
            />
          </div>

          <Reveal>
            <div className="about-content">
              <SectionHeader label="Sobre mí" title="Ingeniero en Sistemas & Desarrollador Full Stack" />

              <p>
                Soy <strong>Ingeniero en Sistemas</strong> graduado de la <strong>Universidad Tecnológica Nacional – Facultad Regional La Plata</strong>.
                {" "} A lo largo de mi
                formación y experiencia profesional, consolidé una base técnica sólida
                junto con una visión orientada a la mejora continua, la eficiencia operativa
                y la resolución de problemas
              </p>
              <p>
                He tenido la oportunidad de desempeñarme en ámbitos tanto <strong>públicos</strong> {" "}
                como <strong>privados</strong>, participando en iniciativas vinculadas a transformación
                digital, mejora de procesos, calidad de software y experiencia de usuario.
                Estas experiencias me permitieron adaptarme a distintos contextos de
                trabajo, comprender necesidades de diversas áreas y colaborar en la
                implementación de soluciones con impacto concreto.
              </p>
              <p>
                Me motiva crear soluciones eficientes, escalables y accesibles,
                combinando tecnología, diseño centrado en el usuario y mejora continua.
              </p>

              <div className="about-stats">
                <div>
                  <h3>+10</h3>
                  <span>Proyectos</span>
                </div>
                <div>
                  <h3>+{totalTech}</h3>
                  <span>Tecnologías</span>
                </div>
                <div>
                  <h3>2+</h3>
                  <span>Años de experiencia</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TECNOLOGÍAS ── */}
      <section className="technologies" id="technologies" aria-label="Habilidades técnicas">
        <Reveal>
          <SectionHeader label="Stack" title="Habilidades Técnicas" />
        </Reveal>

        <div className="tech-cards">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 40}>
              <div className="tech-category-card">
                <h3>{cat.title}</h3>
                <div className="tech-icons">
                  {cat.technologies.map((tech) => (
                    <div className="tech-icon" key={tech.name} title={tech.name}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SOFT SKILLS ── */}
      <section className="soft-skills" id="soft-skills" aria-label="Habilidades blandas">
        <Reveal>
          <SectionHeader label="Habilidades blandas" title="Lo que me define más allá del código" />
        </Reveal>

        <div className="soft-container">
          {softSkills.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="soft-card">
                <div className="soft-header">
                  <img src={s.img} alt={s.alt} className="skill-img" />
                  <h3>{s.title}</h3>
                </div>
                <p>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCIA ── */}
      <section className="experience" id="experience" aria-label="Experiencia laboral">
        <Reveal>
          <SectionHeader label="Trayectoria" title="Experiencia" />
        </Reveal>

        <div className="soft-container">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 60}>
              <div className="soft-card exp-card">
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                </div>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
                {exp.bullets.length > 0 && (
                  <ul>
                    {exp.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section className="projects" id="projects" aria-label="Proyectos">
        <Projects />
      </section>

      {/* ── CONTACTO ── */}
      <footer className="contact" id="contact" aria-label="Contacto">
        <div className="contact-inner">
          <p className="section-label">Contacto</p>
          <h2 className="contact-heading">¿Hablamos?</h2>
          <p className="contact-sub">
            Abierto a oportunidades, colaboraciones y proyectos interesantes.
            Escribime cuando quieras.
          </p>

          <a
            href="mailto:brunosaantillan@gmail.com"
            className="btn primary"
            aria-label="Enviar email"
          >
            <FaEnvelope style={{ fontSize: "0.9rem" }} />
            brunosaantillan@gmail.com
          </a>

          <div className="social-icons">
            <a
              href="https://github.com/bsantillan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-santillan-50a91321a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:brunosaantillan@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <p className="contact-copy">
            <FaMapMarkerAlt style={{ fontSize: "0.75rem", opacity: 0.5 }} />
            &nbsp;La Plata, Buenos Aires · © {new Date().getFullYear()} Bruno Santillán
          </p>
        </div>
      </footer>
    </div>
  );
}