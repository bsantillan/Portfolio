import type { Content } from '../types';

export const meta: Content['meta'] = {
  title: 'Bruno Santillan · Ingeniero en Sistemas',
  description:
    'Ingeniero en Sistemas (UTN FRLP). Construyo software accesible y herramientas de datos para operaciones reales. Casos, trayectoria y contacto.',
  ogAlt: 'Bruno Santillan, Ingeniero en Sistemas. Software, datos, accesibilidad e IA.',
};

export const ui: Content['ui'] = {
  skip: 'Saltar al contenido',
  navLabel: 'Principal',
  nav: [
    { id: 'casos', label: 'Casos' },
    { id: 'trayectoria', label: 'Trayectoria' },
    { id: 'accesibilidad', label: 'Accesibilidad' },
    { id: 'stack', label: 'Stack' },
    { id: 'contacto', label: 'Contacto' },
  ],
  menuOpen: 'Abrir menú',
  menuClose: 'Cerrar menú',
  themeToLight: 'Cambiar a modo claro',
  themeToDark: 'Cambiar a modo oscuro',
  langSwitch: 'EN',
  langSwitchLabel: 'Read this site in English',
  structureOn: 'Ver estructura accesible',
  structureOff: 'Ocultar estructura',
  structurePanelTitle: 'Estructura accesible',
  structureIntro:
    'Así lee esta página un lector de pantalla. Sobre el sitio marqué las regiones, los encabezados con su nivel, los textos alternativos y el orden del tabulador.',
  structureLandmarks: 'Regiones',
  structureHeadings: 'Encabezados',
  structureImages: 'Imágenes con texto alternativo',
  structureFocus: 'Elementos enfocables',
  structureAnnounceOn: (l, h, f) =>
    `Estructura visible: ${l} regiones, ${h} encabezados y ${f} elementos enfocables.`,
  structureAnnounceOff: 'Estructura oculta.',
  structureClose: 'Cerrar el panel de estructura',
  newTab: '(se abre en otra pestaña)',
  privateCode: 'sin enlace público',
};

export const hero: Content['hero'] = {
  name: ['Bruno', 'Santillan'],
  role: 'Ingeniero en Sistemas · Analista Universitario de Sistemas · UTN FRLP',
  lede: 'Construyo software accesible y herramientas de datos para operaciones reales.',
  status: 'Abierto a nuevas oportunidades',
  statusDetail: 'La Plata · Remoto · Disponible para relocalizarme a Neuquén',
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
  { id: 'da', label: 'Datos', hub: true, info: 'Series de tiempo, dashboards en Python y Power BI, y modelos en Dataverse.' },
  { id: 'ac', label: 'Accesibilidad', hub: true, info: 'Audito sitios con WCAG, pruebo con lector de pantalla y teclado, y dicto un curso para equipos técnicos.' },
  { id: 'ia', label: 'IA', hub: true, info: 'Curso la Licenciatura en IA y uso IA para automatizar análisis de accesibilidad y su documentación.' },
  { id: 'java', label: 'Java · Spring', info: 'Backends con Spring Boot y Spring Security.', caseId: 'pasa-la-pagina' },
  { id: 'react', label: 'React', info: 'Interfaces web, como este sitio.' },
  { id: 'rn', label: 'React Native', info: 'La app móvil de Pasá la Página.', caseId: 'pasa-la-pagina' },
  { id: 'pp', label: 'Power Platform', info: 'Power Apps, Power Automate, Power BI y Dataverse.', caseId: 'ypf' },
  { id: 'py', label: 'Python', info: 'Gran parte del dashboard de consumo eléctrico: alrededor de 50 gráficos.', caseId: 'iot' },
  { id: 'mongo', label: 'MongoDB', info: 'Series de tiempo para las lecturas de los sensores.', caseId: 'iot' },
  { id: 'obs', label: 'Prometheus', info: 'Alertas de fallas y caídas, con avisos en Discord.', caseId: 'iot' },
  { id: 'wcag', label: 'WCAG 2.2', info: 'La norma con la que audito y con la que está hecho este sitio.' },
  { id: 'sr', label: 'Lectores de pantalla', info: 'Pruebo los sitios como los usa una persona ciega: con lector de pantalla y solo teclado.' },
  { id: 'curso', label: 'Curso que dicto', info: '«Desarrollo web accesible: fundamentos y buenas prácticas para equipos técnicos».' },
  { id: 'ypf', label: 'YPF', info: 'Práctica profesional: un sistema de inspecciones con Power Platform.', caseId: 'ypf' },
  { id: 'dpid', label: 'DPID', info: 'Dirección Provincial de Innovación Digital: accesibilidad y monitoreo eléctrico.', caseId: 'iot' },
  { id: 'energia', label: 'Energía', info: 'El sector donde quiero aplicar todo esto.' },
  { id: 'nilm', label: 'NILM', info: 'Investigo cómo saber qué aparato consume a partir de la forma de onda. Todavía sin resultados.' },
];

export const a11y: Content['a11y'] = {
  title: 'Accesibilidad en práctica',
  intro: 'Es mi trabajo diario en la DPID. Esto es lo que hago:',
  practice: [
    { title: 'Auditorías', body: 'Reviso sitios y servicios digitales con WCAG 2.1 AA y documento cada barrera con su criterio y su solución.' },
    { title: 'Pruebas con tecnologías de asistencia', body: 'Recorro las páginas con lector de pantalla y solo con teclado, como lo hace quien las necesita.' },
    { title: 'Componentes accesibles', body: 'Desarrollo componentes web que funcionan con teclado, lector de pantalla y zoom.' },
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
      { tool: 'axe-core', result: 'pendiente' },
      { tool: 'Lighthouse (mobile)', result: 'pendiente' },
    ],
    howTested: [
      'axe-core automático en cada cambio (español e inglés, modo claro y oscuro, con la estructura visible).',
      'Lighthouse en mobile.',
      'Recorrido completo solo con teclado.',
      'Revisión con movimiento reducido activado.',
    ],
    contact: 'Si encontrás una barrera, escribime y la corrijo.',
  },
};

export const now: Content['now'] = {
  title: 'Ahora',
  items: [
    { when: '2026', text: 'Curso la Licenciatura en Inteligencia Artificial en la UTN FRLP.' },
    { when: 'En curso', text: 'Investigo la desagregación de consumo eléctrico (NILM) a partir de la forma de onda.' },
    { when: 'En curso', text: 'Automatizo con IA los análisis de accesibilidad y su documentación.' },
  ],
};

export const contact: Content['contact'] = {
  title: 'Contacto',
  body: 'La forma más rápida de hablar conmigo es por mail.',
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'CV en PDF',
  location: 'La Plata, Buenos Aires, Argentina',
  footer: 'Hecho a mano con React y Vite. Sin cookies ni rastreo.',
};
