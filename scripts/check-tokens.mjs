// Falha se houver cor literal (hex, rgb, hsl, oklch...) em src/ fora de src/styles/tokens.css.
// Exceções precisam estar em ALLOWED com o motivo.
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'src');
const TOKENS_FILE = 'src/styles/tokens.css';
const EXTENSIONS = ['.astro', '.ts', '.tsx', '.js', '.mjs', '.css', '.md', '.mdx', '.yaml', '.yml', '.json'];
const COLOR = /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch|oklab|lab|lch)\(/;

const ALLOWED = [
  {
    file: 'src/layouts/BaseLayout.astro',
    match: 'name="theme-color"',
    reason: 'meta tag não lê CSS variables',
  },
];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (EXTENSIONS.some((ext) => entry.name.endsWith(ext))) yield full;
  }
}

const violations = [];

for await (const file of walk(SRC)) {
  const rel = relative(ROOT, file).replaceAll('\\', '/');
  if (rel === TOKENS_FILE) continue;
  const lines = (await readFile(file, 'utf8')).split('\n');
  lines.forEach((line, i) => {
    if (!COLOR.test(line)) return;
    const allowed = ALLOWED.some((a) => a.file === rel && line.includes(a.match));
    if (!allowed) violations.push(`${rel}:${i + 1}  ${line.trim()}`);
  });
}

if (violations.length) {
  console.error('Cores literais fora de src/styles/tokens.css (use os tokens do DESIGN.md):\n');
  for (const v of violations) console.error('  ' + v);
  process.exit(1);
}

console.log('check-tokens: ok');
