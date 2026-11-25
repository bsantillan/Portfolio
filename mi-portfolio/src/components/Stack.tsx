import { useApp } from '../state';
import './Stack.css';

export default function Stack() {
  const { t } = useApp();
  const s = t.stack;
  const caseTitle = (id: string) => t.cases.items.find((c) => c.id === id)?.title ?? id;
  return (
    <section id="stack" className="section stack" aria-labelledby="stack-titulo">
      <div className="wrap">
        <h2 id="stack-titulo" className="section-title">
          {s.title}
        </h2>
        <p className="section-intro">{s.intro}</p>
        <div className="stack__groups">
          {s.groups.map((g) => (
            <div key={g.area} className="stack__group">
              <h3>{g.area}</h3>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <span className="stack__name">{it.name}</span>
                    <span className="stack__used">
                      {it.usedIn.length ? (
                        <>
                          <span className="visually-hidden">{s.usedIn}: </span>
                          {it.usedIn.map((id, i) => (
                            <span key={id}>
                              {i > 0 && ', '}
                              <a href={`#caso-${id}`}>{caseTitle(id)}</a>
                            </span>
                          ))}
                        </>
                      ) : (
                        <span className="stack__none">{s.noCase}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
