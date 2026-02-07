import React, { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import "./NavBar.css";

interface NavBarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="nav-container">

        <a href="#" className="logo">
          Bruno<span>SA</span>
        </a>

        <ul className="nav-links desktop">
          <li><a href="#about-me">Sobre mí</a></li>
          <li><a href="#technologies">Habilidades Técnicas</a></li>
          <li><a href="#soft-skills">Habilidades Blandas</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Proyectos</a></li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
      >
        <ul ref={menuRef}>
          <li><a onClick={() => setIsMenuOpen(false)} href="#about-me">Sobre mí</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#technologies">Habilidades Técnicas</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#soft-skills">Habilidades Blandas</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#experience">Experiencia</a></li>
          <li><a onClick={() => setIsMenuOpen(false)} href="#projects">Proyectos</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;