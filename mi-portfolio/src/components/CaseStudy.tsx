import { useEffect, useRef, useState } from 'react';
import type { CaseStudy as Case } from '../content/types';
import { useApp } from '../state';
import Diagram from './Diagram';
import Picture from './Picture';
import ResourceLinks from './ResourceLinks';

const diagramLabelsEn: Record<string, string> = {
  sensores: 'sensors',
  'panel de administración': 'admin panel',
  'dashboard Python': 'Python dashboard',
  'MongoDB · series': 'MongoDB · time series',
};

export default function CaseStudy({ item, index }: { item: Case; index: number }) {
  const { t, lang } = useApp();
  const L = t.cases.labels;
  const n = index + 1;
  const titleId = `caso-${item.id}-titulo`;
  // El contenedor del diagrama solo entra en el orden de tabulación cuando tiene scroll.
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => setScrollable(el.scrollWidth > el.clientWidth + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <article id={`caso-${item.id}`} className={`case ${index % 2 ? 'case--even' : 'case--odd'}`} aria-labelledby={titleId}>
      <span className="case__bignum outline" aria-hidden="true">
        {String(n).padStart(2, '0')}
      </span>

      <header className="case__head">
        <p className="kicker">
          {L.caseN(n)} · {item.area}
        </p>
        <h3 id={titleId} className="case__title">
          {item.title}
        </h3>
        <p className="case__meta">
          {item.org} · {item.period}
        </p>
      </header>

      <div className="case__context">
        <h4>{L.context}</h4>
        <p>{item.context}</p>
      </div>
      <div className="case__role">
        <h4>{L.role}</h4>
        <p>{item.role}</p>
      </div>

      <div className="case__built">
        <h4>{L.built}</h4>
        <ul>
          {item.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <figure className="case__media">
        {item.diagram ? (
          // En pantallas chicas el diagrama se desplaza en horizontal para mantener el texto legible.
          <div
            ref={scrollRef}
            className="diagram-scroll"
            tabIndex={scrollable ? 0 : undefined}
            role={scrollable ? 'group' : undefined}
            aria-labelledby={scrollable ? `${item.id}-fig` : undefined}
          >
            <Diagram kind={item.diagram.key} title={item.diagram.title} labels={lang === 'en' ? diagramLabelsEn : undefined} />
          </div>
        ) : item.image ? (
          <Picture image={item.image} sizes="(max-width: 900px) 100vw, 640px" />
        ) : null}
        {item.diagram && <figcaption id={`${item.id}-fig`}>{item.diagram.caption}</figcaption>}
      </figure>

      <div className="case__decisions">
        <h4>{L.decisions}</h4>
        <ul>
          {item.decisions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="case__foot">
        <div className="case__stack">
          <h4>{L.stack}</h4>
          <ul className="chips">
            {item.stack.map((s) => (
              <li key={s} className="chip">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="case__status">
          <h4>{L.status}</h4>
          <p>{item.status}</p>
          <ResourceLinks links={item.links} />
        </div>
      </div>
    </article>
  );
}
