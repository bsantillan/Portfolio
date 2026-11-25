import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'];

async function scan(page: Page, extraTags: string[] = []) {
  // las imágenes son lazy: se recorre la página para que carguen
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 30));
    }
    window.scrollTo(0, 0);
  });
  const results = await new AxeBuilder({ page }).withTags([...TAGS, ...extraTags]).analyze();
  const summary = results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`);
  expect(summary, summary.join('\n')).toEqual([]);
}

for (const lang of ['es', 'en'] as const) {
  for (const scheme of ['light', 'dark'] as const) {
    test(`axe sin violaciones · ${lang} · ${scheme}`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(lang === 'en' ? './?lang=en' : './');
      await expect(page.locator('html')).toHaveAttribute('lang', lang);
      await expect(page.locator('html')).toHaveAttribute('data-theme', scheme);
      // AAA de contraste de texto incluido
      await scan(page, ['wcag2aaa']);
    });
  }
}

test('axe sin violaciones con el menú mobile abierto', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'solo mobile');
  await page.goto('./');
  await page.getByRole('button', { name: 'Abrir menú' }).click();
  await scan(page);
});
