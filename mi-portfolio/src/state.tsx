import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import es from './content/es';
import en from './content/en';
import type { Content, Lang } from './content/types';

type Theme = 'light' | 'dark';

interface AppState {
  lang: Lang;
  t: Content;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Ctx = createContext<AppState | null>(null);
const dict: Record<Lang, Content> = { es, en };

function initialLang(): Lang {
  return document.documentElement.lang === 'en' ? 'en' : 'es';
}
function initialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}
function store(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* modo privado: no persiste, no pasa nada */
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const t = dict[lang];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    const url = new URL(location.href);
    if (lang === 'en') url.searchParams.set('lang', 'en');
    else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
  }, [lang, t]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    store('lang', l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      store('theme', next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, t, setLang, theme, toggleTheme }),
    [lang, t, setLang, theme, toggleTheme],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp(): AppState {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fuera de AppProvider');
  return v;
}
