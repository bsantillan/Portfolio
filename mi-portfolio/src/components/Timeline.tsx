import { useApp } from '../state';
import './Timeline.css';

export default function Timeline() {
  const { t } = useApp();
  const tl = t.timeline;
  return (
    <section id="trayectoria" className="section timeline" aria-labelledby="trayectoria-titulo">
      <div className="wrap">
        <h2 id="trayectoria-titulo" className="section-title">
          {tl.title}
        </h2>
        <p className="section-intro">{tl.intro}</p>
        <ol className="timeline__list">
          {tl.items.map((e, i) => (
            <li key={`${e.title}-${i}`} className={`timeline__item timeline__item--${i % 2 ? 'right' : 'left'}${e.ongoing ? ' is-ongoing' : ''}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <p className="timeline__when mono">
                {e.when}
                {e.ongoing && <span className="timeline__now"> · {tl.now}</span>}
              </p>
              <h3 className="timeline__title">{e.title}</h3>
              <p className="timeline__where">
                <span className="timeline__kind">{tl.kinds[e.kind]}</span> · {e.where}
              </p>
              {e.detail && <p className="timeline__detail">{e.detail}</p>}
              {e.caseId && (
                <a className="timeline__case" href={`#caso-${e.caseId}`}>
                  {tl.seeCase}
                  <span className="visually-hidden">: {t.cases.items.find((c) => c.id === e.caseId)?.title}</span>
                  <span aria-hidden="true"> ↑</span>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
