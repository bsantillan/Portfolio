import type { Content } from '../types';

export const timeline: Content['timeline'] = {
  title: 'Trayectoria',
  intro: 'De lo más reciente a lo más antiguo.',
  kinds: { formación: 'Formación', trabajo: 'Trabajo', docencia: 'Docencia' },
  now: 'en curso',
  seeCase: 'Ver el caso',
  items: [
    { when: '2026 – hoy', title: 'Licenciatura en Inteligencia Artificial', where: 'UTN FRLP', kind: 'formación', ongoing: true },
    {
      when: 'Abr 2026',
      title: 'Ingeniero en Sistemas de Información',
      where: 'UTN FRLP',
      detail: 'Me recibí el 9 de abril de 2026. Proyecto final: Pasá la Página, en equipo.',
      kind: 'formación',
      caseId: 'pasa-la-pagina',
    },
    {
      when: 'Sep 2025 – hoy',
      title: 'Desarrollador y Analista de Accesibilidad',
      where: 'Dirección Provincial de Innovación Digital (PBA)',
      detail:
        'Unos 60 componentes del sistema de diseño accesible, el proyecto IoT de eficiencia energética, tableros de monitoreo con Grafana y Tableau, auditorías de accesibilidad WCAG y relevamiento de requerimientos.',
      kind: 'trabajo',
      caseId: 'sistema-diseno',
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
      title: 'Practicante Profesional Universitario',
      where: 'YPF S.A. · Inspección de Equipos Estáticos',
      detail: 'Relevamiento, análisis funcional y desarrollo de un sistema de gestión de inspecciones con Power Platform.',
      kind: 'trabajo',
      caseId: 'ypf',
    },
    { when: 'Mar 2025', title: 'Analista de Sistemas', where: 'UTN FRLP', detail: 'Me recibí el 20 de marzo de 2025.', kind: 'formación' },
    {
      when: '2022 – 2025',
      title: 'Ayudante de cátedra de Análisis Matemático II',
      where: 'UTN FRLP',
      detail: 'Clases prácticas, consultas y acompañamiento a estudiantes.',
      kind: 'docencia',
    },
  ],
};
