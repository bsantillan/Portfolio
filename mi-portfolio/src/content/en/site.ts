import type { Content } from '../types';

export const meta: Content['meta'] = {
  title: 'Bruno Santillan · Information Systems Engineer',
  description:
    'Information Systems Engineer (UTN FRLP, Argentina). Full-stack development and functional analysis. I build accessible software and data tools for real-world operations. Case studies, background and contact.',
  ogAlt: 'Bruno Santillan, Information Systems Engineer. Software, data, accessibility and AI.',
};

export const ui: Content['ui'] = {
  skip: 'Skip to content',
  navLabel: 'Main',
  nav: [
    { id: 'casos', label: 'Cases' },
    { id: 'trayectoria', label: 'Background' },
    { id: 'accesibilidad', label: 'Accessibility' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'contacto', label: 'Contact' },
  ],
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  themeToLight: 'Switch to light mode',
  themeToDark: 'Switch to dark mode',
  langSwitch: 'ES',
  langSwitchLabel: 'Leer este sitio en español',
  newTab: '(opens in a new tab)',
  privateCode: 'no public link',
};

export const hero: Content['hero'] = {
  name: ['Bruno', 'Santillan'],
  role: 'Information Systems Engineer · Full-stack development & functional analysis · UTN FRLP, Argentina',
  lede: 'I build accessible software and data tools for real-world operations.',
  ctaCases: 'See case studies',
  ctaCv: 'Download CV (PDF)',
  mapLabel: 'Map of what I do',
  mapIntroTitle: 'Map of what I do',
  mapIntro: 'Pick a point, with the mouse or the Tab key, and its connections light up.',
  mapConnects: 'Connects to',
  mapSeeCase: 'See the case',
};

export const nodes: Content['nodes'] = [
  { id: 'sw', label: 'Software', hub: true, info: 'Full stack: Java and Spring Boot on the backend; React, React Native and Angular on the front end.' },
  { id: 'da', label: 'Data', hub: true, info: 'Time series, dashboards in Python, Power BI, Grafana and Tableau, and data modelling in PostgreSQL, MongoDB and Dataverse.' },
  { id: 'ac', label: 'Accessibility', hub: true, info: 'I audit sites against WCAG, test with screen readers and keyboard only, and teach a course for technical teams.' },
  { id: 'ia', label: 'AI', hub: true, info: 'I am studying for a BSc in AI and use AI to automate accessibility analysis and its documentation.' },
  { id: 'af', label: 'Functional analysis', hub: true, info: 'Requirements gathering with users, functional analysis, UML and BPMN, testing, documentation and training. At YPF I covered the whole cycle.', caseId: 'ypf' },
  { id: 'java', label: 'Java · Spring', info: 'REST APIs with Spring Boot, Spring Security and JPA/Hibernate.', caseId: 'los-ciruelos' },
  { id: 'react', label: 'React', info: 'The Los Ciruelos front end, and this site.', caseId: 'los-ciruelos' },
  { id: 'rn', label: 'React Native', info: 'The Pasá la Página mobile app.', caseId: 'pasa-la-pagina' },
  { id: 'pp', label: 'Power Platform', info: 'Power Apps, Power Automate, Power BI and Dataverse.', caseId: 'ypf' },
  { id: 'py', label: 'Python', info: 'Most of the power-usage dashboard: around 50 charts.', caseId: 'iot' },
  { id: 'mongo', label: 'MongoDB', info: 'Time series for the sensor readings.', caseId: 'iot' },
  { id: 'obs', label: 'Prometheus', info: 'Failure and downtime alerts, posted to Discord.', caseId: 'iot' },
  { id: 'ds', label: 'Design system', info: 'Around 60 components for the province’s accessible design system, in HTML, CSS and Sass.', caseId: 'sistema-diseno' },
  { id: 'wcag', label: 'WCAG 2.2', info: 'The standard I audit against, and the one this site is built to.' },
  { id: 'curso', label: 'Course I teach', info: '“Accessible web development: fundamentals and good practices for technical teams”.' },
  { id: 'ypf', label: 'YPF', info: 'Professional internship: an inspection system on Power Platform.', caseId: 'ypf' },
  { id: 'dpid', label: 'DPID', info: 'Provincial Directorate of Digital Innovation: accessibility, the design system and power monitoring.', caseId: 'iot' },
];

export const a11y: Content['a11y'] = {
  title: 'Accessibility in practice',
  intro: 'It is my day job at the DPID. This is what I do:',
  practice: [
    { title: 'Audits', body: 'I review websites and digital services against WCAG 2.1 AA and document every barrier with its criterion and its fix.' },
    { title: 'Assistive technology testing', body: 'I go through pages with a screen reader and with the keyboard only, the way the people who need them do.' },
    { title: 'Accessible components', body: 'I turn the components of the province’s accessible design system into code that works with the keyboard, screen readers and zoom.' },
    { title: 'AI automation', body: 'I use AI to speed up accessibility analysis and its documentation.' },
  ],
  course: {
    title: 'Teaching',
    name: 'Accessible web development: fundamentals and good practices for technical teams',
    body: 'A course I teach to development teams: semantics, keyboard support, contrast, forms and screen reader testing.',
  },
  statement: {
    title: 'Accessibility statement for this site',
    body: 'This site aims to meet WCAG 2.2 level AA, with AAA contrast for all text. It is fully usable with a keyboard and respects your reduced-motion and color-scheme settings.',
    target: 'Target: WCAG 2.2 AA · AAA text contrast',
    lastReview: 'Last reviewed: November 25, 2026',
    results: [
      { tool: 'axe-core 4', result: '0 violations (WCAG 2.2 AA and AAA contrast)' },
      { tool: 'Lighthouse 12 (mobile)', result: 'Accessibility 100 · Performance 98 · Best practices 100 · SEO 100' },
    ],
    howTested: [
      'Automated axe-core checks on every change (Spanish and English, light and dark mode).',
      'Lighthouse on mobile.',
      'A full pass using only the keyboard.',
      'A review with reduced motion turned on.',
    ],
    contact: 'If you run into a barrier, email me and I will fix it.',
  },
};

export const contact: Content['contact'] = {
  title: 'Contact',
  body: 'Email is the fastest way to reach me.',
  email: 'Email',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'CV (PDF)',
  location: 'La Plata, Buenos Aires, Argentina',
};
