import { useEffect, useRef, useState } from 'react';
import { useApp } from '../state';
import './Header.css';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function StructureIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2.5" />
      <path d="M7 8h6M7 12h10M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const { t, lang, setLang, theme, toggleTheme, structure, setStructure } = useApp();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const navLinks = t.ui.nav.map((n) => (
    <li key={n.id}>
      <a href={`#${n.id}`} onClick={() => setOpen(false)}>
        {n.label}
      </a>
    </li>
  ));

  const other = lang === 'es' ? 'en' : 'es';

  return (
    <header className="site-header">
      <div className="site-header__inner wrap">
        <a className="brand" href="#inicio">
          Bruno Santillan
        </a>

        <nav className="nav-desktop" aria-label={t.ui.navLabel}>
          <ul>{navLinks}</ul>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="tool tool--structure"
            aria-pressed={structure}
            onClick={() => setStructure(!structure)}
          >
            <StructureIcon />
            <span className="tool__label">{structure ? t.ui.structureOff : t.ui.structureOn}</span>
          </button>
          <button type="button" className="tool" lang={other} onClick={() => setLang(other)}>
            {/* El nombre accesible contiene el texto visible (WCAG 2.5.3). */}
            {t.ui.langSwitch}
            <span className="visually-hidden"> · {t.ui.langSwitchLabel}</span>
          </button>
          <button
            type="button"
            className="tool tool--icon"
            aria-label={theme === 'dark' ? t.ui.themeToLight : t.ui.themeToDark}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="tool tool--menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" className={`burger${open ? ' is-open' : ''}`}>
              <span />
              <span />
            </span>
            <span className="tool__label-menu">{open ? t.ui.menuClose : t.ui.menuOpen}</span>
          </button>
        </div>
      </div>

      <div id="menu-mobile" ref={menuRef} className="nav-mobile" hidden={!open}>
        <nav aria-label={t.ui.navLabel}>
          <ul>{navLinks}</ul>
        </nav>
      </div>
    </header>
  );
}
