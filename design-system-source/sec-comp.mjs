// The components of the hero, one screen each.
import { T, use, spec } from './tokens.mjs';
import './tokens-type.mjs';
import { esc, md, fig } from './lib.mjs';

const ic = (id, cls = '', style = '') => `<svg${cls ? ` class="${cls}"` : ''}${style ? ` style="${style}"` : ''} aria-hidden="true"><use href="#${id}"/></svg>`;
const BTN = (cls = '', label = 'Start your 7-day trial') => `<a class="btn ${cls}">${label} ${ic('i-arrow')}</a>`;
const LINK = (cls = '') => `<a class="link ${cls}">See how it works ${ic('i-down')}</a>`;
const MK = ['i-x', 'i-in', 'i-th', 'i-bs'];
// a replayable board starts in its finished state, so it carries .loaded (skeleton hidden) until a replay begins
const L = h => h.replace('tl tl2"', 'tl tl2 loaded"');

export default function (P, meta) {
  const S = [];

  /* ------------------------------------------------------------ top bar */
  S.push({
    hide: true, id: 'topbar', group: 'Components', title: 'Top bar',
    desc: 'The page header: the Seenpaid mark, four navigation links and the small trial button. It sits straight on the canvas with no fill or border, so the hero starts right under it.',
    facts: [['Selectors', md('`.top` `.top-in` `.logo` `.nav`')], ['Contains', 'Logo, nav link, small button']],
    stage: `
<div class="ds-col">
  ${fig('Desktop, 860px and up', `<div class="ds-fit" data-fit style="--w:800px"><div class="ds-fit-in ds-bar">${P.header}</div></div>`, 'ds-full')}
  ${fig('Phone, under 480px', `<div class="ds-device ds-flush ds-bar ds-m720 ds-m480" style="--w:360px">${P.header}</div>`)}
  <div class="ds-row">
    ${fig('Nav link', `<nav class="nav"><a>Product</a></nav>`)}
    ${fig('Hover', `<nav class="nav"><a class="ds-hover">Product</a></nav>`)}
    ${fig('Focus', `<nav class="nav"><a class="ds-focus">Product</a></nav>`)}
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--canvas', 'Header sits on the page. No fill.'), use('--ink', 'Logo mark and “seen”'), use('--blue', '“paid” in the wordmark'), use('--ink2', 'Nav link'), use('--ink', 'Nav link on hover'), use('--wash-ink', 'Nav link hover background')] },
      { title: 'Type', rows: [use('--type-logo'), use('--type-nav')] },
      { title: 'Shape', rows: [use('--radius-pill', 'Nav link hover shape')] },
      { title: 'Specs', rows: [spec('Height', '76px'), spec('Max width', '1560px', 'Centred, side padding `--pad`.'), spec('Layout', 'flex, space-between', 'Gap 24px; 12px under 480px.'), spec('Mark', '32px', '28px under 480px. Gap to wordmark 9px.'), spec('Nav link padding', '10px 14px'), spec('Nav gap', '4px'), spec('Nav visibility', '860px and up', 'Hidden below; the small button stays.'), spec('Wordmark', 'hides under 340px'), spec('Stacking', 'z-index 6')] },
    ],
  });

  /* ------------------------------------------------------------ headline */
  S.push({
    id: 'headline', group: 'Components', title: 'Headline',
    desc: 'Three authored lines in the narrow display voice. Each line is a mask: the text rises out of its own box, so lines never overlap while they animate.',
    facts: [['Selectors', md('`h1` `.ln` `.in`')], ['Lines', md('“Stop guessing” / “which posts make” / “you money.”')]],
    replay: '#hl-clk',
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-ctr" id="hl-clk" aria-hidden="true" data-from="-2" data-to="-0.8" data-end="7.5">${P.h1}</div>
  <label class="ds-switch"><input type="checkbox" data-masks><span>Show line masks</span></label>
  ${fig('Phone, 390px wide', `<div class="ds-device ds-m720 ds-m480 ds-clk" aria-hidden="true" style="--w:390px"><div class="ds-ctr">${P.h1}</div></div>`)}
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink', 'Headline text')] },
      { title: 'Type', rows: [use('--type-display'), use('--font')] },
      { title: 'Motion', rows: [spec('Each line', 'rises out of its mask', 'translateY 115% → 0; fully visible at 25% progress.'), use('--dur-line', 'Per line'), use('--stagger-line'), spec('Start times', '−1.95 · −1.83 · −1.71 s'), use('--ease-out')] },
      { title: 'Specs', rows: [spec('Lines', '3, `white-space: nowrap`', 'Breaks are authored. A line never wraps.'), spec('Mask', '`overflow: hidden`', 'Padding-bottom .14em with margin-bottom −.14em keeps descenders without adding space.'), spec('Column', '`--tw`, centred', '460–560px.'), spec('Phone size', 'clamp(2.1rem, 10.6vw, 2.9rem)', '41px at 390px wide.')] },
    ],
  });

  /* ------------------------------------------------------------ body copy */
  S.push({
    hide: true, id: 'lede', group: 'Components', nav: 'Body copy', title: 'Body copy',
    desc: 'The three-line supporting copy, known in the CSS as the lede. It is set wider than the headline column on purpose, and its last line is the shortest.',
    facts: [['Selectors', md('`.lede` `.ll` `.lb`')], ['Words per line', '10 · 11 · 9']],
    replay: '#lede-clk',
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-ctr ds-lede-w" id="lede-clk" data-from="-2" data-to="-0.5" data-end="7.5">${P.lede}</div>
  ${fig('Phone, 390px wide', `<div class="ds-device ds-m720 ds-m480 ds-clk" style="--w:390px"><div class="ds-ctr">${P.lede}</div></div>`)}
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink2', 'Body copy')] },
      { title: 'Type', rows: [use('--type-body'), use('--font')] },
      { title: 'Motion', rows: [spec('Each line', 'rises and fades in', 'translateY 12px → 0.'), use('--rise-copy'), use('--dur-copy', 'Per line'), use('--stagger-copy'), spec('Start times', '−1.45 · −1.37 · −1.29 s')] },
      { title: 'Specs', rows: [spec('Margin above', '22px'), spec('Position', 'centred on the page', '`width: max-content`, shifted −50%, so the lines may be wider than the headline column.'), spec('Wrapping', '`nowrap`', 'Lines are authored, with `<br class="lb">` between.'), spec('Tablet', 'clamp(1rem, 2.2vw, 1.125rem)'), spec('Phone', '1.0625rem, wraps', '`text-wrap: pretty`, line breaks hidden, copy fills the width.')] },
    ],
  });

  /* ------------------------------------------------------------ CTA */
  S.push({
    hide: true, id: 'cta', group: 'Components', title: 'CTA',
    desc: 'A primary pill button and a quiet text link. The button turns navy on hover and its arrow steps forward; the link’s arrow steps down towards the content it points to.',
    facts: [['Selectors', md('`.cta` `.btn` `.btn-sm` `.link`')], ['Destination', md('`seenpaid.com/signup`')]],
    replay: '#cta-clk',
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-ctr" id="cta-clk" data-from="-1.6" data-to="-0.4" data-end="7.5"><div class="copy" style="max-width:none">${P.cta}</div></div>
  <div class="ds-fit" data-fit style="--w:830px"><div class="ds-fit-in"><div class="ds-grid3">
    ${fig('Button', BTN())}${fig('Hover', BTN('ds-hover'))}${fig('Focus', BTN('ds-focus'))}
    ${fig('Small', BTN('btn-sm'))}${fig('Small hover', BTN('btn-sm ds-hover'))}${fig('Small focus', BTN('btn-sm ds-focus'))}
    ${fig('Link', LINK())}${fig('Hover', LINK('ds-hover'))}${fig('Focus', LINK('ds-focus'))}
  </div></div></div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink', 'Button fill. Link text.'), use('--white', 'Button label'), use('--blue', 'Button hover fill. Focus ring.'), use('--underline', 'Link underline at rest'), use('--ink', 'Link underline on hover')] },
      { title: 'Type', rows: [use('--type-button'), use('--type-link')] },
      { title: 'Shape and elevation', rows: [use('--radius-pill'), use('--shadow-button'), use('--focus-ring')] },
      { title: 'Motion', rows: [use('--dur-hover', 'Button fill and arrows'), spec('Button arrow', 'translateX 4px', 'On hover and keyboard focus.'), spec('Link arrow', 'translateY 3px', 'On hover and keyboard focus.'), use('--rise-copy', 'Reveal'), spec('Reveal start', '−1.17 s', '.64s.')] },
      { title: 'Specs', rows: [spec('Button height', '56px', 'Small 42px; phone 54px.'), spec('Button padding', '0 28px', 'Small 0 20px; phone 0 24px.'), spec('Icon gap', '10px', 'Icon 18px.'), spec('Link', 'min-height 44px', 'Gap 8px, icon 16px, underline 1.5px at 6px offset.'), spec('Group', 'flex, wrap, centred', 'Gap 4px 26px, 26px above.'), spec('Phone', 'button fills the width')] },
    ],
  });

  /* ------------------------------------------------------------ terms */
  const W = (w, label, note) => fig(label, `<div class="ds-termbox" style="width:${w}px"><span class="ds-dim"><b>${note}</b></span>${P.terms}</div>`);
  S.push({
    hide: true, id: 'terms', group: 'Components', title: 'Terms note',
    desc: 'The fine print under the CTA: what the trial costs and what the user brings. It fills the width of its container but never grows past 320px.',
    facts: [['Selector', md('`.terms`')], ['Copy', 'Fixed. Do not paraphrase.']],
    replay: '#terms-clk',
    stage: `
<div class="ds-col ds-clk" id="terms-clk" data-from="-1.5" data-to="-0.4" data-end="7.5">
  ${W(320, 'Column is 320px or wider', '320px max')}
  ${W(260, 'Narrower column fills it', '260px')}
  ${W(200, 'Narrow phone', '200px')}
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink2', 'Terms text'), use('--ink', 'Bold lead, “7 days free. Card required.”')] },
      { title: 'Type', rows: [use('--type-terms')] },
      { title: 'Motion', rows: [use('--rise-copy'), use('--dur-copy'), spec('Reveal start', '−1.09 s', 'Last of the copy to arrive.')] },
      { title: 'Specs', rows: [spec('Width', '100%, max 320px', 'Centred with auto margins.'), spec('Margin above', '14px'), spec('Wrapping', '`text-wrap: balance`', 'Lines come out even rather than ragged.'), spec('Bold lead', '700', 'Only “7 days free. Card required.”')] },
    ],
  });

  /* ------------------------------------------------------------ board shell */
  const shell = (cls, w, h, name, note) => `<figure class="ds-fig"><div class="board pl ${cls}" style="width:${w}em;height:${h}em;--sel:0;opacity:1;transform:none"><span class="ds-bl"><b>${name}</b><span>${w} × ${h}em</span></span></div><figcaption class="ds-lab">${note}</figcaption></figure>`;
  S.push({
    hide: true, id: 'board', group: 'Components', title: 'Board shell',
    desc: 'The white card that holds Calendar, AI agent and Results. Everything inside is sized in em, where 1em is a forty-fourth of the board’s width, so contents scale with the card.',
    facts: [['Selectors', md('`.board` `.pl` `.clip` `.body` `.sk`')], ['Unit', md('1em = board ÷ 44')]],
    stageClass: 'ds-stage--top',
    stage: `
<div class="ds-row ds-boards">
  ${shell('cal', 44, 31, 'Calendar', 'Row 1, left')}
  ${shell('agent', 33, 15.4, 'AI agent', 'Row 2, centre')}
  ${shell('res', 44, 40.5, 'Results', 'Row 1, right')}
  <figure class="ds-fig"><div class="ds-ringb"><div class="board pl" style="width:15em;height:9em;--sel:1;opacity:1"><span class="ds-bl"><b>Selected</b><span>cursor is here</span></span></div></div><figcaption class="ds-lab">Selection ring</figcaption></figure>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--card', 'Surface'), use('--line', 'Border, 1px'), use('--blue', 'Selection ring')] },
      { title: 'Shape and elevation', rows: [use('--radius-board'), use('--radius-ring', 'Selection ring'), use('--shadow-board')] },
      { title: 'Sizes', rows: [spec('Calendar', '44 × 31em'), spec('AI agent', '33 × 15.4em'), spec('Results', '44 × 40.5em'), spec('Line height', '1.3'), spec('Unit', '8.2–11.4px', 'Wide screens; see Layout and spacing.')] },
      { title: 'Selection ring', rows: [spec('Stroke', '.2em solid `--blue`'), spec('Inset', '−.55em'), spec('Follows', 'the cursor', 'Fades in on the board the cursor is over, fades out as it leaves.')] },
      { title: 'Motion', rows: [use('--rise-board', 'Frame rise'), use('--dur-board'), spec('Frame start', '−1.5 · −1.4 · −1.3 s', 'Calendar, agent, Results. Contents wait for the skeleton.')] },
    ],
  });

  /* ------------------------------------------------------------ calendar */
  const evCard = (time, icons, cap, cls = '') => `<div class="ev ${cls}"><div class="r1"><span>${time}</span><span class="ms">${icons.map(i => ic(i, 'mk')).join('')}</span></div><div class="cp">${cap}</div></div>`;
  const jobRow = (icon, name, g, hover = '') => `<div class="job ${hover}" style="--e:1;--g:${g}">${ic(icon, 'mk')}<span class="nm">${name}</span><span class="tm"><span class="t0">09:00</span><span class="t1">11:00</span></span><span class="swap"><span class="pill sch jp-s">Scheduled</span><span class="pill pub jp-p">${ic('i-check')}Published</span></span></div>`;
  S.push({
    id: 'calendar', group: 'Components', nav: 'Calendar board', title: 'Calendar board',
    desc: 'A five-day week with a scheduled post on each day, and the selected post’s four channel jobs underneath. It is where the user acts: Justinas moves a post and the jobs below follow.',
    facts: [['Selectors', md('`.cal` `.cal-top` `.days` `.cols` `.ev` `.jobs` `.job`')], ['Size', '44 × 31em']],
    replay: '#cal-clk',
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-u-cal anim" id="cal-clk" data-from="-2" data-to="2" data-end="7.5">${L(P.cal)}</div>
  <div class="ds-row ds-parts ds-clk" aria-hidden="true" style="--e:1;--morph:0;--g:0">
    ${fig('Event card', `<div class="ds-cell">${evCard('17:30', ['i-in'], 'Behind the scenes')}</div>`)}
    ${fig('Hover', `<div class="ds-cell">${evCard('17:30', ['i-in'], 'Behind the scenes', 'is-hover')}</div>`)}
    ${fig('Job rows, default and hover', `<div class="ds-jobw">${jobRow('i-x', 'X', 0)}${jobRow('i-in', 'LinkedIn', 0, 'is-hover')}</div>`)}
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink', 'Title, day names, captions'), use('--ink3', 'Range, legend, day numbers, job times'), use('--line2', 'Dividers and grid lines'), use('--surface-head', 'Day-header band'), use('--blue', 'Today chip'), use('--blue-wash', 'Event fill'), use('--blue-rail', 'Event rail, scheduled legend dot'), use('--blue-ink', 'Event time'), use('--ink2', 'Event channel marks'), use('--green-rail', 'Published legend dot'), use('--wash-blue', 'Job row hover')] },
      { title: 'Type', rows: [use('--type-title'), use('--type-meta', 'Range 1.3em, legend 1.2em, days 1.25em'), use('--type-row', 'Job name'), spec('Event', '1.15em/1.25', 'Time 700, caption 400, one line with ellipsis.')] },
      { title: 'Shape and elevation', rows: [use('--radius-card', 'Event card'), use('--shadow-event-hover')] },
      { title: 'Motion', rows: [spec('Contents', 'resolve at 0 s', '.5s: fade in with a 12px rise as the skeleton fades out.'), spec('Job rows', 'slide in .8em', 'Start .55 → .79 s, .08s apart.'), spec('Rows change', 'Scheduled to Published', 'Colour swap at 5.25 s onward.')] },
      { title: 'Specs', rows: [spec('Header', '3.8em', 'Padding 0 1.6em.'), spec('Day band', '2.6em', 'Five equal columns.'), spec('Week row', '9em', 'Cell padding .5em.'), spec('Event padding', '.45em .55em .5em .6em', 'Rail .3em.'), spec('Jobs list', 'top 15.6em', 'Inset 1.6em each side. Heading 2.9em, rows 2.7em.'), spec('Job grid', '1.5em · 1fr · 3.6em · 7.8em', 'Gap .9em.')] },
    ],
  });

  /* ------------------------------------------------------------ AI agent */
  S.push({
    id: 'agent', group: 'Components', nav: 'AI agent board', title: 'AI agent board',
    desc: 'One prompt and a status line that changes as the work gets done: scheduled, rescheduled, published. The statuses cross-fade in the same spot, so the card never changes height.',
    facts: [['Selectors', md('`.agent` `.ag-h` `.ag-q` `.ag-st`')], ['Size', '33 × 15.4em']],
    replay: '#ag-clk',
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-u-agent anim" id="ag-clk" data-from="0.9" data-to="5.8" data-end="7.5">${L(P.agent)}</div>
  <div class="ds-seg" role="group" aria-label="Agent status" data-seg="#ag-clk">
    <button type="button" data-t="3.5" aria-pressed="false">Scheduled</button><button type="button" data-t="4.8" aria-pressed="false">Rescheduled</button><button type="button" data-t="7.5" aria-pressed="true">Published</button>
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink', 'Avatar fill, prompt text'), use('--blue-lt', 'Avatar glyph'), use('--ink3', 'Header label'), use('--line2', 'Rule above the status'), use('--green', 'Status text and check'), use('--green-wash', 'Check disc')] },
      { title: 'Type', rows: [use('--type-prompt'), spec('Header', '600 · 1.25em', 'In `--ink3`.'), spec('Status', '600 · 1.25em', 'Avatar glyph 800.')] },
      { title: 'Motion', rows: [spec('Contents', 'resolve at .95 s', '.5s, after the Calendar.'), spec('Scheduled', 'in at 1.45 s', 'Out at 4.4 s.'), spec('Rescheduled', 'in at 4.5 s', 'Out at 5.2 s.'), spec('Published', 'in at 5.25 s', 'Stays.'), spec('Cross-fade', '.2s', 'Each status fades while the next arrives.')] },
      { title: 'Specs', rows: [spec('Padding', '1.6em 1.8em'), spec('Avatar', '1.8em circle'), spec('Prompt', 'margin-top .8em'), spec('Status zone', '3.2em', 'Margin-top .9em, status lines stacked in place.'), spec('Check', '1.15em', 'Padding .18em in a `--radius-round` disc.')] },
    ],
  });

  /* ------------------------------------------------------------ results */
  S.push({
    hide: true, id: 'results', group: 'Components', nav: 'Results board', title: 'Results board',
    desc: 'The proof: one post, the revenue it brought in, and the ledger that ties each tracked click to a payment. Matched payments count. The unmatched one is shown and explicitly not counted.',
    facts: [['Selectors', md('`.res` `.res-post` `.num` `.ledger` `.lr`')], ['Size', '44 × 40.5em']],
    replay: '#res-clk',
    stage: `<div class="ds-clk ds-u-res anim" id="res-clk" data-from="-2" data-to="7.6" data-end="7.5">${L(P.res)}</div>`,
    groups: [
      { title: 'Colour', rows: [use('--ink', 'Post text, revenue figure'), use('--ink3', 'Labels, times, processor, header ring'), use('--surface-well', 'Post well'), use('--line', 'Well ring, Sample data ring'), use('--blue', 'Title dot, click dots'), use('--green-wash', 'Matched chip, sales chip'), use('--green', 'Matched text'), use('--green-rail', 'Match connector'), use('--surface-muted', 'Unmatched chip'), use('--dash-grey', 'Unmatched connector'), use('--rule-dash', 'Rule above the ledger'), use('--line2', 'Row dividers'), use('--wash-blue', 'Row hover')] },
      { title: 'Type', rows: [use('--type-stat'), use('--type-post'), spec('Title', '600 · 1.3em'), use('--type-row', 'Channel name in a click'), spec('Amount', '700 · 1.5em', 'Tabular. Processor 1.2em in `--ink3`.'), use('--type-meta', 'Labels, ledger head, note')] },
      { title: 'Shape', rows: [use('--radius-well', 'Post well'), use('--radius-pill', 'Chips')] },
      { title: 'Motion', rows: [spec('Contents', 'resolve at 1.85 s', '.55s, after the Agent.'), spec('Counters', 'tick up on arrival', 'Clicks to 318, revenue by $49.00 per matched coin.'), spec('Ledger rows', '6.1 → 7.4 s', 'Click, connector, payment, chip, in turn.'), spec('Chips', 'scale .85 → 1')] },
      { title: 'Specs', rows: [spec('Padding', '2.2em 2.2em 0'), spec('Header', '2.4em'), spec('Post well', '5.6em tall', 'Margin-top 1.2em, padding .9em 1.3em.'), spec('Stat', 'margin-top 1.8em', 'Figure 6em, side column right-aligned.'), spec('Ledger grid', '1fr · 2.6em · 11.4em · 8.2em', 'Gap .6em. Head 1.9em, rows 3em.'), spec('Connector', '2px', 'Arrowhead .6em. Dashed when unmatched.'), spec('Coin', '1.7em'), spec('Phone', 'the only board', 'Full width up to 520px, auto height, 10.5px unit.')] },
    ],
  });

  /* ------------------------------------------------------------ pipeline */
  const D = (cls, inner, vb = '-20 -12 40 24') => `<svg viewBox="${vb}" width="40" height="24" aria-hidden="true">${inner}</svg>`;
  const POST = `<g><rect x="-13" y="-7" width="26" height="14" rx="5" fill="#fff" stroke="#1B3A93" stroke-width="1.8"/><path d="M-7 -2H6M-7 2.5H1" stroke="#8D9AC2" stroke-width="1.6" stroke-linecap="round"/></g>`;
  const COINSVG = (on) => `<g><circle r="8" fill="${on ? '#F5B323' : '#C5CCDA'}" stroke="${on ? '#0B1020' : '#8A93A6'}" stroke-width="1.5"/><text y="3.6" text-anchor="middle" font-size="10.5" font-weight="900" fill="${on ? '#0B1020' : '#7B8499'}" font-family="Archivo,Arial,sans-serif">$</text></g>`;
  S.push({
    id: 'pipeline', group: 'Components', title: 'Pipeline',
    desc: 'The line between the boards, drawn as a hollow tube that data flows through: a post packet from Calendar to the agent, then clicks and coins from the agent to Results.',
    facts: [['Selectors', md('`.pipe` `.pipe-u` `.pipe-o`')], ['Drawn by', 'Script, from measured ports']],
    stage: `
<div class="ds-col">
  <svg class="ds-pipe" viewBox="0 0 680 330" role="img" aria-label="Pipeline between the Calendar, AI agent and Results boards, with a post packet, click dots and coins moving through it" data-pipe>
    <g class="ds-ghost"><rect x="12" y="14" width="168" height="124" rx="16"/><rect x="266" y="196" width="148" height="92" rx="16"/><rect x="500" y="14" width="168" height="196" rx="16"/>
      <text x="96" y="82" text-anchor="middle">Calendar</text><text x="340" y="246" text-anchor="middle">AI agent</text><text x="584" y="116" text-anchor="middle">Results</text></g>
    <g fill="none">
      <path class="seg-l" d="M180 118C224 118 222 242 266 242" stroke="#C9D1E0" stroke-width="14"/>
      <path d="M180 118C224 118 222 242 266 242" stroke="#F3F4F7" stroke-width="10"/>
      <path d="M180 118C224 118 222 242 266 242" stroke="#1B3A93" stroke-width="1.6" stroke-dasharray="1.5 6" stroke-linecap="round"/>
      <path class="seg-r" d="M414 242C457 242 457 52 500 52" stroke="#C9D1E0" stroke-width="14"/>
      <path d="M414 242C457 242 457 52 500 52" stroke="#F3F4F7" stroke-width="10"/>
      <path d="M414 242C457 242 457 52 500 52" stroke="#1B3A93" stroke-width="1.6" stroke-dasharray="1.5 6" stroke-linecap="round"/>
    </g>
    <g fill="#fff" stroke="#1B3A93" stroke-width="2"><circle cx="180" cy="118" r="5.5"/><circle cx="266" cy="242" r="5.5"/><circle cx="414" cy="242" r="5.5"/><circle cx="500" cy="52" r="5.5"/></g>
    <g data-flow></g>
  </svg>
  <div class="ds-legend">
    ${fig('Port', D('', '<circle r="5.5" fill="#fff" stroke="#1B3A93" stroke-width="2"/>'))}
    ${fig('Post packet', D('', POST))}
    ${fig('Click', D('', '<circle r="3.4" fill="#1B3A93"/>'))}
    ${fig('Matched coin', D('', COINSVG(true)))}
    ${fig('Unmatched coin', D('', COINSVG(false)))}
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--tube', 'Tube wall, 14px'), use('--canvas', 'Tube centre, 10px'), use('--blue', 'Dotted centre line, ports, clicks, post packet outline'), use('--white', 'Port and packet fill'), use('--packet-line', 'Text lines in the post packet'), use('--gold', 'Matched coin'), use('--ink', 'Matched coin edge and glyph'), use('--coin-off', 'Unmatched coin'), use('--coin-off-edge', 'Unmatched coin edge'), use('--coin-off-ink', 'Unmatched coin glyph')] },
      { title: 'Specs', rows: [spec('Tube', '14px wall, 10px bore', 'The bore is the canvas colour, so the tube looks hollow.'), spec('Centre line', '1.6px dotted', 'Dash 1.5 6, round caps.'), spec('Port', 'r 5.5', '2px `--blue` stroke. Pulses to r 7.9 on arrival.'), spec('Post packet', '26 × 14, r 5', 'Rotates to follow the curve, shrinks 35% on arrival.'), spec('Click', 'r 3.4', 'r 2.9 in the ambient stream.'), spec('Coin', 'r 8', '1.5px edge, $ in Archivo 900.'), spec('Curve', 'cubic, horizontal tangents', 'Handle length max(30, 55% of the span). Stacked layouts run top to bottom.'), spec('Layers', 'tube under boards, packets over', 'z-index 1 and 5.')] },
      { title: 'Motion', rows: [spec('Tubes draw', '.85 s and 1.75 s', '.4s each, then the dotted line fades in.'), spec('Post packet', '3.95 → 4.5 s', 'Calendar to agent.'), spec('Clicks', '14, from 5.3 s', '.07s apart, .55s on the tube.'), spec('Coins', '3 matched, 1 unmatched', 'From 5.35 s, .75s on the tube.'), spec('Ambient feed', 'after 7.5 s', 'Right tube: four clicks in flight, one every .4s. Left tube: three dots and a post packet every 4.2s.')] },
    ],
  });

  /* ------------------------------------------------------------ cursor */
  const cur = (style, rip = 1) => `<div class="ds-curwrap"><div class="cursor" style="${style}"><i class="rip" style="--rip:${rip}"></i>${ic('i-cursor', 'arrow')}<span class="tag"><img src="https://seenpaid.com/founder.jpg" alt="" width="22" height="22"><b>Justinas</b></span></div></div>`;
  S.push({
    id: 'cursor', group: 'Components', nav: 'Justinas cursor', title: 'Justinas cursor',
    desc: 'A Figma-style cursor with Justinas’s photo and name. It reschedules the post, reads the agent and clicks Results, then keeps wandering the boards so the page never goes still.',
    facts: [['Selectors', md('`.cursor` `.arrow` `.tag` `.rip`')], ['Size', '2.6 × 3em']],
    stage: `
<div class="ds-col">
  <div class="ds-play ds-clk" aria-hidden="true" data-play style="font-size:16px">
    <p class="ds-play-hint">Move your pointer here. Press to click.</p>
    <div class="cursor ds-play-cur" style="transform:translate(60px,40px)"><i class="rip" style="--rip:1"></i>${ic('i-cursor', 'arrow')}<span class="tag"><img src="https://seenpaid.com/founder.jpg" alt="" width="22" height="22"><b>Justinas</b></span></div>
  </div>
  <div class="ds-row ds-clk" aria-hidden="true" style="font-size:min(14px,calc((100cqw - 72px)/35));flex-wrap:nowrap;gap:8px">
    ${fig('Idle', cur(''))}
    ${fig('Pressed', cur('transform:scale(.88)'))}
    ${fig('Click ripple', cur('', 0.45))}
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--blue', 'Arrow fill, tag fill, ripple'), use('--white', 'Arrow outline, tag text, avatar border')] },
      { title: 'Type', rows: [use('--type-tag')] },
      { title: 'Shape and elevation', rows: [use('--radius-pill', 'Tag'), use('--radius-round', 'Avatar and ripple'), use('--shadow-tag'), use('--shadow-arrow')] },
      { title: 'Specs', rows: [spec('Arrow', '2.6em × 3em', 'Hot spot .32em, .27em from the top left.'), spec('Tag', 'left 1.15em, top 1.6em', 'Padding .23em .85em .23em .23em, gap .55em.'), spec('Avatar', '1.7em', 'Border .11em `--white`.'), spec('Name', '500', 'Not bold: `<b>` is reset to 500.'), spec('Ripple', '3em ring, .2em', 'Scales .3 → 1.7 and fades.'), spec('Press', 'scale .88', 'On click.'), spec('Stacking', 'z-index 20')] },
      { title: 'Behaviour', rows: [spec('Intro', 'scripted path', 'Appears 2.3 s: grabs the post, drops it, reads the agent, clicks Results at 5.9 s.'), spec('After 7.5 s', 'seeded random walk', '62% of moves change board; 30% end in a click; rows highlight underneath.'), spec('Board ring', 'follows it', 'The board under the cursor gets the selection ring.'), spec('Phones', 'hidden')] },
    ],
  });

  /* ------------------------------------------------------------ chip */
  const chipState = (lift, g, morph, drop, label, cx = 0, cy = 0) => fig(label, `<div class="ds-chipcell ds-clk" style="font-size:15px;--e:1;--lift:${lift};--g:${g};--morph:${morph};--dropv:${drop};--cx:${cx}px;--cy:${cy}px"><div class="drop"></div><div class="ev focal" style="--cx:${cx}px;--cy:${cy}px"><div class="r1"><span class="tm"><span class="t0">09:00</span><span class="t1">11:00</span></span></div><div class="ms">${MK.map(i => ic(i, 'mk')).join('')}</div><div class="cp">My launch checklist is now a template. $49.</div></div></div>`);
  S.push({
    hide: true, id: 'chip', group: 'Components', nav: 'Dragged post chip', title: 'Dragged post chip',
    desc: 'The one calendar event the cursor picks up. It lifts, floats over a dashed drop zone, lands in its new slot and turns green once the post has published.',
    facts: [['Selectors', md('`.ev.focal` `.drop`')], ['Move', 'Tue 09:00 to Thu 11:00']],
    stage: `
<div class="ds-row ds-chips">
  ${chipState(0, 0, 0, 0, 'Resting, Tue 09:00')}
  ${chipState(1, 0, 0, 1, 'Lifted, over the drop zone', 14, -8)}
  ${chipState(0, 1, 1, 0, 'Dropped and published, Thu 11:00')}
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--blue-wash', 'Fill while scheduled'), use('--blue-rail', 'Rail while scheduled, drop-zone outline'), use('--blue-ink', 'Time while scheduled'), use('--green-wash', 'Fill once published'), use('--green-rail', 'Rail once published'), use('--green', 'Time once published'), use('--wash-drop', 'Drop-zone fill'), use('--ink', 'Caption')] },
      { title: 'Shape and elevation', rows: [use('--radius-card'), use('--radius-drop', 'Drop zone'), use('--shadow-event-rest'), use('--shadow-event-lift')] },
      { title: 'States', rows: [spec('Resting', '`--lift` 0, `--g` 0', 'Scale .94 → 1 as it appears.'), spec('Lifted', '`--lift` 1', 'Scale 1.05, shadow deepens; the drop zone appears under the destination.'), spec('Dropped', '`--morph` 1', 'Time cross-fades 09:00 to 11:00; the chip moves to Thu.'), spec('Published', '`--g` 1', 'Fill, rail and time blend from blue to green with `color-mix`.')] },
      { title: 'Specs', rows: [spec('Drop zone', '6.2em tall', 'Dashed .15em, inset .5em from the cell.'), spec('Stacking', 'z-index 5', 'Above the other events.'), spec('Timeline', 'lift 3.0 s, drop 3.8 s, publish 5.25 s', 'The cursor drives it.')] },
    ],
  });

  /* ------------------------------------------------------------ skeleton */
  S.push({
    hide: true, id: 'skeleton', group: 'Components', nav: 'Skeleton loaders', title: 'Skeleton loaders',
    desc: 'While the copy reveals, each board shows a hand-placed skeleton of its own layout. A soft sweep crosses the blocks until the board’s turn, then the real content fades in over them.',
    facts: [['Selectors', md('`.sk` `.sk i`')], ['Blocks', `${meta.sk.cal} · ${meta.sk.agent} · ${meta.sk.res}`]],
    replay: '#sk-clk',
    stage: `
<div class="ds-skgrid ds-clk anim" id="sk-clk" data-from="-1" data-to="2.6" data-end="2.6" style="--t:-0.8">
  <div class="ds-sk-a ds-u-sk" style="font-size:var(--u-sk)">${P.cal}</div>
  <div class="ds-sk-b ds-u-sk" style="font-size:var(--u-sk)">${P.agent}</div>
  <div class="ds-sk-c ds-u-sk" style="font-size:var(--u-sk)">${P.res}</div>
  <div class="ds-sk-d"><div class="ds-u-sk" style="font-size:calc(var(--u-sk)*1.9)"><div class="board pl" style="width:15em;height:6em;opacity:1;transform:none"><div class="sk" style="display:block;opacity:1"><i style="--x:1;--y:1;--w:6;--h:1.2"></i><i style="--x:8;--y:1;--w:4.5;--h:1.2"></i><i style="--x:1;--y:3.2;--w:13;--h:1.8;--r:.9em"></i></div></div></div><p class="ds-lab">One block: <code>--x</code> <code>--y</code> <code>--w</code> <code>--h</code> in em, optional <code>--r</code></p></div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--skeleton', 'Block fill'), spec('Sweep', 'white at 80%', '`linear-gradient(100deg, transparent 15%, rgba(255,255,255,.8) 50%, transparent 85%)`.')] },
      { title: 'Shape', rows: [use('--radius-block', 'Default block'), use('--radius-card', 'Tall blocks'), use('--radius-well', 'Post and ledger blocks'), use('--radius-pill', 'Chip blocks'), use('--radius-round', 'Dots')] },
      { title: 'Motion', rows: [use('--dur-shimmer'), spec('Sweep', 'translateX −100% → 100%', 'Ease-in-out, infinite, only while a board is still loading.'), spec('Hand-off', 'skeleton out, content in', 'The skeleton (`--Ls`) fades out over the first half of the board’s turn while the content (`--Lc`) fades in from 30%. `.loaded` then stops the sweep.'), spec('Reduced motion', 'not shown', 'The hero shows the finished frame.')] },
      { title: 'Specs', rows: [spec('Layer', 'z-index 2', 'Covers the board, no pointer events.'), spec('Placement', 'em, hand-placed', 'Each block is `--x --y --w --h` in board units; change a board and its skeleton must change too.'), spec('Calendar', `${meta.sk.cal} blocks`), spec('AI agent', `${meta.sk.agent} blocks`), spec('Results', `${meta.sk.res} blocks`), spec('Phone', 'one block', 'Results shows a single shimmering panel inset 2.2em.')] },
    ],
  });

  /* ------------------------------------------------------------ controls */
  const pp = (paused, extra = '', dis = '') => `<button class="pp ${extra}" type="button"${dis}>${ic(paused ? 'i-play' : 'i-pause')}<span>${paused ? 'Play' : 'Pause'}</span></button>`;
  const rp = (extra = '') => `<button class="rp ${extra}" type="button">${ic('i-replay')}<span>Replay</span></button>`;
  S.push({
    id: 'controls', group: 'Components', nav: 'Pause and replay', title: 'Pause and replay',
    desc: 'Two small pill buttons beside a caption. Because the motion never stops, the user can pause it or replay the intro. They appear once the copy has loaded and are absent when motion is reduced.',
    facts: [['Selectors', md('`.cap` `.ctl` `.pp` `.rp`')], ['Caption', 'Sample data. Illustrative figures, not customer results.']],
    stage: `
<div class="ds-col">
  <div class="ds-clk ds-capw"><div class="cap" style="--e:1"><div class="ctl" data-demo>${pp(false)}${rp()}</div><p>Sample data. Illustrative figures, not customer results.</p></div></div>
  <div class="ds-grid3">
    ${fig('Pause', `<div class="ctl">${pp(false)}</div>`)}${fig('Hover', `<div class="ctl">${pp(false, 'ds-hover')}</div>`)}${fig('Focus', `<div class="ctl">${pp(false, 'ds-focus')}</div>`)}
    ${fig('Play, when paused', `<div class="ctl">${pp(true)}</div>`)}${fig('Replay', `<div class="ctl">${rp()}</div>`)}${fig('Disabled, on phones', `<div class="ctl">${pp(false, '', ' disabled')}</div>`)}
  </div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--card', 'Fill'), use('--line', 'Border, 1px'), use('--line-hover', 'Border on hover'), use('--ink', 'Label and icon'), use('--ink3', 'Caption text')] },
      { title: 'Type', rows: [use('--type-control'), use('--type-caption')] },
      { title: 'Shape', rows: [use('--radius-pill'), use('--focus-ring')] },
      { title: 'Specs', rows: [spec('Height', '38px'), spec('Padding', '0 15px 0 12px', 'Gap 8px, icon 15px.'), spec('Group gap', '8px'), spec('Disabled', 'opacity .45', 'Default cursor.'), spec('Caption', 'max 22em', 'Left-aligned; centred on stacked layouts.'), spec('Placement', 'under Results, 16px', 'Row 2, right column on wide screens.')] },
      { title: 'Behaviour', rows: [spec('Appears', 'after the copy', 'From t −0.05 s; hidden under reduced motion.'), spec('Pause / Play', 'toggles the clock', 'Label and icon swap.'), spec('Replay', 'restarts the intro', 'Returns to the loading state and keeps the copy visible.'), spec('Phones', 'Play is disabled', 'After the intro the page holds still.')] },
    ],
  });

  /* ------------------------------------------------------------ cue */
  const cueAt = (t, label) => fig(label, `<div class="ds-device ds-m720 ds-m480 ds-clk" style="--w:390px;--t:${t}">${P.cue}</div>`);
  S.push({
    hide: true, id: 'cue', group: 'Components', nav: 'Mobile cue', title: 'Mobile cue',
    desc: 'On phones only Results remains, so a four-step progress cue stands in for the Calendar and the agent: scheduled, published, tracked click, payment matched.',
    facts: [['Selector', md('`.cue`')], ['Shows', 'Under 720px']],
    replay: '#cue-clk',
    stage: `
<div class="ds-col ds-cues">
  ${fig('Live', `<div class="ds-device ds-m720 ds-m480 ds-clk" id="cue-clk" data-from="0" data-to="7.6" data-end="7.5" style="--w:390px">${P.cue}</div>`)}
  <div class="ds-row">${cueAt(1.9, 'Scheduled, 1.9 s')}${cueAt(5.9, 'Tracked click, 5.9 s')}</div>
</div>`,
    groups: [
      { title: 'Colour', rows: [use('--line', 'Track, 3px'), use('--blue', 'Progress fill'), use('--ink2', 'Label')] },
      { title: 'Type', rows: [use('--type-control', 'Labels; line height 1.25')] },
      { title: 'Motion', rows: [spec('Fill', 'grows left to right', 'Width 0 → 100% over .4s.'), spec('Label', 'opacity .5 → 1', 'In step with the fill.'), spec('Starts', '1.45 · 5.25 · 5.8 · 6.1 s', 'Scheduled, Published, Tracked click, Payment matched.'), spec('Phones', 'the clock skips ahead', 'Calendar and agent beats are jumped over.')] },
      { title: 'Specs', rows: [spec('Grid', '4 equal columns', 'Gap 6px, margin-bottom 14px.'), spec('Max width', '520px', 'Full width below.'), spec('Step', 'padding-top 9px', 'Border-top 3px.'), spec('Role', 'decorative', '`aria-hidden`; the illustration has a text alternative.')] },
    ],
  });

  return S;
}
