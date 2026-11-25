import Header from './components/Header';
import Hero from './components/Hero';
import Cases from './components/Cases';
import Timeline from './components/Timeline';
import Accessibility from './components/Accessibility';
import Stack from './components/Stack';
import Contact from './components/Contact';
import { useApp } from './state';

export default function App() {
  const { t } = useApp();
  return (
    <>
      <a className="skip-link" href="#contenido">
        {t.ui.skip}
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Cases />
        <Timeline />
        <Accessibility />
        <Stack />
      </main>
      <Contact />
    </>
  );
}
