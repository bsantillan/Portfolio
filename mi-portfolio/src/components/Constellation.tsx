import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useApp } from '../state';

/** Posiciones relativas (0–1) del área del mapa: escritorio y mobile. */
const POS: Record<string, { d: [number, number]; m: [number, number] }> = {
  java: { d: [0.55, 0.06], m: [0.22, 0.05] },
  ia: { d: [0.9, 0.07], m: [0.8, 0.05] },
  react: { d: [0.74, 0.15], m: [0.55, 0.14] },
  pp: { d: [0.9, 0.24], m: [0.78, 0.24] },
  sw: { d: [0.56, 0.26], m: [0.24, 0.24] },
  rn: { d: [0.75, 0.34], m: [0.5, 0.34] },
  ypf: { d: [0.97, 0.38], m: [0.86, 0.34] },
  dpid: { d: [0.1, 0.46], m: [0.2, 0.44] },
  da: { d: [0.82, 0.47], m: [0.7, 0.44] },
  obs: { d: [0.45, 0.37], m: [0.42, 0.54] },
  py: { d: [0.97, 0.54], m: [0.84, 0.54] },
  ac: { d: [0.27, 0.58], m: [0.3, 0.64] },
  energia: { d: [0.62, 0.47], m: [0.76, 0.64] },
  curso: { d: [0.12, 0.69], m: [0.18, 0.74] },
  mongo: { d: [0.7, 0.54], m: [0.58, 0.74] },
  wcag: { d: [0.06, 0.8], m: [0.14, 0.84] },
  sr: { d: [0.3, 0.88], m: [0.5, 0.94] },
  nilm: { d: [0.45, 0.96], m: [0.86, 0.84] },
};

interface Pt {
  x: number;
  y: number;
}

export default function Constellation() {
  const { t } = useApp();
  const { nodes, edges, hero } = t;
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pts, setPts] = useState<Record<string, Pt>>({});
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [hot, setHot] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>('ac');
  const [ready, setReady] = useState(false);

  const neighbours = useMemo(() => {
    const m: Record<string, string[]> = {};
    edges.forEach(([a, b]) => {
      (m[a] ||= []).push(b);
      (m[b] ||= []).push(a);
    });
    return m;
  }, [edges]);

  const layout = useCallback(() => {
    const box = boxRef.current;
    if (!box) return;
    const w = box.clientWidth;
    const h = box.clientHeight;
    const mobile = window.matchMedia('(max-width: 900px)').matches;
    const next: Record<string, Pt> = {};
    const origin = box.getBoundingClientRect();
    const rel = (r: DOMRect) => ({ l: r.left - origin.left, r: r.right - origin.left, t: r.top - origin.top, b: r.bottom - origin.top });
    // Obstáculos: el nombre (que se superpone al mapa) y la leyenda flotante.
    // Caja ajustada al texto (no al bloque) de cada línea del nombre.
    const nameBoxes = [...document.querySelectorAll('.hero__name > span')].map((s) => {
      const range = document.createRange();
      range.selectNodeContents(s);
      return rel(range.getBoundingClientRect());
    });
    const legendEl = box.parentElement?.querySelector('.map__legend');
    const legendBox = legendEl && getComputedStyle(legendEl).position === 'absolute' ? rel(legendEl.getBoundingClientRect()) : null;
    const placed: { l: number; r: number; t: number; b: number }[] = [];
    const GAP = 8;
    const hits = (a: { l: number; r: number; t: number; b: number }, b: { l: number; r: number; t: number; b: number }) =>
      a.l < b.r + GAP && a.r > b.l - GAP && a.t < b.b + GAP && a.b > b.t - GAP;

    nodes.forEach((n) => {
      const p = POS[n.id];
      const [fx, fy] = mobile ? p.m : p.d;
      const el = btnRefs.current[n.id];
      const bw = el?.offsetWidth ?? 80;
      const bh = el?.offsetHeight ?? 36;
      const clampX = (x: number) => Math.min(Math.max(x, bw / 2 + 2), w - bw / 2 - 2);
      const clampY = (y: number) => Math.min(Math.max(y, bh / 2 + 2), h - bh / 2 - 2);
      let x = clampX(fx * w);
      let y = clampY(fy * h);
      const rect = () => ({ l: x - bw / 2, r: x + bw / 2, t: y - bh / 2, b: y + bh / 2 });
      // Empujes simples: abajo del nombre, arriba/izquierda de la leyenda, y fuera de otros nodos.
      for (let k = 0; k < 12; k++) {
        const r = rect();
        const nb = nameBoxes.find((o) => hits(r, o));
        if (nb) {
          y = clampY(nb.b + bh / 2 + GAP + 2);
          if (hits(rect(), nb)) x = clampX(nb.r + bw / 2 + GAP + 2);
          continue;
        }
        if (legendBox && hits(r, legendBox)) {
          const up = legendBox.t - bh / 2 - GAP - 2;
          const left = legendBox.l - bw / 2 - GAP - 2;
          if (fy * h - up < x - left) y = clampY(up);
          else x = clampX(left);
          continue;
        }
        const other = placed.find((o) => hits(r, o));
        if (other) {
          const down = clampY(other.b + bh / 2 + GAP + 1);
          const up = clampY(other.t - bh / 2 - GAP - 1);
          const free = (yy: number) => {
            const c = { l: x - bw / 2, r: x + bw / 2, t: yy - bh / 2, b: yy + bh / 2 };
            return !nameBoxes.some((o) => hits(c, o)) && !(legendBox && hits(c, legendBox)) && !placed.some((o) => hits(c, o));
          };
          const prefUp = y < (other.t + other.b) / 2;
          y = prefUp ? (free(up) ? up : down) : free(down) ? down : up;
          continue;
        }
        break;
      }
      // Último recurso: buscar el hueco libre más cercano en vertical.
      const isFree = () => {
        const c = rect();
        return !nameBoxes.some((o) => hits(c, o)) && !(legendBox && hits(c, legendBox)) && !placed.some((o) => hits(c, o));
      };
      if (!isFree()) {
        const y0 = y;
        let best: number | null = null;
        for (let yy = bh / 2 + 2; yy <= h - bh / 2 - 2; yy += 6) {
          y = yy;
          if (isFree() && (best === null || Math.abs(yy - y0) < Math.abs(best - y0))) best = yy;
        }
        y = best ?? y0;
      }
      placed.push(rect());
      next[n.id] = { x, y };
    });
    setPts(next);
    setSize({ w, h });
  }, [nodes]);

  // El cálculo corre fuera del render inicial, en tareas cortas, y solo si cambió el tamaño
  // (evita bloquear el hilo principal mientras carga la página).
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let raf = 0;
    let timer = 0;
    let last = '';
    const schedule = (force = false) => {
      const key = `${box.clientWidth}x${box.clientHeight}`;
      if (!force && key === last) return;
      last = key;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      raf = requestAnimationFrame(() => {
        timer = window.setTimeout(layout, 0);
      });
    };
    schedule(true);
    const ro = new ResizeObserver(() => schedule());
    ro.observe(box);
    // las fuentes cambian el ancho de los nodos
    document.fonts?.ready.then(() => schedule(true));
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [layout]);

  useEffect(() => {
    // Entrada única (menos de 1 s) cuando ya hay posiciones; sin movimiento continuo → WCAG 2.2.2
    if (ready || Object.keys(pts).length === 0) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [pts, ready]);

  const active = hot ?? pinned;
  const linked = new Set(active ? [active, ...(neighbours[active] ?? [])] : []);
  const activeNode = nodes.find((n) => n.id === active);
  const labelOf = (id: string) => nodes.find((n) => n.id === id)?.label ?? id;

  const curve = (a: Pt, b: Pt) => {
    const mx = (a.x + b.x) / 2 + (b.y - a.y) * 0.16;
    const my = (a.y + b.y) / 2 - (b.x - a.x) * 0.16;
    return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  };

  const center = { x: size.w / 2, y: size.h / 2 };

  return (
    <div className="map">
      <div className="map__area" ref={boxRef}>
        <svg className="map__edges" width={size.w} height={size.h} aria-hidden="true" focusable="false">
          {edges.map(([a, b]) => {
            const A = pts[a];
            const B = pts[b];
            if (!A || !B) return null;
            const on = !!active && (a === active || b === active);
            return <path key={`${a}-${b}`} d={curve(A, B)} className={`map__edge${on ? ' is-on' : ''}${ready ? ' is-ready' : ''}`} />;
          })}
        </svg>
        <ul className={`map__nodes${Object.keys(pts).length ? ' is-placed' : ''}`} aria-label={hero.mapLabel}>
          {nodes.map((n) => {
            const p = pts[n.id] ?? center;
            // Posición final fija; la entrada se anima con transform (sin recalcular layout).
            const offset = ready ? 'translate(-50%, -50%)' : `translate(calc(-50% + ${center.x - p.x}px), calc(-50% + ${center.y - p.y}px))`;
            const state = !active ? '' : n.id === active ? ' is-active' : linked.has(n.id) ? ' is-linked' : ' is-dim';
            return (
              <li key={n.id} className="map__item" style={{ left: p.x, top: p.y, transform: offset }}>
                <button
                  ref={(el) => {
                    btnRefs.current[n.id] = el;
                  }}
                  type="button"
                  className={`map__node${n.hub ? ' map__node--hub' : ''}${state}`}
                  aria-pressed={pinned === n.id}
                  aria-describedby={`map-desc-${n.id}`}
                  onMouseEnter={() => setHot(n.id)}
                  onMouseLeave={() => setHot(null)}
                  onFocus={() => setHot(n.id)}
                  onBlur={() => setHot(null)}
                  onClick={() => setPinned(n.id)}
                >
                  {n.label}
                </button>
                <span id={`map-desc-${n.id}`} hidden>
                  {n.info} {hero.mapConnects}: {(neighbours[n.id] ?? []).map(labelOf).join(', ')}.
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="map__legend">
        {activeNode ? (
          <>
            <p className="map__legend-title">{activeNode.label}</p>
            <p className="map__legend-body">{activeNode.info}</p>
            <p className="map__legend-links">
              <span className="map__legend-label">{hero.mapConnects}: </span>
              {(neighbours[activeNode.id] ?? []).map(labelOf).join(' · ')}
            </p>
            {activeNode.caseId && (
              <a className="map__legend-case" href={`#caso-${activeNode.caseId}`}>
                {hero.mapSeeCase}
                <span aria-hidden="true"> ↓</span>
                <span className="visually-hidden">: {t.cases.items.find((c) => c.id === activeNode.caseId)?.title}</span>
              </a>
            )}
          </>
        ) : (
          <>
            <p className="map__legend-title">{hero.mapIntroTitle}</p>
            <p className="map__legend-body">{hero.mapIntro}</p>
          </>
        )}
        <p className="map__legend-hint">{hero.mapIntro}</p>
      </div>
    </div>
  );
}
