import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useApp } from '../state';
import type { Lang } from '../content/types';
import './StructureOverlay.css';

type Kind = 'landmark' | 'heading' | 'image' | 'focus';
interface Mark {
  kind: Kind;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}
interface OutlineItem {
  level: number;
  text: string;
  id?: string;
}
interface LandmarkItem {
  role: string;
  name: string;
}

const ROLE_NAMES: Record<Lang, Record<string, string>> = {
  es: { banner: 'banner', navigation: 'navegación', main: 'principal', region: 'región', contentinfo: 'información de contenido', complementary: 'complementario' },
  en: { banner: 'banner', navigation: 'navigation', main: 'main', region: 'region', contentinfo: 'content info', complementary: 'complementary' },
};

function isVisible(el: Element) {
  // El panel no se describe a sí mismo: el esquema es el de la página.
  if (el.closest('[hidden], .so-layer, .so-panel')) return false;
  const r = el.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return false;
  const cs = getComputedStyle(el);
  return cs.visibility !== 'hidden' && cs.display !== 'none';
}

function accName(el: Element): string {
  const label = el.getAttribute('aria-label');
  if (label) return label.trim();
  const by = el.getAttribute('aria-labelledby');
  if (by)
    return by
      .split(/\s+/)
      .map((id) => document.getElementById(id)?.textContent ?? '')
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();
  return '';
}

function landmarkRole(el: Element): string | null {
  const explicit = el.getAttribute('role');
  if (explicit) return explicit;
  const tag = el.tagName.toLowerCase();
  if (tag === 'main') return 'main';
  if (tag === 'nav') return 'navigation';
  if (tag === 'aside') return 'complementary';
  if (tag === 'header' && !el.closest('main, article, section, aside, nav')) return 'banner';
  if (tag === 'footer' && !el.closest('main, article, section, aside, nav')) return 'contentinfo';
  if (tag === 'section' && accName(el)) return 'region';
  return null;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

export default function StructureOverlay({ announce }: { announce: (msg: string) => void }) {
  const { t, lang, structure, setStructure } = useApp();
  const [marks, setMarks] = useState<Mark[]>([]);
  const [outline, setOutline] = useState<OutlineItem[]>([]);
  const [landmarks, setLandmarks] = useState<LandmarkItem[]>([]);
  const [counts, setCounts] = useState({ l: 0, h: 0, i: 0, f: 0 });
  const panelRef = useRef<HTMLElement>(null);

  const compute = useCallback(() => {
    const sx = window.scrollX;
    const sy = window.scrollY;
    const box = (el: Element) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + sx, y: r.top + sy, w: r.width, h: r.height };
    };
    const next: Mark[] = [];
    const lms: LandmarkItem[] = [];
    document.querySelectorAll('header, nav, main, footer, aside, section, [role]').forEach((el) => {
      const role = landmarkRole(el);
      if (!role || !ROLE_NAMES.es[role] || !isVisible(el)) return;
      const name = accName(el);
      const roleName = ROLE_NAMES[lang][role];
      lms.push({ role: roleName, name });
      next.push({ kind: 'landmark', ...box(el), label: name ? `${roleName} · ${name}` : roleName });
    });
    const outl: OutlineItem[] = [];
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
      if (!isVisible(el)) return;
      const level = Number(el.tagName[1]);
      const text = (el.textContent ?? '').replace(/\s+/g, ' ').trim();
      outl.push({ level, text, id: el.id || undefined });
      next.push({ kind: 'heading', ...box(el), label: `H${level}` });
    });
    let images = 0;
    document.querySelectorAll('img, svg[role="img"]').forEach((el) => {
      if (!isVisible(el)) return;
      const alt = el.tagName === 'IMG' ? el.getAttribute('alt') ?? '' : accName(el) || el.querySelector('title')?.textContent || '';
      images++;
      const short = alt.length > 70 ? `${alt.slice(0, 68)}…` : alt;
      next.push({ kind: 'image', ...box(el), label: `alt: ${short || '""'}` });
    });
    let n = 0;
    document.querySelectorAll(FOCUSABLE).forEach((el) => {
      if (!isVisible(el) || el.closest('.so-panel')) return;
      n++;
      next.push({ kind: 'focus', ...box(el), label: String(n) });
    });
    setMarks(next);
    setOutline(outl);
    setLandmarks(lms);
    setCounts({ l: lms.length, h: outl.length, i: images, f: n });
    return { l: lms.length, h: outl.length, f: n };
  }, [lang]);

  // Anuncio y cálculo al prender/apagar
  // Se monta al primer encendido; desde ahí anuncia cada cambio.
  useLayoutEffect(() => {
    if (structure) {
      const c = compute();
      announce(t.ui.structureAnnounceOn(c.l, c.h, c.f));
    } else {
      setMarks([]);
      announce(t.ui.structureAnnounceOff);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [structure]);

  // Recalcula si cambia el layout (resize, idioma, fuentes)
  useEffect(() => {
    if (!structure) return;
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => compute());
    };
    schedule();
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, [structure, compute, lang]);

  const close = () => {
    setStructure(false);
    document.querySelector<HTMLButtonElement>('.tool--structure')?.focus();
  };

  return (
    <>
      {structure && (
        <>
          <aside ref={panelRef} className="so-panel" aria-labelledby="so-title">
            <div className="wrap so-panel__inner">
              <div className="so-panel__head">
                <h2 id="so-title">{t.ui.structurePanelTitle}</h2>
                <button type="button" className="btn so-panel__close" onClick={close}>
                  {t.ui.structureClose}
                </button>
              </div>
              <p className="so-panel__intro">{t.ui.structureIntro}</p>
              <dl className="so-panel__counts">
                <div>
                  <dt>{t.ui.structureLandmarks}</dt>
                  <dd>{counts.l}</dd>
                </div>
                <div>
                  <dt>{t.ui.structureHeadings}</dt>
                  <dd>{counts.h}</dd>
                </div>
                <div>
                  <dt>{t.ui.structureImages}</dt>
                  <dd>{counts.i}</dd>
                </div>
                <div>
                  <dt>{t.ui.structureFocus}</dt>
                  <dd>{counts.f}</dd>
                </div>
              </dl>
              <div className="so-panel__lists">
                <div>
                  <h3>{t.ui.structureLandmarks}</h3>
                  <ul className="so-landmarks">
                    {landmarks.map((l, i) => (
                      <li key={i}>
                        <span className="so-tag">{l.role}</span> {l.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>{t.ui.structureHeadings}</h3>
                  <ul className="so-outline">
                    {outline.map((o, i) => (
                        <li key={i} style={{ paddingInlineStart: `${(o.level - 1) * 18}px` }}>
                          <span className="so-tag">H{o.level}</span>{' '}
                          {o.id ? <a href={`#${o.id}`}>{o.text}</a> : o.text}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="so-layer" aria-hidden="true">
            {marks.map((m, i) => (
              <div
                key={i}
                className={`so-mark so-mark--${m.kind}`}
                style={{ left: m.x, top: m.y, width: m.w, height: m.h }}
              >
                <span className="so-badge">{m.label}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
