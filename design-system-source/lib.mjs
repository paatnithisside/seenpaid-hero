export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// text with `code` spans
export const md = s => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');

const DOT = { var: 'Variable in the hero’s :root', lit: 'Literal in the hero CSS (name proposed)' };

export function row(r) {
  const long = String(r.value).length > 30 ? ' ds-r--long' : '';
  const note = r.role ? `<dd class="ds-n">${md(r.role)}</dd>` : '';
  if (r.legend) return `<div class="ds-r ds-r--spec ds-r--nov"><dt><span class="ds-dot ds-dot--${r.legend}"></span>${esc(r.name)}</dt>${note}</div>`;
  if (r.value === '') return `<div class="ds-r ds-r--spec ds-r--nov"><dt>${md(r.name)}</dt>${note}</div>`;
  if (r.token) {
    const sw = r.sw ? `<i class="ds-sw" style="--c:${r.value}"></i>` : '';
    return `<div class="ds-r${long}"><dt>${sw}<span class="ds-dot ds-dot--${r.kind}" title="${DOT[r.kind]}"></span><code>${esc(r.name)}</code></dt><dd class="ds-v">${esc(r.value)}</dd>${note}</div>`;
  }
  return `<div class="ds-r ds-r--spec${long}"><dt>${md(r.name)}</dt><dd class="ds-v">${md(r.value)}</dd>${note}</div>`;
}
export const group = g => `<section class="ds-tg"><h3>${esc(g.title)}</h3>${g.lead ? `<p class="ds-tg-lead">${md(g.lead)}</p>` : ''}<dl>${g.rows.map(row).join('')}</dl></section>`;

// a labelled specimen
export const fig = (label, inner, cls = '') => `<figure class="ds-fig ${cls}">${inner}<figcaption class="ds-lab">${esc(label)}</figcaption></figure>`;

export function sectionHTML(s, nav) {
  const facts = (s.facts || []).map(f => `<div><dt>${esc(f[0])}</dt><dd>${f[1]}</dd></div>`).join('');
  const replay = s.replay
    ? `<div class="ds-replay"><div class="ctl"><button type="button" data-replay="${s.replay}"><svg aria-hidden="true"><use href="#i-replay"/></svg><span>Replay</span></button></div></div>`
    : '';
  return `
<section class="ds-sec" id="${s.id}" aria-labelledby="${s.id}-h">
  <div class="ds-stagewrap">
    ${replay}
    <div class="ds-stage${s.stageClass ? ' ' + s.stageClass : ''}${s.replay ? ' ds-stage--r' : ''}"${s.hide ? ' aria-hidden="true"' : ''}>
      ${s.stage}
    </div>
  </div>
  <header class="ds-head">
    <h2 id="${s.id}-h">${esc(s.title)}</h2>
    <p class="ds-lead">${md(s.desc)}</p>
    ${facts ? `<dl class="ds-facts">${facts}</dl>` : ''}
  </header>
  <div class="ds-body" tabindex="0" role="region" aria-label="${esc(s.title)} tokens and specs">
    ${s.groups.map(group).join('')}
  </div>
</section>`;
}

export function railHTML(sections) {
  const order = ['Start', 'Foundations', 'Primitives', 'Components'];
  return order.map(g => {
    const items = sections.filter(s => s.group === g);
    if (!items.length) return '';
    return `<div class="ds-ng"><h2>${g}</h2><ul>${items.map(s => `<li><a href="#${s.id}">${esc(s.nav || s.title)}</a></li>`).join('')}</ul></div>`;
  }).join('');
}
