// Deploy a GitHub Pages (rama gh-pages) con controles previos.
//
//   npm run deploy            → lint + typecheck + tests (build incluido) + publicación
//   npm run deploy -- --skip-tests   → sin tests (no recomendado)
//   npm run deploy -- --dry-run      → todo menos publicar
//
// GitHub Pages está configurado para servir la rama gh-pages, carpeta raíz.
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import ghpages from 'gh-pages';

const args = new Set(process.argv.slice(2));
const run = (cmd) => {
  console.log(`\n› ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};
const out = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

const branch = out('git rev-parse --abbrev-ref HEAD');
const dirty = out('git status --porcelain');
const commit = out('git rev-parse --short HEAD');

if (dirty) {
  console.error('✗ Hay cambios sin commitear. Commiteá o guardalos antes de publicar, así el deploy corresponde a un commit.');
  process.exit(1);
}
if (branch !== 'main' && !args.has('--any-branch')) {
  console.error(`✗ Estás en "${branch}". El deploy se hace desde main (o pasá --any-branch si sabés lo que hacés).`);
  process.exit(1);
}

run('npm run lint');
run('npm run typecheck');
if (args.has('--skip-tests')) {
  run('npm run build');
} else {
  // Build de producción + tests (axe, teclado, contraste) contra ese mismo build.
  run('npm run build');
  run('npx playwright test');
}

if (!existsSync('dist/index.html')) {
  console.error('✗ No se encontró dist/index.html');
  process.exit(1);
}

if (args.has('--dry-run')) {
  console.log('\n✓ Dry run: todo OK, no se publicó nada.');
  process.exit(0);
}

console.log('\n› Publicando dist/ en la rama gh-pages…');
await ghpages.publish('dist', {
  branch: 'gh-pages',
  dotfiles: true, // incluye .nojekyll
  message: `Deploy ${commit} desde ${branch}`,
  history: true,
});
console.log(`\n✓ Publicado (${commit}). En 1–2 minutos: https://bsantillan.github.io/Portfolio/`);
