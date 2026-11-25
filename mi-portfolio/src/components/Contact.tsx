import { links } from '../content/shared';
import { useApp } from '../state';
import './Contact.css';

export default function Contact() {
  const { t } = useApp();
  const c = t.contact;
  const external = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <span aria-hidden="true"> ↗</span>
      <span className="visually-hidden"> {t.ui.newTab}</span>
    </a>
  );
  return (
    <footer id="contacto" className="contact" aria-labelledby="contacto-titulo">
      <div className="wrap">
        <h2 id="contacto-titulo" className="section-title">
          {c.title}
        </h2>
        <p className="section-intro">{c.body}</p>
        <a className="contact__email" href={`mailto:${links.email}`}>
          <span className="visually-hidden">{c.email}: </span>
          {links.email}
        </a>
        <ul className="contact__links">
          <li>{external(links.linkedin, c.linkedin)}</li>
          <li>{external(links.github, c.github)}</li>
          <li>
            <a href={links.cv} download="CV_Bruno_Santillan.pdf" type="application/pdf">
              {c.cv}
              <span aria-hidden="true"> ↓</span>
            </a>
          </li>
        </ul>
        <div className="contact__foot">
          <p>{c.location}</p>
          <p>
            © {new Date().getFullYear()} Bruno Santillan · {c.footer}
          </p>
        </div>
      </div>
    </footer>
  );
}
