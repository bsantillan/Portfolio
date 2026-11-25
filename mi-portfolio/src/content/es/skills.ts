import type { Content } from '../types';

// Fuente: CV general (public/CV_Bruno_Santillan.pdf). Sass sale del sistema de diseño.
export const skills: Content['skills'] = {
  title: 'Habilidades',
  intro: 'Las mismas que en mi CV. Cuando un caso las muestra, lo enlazo.',
  usedIn: 'Se ve en',
  technicalTitle: 'Técnicas',
  groups: [
    {
      area: 'Backend',
      items: [
        { name: 'Java', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'Spring Boot', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'Spring Security', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'APIs REST', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'JPA / Hibernate', usedIn: ['los-ciruelos'] },
        { name: 'Maven' },
        { name: 'Python', usedIn: ['iot'] },
        { name: 'Node.js (básico)' },
      ],
    },
    {
      area: 'Frontend',
      items: [
        { name: 'React', usedIn: ['los-ciruelos'] },
        { name: 'React Native', usedIn: ['pasa-la-pagina'] },
        { name: 'Angular' },
        { name: 'TypeScript', usedIn: ['los-ciruelos'] },
        { name: 'JavaScript' },
        { name: 'HTML · CSS · Sass', usedIn: ['sistema-diseno'] },
        { name: 'Bootstrap', usedIn: ['sistema-diseno'] },
      ],
    },
    {
      area: 'Bases de datos',
      items: [
        { name: 'PostgreSQL', usedIn: ['los-ciruelos'] },
        { name: 'MySQL', usedIn: ['pasa-la-pagina'] },
        { name: 'SQL' },
        { name: 'MongoDB (series de tiempo)', usedIn: ['iot'] },
        { name: 'Dataverse', usedIn: ['ypf'] },
        { name: 'Modelado de datos', usedIn: ['ypf', 'los-ciruelos'] },
      ],
    },
    {
      area: 'Análisis y procesos',
      items: [
        { name: 'Relevamiento de requerimientos', usedIn: ['ypf'] },
        { name: 'Análisis funcional', usedIn: ['ypf'] },
        { name: 'UML: casos de uso, clases y secuencia' },
        { name: 'Diagramas de procesos BPMN' },
        { name: 'Diseño y ejecución de casos de prueba', usedIn: ['ypf'] },
        { name: 'Documentación técnica e informes', usedIn: ['ypf', 'los-ciruelos'] },
        { name: 'Capacitación a usuarios', usedIn: ['ypf'] },
        { name: 'Mejora de procesos' },
      ],
    },
    {
      area: 'Accesibilidad',
      items: [
        { name: 'Estándares WCAG', usedIn: ['sistema-diseno'] },
        { name: 'Auditoría de accesibilidad web' },
        { name: 'Diseño de componentes accesibles', usedIn: ['sistema-diseno'] },
      ],
    },
    {
      area: 'Datos, BI y automatización',
      items: [
        { name: 'Power BI (DAX, Power Query)', usedIn: ['ypf'] },
        { name: 'Power Apps · Power Automate', usedIn: ['ypf'] },
        { name: 'Grafana · Tableau' },
        { name: 'Excel avanzado (tablas dinámicas, macros)' },
        { name: 'KPIs e indicadores de gestión', usedIn: ['ypf'] },
      ],
    },
    {
      area: 'DevOps y cloud',
      items: [
        { name: 'Docker', usedIn: ['pasa-la-pagina'] },
        { name: 'Git · GitHub', usedIn: ['los-ciruelos'] },
        { name: 'CI/CD' },
        { name: 'Amazon Web Services (AWS)' },
      ],
    },
    {
      area: 'Monitoreo y alertas',
      items: [
        { name: 'Prometheus', usedIn: ['iot'] },
        { name: 'node_exporter', usedIn: ['iot'] },
        { name: 'Alertmanager', usedIn: ['iot'] },
        { name: 'Uptime Kuma', usedIn: ['iot'] },
      ],
    },
    {
      area: 'Herramientas y metodologías',
      items: [
        { name: 'Scrum y metodologías ágiles' },
        { name: 'Postman · Insomnia' },
        { name: 'Figma' },
        { name: 'Trello · Asana' },
      ],
    },
  ],
  softTitle: 'Blandas',
  soft: [
    {
      name: 'Trabajo en equipo',
      evidence: 'Pasá la Página, con mi equipo de tesis, y el sistema de diseño de la DPID, junto al equipo de diseño.',
    },
    {
      name: 'Comunicación oral y escrita',
      evidence: 'Tres años como ayudante de cátedra, el curso que dicto, y los manuales y capacitaciones de YPF.',
    },
    {
      name: 'Resolución de problemas',
      evidence: 'La doble barrera contra reservas duplicadas en Los Ciruelos y las alertas ante caídas del proyecto IoT.',
    },
    {
      name: 'Pensamiento analítico',
      evidence: 'El relevamiento del proceso de inspecciones en YPF y las auditorías de accesibilidad, con evidencia por cada hallazgo.',
    },
    {
      name: 'Aprendizaje continuo',
      evidence: 'Después de recibirme de ingeniero empecé la Licenciatura en Inteligencia Artificial.',
    },
  ],
  languagesTitle: 'Idiomas',
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Lectura y comprensión técnica avanzada. Conversación básica.' },
  ],
};
