import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { load } from './extract.mjs';
import { sectionHTML, railHTML } from './lib.mjs';
import { T } from './tokens.mjs';
import found from './sec-found.mjs';
import comp from './sec-comp.mjs';

const REPO = fileURLToPath(new URL('../', import.meta.url)).replace(/\/$/, '');
const HERO = REPO + '/index.html', OUT = process.argv[2] || REPO + '/designsystem.html';
const here = fileURLToPath(new URL('.', import.meta.url));
const P = load(HERO);
const sections = [...found(P), ...comp(P, { sk: P.sk })];
const ids = sections.map(s => s.id);
if (new Set(ids).size !== ids.length) throw new Error('duplicate section ids');

const css = fs.readFileSync(here + 'docs.css', 'utf8'), js = fs.readFileSync(here + 'docs.js', 'utf8');
const icon = P.html.match(/<link rel="icon" href="([^"]+)">/)[0];
const fonts = P.html.match(/<link rel="preconnect"[\s\S]*?display=swap">/)[0];

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Seenpaid hero | Design system</title>
<meta name="description" content="Colour, type, layout, motion and every component of the Seenpaid hero, with the tokens each one uses.">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#F3F4F7">
${icon}
${fonts}
<style>
/* Seenpaid hero design system.
   The block between BEGIN and END is the hero's own stylesheet, copied from index.html so every specimen on this
   page is the real component: base rules verbatim, the three phone breakpoints re-scoped under .ds-m720 / .ds-m480 /
   .ds-m340 (so a phone variant can be shown at any window width), the desktop and tablet layout queries left out.
   When index.html changes, re-copy this block. Everything after END is the docs chrome; all of it is prefixed ds-. */
/* BEGIN hero CSS */
${P.css.base}
${P.css.phone}
${P.css.reduced}
/* END hero CSS */

${css}
</style>
</head>
<body>
<a class="ds-skip" href="#overview">Skip to content</a>
${P.symbols}

<div class="ds-app">
<aside class="ds-rail" aria-label="Design system">
  <div class="ds-brand"><a class="logo" href="#overview"><svg aria-hidden="true"><use href="#i-logo"/></svg><span>seen<b>paid</b></span></a><small>Hero design system, v4</small></div>
  <nav class="ds-nav" aria-label="Sections">${railHTML(sections)}</nav>
  <div class="ds-key"><div><span class="ds-dot ds-dot--var"></span>Variable in the hero’s CSS</div><div><span class="ds-dot ds-dot--lit"></span>Literal, name proposed</div><a class="btn btn-sm" href="/">Open the hero <svg aria-hidden="true"><use href="#i-arrow"/></svg></a></div>
</aside>
<main>
${sections.map(s => sectionHTML(s)).join('\n')}
</main>
</div>

<script>
${js}
</script>
</body>
</html>
`;
fs.writeFileSync(OUT, html);
const toks = Object.values(T);
console.log(`wrote ${OUT}\n  ${(html.length / 1024).toFixed(1)} KB, ${sections.length} sections, ${toks.length} tokens (${toks.filter(t => t.kind === 'var').length} variables, ${toks.filter(t => t.kind === 'lit').length} literals)`);
console.log('  sections:', ids.join(', '));
