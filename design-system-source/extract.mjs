// Reads the hero (index.html) and hands back its CSS, icon symbols and the markup of each component,
// so the design-system page renders the real thing instead of a retyped copy.
import fs from 'node:fs';

const slice = (s, from, to, incl = true) => {
  const i = s.indexOf(from);
  if (i < 0) throw new Error('extract: missing start ' + from);
  const j = s.indexOf(to, i + from.length);
  if (j < 0) throw new Error('extract: missing end ' + to);
  return s.slice(i, j + (incl ? to.length : 0)).trim();
};
// specimens are illustrations: drop link targets so nothing navigates or lands in the tab order
const noHref = s => s.replace(/<a ([^>]*?)href="[^"]*"/g, '<a $1').replace(/<a  /g, '<a ');

// split top-level CSS into rules / at-rules (comments removed first)
function top(css) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out = []; let i = 0;
  while (i < css.length) {
    const j = css.indexOf('{', i); if (j < 0) break;
    const head = css.slice(i, j).trim();
    let d = 1, k = j + 1;
    while (d && k < css.length) { const c = css[k++]; if (c === '{') d++; else if (c === '}') d--; }
    out.push({ head, body: css.slice(j + 1, k - 1) });
    i = k;
  }
  return out;
}

export function load(heroPath) {
  const html = fs.readFileSync(heroPath, 'utf8');
  const rawCss = html.match(/<style>([\s\S]*?)<\/style>/)[1];
  const symbols = slice(html, '<svg width="0" height="0"', '</svg>');

  // Base rules stay as written. The three phone breakpoints are re-scoped under .ds-m720 / .ds-m480 / .ds-m340
  // so the docs can show a phone variant at any window width. The desktop and tablet layout queries are dropped
  // (a specimen is sized by its own wrapper, not by the window).
  const SCOPE = { '(max-width:719.98px)': '.ds-m720', '(max-width:479.98px)': '.ds-m480', '(max-width:339.98px)': '.ds-m340' };
  let base = '', phone = '', reduced = '', dropped = [];
  for (const r of top(rawCss)) {
    if (!r.head.startsWith('@media')) { base += `${r.head}{${r.body}}\n`; continue; }
    const cond = r.head.replace('@media', '').trim();
    if (SCOPE[cond]) {
      for (const q of top(r.body)) phone += q.head.split(',').map(x => `${SCOPE[cond]} ${x.trim()}`).join(',') + `{${q.body}}\n`;
    } else if (cond.includes('prefers-reduced-motion')) reduced += `${r.head}{${r.body}}\n`;
    else dropped.push(cond);
  }

  const grab = {
    header: noHref(slice(html, '<header class="top">', '</header>')),
    h1: slice(html, '<h1 id="hero-title">', '</h1>').replace(' id="hero-title"', ''),
    lede: slice(html, '<p class="lede tl"', '</p>'),
    cta: noHref(slice(html, '<div class="cta tl"', '</div>')),
    terms: slice(html, '<p class="terms tl"', '</p>'),
    cue: slice(html, '<ol class="cue"', '</ol>'),
    cal: slice(html, '<div class="board pl cal tl tl2"', '<!-- 2. AI agent -->', false),
    agent: slice(html, '<div class="board pl agent tl tl2"', '<!-- 3. results -->', false),
    res: slice(html, '<div class="board pl res tl tl2"', '<!-- pipeline:', false),
    ctl: slice(html, '<div class="ctl" hidden>', '</div>').replace('<div class="ctl" hidden>', '<div class="ctl">'),
    cursor: slice(html, '<div class="cursor" aria-hidden="true">', '</div>'),
  };
  // sanity: every extracted board is a complete div
  for (const k of ['cal', 'agent', 'res']) {
    const o = (grab[k].match(/<div\b/g) || []).length, c = (grab[k].match(/<\/div>/g) || []).length;
    if (o !== c) throw new Error(`extract: ${k} has ${o} <div> and ${c} </div>`);
  }
  const skCount = k => (grab[k].match(/<i style="--x:/g) || []).length;
  const hrefs = (html.match(/https:\/\/seenpaid\.com\/[a-z./]*/g) || []);
  return { html, css: { base, phone, reduced }, dropped, symbols, ...grab, sk: { cal: skCount('cal'), agent: skCount('agent'), res: skCount('res') }, hrefs: [...new Set(hrefs)] };
}
