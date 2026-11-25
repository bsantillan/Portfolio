export type Lang = 'es' | 'en';

export type CaseId = 'iot' | 'sistema-diseno' | 'ypf' | 'pasa-la-pagina' | 'los-ciruelos';
export type ArchiveId = 'menu-accesible' | 'estacionamiento';
export type ImageKey = 'pasa-la-pagina' | 'menu-accesible' | 'estacionamiento';
export type DiagramKey = 'iot' | 'ypf' | 'ciruelos';

/** Un link siempre dice a dónde lleva. Sin href = no hay recurso público. */
export interface ResourceLink {
  label: string;
  href?: string;
}

export interface CaseStudy {
  id: CaseId;
  title: string;
  org: string;
  period: string;
  area: string;
  context: string;
  role: string;
  built: string[];
  decisions: string[];
  /** Solo tecnologías, máximo 6. */
  stack: string[];
  status: string;
  links: ResourceLink[];
  image?: { key: ImageKey; alt: string; width: number; height: number };
  diagram?: { key: DiagramKey; title: string; caption: string };
}

export interface ArchiveItem {
  id: ArchiveId;
  title: string;
  kind: string;
  summary: string;
  stack: string[];
  links: ResourceLink[];
  image: { key: ImageKey; alt: string; width: number; height: number };
}

export interface TimelineEntry {
  when: string;
  /** Año (y fracción) de inicio para ordenar; el render usa el orden del array. */
  title: string;
  where: string;
  detail?: string;
  kind: 'formación' | 'trabajo' | 'docencia';
  caseId?: CaseId;
  ongoing?: boolean;
}

export interface SkillGroup {
  area: string;
  /** usedIn: casos donde se ve; vacío si no hay un caso que lo muestre. */
  items: { name: string; usedIn?: CaseId[] }[];
}

export interface MapNode {
  id: string;
  label: string;
  hub?: boolean;
  info: string;
  caseId?: CaseId;
}

export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  ui: {
    skip: string;
    navLabel: string;
    nav: { id: string; label: string }[];
    menuOpen: string;
    menuClose: string;
    themeToLight: string;
    themeToDark: string;
    langSwitch: string;
    langSwitchLabel: string;
    newTab: string;
    privateCode: string;
  };
  hero: {
    name: [string, string];
    role: string;
    lede: string;
    ctaCases: string;
    ctaCv: string;
    mapLabel: string;
    mapIntroTitle: string;
    mapIntro: string;
    mapConnects: string;
    mapSeeCase: string;
  };
  nodes: MapNode[];
  edges: [string, string][];
  cases: {
    title: string;
    intro: string;
    labels: { context: string; role: string; built: string; decisions: string; stack: string; status: string; links: string; caseN: (n: number) => string };
    items: CaseStudy[];
  };
  archive: { title: string; intro: string; items: ArchiveItem[] };
  timeline: { title: string; intro: string; kinds: Record<TimelineEntry['kind'], string>; now: string; items: TimelineEntry[]; seeCase: string };
  a11y: {
    title: string;
    intro: string;
    practice: { title: string; body: string }[];
    course: { title: string; name: string; body: string };
    statement: {
      title: string;
      body: string;
      target: string;
      lastReview: string;
      results: { tool: string; result: string }[];
      howTested: string[];
      contact: string;
    };
  };
  skills: {
    title: string;
    intro: string;
    usedIn: string;
    technicalTitle: string;
    groups: SkillGroup[];
    softTitle: string;
    soft: { name: string; evidence: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { title: string; body: string; email: string; linkedin: string; github: string; cv: string; location: string };
}
