import { test, expect } from '@playwright/test';

test('el skip link es el primer foco y lleva al contenido', async ({ page }) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Saltar al contenido' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('jerarquía de títulos: un solo h1 y sin saltos de nivel', async ({ page }) => {
  await page.goto('./');
  const levels = await page
    .locator('h1, h2, h3, h4, h5, h6')
    .evaluateAll((els) => els.filter((e) => (e as HTMLElement).offsetParent !== null).map((e) => Number(e.tagName[1])));
  expect(levels.filter((l) => l === 1)).toHaveLength(1);
  for (let i = 1; i < levels.length; i++) expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
});

test('ids únicos', async ({ page }) => {
  await page.goto('./');
  const ids = await page.locator('[id]').evaluateAll((els) => els.map((e) => e.id));
  expect(ids.length).toBe(new Set(ids).size);
});

test('menú mobile: aria-expanded, nombre dinámico y Escape', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'solo mobile');
  await page.goto('./');
  const btn = page.getByRole('button', { name: 'Abrir menú' });
  await expect(btn).toHaveAttribute('aria-expanded', 'false');
  await btn.click();
  const close = page.getByRole('button', { name: 'Cerrar menú' });
  await expect(close).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#menu-mobile').getByRole('link', { name: 'Casos' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toBeFocused();
  await expect(page.locator('#menu-mobile')).toBeHidden();
});

test('mapa del hero: nodos operables con teclado y descriptos', async ({ page }) => {
  await page.goto('./');
  const node = page.getByRole('button', { name: 'Python' });
  await node.focus();
  await expect(node).toHaveAccessibleDescription(/dashboard.*Se conecta con: Datos/);
  await page.keyboard.press('Enter');
  await expect(node).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('.map__legend')).toContainText('Python');
  await expect(page.locator('.map__legend').getByRole('link', { name: /Ver el caso\s*:\s*Monitoreo eléctrico IoT/ })).toBeVisible();
});

test('idioma: cambia lang, textos y URL, y persiste', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('button', { name: /^EN\s*·\s*Read this site in English$/ }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page).toHaveURL(/\?lang=en/);
  await expect(page.getByRole('heading', { level: 2, name: 'Case studies' })).toBeVisible();
  await expect(page).toHaveTitle(/Systems Engineer/);
  await page.goto('./');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('button', { name: /^ES\s*·\s*Leer este sitio en español$/ }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('tema: alterna, tiene nombre dinámico y persiste', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('./');
  await page.getByRole('button', { name: 'Cambiar a modo oscuro' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(page.getByRole('button', { name: 'Cambiar a modo claro' })).toBeVisible();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('recorrido completo con teclado: todo foco es visible y nada queda tapado', async ({ page }) => {
  // sin scroll suave, para medir la posición final de cada foco
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const total = await page.locator('a[href], button:not([disabled])').evaluateAll((els) => els.filter((e) => (e as HTMLElement).offsetParent !== null).length);
  const seen = new Set<string>();
  const measure = (step: number) =>
    page.evaluate((step) => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      // ¿Lo que se ve en el centro del elemento es el propio elemento? (WCAG 2.4.11)
      const top = document.elementFromPoint(
        Math.min(Math.max(r.left + r.width / 2, 0), innerWidth - 1),
        Math.min(Math.max(r.top + r.height / 2, 0), innerHeight - 1),
      );
      const coveredByHeader = !!top && !el.contains(top) && !top.contains(el) && !!top.closest('.site-header');
      return {
        key: `${step}:${el.outerHTML.slice(0, 80)}`,
        indicator: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2,
        inView: r.bottom > 0 && r.top < innerHeight,
        coveredByHeader,
      };
    }, step);
  for (let i = 0; i < total + 2; i++) {
    await page.keyboard.press('Tab');
    // Espera a que el foco se asiente (en CI el primer foco a veces se mide antes del repintado).
    await expect.poll(async () => (await measure(i))?.inView ?? true, { timeout: 3000 }).toBe(true);
    const info = await measure(i);
    if (!info) continue;
    seen.add(info.key);
    expect(info.indicator, `sin indicador de foco: ${info.key}`).toBe(true);
    expect(info.inView, `foco fuera de pantalla: ${info.key}`).toBe(true);
    expect(info.coveredByHeader, `foco tapado por el header: ${info.key}`).toBe(false);
  }
  expect(seen.size).toBeGreaterThan(30);
});

test('targets táctiles de al menos 24×24 px', async ({ page }) => {
  await page.goto('./');
  const small = await page.locator('button, .btn, .tool, nav a, .contact__links a, .resources a').evaluateAll((els) =>
    els
      .filter((e) => (e as HTMLElement).offsetParent !== null)
      .map((e) => ({ t: (e.textContent || e.getAttribute('aria-label') || '').trim().slice(0, 30), r: e.getBoundingClientRect() }))
      .filter(({ r }) => r.width < 24 || r.height < 24)
      .map(({ t, r }) => `${t} ${Math.round(r.width)}×${Math.round(r.height)}`),
  );
  expect(small).toEqual([]);
});

test('prefers-reduced-motion: sin transiciones ni scroll suave', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  const d = await page
    .locator('.map__item')
    .first()
    .evaluate((e) => getComputedStyle(e).transitionDuration);
  expect(d.split(',').every((x) => parseFloat(x) <= 0.001)).toBe(true);
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
});

test('los links externos avisan que abren otra pestaña', async ({ page }) => {
  await page.goto('./');
  const names = await page.locator('a[target="_blank"]').evaluateAll((els) => els.map((e) => e.textContent ?? ''));
  expect(names.length).toBeGreaterThan(0);
  for (const n of names) expect(n).toContain('se abre en otra pestaña');
});
