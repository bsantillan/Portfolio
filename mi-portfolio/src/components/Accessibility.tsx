import { links } from '../content/shared';
import { useApp } from '../state';
import './Accessibility.css';

export default function Accessibility() {
  const { t, structure, setStructure } = useApp();
  const a = t.a11y;
  const s = a.statement;
  return (
    <section id="accesibilidad" className="section a11y" aria-labelledby="accesibilidad-titulo">
      <div className="wrap">
        <h2 id="accesibilidad-titulo" className="section-title">
          {a.title}
        </h2>
        <p className="section-intro">{a.intro}</p>

        <ul className="a11y__practice">
          {a.practice.map((p, i) => (
            <li key={p.title} className="a11y__card">
              <span className="a11y__n mono" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="a11y__course">
          <h3 className="a11y__course-title">{a.course.title}</h3>
          <p className="a11y__course-name">«{a.course.name}»</p>
          <p>{a.course.body}</p>
        </div>

        <div className="a11y__statement" id="declaracion">
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <dl className="a11y__facts">
            <div>
              <dt>{s.target.split(':')[0]}</dt>
              <dd>{s.target.split(':').slice(1).join(':').trim()}</dd>
            </div>
            {s.results.map((r) => (
              <div key={r.tool}>
                <dt>{r.tool}</dt>
                <dd>{r.result}</dd>
              </div>
            ))}
            <div>
              <dt>{s.lastReview.split(':')[0]}</dt>
              <dd>{s.lastReview.split(':').slice(1).join(':').trim()}</dd>
            </div>
          </dl>
          <ul className="a11y__how">
            {s.howTested.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="a11y__contact">
            {s.contact} <a href={`mailto:${links.email}`}>{links.email}</a>
          </p>
          <button type="button" className="btn" aria-pressed={structure} onClick={() => setStructure(!structure)}>
            {structure ? t.ui.structureOff : t.ui.structureOn}
          </button>
        </div>
      </div>
    </section>
  );
}
