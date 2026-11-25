// Genera public/og-image.png (1200×630) y public/apple-touch-icon.png con el estilo del sitio.
// Uso: node scripts/og-image.mjs
import { chromium } from '@playwright/test';
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

// data: URL porque setContent no puede leer file://
const font = (f) => `data:font/woff2;base64,${readFileSync(`public/fonts/${f}`).toString('base64')}`;
const nodes = [
  ['Software', 800, 320, true], ['Datos', 960, 210, true], ['Accesibilidad', 700, 460, true], ['IA', 1090, 90, true],
  ['React', 770, 150], ['Python', 1115, 455], ['WCAG 2.2', 905, 580], ['Power Platform', 1085, 570], ['Sistema de diseño', 905, 395],
];
const edges = [[0, 4], [0, 2], [1, 3], [1, 5], [1, 7], [2, 6], [0, 8], [3, 2], [2, 8], [0, 1], [2, 1]];
const curve = ([, ax, ay], [, bx, by]) => {
  const mx = (ax + bx) / 2 + (by - ay) * 0.16, my = (ay + by) / 2 - (bx - ax) * 0.16;
  return `M${ax} ${ay} Q${mx} ${my} ${bx} ${by}`;
};
const html = `<!doctype html><html><head><style>
@font-face{font-family:A;src:url(${font('anybody.woff2')});font-weight:100 900;font-stretch:50% 150%}
@font-face{font-family:K;src:url(${font('atkinson-next.woff2')});font-weight:200 800}
@font-face{font-family:M;src:url(${font('atkinson-mono.woff2')});font-weight:200 800}
body{margin:0;width:1200px;height:630px;background:#eef1f4;color:#12161b;font-family:K;position:relative;overflow:hidden}
h1{position:absolute;left:64px;top:70px;margin:0;font:900 118px/.8 A;letter-spacing:-.03em;z-index:2}
h1 b{display:block;font-stretch:150%}h1 i{display:block;font-style:normal;font-stretch:58%;font-size:128px;margin-left:70px;color:transparent;-webkit-text-stroke:3px #12161b}
p{position:absolute;left:64px;bottom:96px;margin:0;font-size:34px;line-height:1.25;max-width:470px;z-index:2}
small{position:absolute;left:64px;bottom:48px;font:700 22px M;color:#3e4651}
svg{position:absolute;inset:0}
.n{position:absolute;transform:translate(-50%,-50%);background:#eef1f4;border:2px solid #5f6b78;border-radius:999px;padding:10px 18px;font:600 22px K;white-space:nowrap}
.h{font:800 28px A;font-stretch:120%;border:3px solid #12161b;padding:14px 24px}.on{background:#0c5331;border-color:#0c5331;color:#fff}
</style></head><body>
<svg width="1200" height="630">${edges.map(([a, b]) => `<path d="${curve(nodes[a], nodes[b])}" fill="none" stroke="${a === 2 || b === 2 ? '#0c5331' : '#5f6b78'}" stroke-width="${a === 2 || b === 2 ? 4 : 2}"/>`).join('')}</svg>
${nodes.map(([l, x, y, hub], i) => `<span class="n${hub ? ' h' : ''}${i === 2 ? ' on' : ''}" style="left:${x}px;top:${y}px">${l}</span>`).join('')}
<h1><b>Bruno</b><i>Santillan</i></h1>
<p>Software accesible y herramientas de datos para operaciones reales.</p>
<small>Ingeniero en Sistemas · bsantillan.github.io/Portfolio</small>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og-image.png' });
await browser.close();
await sharp('public/favicon.svg', { density: 384 }).resize(180, 180).flatten({ background: '#eef1f4' }).png().toFile('public/apple-touch-icon.png');
console.log('✓ public/og-image.png · public/apple-touch-icon.png');
