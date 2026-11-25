import type { Content } from '../types';
import { stackGroups } from '../shared';

export const stack: Content['stack'] = {
  title: 'Stack, with evidence',
  intro: 'Only what I have used. Each technology links to the case where I used it.',
  usedIn: 'Used in',
  noCase: 'Outside these cases',
  groups: stackGroups({
    backend: 'Backend',
    front: 'Frontend & mobile',
    data: 'Data',
    auto: 'Automation',
    ops: 'Infrastructure & observability',
    process: 'Design & process',
  }),
};
