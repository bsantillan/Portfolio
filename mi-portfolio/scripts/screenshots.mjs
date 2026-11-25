// Uso: node scripts/screenshots.mjs <url> <outDir> [anchos separados por coma] [--light-only|--dark-only]
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const [url, outDir, widthsArg = '390,1440', mode] = process.argv.slice(2);
if (!url || !outDir) {
  console.error('Uso: node scripts/screenshots.mjs <url> <outDir> [anchos] [--light-only|--dark-only]');
  process.exit(1);
}
const widths = widthsArg.split(',').map(Number);
const schemes = mode === '--light-only' ? ['light'] : mode === '--dark-only' ? ['dark'] : ['light', 'dark'];
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
for (const scheme of schemes) {
  for (const width of widths) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 }, colorScheme: scheme, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });
    // Fuerza que los elementos con reveal por scroll se vean
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    const file = `${outDir}/${width}-${scheme}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log('✓', file);
    await ctx.close();
  }
}
await browser.close();
