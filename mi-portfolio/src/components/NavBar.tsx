import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./NavBar.css";

// Definir los tipos de las props
interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Crear el observer para detectar cuando la sección entra en el viewport
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Obtener todas las secciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si la sección es visible, actualizamos el estado
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Cambiar cuando al menos el 50% de la sección esté visible
    );

    // Observar cada sección
    sections.forEach((section) => observer.observe(section));

    // Desconectar el observer cuando el componente se desmonte
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className={`logo ${activeSection === "about-me" ? "active" : ""}`}>
          BrunoSA
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about-me" className={activeSection === "about-me" ? "active" : ""}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#technologies" className={activeSection === "technologies" ? "active" : ""}>
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#soft-skills" className={activeSection === "soft-skills" ? "active" : ""}>
              Habilidades blandas
            </a>
          </li>
          <li>
            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
              Contacto
            </a>
          </li>
        </ul>

        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
