import type { Content } from '../types';
import { edges } from '../shared';
import { a11y, contact, hero, meta, nodes, ui } from './site';
import { archive, cases } from './cases';
import { timeline } from './trayectoria';
import { stack } from './stack';

const es: Content = { meta, ui, hero, nodes, edges, cases, archive, timeline, a11y, stack, contact };
export default es;
