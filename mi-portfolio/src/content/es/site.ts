import type { Content } from '../types';

export const meta: Content['meta'] = {
  title: 'Bruno Santillan · Ingeniero en Sistemas de Información',
  description:
    'Ingeniero en Sistemas de Información (UTN FRLP). Desarrollo full stack y análisis funcional. Construyo software accesible y herramientas de datos para operaciones reales. Casos, trayectoria y contacto.',
  ogAlt: 'Bruno Santillan, Ingeniero en Sistemas de Información. Software, datos, accesibilidad e IA.',
};

export const ui: Content['ui'] = {
  skip: 'Saltar al contenido',
  navLabel: 'Principal',
  nav: [
    { id: 'casos', label: 'Casos' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'accesibilidad', label: 'Accesibilidad' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' },
  ],
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  themeToLight: 'Cambiar a modo claro',
  themeToDark: 'Cambiar a modo oscuro',
  langSwitch: 'EN',
  langSwitchLabel: 'Read this site in English',
  newTab: '(se abre en otra pestaña)',
  privateCode: 'sin enlace público',
};

export const hero: Content['hero'] = {
  name: ['Bruno', 'Santillan'],
  role: 'Ingeniero en Sistemas de Información · Desarrollo full stack y análisis funcional · UTN FRLP',
  lede: 'Construyo software accesible y herramientas de datos para operaciones reales.',
  ctaCases: 'Ver casos',
  ctaCv: 'Descargar CV (PDF)',
  mapLabel: 'Mapa de lo que hago',
  mapIntroTitle: 'Mapa de lo que hago',
  mapIntro: 'Elegí un punto, con el mouse o con Tab, y se iluminan sus conexiones.',
  mapConnects: 'Se conecta con',
  mapSeeCase: 'Ver el caso',
};

export const nodes: Content['nodes'] = [
  { id: 'sw', label: 'Software', hub: true, info: 'Full stack: Java y Spring Boot en el backend; React, React Native y Angular en el frente.' },
  { id: 'da', label: 'Datos', hub: true, info: 'Series de tiempo, dashboards en Python, Power BI, Grafana y Tableau, y modelado de datos en PostgreSQL, MongoDB y Dataverse.' },
  { id: 'ac', label: 'Accesibilidad', hub: true, info: 'Audito sitios con WCAG, pruebo con lector de pantalla y teclado, y dicto un curso para equipos técnicos.' },
  { id: 'ia', label: 'IA', hub: true, info: 'Curso la Licenciatura en IA y uso IA para automatizar análisis de accesibilidad y su documentación.' },
  { id: 'af', label: 'Análisis funcional', hub: true, info: 'Relevamiento con usuarios, análisis funcional, UML y BPMN, pruebas, documentación y capacitación. En YPF hice el ciclo completo.', caseId: 'ypf' },
  { id: 'java', label: 'Java · Spring', info: 'APIs REST con Spring Boot, Spring Security y JPA/Hibernate.', caseId: 'los-ciruelos' },
  { id: 'react', label: 'React', info: 'El frontend de Los Ciruelos y este sitio.', caseId: 'los-ciruelos' },
  { id: 'rn', label: 'React Native', info: 'La app móvil de Pasá la Página.', caseId: 'pasa-la-pagina' },
  { id: 'pp', label: 'Power Platform', info: 'Power Apps, Power Automate, Power BI y Dataverse.', caseId: 'ypf' },
  { id: 'py', label: 'Python', info: 'Gran parte del dashboard de consumo eléctrico: alrededor de 50 gráficos.', caseId: 'iot' },
  { id: 'mongo', label: 'MongoDB', info: 'Series de tiempo para las lecturas de los sensores.', caseId: 'iot' },
  { id: 'obs', label: 'Prometheus', info: 'Alertas de fallas y caídas, con avisos en Discord.', caseId: 'iot' },
  { id: 'ds', label: 'Sistema de diseño', info: 'Unos 60 componentes del sistema de diseño accesible de la provincia, en HTML, CSS y Sass.', caseId: 'sistema-diseno' },
  { id: 'wcag', label: 'WCAG 2.2', info: 'La norma con la que audito y con la que está hecho este sitio.' },
  { id: 'curso', label: 'Curso que dicto', info: '«Desarrollo web accesible: fundamentos y buenas prácticas para equipos técnicos».' },
  { id: 'ypf', label: 'YPF', info: 'Práctica profesional: un sistema de inspecciones con Power Platform.', caseId: 'ypf' },
  { id: 'dpid', label: 'DPID', info: 'Dirección Provincial de Innovación Digital: accesibilidad, sistema de diseño y monitoreo eléctrico.', caseId: 'iot' },
];

export const a11y: Content['a11y'] = {
  title: 'Accesibilidad en práctica',
  intro: 'Es mi trabajo diario en la DPID. Esto es lo que hago:',
  practice: [
    { title: 'Auditorías', body: 'Reviso sitios y servicios digitales con WCAG 2.1 AA y documento cada barrera con su criterio y su solución.' },
    { title: 'Pruebas con tecnologías de asistencia', body: 'Recorro las páginas con lector de pantalla y solo con teclado, como lo hace quien las necesita.' },
    { title: 'Componentes accesibles', body: 'Llevo a código los componentes del sistema de diseño accesible de la provincia: funcionan con teclado, lector de pantalla y zoom.' },
    { title: 'Automatización con IA', body: 'Uso IA para acelerar los análisis de accesibilidad y su documentación.' },
  ],
  course: {
    title: 'Docencia',
    name: 'Desarrollo web accesible: fundamentos y buenas prácticas para equipos técnicos',
    body: 'Un curso que dicto a equipos de desarrollo: semántica, teclado, contraste, formularios y pruebas con lector de pantalla.',
  },
  statement: {
    title: 'Declaración de accesibilidad de este sitio',
    body: 'Este sitio apunta a cumplir WCAG 2.2 nivel AA, con contraste AAA en todo el texto. Se puede usar entero con teclado, respeta la preferencia de movimiento reducido y el modo de color del sistema.',
    target: 'Objetivo: WCAG 2.2 AA · contraste de texto AAA',
    lastReview: 'Última revisión: 25 de noviembre de 2026',
    results: [
      { tool: 'axe-core 4', result: '0 violaciones (WCAG 2.2 AA y contraste AAA)' },
      { tool: 'Lighthouse 12 (mobile)', result: 'Accesibilidad 100 · Rendimiento 98 · Buenas prácticas 100 · SEO 100' },
    ],
    howTested: [
      'axe-core automático en cada cambio (español e inglés, modo claro y oscuro).',
      'Lighthouse en mobile.',
      'Recorrido completo solo con teclado.',
      'Revisión con movimiento reducido activado.',
    ],
    contact: 'Si encontrás una barrera, escribime y la corrijo.',
  },
};

export const contact: Content['contact'] = {
  title: 'Contacto',
  body: 'La forma más rápida de hablar conmigo es por mail.',
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'CV en PDF',
  location: 'La Plata, Buenos Aires, Argentina',
};
