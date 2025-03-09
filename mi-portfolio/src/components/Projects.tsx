import { useState } from "react";
import Slider from "react-slick";
import project1 from '../assets/Ejemplo.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiSpringboot, SiMysql, SiAngular, SiFirebase } from "react-icons/si";
import {  FaJava, FaDocker} from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    image: project1,
    title: "Sistema de Reservas de Canchas de Padel para el Club Los Ciruelos",
    description:
      "Desarrollé un sistema web para el Club de Pádel Los Ciruelos, permitiendo la reserva de canchas y gestión de usuarios.",
    technologies: [
      { name: "Angular", icon: <SiAngular /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SpringBoot", icon: <SiSpringboot /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Mysql", icon: <SiMysql /> },
      { name: "FireBase", icon: <SiFirebase /> },
    ],
    codigo:""
  },
  {
    image: "/images/project2.jpg",
    title: "Aplicación de Accesibilidad Web",
    description:
      "Participé en la evaluación y optimización de accesibilidad web para mejorar la experiencia de usuarios con discapacidad.",
    technologies: [

    ],
    codigo:""
  },
  {
    image: "/images/project3.jpg",
    title: "Dashboard de Análisis de Datos",
    description:
      "Diseñé un dashboard interactivo con visualización de datos clave, utilizando React y herramientas de BI.",
    technologies: [

    ],
    codigo:""
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CustomPrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => (
    <button className="custom-arrow custom-prev" onClick={onClick}>
      ❮
    </button>
  );
  
  const CustomNextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLButtonElement> }) => (
    <button className="custom-arrow custom-next" onClick={onClick}>
      ❯
    </button>
  );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index: number) => setCurrentIndex(index),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };  

  return (
    <div className="projects-section" id="projects">
        <h2>Proyectos</h2>
        <div className="projects-container">
            {/* Carrusel a la izquierda */}
            <div className="carousel-container">
                <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="carousel-slide">
                    <img src={project.image} alt={project.title} />
                    </div>
                ))}
                </Slider>
            </div>

            {/* Descripción a la derecha */}
            <div className="project-description">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
                  <ul>
                    {projects[currentIndex].technologies.map((tech, index) => (
                      <li key={index}>{tech.icon}{tech.name}</li>
                    ))}
                  </ul>
                  <div className="buttons">
                    <a href={projects[currentIndex].codigo} target="_blank" rel="noopener noreferrer">
                      <button className="btn">Código</button>
                    </a>
                  </div>
            </div>
            
        </div>
    </div>
  );
};

export default Projects;
