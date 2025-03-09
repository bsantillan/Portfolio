import React from "react";
import { Moon, Sun } from "lucide-react";
import "./NavBar.css";

// Definir los tipos de las props
interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          BrunoSA
        </a>

        <ul className="nav-links">
          <li>
            <a href="#about-me">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#technologies" >
              Tecnologías
            </a>
          </li>
          <li>
            <a href="#experience" >
              Experiencia
            </a>
          </li>
          <li>
            <a href="#projects" >
              Proyectos
            </a>
          </li>
          <li>
            <a href="#soft-skills" >
              Habilidades blandas
            </a>
          </li>
          <li>
            <a href="#contact" >
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
