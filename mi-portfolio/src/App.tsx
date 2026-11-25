import Header from './components/Header';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Timeline from './components/Timeline';
import Accessibility from './components/Accessibility';
import Stack from './components/Stack';
import Now from './components/Now';
import Contact from './components/Contact';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useApp } from './state';

// Se carga recién cuando alguien activa "Ver estructura accesible".
const StructureOverlay = lazy(() => import('./components/StructureOverlay'));

export default function App() {
  const { t, structure } = useApp();
  const [overlayLoaded, setOverlayLoaded] = useState(false);
  // Región viva siempre presente: si naciera junto con el mensaje, no se anunciaría.
  const [announcement, setAnnouncement] = useState('');
  useEffect(() => {
    if (structure) setOverlayLoaded(true);
  }, [structure]);
  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.ui.skip}
      </a>
      <Header />
      <div role="status" className="visually-hidden">
        {announcement}
      </div>
      {overlayLoaded && (
        <Suspense fallback={null}>
          <StructureOverlay announce={setAnnouncement} />
        </Suspense>
      )}
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Cases />
        <Timeline />
        <Accessibility />
        <Stack />
        <Now />
      </main>
      <Contact />
    </>
  );
}
