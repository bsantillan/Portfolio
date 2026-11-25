import { useApp } from '../state';
import CaseStudy from './CaseStudy';
import Picture from './Picture';
import ResourceLinks from './ResourceLinks';
import './Cases.css';

export default function Cases() {
  const { t } = useApp();
  const { cases, archive } = t;
  return (
    <section id="casos" className="section cases" aria-labelledby="casos-titulo">
      <div className="wrap">
        <header className="cases__head">
          <h2 id="casos-titulo" className="section-title">
            {cases.title}
          </h2>
          <p className="section-intro">{cases.intro}</p>
        </header>

        {cases.items.map((c, i) => (
          <CaseStudy key={c.id} item={c} index={i} />
        ))}

        <div className="archive">
          <h3 id="archivo-titulo" className="archive__title">
            {archive.title}
          </h3>
          <p className="section-intro">{archive.intro}</p>
          <ul className="archive__list">
            {archive.items.map((a) => (
              <li key={a.id} className="archive__item">
                <article aria-labelledby={`archivo-${a.id}`}>
                  <div className="archive__media">
                    <Picture image={a.image} sizes="(max-width: 900px) 100vw, 560px" />
                  </div>
                  <p className="kicker">{a.kind}</p>
                  <h4 id={`archivo-${a.id}`}>{a.title}</h4>
                  <p>{a.summary}</p>
                  <p className="archive__stack mono">{a.stack.join(' · ')}</p>
                  <ResourceLinks links={a.links} />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
