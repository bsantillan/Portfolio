import type { Content } from '../types';

// Source: the general CV (public/CV_Bruno_Santillan.pdf). Sass comes from the design system.
export const skills: Content['skills'] = {
  title: 'Skills',
  intro: 'The same ones as in my CV. When a case shows one, I link to it.',
  usedIn: 'Shown in',
  technicalTitle: 'Technical',
  groups: [
    {
      area: 'Backend',
      items: [
        { name: 'Java', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'Spring Boot', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'Spring Security', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'REST APIs', usedIn: ['los-ciruelos', 'pasa-la-pagina'] },
        { name: 'JPA / Hibernate', usedIn: ['los-ciruelos'] },
        { name: 'Maven' },
        { name: 'Python', usedIn: ['iot'] },
        { name: 'Node.js (basic)' },
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
      area: 'Databases',
      items: [
        { name: 'PostgreSQL', usedIn: ['los-ciruelos'] },
        { name: 'MySQL', usedIn: ['pasa-la-pagina'] },
        { name: 'SQL' },
        { name: 'MongoDB (time series)', usedIn: ['iot'] },
        { name: 'Dataverse', usedIn: ['ypf'] },
        { name: 'Data modelling', usedIn: ['ypf', 'los-ciruelos'] },
      ],
    },
    {
      area: 'Analysis & process',
      items: [
        { name: 'Requirements gathering', usedIn: ['ypf'] },
        { name: 'Functional analysis', usedIn: ['ypf'] },
        { name: 'UML: use case, class and sequence diagrams' },
        { name: 'BPMN process diagrams' },
        { name: 'Test case design and execution', usedIn: ['ypf'] },
        { name: 'Technical documentation and reports', usedIn: ['ypf', 'los-ciruelos'] },
        { name: 'User training', usedIn: ['ypf'] },
        { name: 'Process improvement' },
      ],
    },
    {
      area: 'Accessibility',
      items: [
        { name: 'WCAG standards', usedIn: ['sistema-diseno'] },
        { name: 'Web accessibility audits' },
        { name: 'Accessible component design', usedIn: ['sistema-diseno'] },
      ],
    },
    {
      area: 'Data, BI & automation',
      items: [
        { name: 'Power BI (DAX, Power Query)', usedIn: ['ypf'] },
        { name: 'Power Apps · Power Automate', usedIn: ['ypf'] },
        { name: 'Grafana · Tableau' },
        { name: 'Advanced Excel (pivot tables, macros)' },
        { name: 'KPIs and performance indicators', usedIn: ['ypf'] },
      ],
    },
    {
      area: 'DevOps & cloud',
      items: [
        { name: 'Docker', usedIn: ['pasa-la-pagina'] },
        { name: 'Git · GitHub', usedIn: ['los-ciruelos'] },
        { name: 'CI/CD' },
        { name: 'Amazon Web Services (AWS)' },
      ],
    },
    {
      area: 'Monitoring & alerting',
      items: [
        { name: 'Prometheus', usedIn: ['iot'] },
        { name: 'node_exporter', usedIn: ['iot'] },
        { name: 'Alertmanager', usedIn: ['iot'] },
        { name: 'Uptime Kuma', usedIn: ['iot'] },
      ],
    },
    {
      area: 'Tools & methods',
      items: [
        { name: 'Scrum and agile methods' },
        { name: 'Postman · Insomnia' },
        { name: 'Figma' },
        { name: 'Trello · Asana' },
      ],
    },
  ],
  softTitle: 'Soft skills',
  soft: [
    {
      name: 'Teamwork',
      evidence: 'Pasá la Página, with my thesis team, and the DPID design system, alongside the design team.',
    },
    {
      name: 'Spoken and written communication',
      evidence: 'Three years as a teaching assistant, the course I teach, and the manuals and training sessions at YPF.',
    },
    {
      name: 'Problem solving',
      evidence: 'The double safeguard against double bookings at Los Ciruelos, and the downtime alerts in the IoT project.',
    },
    {
      name: 'Analytical thinking',
      evidence: 'Mapping the inspection process at YPF, and accessibility audits with evidence for every finding.',
    },
    {
      name: 'Continuous learning',
      evidence: 'After graduating as an engineer I started a BSc in Artificial Intelligence.',
    },
  ],
  languagesTitle: 'Languages',
  languages: [
    { name: 'Spanish', level: 'Native' },
    { name: 'English', level: 'Advanced technical reading. Basic conversation.' },
  ],
};
