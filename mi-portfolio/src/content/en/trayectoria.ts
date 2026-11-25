import type { Content } from '../types';

export const timeline: Content['timeline'] = {
  title: 'Background',
  intro: 'Most recent first.',
  kinds: { formación: 'Education', trabajo: 'Work', docencia: 'Teaching' },
  now: 'ongoing',
  seeCase: 'See the case',
  items: [
    { when: '2026 – now', title: 'BSc in Artificial Intelligence', where: 'UTN FRLP', kind: 'formación', ongoing: true },
    {
      when: 'Apr 2026',
      title: 'Information Systems Engineering degree',
      where: 'UTN FRLP',
      detail: 'Graduated on 9 April 2026. Final project: Pasá la Página, as a team.',
      kind: 'formación',
      caseId: 'pasa-la-pagina',
    },
    {
      when: 'Sep 2025 – now',
      title: 'Developer and Accessibility Analyst',
      where: 'Provincial Directorate of Digital Innovation (Buenos Aires)',
      detail:
        'Around 60 components for the accessible design system, the IoT energy-efficiency project, monitoring dashboards in Grafana and Tableau, WCAG accessibility audits and requirements gathering.',
      kind: 'trabajo',
      caseId: 'sistema-diseno',
      ongoing: true,
    },
    {
      when: 'Sep 2025 – now',
      title: 'Instructor of the course “Accessible web development: fundamentals and good practices for technical teams”',
      where: 'Provincial Directorate of Digital Innovation (Buenos Aires)',
      kind: 'docencia',
      ongoing: true,
    },
    {
      when: 'Jun – Sep 2025',
      title: 'University professional intern',
      where: 'YPF S.A. · Static Equipment Inspection',
      detail: 'Requirements, functional analysis and development of an inspection management system on Power Platform.',
      kind: 'trabajo',
      caseId: 'ypf',
    },
    { when: 'Mar 2025', title: 'Systems Analyst degree', where: 'UTN FRLP', detail: 'Graduated on 20 March 2025.', kind: 'formación' },
    {
      when: '2022 – 2025',
      title: 'Teaching assistant, Calculus II',
      where: 'UTN FRLP',
      detail: 'Practical classes, office hours and student support.',
      kind: 'docencia',
    },
  ],
};
