import type { Content } from '../types';

export const timeline: Content['timeline'] = {
  title: 'Background',
  intro: 'Most recent first.',
  kinds: { formación: 'Education', trabajo: 'Work', docencia: 'Teaching' },
  now: 'ongoing',
  seeCase: 'See the case',
  items: [
    { when: '2026 – now', title: 'BSc in Artificial Intelligence', where: 'UTN FRLP', kind: 'formación', ongoing: true },
    { when: '2026', title: 'Systems Engineering degree (Ingeniero en Sistemas) and Systems Analyst degree', where: 'UTN FRLP', kind: 'formación' },
    {
      when: 'Sep 2025 – now',
      title: 'Developer and Accessibility Analyst',
      where: 'Provincial Directorate of Digital Innovation (Buenos Aires)',
      detail: 'WCAG audits, assistive technology testing, accessible web components and the IoT energy-efficiency project.',
      kind: 'trabajo',
      caseId: 'iot',
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
      title: 'Professional internship',
      where: 'YPF S.A. · Static Equipment Inspection',
      detail: 'An inspection management system on Power Platform.',
      kind: 'trabajo',
      caseId: 'ypf',
    },
    {
      when: 'Mar 2025 – now',
      title: 'Freelance full-stack developer',
      where: 'Pasá la Página',
      kind: 'trabajo',
      caseId: 'pasa-la-pagina',
      ongoing: true,
    },
    { when: 'Mar 2023 – Sep 2025', title: 'Teaching assistant, Calculus II', where: 'UTN FRLP', kind: 'docencia' },
  ],
};
