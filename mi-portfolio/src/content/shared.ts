import type { CaseId, StackGroup } from './types';

/** Datos que no dependen del idioma. */
export const links = {
  email: 'brunosaantillan@gmail.com',
  github: 'https://github.com/bsantillan',
  linkedin: 'https://www.linkedin.com/in/bruno-santillan-50a91321a/',
  cv: `${import.meta.env.BASE_URL}CV_Bruno_Santillan.pdf`,
  site: 'https://bsantillan.github.io/Portfolio/',
};

type GroupKey = 'backend' | 'front' | 'data' | 'auto' | 'ops' | 'process';

const groups: Record<GroupKey, { name: string; usedIn: CaseId[] }[]> = {
  backend: [
    { name: 'Java', usedIn: ['pasa-la-pagina', 'los-ciruelos'] },
    { name: 'Spring Boot', usedIn: ['pasa-la-pagina', 'los-ciruelos'] },
    { name: 'Spring Security · JWT', usedIn: ['pasa-la-pagina'] },
    { name: 'WebSockets', usedIn: ['pasa-la-pagina'] },
  ],
  front: [
    { name: 'React', usedIn: [] },
    { name: 'React Native', usedIn: ['pasa-la-pagina'] },
    { name: 'Angular', usedIn: ['los-ciruelos'] },
    { name: 'TypeScript', usedIn: ['los-ciruelos'] },
    { name: 'HTML · CSS', usedIn: [] },
  ],
  data: [
    { name: 'Python', usedIn: ['iot'] },
    { name: 'MongoDB', usedIn: ['iot'] },
    { name: 'MySQL', usedIn: ['pasa-la-pagina', 'los-ciruelos'] },
    { name: 'PostgreSQL', usedIn: [] },
    { name: 'Power BI · DAX · Power Query', usedIn: ['ypf'] },
    { name: 'Dataverse', usedIn: ['ypf'] },
  ],
  auto: [
    { name: 'Power Apps', usedIn: ['ypf'] },
    { name: 'Power Automate', usedIn: ['ypf'] },
  ],
  ops: [
    { name: 'Docker', usedIn: ['pasa-la-pagina', 'los-ciruelos'] },
    { name: 'Prometheus · Alertmanager', usedIn: ['iot'] },
    { name: 'Grafana', usedIn: [] },
    { name: 'Git', usedIn: [] },
  ],
  process: [
    { name: 'Figma', usedIn: [] },
    { name: 'UML · BPMN', usedIn: [] },
    { name: 'Scrum · Kanban', usedIn: [] },
  ],
};

export function stackGroups(names: Record<GroupKey, string>): StackGroup[] {
  return (Object.keys(groups) as GroupKey[]).map((k) => ({ area: names[k], items: groups[k] }));
}

/** Conexiones del mapa del hero (ids de nodos). */
export const edges: [string, string][] = [
  ['sw', 'java'], ['sw', 'react'], ['sw', 'rn'], ['react', 'rn'], ['sw', 'ac'],
  ['da', 'pp'], ['da', 'py'], ['da', 'mongo'], ['da', 'obs'], ['py', 'mongo'],
  ['ac', 'wcag'], ['ac', 'sr'], ['ac', 'curso'], ['ac', 'dpid'],
  ['ia', 'py'], ['ia', 'ac'], ['ia', 'da'], ['ia', 'nilm'],
  ['pp', 'ypf'], ['ypf', 'energia'], ['dpid', 'energia'], ['nilm', 'energia'],
  ['dpid', 'obs'], ['dpid', 'mongo'], ['sw', 'dpid'],
];
