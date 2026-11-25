/** Datos que no dependen del idioma. */
export const links = {
  email: 'brunosaantillan@gmail.com',
  github: 'https://github.com/bsantillan',
  linkedin: 'https://www.linkedin.com/in/bruno-santillan-50a91321a/',
  cv: `${import.meta.env.BASE_URL}CV_Bruno_Santillan.pdf`,
  site: 'https://bsantillan.github.io/Portfolio/',
};

/** Conexiones del mapa del hero (ids de nodos). */
export const edges: [string, string][] = [
  ['sw', 'java'], ['sw', 'react'], ['sw', 'rn'], ['react', 'rn'], ['sw', 'ds'],
  ['ac', 'ds'], ['ac', 'wcag'], ['ac', 'curso'], ['ac', 'dpid'], ['dpid', 'ds'],
  ['da', 'py'], ['da', 'mongo'], ['da', 'obs'], ['da', 'pp'], ['da', 'dpid'], ['pp', 'ypf'],
  ['ia', 'da'], ['ia', 'ac'],
  ['af', 'ypf'], ['af', 'dpid'], ['af', 'sw'],
];
