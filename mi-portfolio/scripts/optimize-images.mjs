// Convierte las capturas fuente (src/assets/source/*.png) a AVIF y WebP en dos anchos.
// Uso: node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'node:fs';
import { join, parse } from 'node:path';

const SRC = 'src/assets/source';
const OUT = 'src/assets/cases';
const WIDTHS = [640, 1200];
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => /\.(png|jpe?g)$/i.test(f))) {
  const { name } = parse(file);
  const meta = await sharp(join(SRC, file)).metadata();
  for (const w of WIDTHS) { // "-1200" = versión grande (o el ancho original si es menor)
    const img = sharp(join(SRC, file)).resize({ width: Math.min(w, meta.width) });
    await img.clone().avif({ quality: 55 }).toFile(join(OUT, `${name}-${w}.avif`));
    await img.clone().webp({ quality: 72 }).toFile(join(OUT, `${name}-${w}.webp`));
  }
  console.log(`✓ ${name} (${meta.width}×${meta.height})`);
}
