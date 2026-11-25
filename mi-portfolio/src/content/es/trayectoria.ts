import type { Content } from '../types';

export const timeline: Content['timeline'] = {
  title: 'Trayectoria',
  intro: 'De lo más reciente a lo más antiguo.',
  kinds: { formación: 'Formación', trabajo: 'Trabajo', docencia: 'Docencia' },
  now: 'en curso',
  seeCase: 'Ver el caso',
  items: [
    { when: '2026 – hoy', title: 'Licenciatura en Inteligencia Artificial', where: 'UTN FRLP', kind: 'formación', ongoing: true },
    { when: '2026', title: 'Ingeniero en Sistemas y Analista Universitario de Sistemas', where: 'UTN FRLP', kind: 'formación' },
    {
      when: 'Sep 2025 – hoy',
      title: 'Desarrollador y Analista de Accesibilidad',
      where: 'Dirección Provincial de Innovación Digital (PBA)',
      detail: 'Auditorías WCAG, pruebas con tecnologías de asistencia, los componentes en código del sistema de diseño accesible de la provincia y el proyecto IoT de eficiencia energética.',
      kind: 'trabajo',
      caseId: 'iot',
      ongoing: true,
    },
    {
      when: 'Sep 2025 – hoy',
      title: 'Docente del curso «Desarrollo web accesible: fundamentos y buenas prácticas para equipos técnicos»',
      where: 'Dirección Provincial de Innovación Digital (PBA)',
      kind: 'docencia',
      ongoing: true,
    },
    {
      when: 'Jun – sep 2025',
      title: 'Práctica Profesional',
      where: 'YPF S.A. · Inspección de Equipos Estáticos',
      detail: 'Sistema de gestión de inspecciones con Power Platform.',
      kind: 'trabajo',
      caseId: 'ypf',
    },
    {
      when: 'Mar 2025 – hoy',
      title: 'Desarrollador full stack freelance',
      where: 'Pasá la Página',
      kind: 'trabajo',
      caseId: 'pasa-la-pagina',
      ongoing: true,
    },
    { when: 'Mar 2023 – sep 2025', title: 'Ayudante de cátedra de Análisis Matemático II', where: 'UTN FRLP', kind: 'docencia' },
  ],
};
