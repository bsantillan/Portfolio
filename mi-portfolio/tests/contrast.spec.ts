import { test, expect } from '@playwright/test';

/** Verifica la paleta: texto ≥ 7:1 (AAA) y elementos no textuales ≥ 3:1, en ambos temas. */
function lum(hex: string) {
  const c = hex
    .replace('#', '')
    .match(/../g)!
    .map((h) => parseInt(h, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const TEXT: [string, string][] = [
  ['--text', '--bg'],
  ['--text', '--surface'],
  ['--text-2', '--bg'],
  ['--text-2', '--surface'],
  ['--accent', '--bg'],
  ['--accent', '--surface'],
  ['--on-accent', '--accent'],
  ['--text', '--tint'],
];
const UI: [string, string][] = [
  ['--line', '--bg'],
  ['--line', '--surface'],
  ['--accent', '--bg'],
];

for (const theme of ['light', 'dark'] as const) {
  test(`paleta AAA · ${theme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto('./');
    const vars = await page.evaluate(() => {
      const cs = getComputedStyle(document.documentElement);
      return Object.fromEntries(['--bg', '--surface', '--text', '--text-2', '--accent', '--on-accent', '--line', '--tint'].map((v) => [v, cs.getPropertyValue(v).trim()]));
    });
    for (const [a, b] of TEXT) expect(ratio(vars[a], vars[b]), `${a} / ${b}`).toBeGreaterThanOrEqual(7);
    for (const [a, b] of UI) expect(ratio(vars[a], vars[b]), `${a} / ${b}`).toBeGreaterThanOrEqual(3);
  });
}
