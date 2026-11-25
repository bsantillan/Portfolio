# Portfolio · Bruno Santillan

Sitio personal de Bruno Santillan, Ingeniero en Sistemas (UTN FRLP).
En línea en **https://bsantillan.github.io/Portfolio/** · español (por defecto) e inglés (`?lang=en`).

Lo que lo hace distinto:

- **Mapa interactivo** en el hero: las áreas de trabajo (software, datos, accesibilidad, IA), las tecnologías de cada una y dónde las usé. Se usa con mouse o teclado.
- **Accesibilidad verificada en CI**: axe-core (WCAG 2.2 AA + contraste AAA), recorrido por teclado, tamaño de targets, movimiento reducido y contraste de la paleta.

## Stack

React 19 · TypeScript · Vite 6 · CSS sin frameworks · Playwright + @axe-core/playwright.
Fuentes self-hosted (Anybody, Atkinson Hyperlegible Next y Mono, subset latín). Sin librerías de animación, sin cookies ni rastreo.

## Estructura

```
mi-portfolio/
├─ src/
│  ├─ content/            ← TODO el texto del sitio, tipado
│  │  ├─ types.ts
│  │  ├─ shared.ts        ← links, stack por evidencia, conexiones del mapa
│  │  ├─ es/              ← site.ts, cases.ts, trayectoria.ts, stack.ts
│  │  └─ en/
│  ├─ components/         ← un componente (y su CSS) por sección
│  ├─ styles/base.css     ← fuentes, tokens de color, foco, utilidades
│  └─ state.tsx           ← idioma y tema
├─ public/                ← CV, fuentes, favicon, og-image, robots, sitemap
├─ tests/                 ← a11y (axe), interacción/teclado, contraste
└─ scripts/               ← deploy, imágenes, imagen OG, capturas
```

Para cambiar un texto, editá `src/content/es/*.ts` y su par en `src/content/en/*.ts`. TypeScript avisa si falta una clave en algún idioma.

## Desarrollo

Requisitos: Node 20 o superior.

```bash
cd mi-portfolio
npm install
npm run dev          # http://localhost:5173/Portfolio/
```

| Comando | Qué hace |
|---|---|
| `npm run build` | Build de producción en `dist/` (con base `/Portfolio/`). |
| `npm run preview` | Sirve `dist/` como en GitHub Pages. |
| `npm run lint` / `npm run typecheck` | ESLint y TypeScript. |
| `npm test` | Toda la suite de Playwright (desktop y mobile). La primera vez: `npx playwright install chromium`. |
| `npm run test:a11y` | Solo axe-core. |
| `npm run images` | Regenera AVIF/WebP desde `src/assets/source/`. |
| `npm run og` | Regenera `public/og-image.png` y `apple-touch-icon.png`. |
| `npm run screenshots -- <url> <carpeta> [anchos]` | Capturas en claro y oscuro. |

## Deploy

GitHub Pages sirve la rama **`gh-pages`**. El deploy es un solo comando, desde `main` y con el árbol limpio:

```powershell
.\deploy.ps1            # Windows, desde la raíz del repo
.\deploy.ps1 -DryRun    # todo menos publicar
```

```bash
./deploy.sh             # macOS / Linux / Git Bash
cd mi-portfolio && npm run deploy   # equivalente
```

El script corre lint, typecheck, build y todos los tests, y recién después publica `dist/` en `gh-pages` con un mensaje que incluye el commit. Si algo falla, no publica.

La CI (`.github/workflows/ci.yml`) corre lo mismo en cada push a `main` o `redesign` y en cada pull request.

## Accesibilidad

Objetivo: WCAG 2.2 AA, con contraste AAA en todo el texto. Detalles y resultados en la sección "Declaración de accesibilidad" del sitio. Si encontrás una barrera: brunosaantillan@gmail.com.

## Licencias

Código: del autor. Fuentes: SIL Open Font License (ver `public/fonts/`).
