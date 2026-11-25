import { useApp } from '../state';
import './Now.css';

export default function Now() {
  const { t } = useApp();
  return (
    <section id="ahora" className="section now" aria-labelledby="ahora-titulo">
      <div className="wrap now__inner">
        <h2 id="ahora-titulo" className="section-title">
          <span className="wide">{t.now.title}</span>
        </h2>
        <ol className="now__log">
          {t.now.items.map((n) => (
            <li key={n.text}>
              <span className="now__when mono">{n.when}</span>
              <span className="now__text">{n.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
