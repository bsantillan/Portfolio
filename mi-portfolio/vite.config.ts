import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Incrusta el CSS del build en el HTML: evita una petición que bloquea el render
 * (el CSS completo pesa ~6 KB comprimido, menos que el costo de la ida y vuelta).
 */
function inlineCss(): Plugin {
  return {
    name: 'inline-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = Object.values(bundle).find((f) => f.type === 'asset' && f.fileName === 'index.html');
      if (!html || html.type !== 'asset') return;
      let source = String(html.source);
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.css')) continue;
        const tag = new RegExp(`<link rel="stylesheet" crossorigin href="[^"]*${file.fileName.replace('.', '\\.')}">`);
        if (!tag.test(source)) continue; // CSS de chunks diferidos: queda como archivo
        source = source.replace(tag, `<style>${String(file.source)}</style>`);
        delete bundle[file.fileName];
      }
      html.source = source;
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineCss()],
  // El sitio vive en https://bsantillan.github.io/Portfolio/
  base: '/Portfolio/',
});
