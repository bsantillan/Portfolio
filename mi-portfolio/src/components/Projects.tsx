import { useState } from "react";
import Slider from "react-slick";
import project1 from '../assets/Projecto1.png'
import project2 from '../assets/Projecto2.png'
import project3 from '../assets/Projecto3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiSpringboot, SiMysql, SiAngular, SiFirebase, SiFigma, SiGooglemaps, SiReact } from "react-icons/si";
import {  FaJava, FaDocker, FaVolumeUp, FaSearch, FaUsers, FaCog} from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    image: project1,
    title: "Sistema de Reservas de Canchas de Pádel - Club 'Los Ciruelos'",
    description:
    "El objetivo de esta app es ofrecer a los miembros del Club 'Los Ciruelos' una solución digitalizada y eficiente para la gestión de reservas de canchas de pádel, permitiendo a los usuarios realizar reservas de manera autónoma y sencilla. Este sistema estará implementado próximamente, y se prevé un mantenimiento continuo para futuras actualizaciones, mejorando la experiencia del usuario y optimizando la administración de las instalaciones del club.",
    technologies: [
      { name: "Angular", icon: <SiAngular /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SpringBoot", icon: <SiSpringboot /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Mysql", icon: <SiMysql /> },
      { name: "FireBase", icon: <SiFirebase /> },
      { name: "Analisis", icon: <FaSearch   /> },
      { name: "Entrevistas", icon: <FaUsers   /> },
      { name: "Mantenimiento", icon: <FaCog /> },  // Aquí agregamos el ícono de mantenimiento
    ],
    codigo:"https://github.com/KaterinaMariescurren/Proyecto-los-ciruelos.git"
  },
  {
    image: project2,
    title: "Aplicación para Personas con Discapacidad Visual en Restaurantes y Comercios",
    description:
      "El objetivo de esta app es permitir que los usuarios con discapacidad visual puedan acceder de manera autónoma a las cartas de restaurantes, bares y otros establecimientos, tanto en formato Braille como en versiones virtuales optimizadas para lectores de pantalla. Esta solución no solo facilita la inclusión social, sino que también sensibiliza sobre la importancia de diseñar tecnologías accesibles para todos.",
    technologies: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Lectores de Pantalla", icon: <FaVolumeUp /> },
      { name: "Analisis", icon: <FaSearch   /> },
      { name: "Entrevistas", icon: <FaUsers   /> },
    ],
    codigo:"https://www.figma.com/design/bIiDuIJXq5OaLRm0hMMGK0/Mockup-DS-Inclusivo?node-id=0-1"
  },
  {
    image: project3,
    title: "Aplicación de Estacionamiento Medido",
    description:
      "Diseño y análisis de una aplicación móvil para facilitar el uso de estacionamientos medidos en las zonas de City Bell. La app permite a los usuarios encontrar y pagar estacionamientos en tiempo real, recibir notificaciones sobre el tiempo restante y evitar multas. El enfoque estuvo en mejorar la accesibilidad y usabilidad, optimizando la experiencia del usuario mediante una interfaz sencilla y eficiente.",
      technologies: [
        { name: "React Native", icon: <SiReact /> },
        { name: "Google Maps", icon: <SiGooglemaps /> },
        { name: "Figma", icon: <SiFigma /> },
        { name: "SQL", icon: <SiMysql /> },
      ],
    codigo:"https://github.com/KaterinaMariescurren/aplicaciones_moviles.git"
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
                      <button className="btn">Material</button>
                    </a>
                  </div>
            </div>
            
        </div>
    </div>
  );
};

export default Projects;
