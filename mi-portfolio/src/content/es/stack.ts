import type { Content } from '../types';
import { stackGroups } from '../shared';

export const stack: Content['stack'] = {
  title: 'Stack, con evidencia',
  intro: 'Solo lo que usé. Cada tecnología lleva al caso donde la usé.',
  usedIn: 'Usado en',
  noCase: 'Fuera de estos casos',
  groups: stackGroups({
    backend: 'Backend',
    front: 'Frontend y mobile',
    data: 'Datos',
    auto: 'Automatización',
    ops: 'Infraestructura y observabilidad',
    process: 'Diseño y proceso',
  }),
};
