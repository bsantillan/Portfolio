import type { ResourceLink } from '../content/types';
import { useApp } from '../state';

/** Cada link dice a dónde lleva; los recursos sin URL se muestran como texto. */
export default function ResourceLinks({ links }: { links: ResourceLink[] }) {
  const { t } = useApp();
  return (
    <ul className="resources">
      {links.map((l) =>
        l.href ? (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
              <span aria-hidden="true"> ↗</span>
              <span className="visually-hidden"> {t.ui.newTab}</span>
            </a>
          </li>
        ) : (
          <li key={l.label} className="resources__private">
            <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
              <rect x="3" y="7" width="10" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            {l.label}
          </li>
        ),
      )}
    </ul>
  );
}
