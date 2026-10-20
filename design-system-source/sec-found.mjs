// Overview, foundations and primitives.
import { T, use, spec, PAIRS, ratio } from './tokens.mjs';
import './tokens-type.mjs';
import { esc, md } from './lib.mjs';

const ic = (id, cls = '', style = '') => `<svg${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} aria-hidden="true"><use href="#${id}"/></svg>`;
const fgFor = hex => (ratio(hex, '#FFFFFF') > ratio(hex, '#0B1020') ? '#FFFFFF' : '#0B1020');

export default function (P) {
  const S = [];

  /* ------------------------------------------------------------ overview */
  const HOTS = [
    ['.top', 'topbar', 'Top bar'], ['h1', 'headline', 'Headline'], ['.lede', 'lede', 'Body copy'], ['.cta', 'cta', 'CTA'],
    ['.terms', 'terms', 'Terms note'], ['.cal', 'calendar', 'Calendar board'], ['.agent', 'agent', 'AI agent board'],
    ['.res', 'results', 'Results board'], ['.ev.focal', 'chip', 'Dragged post chip'], ['.seg-l', 'pipeline', 'Pipeline'],
    ['.seg-r', 'pipeline', 'Pipeline'], ['.rest', 'cursor', 'Justinas cursor'], ['.cap', 'controls', 'Pause and replay'],
  ];
  S.push({
    id: 'overview', group: 'Start', nav: 'Overview', title: 'Seenpaid hero design system',
    desc: 'Colour, type, layout, motion and every component of the v4 hero, with the tokens each one uses. The specimens on this page are the hero’s own markup and CSS, not redrawings.',
    facts: [['Source', '`index.html`, the live hero'], ['Fonts', 'Archivo, variable']].map(([k, v]) => [k, md(v)]),
    stageClass: 'ds-stage--ov',
    stage: `
<div class="ds-ov">
  <div class="ds-ov-bar"><p>Hover the hero to find a component, or switch the outlines on. Each outline jumps to its screen.</p>
    <label class="ds-switch"><input type="checkbox" data-outline><span>Outline components</span></label></div>
  <div class="ds-fitbox" data-fit-frame style="--w:1440px;--h:900px">
    <div class="ds-fitin">
      <iframe src="/" title="The live Seenpaid hero" loading="lazy" tabindex="-1"></iframe>
      <nav class="ds-hots" aria-label="Components in the hero">${HOTS.map(([sel, id, label]) => `<a class="ds-hot" href="#${id}" data-sel="${sel}"><span>${label}</span></a>`).join('')}</nav>
    </div>
  </div>
</div>`,
    groups: [
      { title: 'How to read this page', rows: [
        spec('Left rail', '', 'Every foundation and component, one screen each.'),
        spec('Left of a screen', '', 'The live specimen. Replay re-runs its entrance.'),
        spec('Right of a screen', '', 'What the piece is for, the tokens it uses and its specs. Long lists scroll.'),
      ] },
      { title: 'Token markers', lead: 'Most of the hero’s values are written inline in its CSS. Only 19 are variables today.', rows: [
        { legend: 'var', name: 'Variable', role: 'A custom property in the hero’s `:root`, used as written.' },
        { legend: 'lit', name: 'Literal', role: 'A value written inline in the hero’s CSS. The name is a proposal so it can be promoted to a variable.' },
      ] },
      { title: 'Rules the hero holds to', rows: [
        spec('Flat canvas', '', 'The page is `--canvas`. No dot pattern, gradient or texture sits behind the composition.'),
        spec('One accent', '', 'Deep navy `--blue` is the only accent. Green appears only for verified states. Gold belongs to the coin.'),
        spec('Light boards', '', 'All three boards use the light theme, Results included.'),
        spec('Authored lines', '', 'The headline is exactly three lines. The body copy is three lines with the shortest last. Neither reflows on desktop.'),
        spec('Copy first', '', 'The copy reveals while the boards sit in a skeleton loading state. They resolve one by one only after the body copy has appeared.'),
        spec('Alive, not loud', '', 'After the intro the pipeline keeps streaming and the cursor keeps wandering. Reduced motion shows the finished frame and nothing moves.'),
        spec('Honest data', '', 'Figures are sample data and labelled so. The unmatched payment is shown and marked as not counted.'),
      ] },
      { title: 'Open items', rows: [
        spec('Nav and secondary link', '', 'Product, Platforms, Pricing, Resources and “See how it works” point at placeholder anchors.'),
        spec('Real case study', '', 'The review’s $139 single-post example is not used. It needs real click and sale counts.'),
        spec('Token promotion', '', 'The literals on these screens are not variables yet. Promoting them is a mechanical change to the hero.'),
      ] },
    ],
  });

  /* ------------------------------------------------------------ colour */
  const SHORT = { '--canvas': 'Page background', '--card': 'Board surface', '--ink': 'Text, button, logo', '--ink2': 'Body copy, nav, terms', '--ink3': 'Meta text, labels', '--line': 'Borders, outlines', '--line2': 'Inner dividers', '--blue': 'The one accent: rings, cursor, hover', '--blue-ink': 'Text on blue-wash', '--blue-rail': 'Event rail, drop zone', '--blue-lt': 'Glyph on ink', '--blue-wash': 'Scheduled surfaces', '--green': 'Verified text and icons', '--green-rail': 'Verified rails', '--green-wash': 'Verified surfaces', '--gold': 'Coin and logo centre' };
  const chip = n => {
    const t = T[n];
    return `<div class="ds-chip${t.kind === 'lit' ? ' ds-chip--lit' : ''}" style="--c:${t.value};--fg:${fgFor(t.value)}"><b>${n}</b><span>${t.value}</span><em>${esc(SHORT[n])}</em></div>`;
  };
  const col = (title, names) => `<div class="ds-pal-col"><h3>${title}</h3><div class="ds-pal-stack">${names.map(chip).join('')}</div></div>`;
  S.push({
    id: 'colour', group: 'Foundations', title: 'Colour',
    desc: 'Fifteen variables carry the whole interface. Neutral surfaces and ink do the work, one deep navy is the only accent, and green appears only when something has been verified.',
    facts: [['Defined in', md('`:root` of `index.html`')], ['Accent', 'Deep navy only']],
    stage: `<div class="ds-pal">${col('Surface and ink', ['--canvas', '--card', '--ink', '--ink2', '--ink3', '--line', '--line2'])}${col('Navy accent', ['--blue', '--blue-ink', '--blue-rail', '--blue-lt', '--blue-wash'])}${col('Verified and coin', ['--green', '--green-rail', '--green-wash', '--gold'])}</div>`,
    groups: [
      { title: 'Variables', lead: 'The 15 colour custom properties in `:root`, with where each is used.', rows: Object.keys(T).filter(n => T[n].kind === 'var' && /^--(canvas|card|ink|line|blue|green)/.test(n)).map(n => use(n)) },
      { title: 'Not variables yet', lead: 'Written inline in the hero’s CSS. Names are proposals.', rows: Object.keys(T).filter(n => T[n].kind === 'lit' && /^(--white|--gold|--skeleton|--surface|--ring|--rule|--tube|--line-hover|--dash|--packet|--coin|--wash|--underline)/.test(n)).map(n => use(n)) },
      { title: 'Text on surface', lead: 'WCAG contrast, computed from the values above. Every pair clears AA for normal text.', rows: PAIRS.map(p => spec(p.where, `${p.r}:1 ${p.g}`, `\`${p.f}\` on \`${p.b}\``)) },
    ],
  });

  /* ------------------------------------------------------------ typography */
  const TY = [
    ['Display', 'which posts make', 'font:800 clamp(2.6rem,4.2vw,4rem)/.98 var(--font);font-stretch:84%;letter-spacing:-.012em', 'Headline'],
    ['Stat', '$147.00', 'font:800 clamp(34px,3.4vw,48px)/1 var(--font);font-stretch:90%;letter-spacing:-.02em;font-variant-numeric:tabular-nums', 'Revenue figure'],
  ];
  const TS = [
    ['Body', 'Publish across your social channels', 'font:400 clamp(15px,1.2vw,17.6px)/1.55 var(--font);color:var(--ink2)', 'Body copy'],
    ['Terms', '7 days free. Card required.', 'font:400 .875rem/1.55 var(--font);color:var(--ink2)', 'Terms note'],
    ['Button', 'Start your 7-day trial', 'font:700 1.0625rem/1.3 var(--font)', 'CTA'],
    ['Link', 'See how it works', 'font:600 1rem/1.3 var(--font)', 'CTA'],
    ['Nav', 'Product   Platforms', 'font:500 .9375rem/1.3 var(--font);color:var(--ink2);white-space:pre', 'Top bar'],
    ['Logo', 'seenpaid', 'font:700 1.3rem/1.2 var(--font);letter-spacing:-.02em', 'Top bar'],
    ['Caption', 'Sample data. Illustrative figures.', 'font:400 .8125rem/1.45 var(--font);color:var(--ink3)', 'Caption'],
    ['Control', 'Pause   Replay', 'font:600 .8125rem/1.3 var(--font);white-space:pre', 'Controls, cue'],
  ];
  const TB = [
    ['Post', 'My launch checklist', 'font:600 14.5px/1.3 var(--font)', 'Results'],
    ['Title', 'Next 7 days', 'font:700 14.5px/1.3 var(--font);letter-spacing:-.01em', 'Calendar'],
    ['Prompt', 'Schedule this post', 'font:500 15px/1.3 var(--font);letter-spacing:-.005em', 'AI agent'],
    ['Row', 'LinkedIn', 'font:600 13px/1.3 var(--font)', 'Rows'],
    ['Meta', 'Oct 20 – 26', 'font:400 13px/1.3 var(--font);color:var(--ink3)', 'Boards'],
    ['Pill', 'Published', 'font:600 11.5px/1.3 var(--font)', 'Pills'],
    ['Tag', 'Justinas', 'font:500 14px/1.3 var(--font)', 'Cursor'],
  ];
  const tyCell = ([n, t, css, where]) => `<div class="ds-ty-c"><div class="ds-ty-s" style="${css}">${esc(t)}</div><div class="ds-ty-n"><b>${n}</b><span>${where}</span></div></div>`;
  S.push({
    id: 'type', group: 'Foundations', nav: 'Typography', title: 'Typography',
    desc: 'One family, Archivo, in two voices: a narrow, heavy display for the headline and the revenue figure, and regular width for everything else. Figures are always tabular.',
    facts: [['Family', 'Archivo, variable'], ['Axes', 'Weight 400–900, width 75–125']],
    stageClass: 'ds-stage--top',
    stage: `<div class="ds-ty">${TY.map(([n, t, css, where]) => `<div class="ds-ty-r"><div class="ds-ty-n"><b>${n}</b><span>${where}</span></div><div class="ds-ty-s" style="${css}">${esc(t)}</div></div>`).join('')}
      <div class="ds-ty-g">${TS.map(tyCell).join('')}</div>
      <h3 class="ds-ty-h">Board scale <small>one board unit is 10px here; on the page it is 8.2–11.4px</small></h3>
      <div class="ds-ty-g ds-ty-g3">${TB.map(tyCell).join('')}</div></div>`,
    groups: [
      { title: 'Family', rows: [use('--font'), spec('Weights used', '400 · 500 · 600 · 700 · 800 · 900', '400 body, 500 nav and prompt, 600 labels, 700 titles, 800 display, 900 the $ glyph.'), spec('Widths used', '84% · 90% · 100%', '84% headline, 90% revenue figure, 100% everything else.'), spec('Smoothing', 'antialiased, optimizeLegibility', 'Set once on `body`.'), spec('Figures', 'tabular-nums', 'Times, counters, amounts, ledger.')] },
      { title: 'Page scale', rows: ['--type-display', '--type-body', '--type-terms', '--type-button', '--type-link', '--type-nav', '--type-logo', '--type-caption', '--type-control'].map(n => use(n)) },
      { title: 'Board scale', lead: '1em is the board unit: one forty-fourth of the board, 8.2–11.4px.', rows: ['--type-stat', '--type-post', '--type-title', '--type-row', '--type-prompt', '--type-meta', '--type-pill', '--type-tag'].map(n => use(n)) },
      { title: 'Wrapping', rows: [spec('Headline lines', '`white-space: nowrap`', 'Authored breaks, three lines.'), spec('Body lines', '`nowrap` on desktop', 'Wraps with `text-wrap: pretty` under 720px.'), spec('Terms', '`text-wrap: balance`', 'Even line lengths inside 320px.')] },
    ],
  });

  /* ------------------------------------------------------------ layout */
  S.push({
    id: 'layout', group: 'Foundations', nav: 'Layout and spacing', title: 'Layout and spacing',
    desc: 'On wide screens the copy sits in the middle column and the boards flank it; below 1280px everything stacks, and on phones only Results remains. Drag the width to watch the live hero change layout.',
    facts: [['Container', '1560px max'], ['Breakpoints', '1280 · 860 · 720 · 480 · 340']],
    stage: `
<div class="ds-lay">
  <div class="ds-lay-bar"><label for="ds-w">Viewport width</label><output id="ds-wout" for="ds-w">1440 px</output></div>
  <div class="ds-range"><input id="ds-w" type="range" min="320" max="1600" step="1" value="1440" aria-describedby="ds-lay-mode">
    <div class="ds-ticks" aria-hidden="true"><span style="--x:1.6">340</span><span style="--x:12.5">480</span><span style="--x:31.25">720</span><span style="--x:42.2">860</span><span style="--x:75">1280</span></div></div>
  <div class="ds-fitbox" data-fit-frame="layout" style="--w:1440px;--h:900px"><div class="ds-fitin"><iframe src="/" title="The live Seenpaid hero at the chosen width" loading="lazy" tabindex="-1"></iframe></div></div>
  <dl class="ds-read" id="ds-lay-mode"><div><dt>Layout</dt><dd data-r="mode">Three columns</dd></div><div><dt>Board unit</dt><dd data-r="unit">–</dd></div><div><dt>Copy column</dt><dd data-r="tw">–</dd></div><div><dt>Page padding</dt><dd data-r="pad">–</dd></div><div><dt>Column gap</dt><dd data-r="gap">–</dd></div></dl>
</div>`,
    groups: [
      { title: 'Variables', rows: [use('--tw'), use('--gap'), use('--pad')] },
      { title: 'Container', rows: [spec('Max width', '1560px', 'Header and hero, centred.'), spec('Header height', '76px'), spec('Hero padding top', 'clamp(28px, 4.2vw, 60px)', 'Space between the header and the headline.'), spec('Hero padding bottom', 'clamp(40px, 5vw, 72px)'), spec('Overflow', '`overflow-x: clip`', 'Pipeline and cursor never add a scrollbar.')] },
      { title: 'Grid, 1280px and up', rows: [spec('Columns', '`1fr` · `--tw` · `1fr`', 'Column gap is `--gap`.'), spec('Calendar', 'Left, right-aligned', 'Row 1.'), spec('Copy', 'Centre', 'Row 1, aligned to the start.'), spec('Results', 'Right, left-aligned', 'Row 1.'), spec('AI agent', 'Centre, row 2', '28px margin above it.'), spec('Caption and controls', 'Right, row 2', '16px margin above them.')] },
      { title: 'Board unit', lead: 'One em is a forty-fourth of a board, so a board’s contents scale with it.', rows: [spec('1280px and up', 'clamp(8.2px, (100cqw − --tw − 2·--gap) / 88, 11.4px)', 'About 9.4px at 1440px.'), spec('720–1279px', 'min(100cqw, 520px) / 44', 'Boards stack, 5em apart.'), spec('Under 720px', '10.5px', 'Results only.')] },
      { title: 'Breakpoints', rows: [spec('1280px', 'Three columns', 'Below it the hero is one stacked column and the copy is capped at 680px.'), spec('860px', 'Nav appears', 'Hidden below.'), spec('720px', 'Phone layout', 'Calendar, agent, pipeline and cursor are hidden. The 4-step cue appears. The body copy wraps and the CTA fills the width.'), spec('480px', 'Compact header', 'Wordmark 1.15rem, mark 28px, small button 0 15px at .875rem, ledger rows can grow.'), spec('340px', 'Wordmark hides', 'Only the mark remains.')] },
      { title: 'Spacing in use', lead: 'There is no spacing scale. These are the values the hero actually uses.', rows: [spec('Header gap', '24px'), spec('Body copy above', '22px', 'Below the headline.'), spec('CTA above', '26px'), spec('CTA gap', '4px 26px', 'Row and column.'), spec('Terms above', '14px'), spec('Copy to boards, stacked', '40px'), spec('Board to board, stacked', '5em'), spec('Cue below', '14px')] },
    ],
  });

  /* ------------------------------------------------------------ shape */
  const RAD = [['--radius-pill', 'width:96px;height:34px'], ['--radius-board', 'width:56px;height:56px'], ['--radius-ring', 'width:56px;height:56px;box-shadow:none;border:2px solid var(--blue);background:transparent'], ['--radius-well', 'width:56px;height:56px'], ['--radius-drop', 'width:56px;height:56px;border:1.5px dashed var(--blue-rail);background:var(--wash-drop);box-shadow:none'], ['--radius-card', 'width:56px;height:56px;background:var(--blue-wash);border-left:3px solid var(--blue-rail);box-shadow:none'], ['--radius-block', 'width:56px;height:56px;background:var(--skeleton);box-shadow:none;border:1px solid var(--line)'], ['--radius-round', 'width:56px;height:56px']];
  const ELEV = [['--shadow-board', '<div class="ds-el ds-el-board"></div>'], ['--shadow-button', '<span class="btn btn-sm">Start trial</span>'], ['--shadow-event-hover', '<div class="ds-el ds-el-ev" style="box-shadow:0 .3em .9em -.3em rgba(11,16,32,.35)"></div>'], ['--shadow-event-rest', '<div class="ds-el ds-el-ev" style="box-shadow:0 .3em 1em -.4em rgba(11,16,32,.28)"></div>'], ['--shadow-event-lift', '<div class="ds-el ds-el-ev" style="box-shadow:0 1.2em 2.2em -.4em rgba(11,16,32,.38);transform:scale(1.05)"></div>'], ['--shadow-tag', `<span class="tag" style="position:static"><img src="https://seenpaid.com/founder.jpg" alt="" width="22" height="22"><b>Justinas</b></span>`], ['--shadow-arrow', `<span style="display:block;width:2.6em;height:3em">${ic('i-cursor', 'arrow')}</span>`]];
  S.push({
    id: 'shape', group: 'Foundations', nav: 'Shape and elevation', title: 'Shape and elevation',
    desc: 'Pills for anything small and interactive, one generous radius for boards, and soft shadows that lift a surface off the canvas rather than outline it.',
    facts: [['Radius', 'Pill, board, card'], ['Shadow', 'Soft, never hard-edged']],
    stageClass: 'ds-stage--top',
    stage: `
<div class="ds-shape">
  <h3>Radius</h3>
  <div class="ds-rad">${RAD.map(([n, css]) => `<figure><div class="ds-rb" style="border-radius:${T[n].value};${css}"></div><figcaption><code>${n.replace('--radius-', '')}</code><span>${esc(T[n].value)}</span></figcaption></figure>`).join('')}</div>
  <h3>Elevation</h3>
  <div class="ds-elev">${ELEV.map(([n, el]) => `<figure><div class="ds-eb">${el}</div><figcaption><code>${n.replace('--shadow-', '')}</code></figcaption></figure>`).join('')}</div>
  <h3>Rings</h3>
  <div class="ds-rings">
    <figure><a class="btn btn-sm ds-focus">Focus</a><figcaption><code>focus</code><span>3px --blue, offset 3px</span></figcaption></figure>
    <figure><div class="ds-ringb"><div class="board pl" style="width:15em;height:8em;--sel:1"></div></div><figcaption><code>selection</code><span>.2em --blue, inset −.55em</span></figcaption></figure>
  </div>
</div>`,
    groups: [
      { title: 'Radius', rows: RAD.map(([n]) => use(n)) },
      { title: 'Elevation', rows: ELEV.map(([n]) => use(n)) },
      { title: 'Rings and borders', rows: [use('--focus-ring'), spec('Selection ring', '.2em solid `--blue`', 'Inset −.55em on a board, radius 1.9em. Fades with the cursor.'), spec('Board border', '1px solid `--line`'), spec('Inner divider', '1px solid `--line2`'), spec('Pill ring', 'inset 1px', 'Drawn as a shadow so it never changes the pill’s size.'), spec('Ledger rule', '1px dashed `--rule-dash`'), spec('Event rail', '.3em solid `--blue-rail`', 'Left edge only.')] },
    ],
  });

  /* ------------------------------------------------------------ motion */
  const GANTT = [
    ['Headline lines', -1.95, -1.01, 'copy'], ['Body copy lines', -1.45, -0.65, 'copy'], ['CTA', -1.17, -0.53, 'copy'], ['Terms note', -1.09, -0.45, 'copy'],
    ['Boards wait, skeletons shimmer', -1.5, 2.4, 'skel'],
    ['Calendar resolves', 0, 0.5, 'ui'], ['AI agent resolves', 0.95, 1.45, 'ui'], ['Results resolves', 1.85, 2.4, 'ui'],
    ['Pipeline tubes draw', 0.85, 2.35, 'pipe'],
    ['Cursor reschedules the post', 2.3, 4.0, 'cur'], ['Post packet to the agent', 3.95, 4.5, 'pipe'], ['Agent status updates', 4.4, 5.55, 'ui'],
    ['Cursor reads the agent', 3.95, 5.2, 'cur'], ['Cursor goes to Results, clicks', 5.2, 6.05, 'cur'],
    ['Clicks and coins flow', 5.3, 7.0, 'pipe'], ['Ledger and counters', 6.1, 7.4, 'ui'],
    ['Live loop', 7.5, 9.5, 'loop'],
  ];
  const [G0, G1] = [-2, 9.5];
  const gx = v => (((v - G0) / (G1 - G0)) * 100).toFixed(2);
  S.push({
    id: 'motion', group: 'Foundations', title: 'Motion',
    desc: 'One clock drives everything. The script sets a time in seconds and the CSS works out every element’s state from it, so any frame can be reached. Scrub the live hero or follow the timeline.',
    facts: [['Clock', md('`--t` on `.hero-in`')], ['Intro', '−2 s to 7.5 s, then live']],
    stage: `
<div class="ds-mo">
  <div class="ds-fitbox" data-fit-frame="motion" style="--w:1440px;--h:900px"><div class="ds-fitin"><iframe src="/" title="The live Seenpaid hero, controlled by the timeline" loading="lazy" tabindex="-1"></iframe></div></div>
  <div class="ds-scrub">
    <div class="ctl"><button type="button" data-hero-rp><svg aria-hidden="true"><use href="#i-replay"/></svg><span>Replay</span></button></div>
    <input type="range" min="-2" max="7.5" step="0.01" value="7.5" aria-label="Hero time in seconds" data-scrub><output data-tout>7.50 s</output>
  </div>
  <div class="ds-gantt" role="img" aria-label="Timeline of the intro, from −2 to 9.5 seconds">
    <div class="ds-g-plot">${GANTT.map(([l, a, b, k]) => `<div class="ds-g-row"><span class="ds-g-l">${l}</span><span class="ds-g-t"><i class="k-${k}" style="--a:${gx(a)}%;--w:${(gx(b) - gx(a)).toFixed(2)}%"></i></span></div>`).join('')}
      <div class="ds-g-over"><span class="ds-g-zero" style="--x:${gx(0)}%"></span><span class="ds-g-ph" data-ph style="--x:${gx(7.5)}%"></span></div></div>
    <div class="ds-g-ax" aria-hidden="true">${[-2, 0, 2, 4, 6, 8].map(v => `<span style="--x:${gx(v)}%">${v}s</span>`).join('')}</div>
  </div>
</div>`,
    groups: [
      { title: 'Easing', rows: [use('--ease-out'), spec('Reveal', 'p → 1 − (1 − p)³', 'p = clamp((t − start) / duration).')] },
      { title: 'Durations', rows: ['--dur-line', '--dur-copy', '--dur-board', '--dur-hover', '--dur-row', '--dur-shimmer'].map(n => use(n)) },
      { title: 'Distance and stagger', rows: ['--rise-copy', '--rise-board', '--stagger-line', '--stagger-copy'].map(n => use(n)).concat([spec('Row slide', '.8em', 'Jobs and ledger cells slide in from the left; the payment slides 1.6em.'), spec('Status chips', 'scale .85 → 1')]) },
      { title: 'The clock', rows: [spec('`--t`', 'seconds', 'Set on the hero every frame. −2 starts the copy, 0 resolves the Calendar, 7.5 ends the intro.'), spec('`.tl`', '`--s`, `--d`', 'Gives `--p` (progress) and `--e` (eased).'), spec('`.tg`', '`--gs`, `--gd`', 'Gives `--g`, the published-state colour change.'), spec('`.tl2`', '`--s2`, `--d2`', 'Gives `--Lc` (content in) and `--Ls` (skeleton out).'), spec('Script owns', 'geometry', 'Cursor path, dragged chip, pipeline packets, counters.')] },
      { title: 'Loops after 7.5s', rows: [spec('Pipeline', 'ambient dots and packets', 'Right tube four dots every .4s; left tube a packet every 4.2s; ports pulse.'), spec('Cursor', 'seeded random walk', '62% of moves change board; 30% click; rows highlight under it.'), spec('Skeleton', '1.6s sweep', 'Only while a board is still loading.')] },
      { title: 'Control', rows: [spec('Reduced motion', 'finished frame', 'No skeletons, no motion, no controls.'), spec('Pause and Replay', 'after the copy', 'Replay returns to the loading state and keeps the copy.'), spec('Scrub', '`.hero-in`.`seek(t)`', 'Pauses and renders any frame. This page uses it.')] },
    ],
  });

  /* ------------------------------------------------------------ icons */
  const ICONS = [
    ['i-logo', 'Logo', 'logo', 44], ['i-x', 'X', 'mk', 28], ['i-in', 'LinkedIn', 'mk', 28], ['i-th', 'Threads', 'mk', 28], ['i-bs', 'Bluesky', 'mk', 28], ['i-coin', 'Coin', '', 32],
    ['i-check', 'Check', 'st', 28], ['i-arrow', 'Arrow', 'st', 28], ['i-down', 'Down', 'st', 28], ['i-link', 'Link', 'ln', 28], ['i-replay', 'Replay', 'st', 28], ['i-pause', 'Pause', 'st', 28], ['i-play', 'Play', 'pl', 28], ['i-cursor', 'Cursor', '', 40],
  ];
  const iconSvg = (id, k, s) => {
    const base = `width:${s}px;height:${k === '' && id === 'i-cursor' ? s * 1.17 : s}px`;
    if (k === 'mk') return ic(id, 'mk', `${base};color:var(--ink)`);
    if (k === 'ln') return ic(id, '', `${base};color:var(--ink);stroke:currentColor;fill:none`);
    if (k === 'pl') return ic(id, '', `${base};color:var(--ink)`);
    return ic(id, '', `${base};color:var(--ink)`);
  };
  S.push({
    id: 'icons', group: 'Primitives', nav: 'Icons and marks', title: 'Icons and marks',
    desc: 'Fourteen inline symbols, defined once and drawn with `use`. Platform marks and interface icons take their colour from the text around them; the logo, coin and cursor carry their own.',
    facts: [['Defined', md('`<symbol>` block in `index.html`')], ['Colour', md('`currentColor`, except 3')]],
    stage: `<div class="ds-ico">${ICONS.map(([id, n, k, s]) => `<figure><div class="ds-ico-b">${iconSvg(id, k, s)}</div><figcaption><b>${n}</b><code>${id}</code></figcaption></figure>`).join('')}</div>`,
    groups: [
      { title: 'Platform marks', lead: 'Simplified glyphs of each network’s logo, used to name the channel.', rows: [spec('Size', '1.5em', '`.mk`, fill `currentColor`. 1.15em in the post well and ledger.'), spec('X · LinkedIn · Threads · Bluesky', '24 × 24', 'Ink in the calendar and jobs, ink3 in the ledger.')] },
      { title: 'Interface icons', rows: [spec('Check', 'stroke 2.6', '1em in chips and pills, 1.15em in the agent status.'), spec('Arrow', 'stroke 2.4', 'Primary button, 18px. Steps 4px right on hover.'), spec('Down', 'stroke 2.4', 'Text link, 16px. Steps 3px down on hover.'), spec('Link', 'stroke 2', 'Tracked URL in the post well, 1.1em. Needs `stroke: currentColor` on the host.'), spec('Replay · Pause', 'stroke 2.4 · 3', 'Controls, 15px.'), spec('Play', 'fill', 'Controls, 15px.'), spec('Caps and joins', 'round', 'Every stroked icon.')] },
      { title: 'Fixed colour', rows: [spec('Logo', '44 × 44', 'Eye outline in `currentColor` (`--ink`), `--gold` centre, a $ in `--ink`. 32px in the header, 28px under 480px.'), spec('Coin', '20 × 20', '`--gold` disc, $ in `--ink`. 1.7em in the ledger, 45% opacity when unmatched.'), spec('Cursor', '24 × 28', '`--blue` arrow with a 1.7 `--white` outline. 2.6em × 3em in the cursor.')] },
    ],
  });

  /* ------------------------------------------------------------ pills */
  S.push({
    id: 'pills', group: 'Primitives', nav: 'Status pills', title: 'Status pills',
    desc: 'Small rounded labels that say what state something is in. Blue means scheduled, green means verified, grey means present but not counted. A ring is drawn inside each pill so it never changes size.',
    facts: [['Selectors', md('`.pill` `.mt` `.um` `.ok` `.tagpill`')], ['Shape', 'Pill']],
    replay: '#pills-clk',
    stage: `
<div class="ds-clk ds-pills" id="pills-clk" data-from="-0.4" data-to="0.8" data-end="7.5" style="--t:7.5;font-size:22px">
  <figure class="ds-fig"><span class="swap tl tg" style="width:7.8em;--s:-9;--d:1;--gs:0;--gd:.45"><span class="pill sch jp-s">Scheduled</span><span class="pill pub jp-p">${ic('i-check')}Published</span></span><figcaption class="ds-lab">Scheduled to Published</figcaption></figure>
  <figure class="ds-fig"><span class="swap" style="width:7.8em;--g:0"><span class="pill sch jp-s">Scheduled</span></span><figcaption class="ds-lab">Scheduled</figcaption></figure>
  <figure class="ds-fig"><span class="swap" style="width:7.8em;--g:1"><span class="pill pub jp-p">${ic('i-check')}Published</span></span><figcaption class="ds-lab">Published</figcaption></figure>
  <figure class="ds-fig"><span class="mt">${ic('i-check')}Matched</span><figcaption class="ds-lab">Matched</figcaption></figure>
  <figure class="ds-fig"><span class="um">Unmatched</span><figcaption class="ds-lab">Unmatched</figcaption></figure>
  <figure class="ds-fig"><span class="tagpill">Sample data</span><figcaption class="ds-lab">Sample data</figcaption></figure>
  <figure class="ds-fig"><span class="ok" style="--e:1">${ic('i-check')}<span>3 matched sales</span></span><figcaption class="ds-lab">Sales chip</figcaption></figure>
  <figure class="ds-fig"><span class="days" style="display:block;height:auto;background:none;border:0"><span style="display:block;border:0"><i style="font-size:1.25em">20</i></span></span><figcaption class="ds-lab">Today chip</figcaption></figure>
</div>`,
    groups: [
      { title: 'Scheduled', rows: [use('--blue-wash', 'Fill'), use('--blue-ink', 'Text'), use('--ring-blue', 'Ring'), spec('Size', '7.8em × 2.3em', 'In the jobs list. 1.15em / 600, padding 0 .8em.')] },
      { title: 'Published', rows: [use('--green-wash', 'Fill'), use('--green', 'Text and check'), use('--ring-green', 'Ring'), spec('Swap', 'cross-fade', 'Scheduled fades out as Published fades in, driven by `--g`.')] },
      { title: 'Matched', rows: [use('--green-wash', 'Fill'), use('--green', 'Text and check'), use('--ring-green', 'Ring'), spec('Height', '2.1em', 'Padding 0 .8em, 1.15em / 600, check 1em.')] },
      { title: 'Unmatched', rows: [use('--surface-muted', 'Fill'), use('--ink3', 'Text'), use('--ring-grey', 'Ring'), spec('Height', '2.1em', 'No icon. Shown, never counted.')] },
      { title: 'Sample data', rows: [use('--line', 'Ring, 1px'), use('--ink3', 'Text'), spec('Size', '1.1em / 600', 'Padding .2em .8em, no fill.')] },
      { title: 'Sales chip', rows: [use('--green-wash', 'Fill'), use('--green', 'Text and check'), use('--ring-green', 'Ring'), spec('Height', '2.2em', 'Padding 0 .85em, tabular figures. Pops from scale .85.')] },
      { title: 'Today chip', rows: [use('--blue', 'Fill'), use('--white', 'Text'), spec('Size', 'padding .05em .45em', '700 on the current day in the calendar.')] },
    ],
  });

  return S;
}
