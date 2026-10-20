// Every token the hero uses, once. 'var' = a custom property in the hero's :root today.
// 'lit' = a literal written inline in the hero's CSS; the name is a proposal so it can be promoted to a variable.
export const T = {};
const def = (kind, name, value, role) => (T[name] = { name, value, kind, role });

// ---- colour: variables
def('var', '--canvas', '#F3F4F7', 'Page background. Also the hollow centre of the pipeline tubes.');
def('var', '--card', '#FFFFFF', 'Board surface and control-button fill.');
def('var', '--ink', '#0B1020', 'Headline and primary text, primary button fill, logo mark, agent avatar.');
def('var', '--ink2', '#394157', 'Body copy, nav links, terms note, event icons.');
def('var', '--ink3', '#5F687C', 'Meta text: ranges, legends, labels, captions, idle icons.');
def('var', '--line', '#DDE2EA', 'Board border, pill and control outlines, cue track.');
def('var', '--line2', '#E9ECF2', 'Inner dividers: header rules, grid lines, ledger rows.');
def('var', '--blue', '#1B3A93', 'The one accent: focus and selection rings, cursor, today chip, hover fill, “paid”, pipeline.');
def('var', '--blue-wash', '#E7ECF8', 'Scheduled surfaces: event card, Scheduled pill.');
def('var', '--blue-ink', '#14307A', 'Text on blue-wash.');
def('var', '--blue-rail', '#3552B0', 'Event rail, legend dot, drop-zone outline.');
def('var', '--blue-lt', '#B7C4EE', 'Glyph on ink (agent avatar).');
def('var', '--green', '#067A4B', 'Verified text and icons: published, matched.');
def('var', '--green-wash', '#E6F7EE', 'Verified surfaces: Published, Matched, sales chip.');
def('var', '--green-rail', '#12B26B', 'Verified rails: match connector, published rail and dot.');

// ---- colour: literals
def('lit', '--white', '#FFFFFF', 'Text on ink and blue fills, avatar border, cursor outline.');
def('lit', '--gold', '#F5B323', 'Coin and logo centre. The only warm colour.');
def('lit', '--skeleton', '#E6E9F0', 'Skeleton block fill.');
def('lit', '--surface-head', '#F8F9FB', 'Calendar day-header band.');
def('lit', '--surface-well', '#F6F7FA', 'Post well in Results.');
def('lit', '--surface-muted', '#F1F2F6', 'Unmatched chip fill.');
def('lit', '--ring-blue', '#C7D1EA', '1px inner ring on the Scheduled pill.');
def('lit', '--ring-green', '#BDEBD6', '1px inner ring on Published, Matched and the sales chip.');
def('lit', '--ring-grey', '#C9CFDB', '1px inner ring on the Unmatched chip.');
def('lit', '--rule-dash', '#CBD1DD', 'Dashed rule above the ledger.');
def('lit', '--tube', '#C9D1E0', 'Pipeline tube wall.');
def('lit', '--line-hover', '#C3CAD8', 'Control-button border on hover.');
def('lit', '--dash-grey', '#9AA3B5', 'Dashed connector for the unmatched payment.');
def('lit', '--packet-line', '#8D9AC2', 'Text lines inside the post packet.');
def('lit', '--coin-off', '#C5CCDA', 'Unmatched coin fill.');
def('lit', '--coin-off-edge', '#8A93A6', 'Unmatched coin edge.');
def('lit', '--coin-off-ink', '#7B8499', 'Unmatched coin glyph.');
def('lit', '--wash-ink', 'rgba(11,16,32,.06)', 'Nav link hover background.');
def('lit', '--wash-blue', 'rgba(27,58,147,.055)', 'Row hover in the jobs list and the ledger.');
def('lit', '--wash-drop', 'rgba(27,58,147,.05)', 'Drop-zone fill.');
def('lit', '--underline', 'rgba(11,16,32,.28)', 'Text-link underline at rest.');

// ---- layout + type variables
def('var', '--font', '"Archivo", "Helvetica Neue", Arial, sans-serif', 'The only typeface. Variable: wght 400–900, wdth 75–125.');
def('var', '--tw', 'clamp(460px, 36vw, 560px)', 'Width of the centre copy column; also the middle grid track.');
def('var', '--gap', 'clamp(18px, 1.7vw, 24px)', 'Column gap of the three-column hero grid.');
def('var', '--pad', 'clamp(16px, 1.7vw, 26px)', 'Side padding of the header and the hero.');

// ---- shape
def('lit', '--radius-pill', '999px', 'Buttons, pills, chips, tag, controls.');
def('lit', '--radius-board', '1.4em', 'Board corner.');
def('lit', '--radius-ring', '1.9em', 'Board selection ring.');
def('lit', '--radius-well', '1em', 'Post well, ledger skeleton blocks.');
def('lit', '--radius-drop', '.8em', 'Drop zone.');
def('lit', '--radius-card', '.6em', 'Event card, tall skeleton blocks.');
def('lit', '--radius-block', '.5em', 'Default skeleton block.');
def('lit', '--radius-round', '50%', 'Dots, avatars, coins.');

// ---- elevation
def('lit', '--shadow-board', '0 .1em .3em rgba(11,16,32,.06), 0 1.8em 3.4em -1.6em rgba(11,16,32,.28)', 'Board lift off the canvas.');
def('lit', '--shadow-button', '0 1px 2px rgba(11,16,32,.2), 0 14px 28px -14px rgba(11,16,32,.55)', 'Primary button.');
def('lit', '--shadow-event-hover', '0 .3em .9em -.3em rgba(11,16,32,.35)', 'Event card under the cursor.');
def('lit', '--shadow-event-rest', '0 .3em 1em -.4em rgba(11,16,32,.28)', 'Dragged chip at rest.');
def('lit', '--shadow-event-lift', '0 1.2em 2.2em -.4em rgba(11,16,32,.38)', 'Dragged chip while lifted.');
def('lit', '--shadow-tag', '0 .3em .9em -.15em rgba(27,58,147,.45)', 'Cursor name tag.');
def('lit', '--shadow-arrow', 'drop-shadow(0 2px 3px rgba(11,16,32,.3))', 'Cursor arrow (filter).');

// ---- motion
def('lit', '--ease-out', '1 − (1 − p)³', 'Every reveal. Written in calc() from the clock, equal to cubic-bezier(.215,.61,.355,1).');
def('lit', '--dur-line', '.7s', 'Headline line.');
def('lit', '--dur-copy', '.64s', 'Body lines, CTA, terms.');
def('lit', '--dur-board', '.5s', 'Board frame and board content.');
def('lit', '--dur-hover', '.18s', 'Button background, arrows.');
def('lit', '--dur-row', '.2s', 'Row hover background.');
def('lit', '--dur-shimmer', '1.6s', 'Skeleton sweep, ease-in-out, infinite.');
def('lit', '--rise-copy', '12px', 'Distance copy travels while it fades in.');
def('lit', '--rise-board', '1.4em', 'Distance a board travels while it fades in.');
def('lit', '--stagger-line', '.12s', 'Between headline lines.');
def('lit', '--stagger-copy', '.08s', 'Between body lines.');

// ---- focus
def('lit', '--focus-ring', '3px solid var(--blue), offset 3px', 'Keyboard focus on every control.');

export const isColour = v => /^(#|rgba?\()/.test(v);

// a token row for an inspector group: pass the token name, optionally a role written for this component
export const use = (name, role) => {
  const t = T[name];
  if (!t) throw new Error('unknown token ' + name);
  return { token: true, kind: t.kind, name, value: t.value, role: role ?? t.role, sw: isColour(t.value) };
};
// a spec row (a measurement, not a token)
export const spec = (name, value, role = '') => ({ token: false, name, value, role });

// ---- WCAG contrast, computed from the tokens above (no hand-typed ratios)
const lin = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const lum = h => { const [r, g, b] = rgb(h); return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b); };
export const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
export const grade = r => (r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'Large text only' : 'Below 3:1');
export const PAIRS = [
  ['--ink', '--canvas', 'Headline on the page'],
  ['--ink2', '--canvas', 'Body copy and terms on the page'],
  ['--ink3', '--canvas', 'Caption on the page'],
  ['--ink', '--card', 'Text inside a board'],
  ['--ink3', '--card', 'Meta text inside a board'],
  ['--blue', '--canvas', '“paid” in the wordmark'],
  ['--white', '--ink', 'Primary button label'],
  ['--white', '--blue', 'Button hover, cursor tag, today chip'],
  ['--blue-ink', '--blue-wash', 'Scheduled pill and event time'],
  ['--green', '--green-wash', 'Published and Matched chips'],
  ['--green', '--card', 'Agent status line'],
  ['--ink3', '--surface-muted', 'Unmatched chip'],
  ['--blue-lt', '--ink', 'Agent avatar glyph'],
].map(([f, b, where]) => { const r = ratio(T[f].value, T[b].value); return { f, b, where, r: Math.round(r * 10) / 10, g: grade(r), fv: T[f].value, bv: T[b].value }; });
