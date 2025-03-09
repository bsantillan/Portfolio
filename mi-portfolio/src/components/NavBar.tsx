import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./NavBar.css";

// Definir los tipos de las props
interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  // Estado para manejar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el cambio del estado del menú móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">
          BrunoSA
        </a>

        {/* Menú para dispositivos grandes */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about-me">Sobre mí</a>
          </li>
          <li>
            <a href="#technologies">Tecnologías</a>
          </li>
          <li>
            <a href="#experience">Experiencia</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#soft-skills">Habilidades blandas</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>

        {/* Botón de tema oscuro */}
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Botón de menú móvil */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      
      {/* Menú móvil */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#about-me">Sobre mí</a></li>
          <li><a href="#technologies">Tecnologías</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#soft-skills">Habilidades blandas</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
