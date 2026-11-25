import { links } from '../content/shared';
import { useApp } from '../state';
import Constellation from './Constellation';
import './Hero.css';

export default function Hero() {
  const { t } = useApp();
  const { hero } = t;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner wrap">
        <h1 id="hero-title" className="hero__name">
          <span className="hero__first">{hero.name[0]}</span>{' '}
          <span className="hero__last outline">{hero.name[1]}</span>
        </h1>
        <p className="hero__role">
          {/* Un título por línea; la coma oculta separa los títulos al leerlos en voz alta. */}
          {hero.role.split(' · ').map((part, i) => (
            <span key={part} className="hero__role-line">
              {i > 0 && <span className="visually-hidden">, </span>}
              {part}
            </span>
          ))}
        </p>
        <div className="hero__text">
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#casos">
              {hero.ctaCases}
            </a>
            <a className="btn" href={links.cv} download="CV_Bruno_Santillan.pdf" type="application/pdf">
              {hero.ctaCv}
            </a>
          </div>
        </div>
        <Constellation />
      </div>
    </section>
  );
}
