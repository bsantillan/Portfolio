import type { DiagramKey } from '../content/types';

interface Box {
  x: number;
  y: number;
  w: number;
  label: string;
  mine?: boolean;
  shape?: 'pill' | 'rect';
}

const H = 48;

const diagrams: Record<DiagramKey, { boxes: Box[]; links: [number, number][]; vb: [number, number] }> = {
  iot: {
    vb: [640, 300],
    boxes: [
      { x: 12, y: 126, w: 112, label: 'sensores', shape: 'rect' },
      { x: 160, y: 126, w: 180, label: 'MongoDB · series', mine: true },
      { x: 380, y: 20, w: 248, label: 'dashboard Python', mine: true },
      { x: 380, y: 92, w: 248, label: 'panel de administración', mine: true },
      { x: 380, y: 164, w: 248, label: 'Prometheus · Alertmanager', mine: true },
      { x: 380, y: 236, w: 248, label: 'Discord', shape: 'rect' },
    ],
    links: [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [4, 5],
    ],
  },
  ypf: {
    vb: [640, 300],
    boxes: [
      { x: 12, y: 40, w: 176, label: 'Power Apps', mine: true },
      { x: 232, y: 126, w: 176, label: 'Dataverse', mine: true },
      { x: 12, y: 212, w: 176, label: 'Power Automate', mine: true },
      { x: 452, y: 126, w: 176, label: 'Power BI', mine: true },
    ],
    links: [
      [0, 1],
      [2, 1],
      [0, 2],
      [1, 3],
    ],
  },
  ciruelos: {
    vb: [640, 300],
    boxes: [
      { x: 12, y: 126, w: 148, label: 'app web React', mine: true },
      { x: 196, y: 126, w: 176, label: 'API Spring Boot', mine: true },
      { x: 412, y: 20, w: 216, label: 'PostgreSQL', mine: true },
      { x: 412, y: 92, w: 216, label: 'Mercado Pago', shape: 'rect' },
      { x: 412, y: 164, w: 216, label: 'WhatsApp · mail', shape: 'rect' },
      { x: 412, y: 236, w: 216, label: 'Google (inicio de sesión)', shape: 'rect' },
    ],
    links: [
      [0, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
    ],
  },
};

function anchor(a: Box, b: Box): [number, number, number, number] {
  const ac = { x: a.x + a.w / 2, y: a.y + H / 2 };
  const bc = { x: b.x + b.w / 2, y: b.y + H / 2 };
  if (Math.abs(ac.x - bc.x) > Math.abs(ac.y - bc.y) * 1.2) {
    const left = ac.x < bc.x;
    return [left ? a.x + a.w : a.x, ac.y, left ? b.x : b.x + b.w, bc.y];
  }
  const up = ac.y < bc.y;
  return [ac.x, up ? a.y + H : a.y, bc.x, up ? b.y : b.y + H];
}

export default function Diagram({ kind, title, labels }: { kind: DiagramKey; title: string; labels?: Record<string, string> }) {
  const d = diagrams[kind];
  const id = `diagram-${kind}`;
  return (
    <svg className="diagram" viewBox={`0 0 ${d.vb[0]} ${d.vb[1]}`} role="img" aria-labelledby={id}>
      <title id={id}>{title}</title>
      {d.links.map(([i, j]) => {
        const [x1, y1, x2, y2] = anchor(d.boxes[i], d.boxes[j]);
        const mx = (x1 + x2) / 2;
        const path = Math.abs(x1 - x2) > Math.abs(y1 - y2) ? `M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}` : `M${x1} ${y1} C${x1} ${(y1 + y2) / 2}, ${x2} ${(y1 + y2) / 2}, ${x2} ${y2}`;
        return <path key={`${i}-${j}`} d={path} className="diagram__link" />;
      })}
      {d.boxes.map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={H} rx={b.shape === 'rect' ? 6 : H / 2} className={b.mine ? 'diagram__box is-mine' : 'diagram__box'} />
          <text x={b.x + b.w / 2} y={b.y + H / 2 + 5} textAnchor="middle" className="diagram__text">
            {labels?.[b.label] ?? b.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
