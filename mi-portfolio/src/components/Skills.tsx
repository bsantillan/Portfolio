import { useApp } from '../state';
import './Skills.css';

export default function Skills() {
  const { t } = useApp();
  const s = t.skills;
  const caseTitle = (id: string) => t.cases.items.find((c) => c.id === id)?.title ?? id;
  return (
    <section id="habilidades" className="section skills" aria-labelledby="habilidades-titulo">
      <div className="wrap">
        <h2 id="habilidades-titulo" className="section-title">
          {s.title}
        </h2>
        <p className="section-intro">{s.intro}</p>

        <h3 className="skills__subtitle">{s.technicalTitle}</h3>
        <div className="skills__groups">
          {s.groups.map((g) => (
            <div key={g.area} className="skills__group">
              <h4>{g.area}</h4>
              <ul>
                {g.items.map((it) => (
                  <li key={it.name}>
                    <span className="skills__name">{it.name}</span>
                    {it.usedIn?.length ? (
                      <span className="skills__used">
                        <span className="visually-hidden">{s.usedIn}: </span>
                        {it.usedIn.map((id, i) => (
                          <span key={id}>
                            {i > 0 && ' · '}
                            <a href={`#caso-${id}`}>{caseTitle(id)}</a>
                          </span>
                        ))}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills__bottom">
          <div className="skills__soft">
            <h3 className="skills__subtitle">{s.softTitle}</h3>
            <ul>
              {s.soft.map((x) => (
                <li key={x.name}>
                  <span className="skills__soft-name">{x.name}</span>
                  <span className="skills__soft-evidence">{x.evidence}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__langs">
            <h3 className="skills__subtitle">{s.languagesTitle}</h3>
            <dl>
              {s.languages.map((l) => (
                <div key={l.name}>
                  <dt>{l.name}</dt>
                  <dd>{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
