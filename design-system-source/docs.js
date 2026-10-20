(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x)), seg = (t, a, b) => clamp((t - a) / (b - a)), eo = x => 1 - (1 - x) ** 3;
  const num = (el, p) => parseFloat(getComputedStyle(el).getPropertyValue(p));

  /* ---------- rail: which screen is current ---------- */
  const links = $$('.ds-ng a'), byId = new Map(links.map(a => [a.hash.slice(1), a]));
  const setCur = id => {
    const a = byId.get(id); if (!a || a.hasAttribute('aria-current')) return;
    links.forEach(l => l.removeAttribute('aria-current')); a.setAttribute('aria-current', 'location');
    a.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  };
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setCur(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
  $$('.ds-sec').forEach(s => spy.observe(s));
  setCur((location.hash || '#overview').slice(1));

  /* ---------- scale things that are drawn at a fixed size ---------- */
  const fitGeneric = () => $$('.ds-fit').forEach(f => {
    const inner = f.firstElementChild, k = Math.min(1, f.clientWidth / num(f, '--w'));
    inner.style.transform = k < 1 ? `scale(${k.toFixed(4)})` : ''; f.style.height = inner.offsetHeight * k + 'px';
  });
  const fitFrames = () => $$('.ds-fitbox').forEach(box => {
    const w = num(box, '--w'), h = num(box, '--h'), avail = box.clientWidth; let k = Math.min(1, avail / w);
    const stage = box.closest('.ds-stage');
    if (stage && box.dataset.fitFrame !== undefined) {   // also keep the frame inside the stage's height
      const gap = 14, others = [...box.parentElement.children].filter(c => c !== box).reduce((s, c) => s + c.offsetHeight + gap, 0);
      const room = stage.clientHeight - 56 - others; if (room > 160) k = Math.min(k, room / h);
    }
    box.style.setProperty('--k', k.toFixed(4)); box.style.setProperty('--ox', Math.max(0, (avail - w * k) / 2).toFixed(1) + 'px');
  });
  const refit = () => { fitGeneric(); fitFrames(); };
  const ro = new ResizeObserver(refit); $$('.ds-stage').forEach(s => ro.observe(s));
  addEventListener('load', refit); refit();

  /* ---------- replay: run the real CSS clock on one specimen ---------- */
  const rafs = new WeakMap();
  const DOTS = 14, DOT0 = 5.3, DOTGAP = .07, DOTD = .55, COIN = [5.35, 5.67, 5.99, 6.25], COIND = .75, ARRIVE = COIN.map(e => e + COIND);
  const counters = (res, t) => {   // same formulas as the hero
    let n = 0; for (let k = 0; k < DOTS; k++) if (t >= DOT0 + DOTD + DOTGAP * k) n++;
    const m = ARRIVE.slice(0, 3).reduce((a, s) => a + eo(seg(t, s, s + .25)), 0), c = Math.round(m);
    $('[data-clicks]', res).textContent = Math.round(318 * n / DOTS);
    $('[data-rev]', res).textContent = '$' + (49 * m).toFixed(2);
    $('[data-sales]', res).textContent = c + (c === 1 ? ' matched sale' : ' matched sales');
  };
  const paint = (el, t) => {
    el.style.setProperty('--t', t.toFixed(3));
    $$('.board', el).forEach(b => { const s2 = parseFloat(b.style.getPropertyValue('--s2')), d2 = parseFloat(b.style.getPropertyValue('--d2')); if (!isNaN(s2)) b.classList.toggle('loaded', t >= s2 + d2); });
    const res = $('.res', el); if (res) counters(res, t);
  };
  const play = el => {
    cancelAnimationFrame(rafs.get(el) || 0);
    const from = +el.dataset.from, to = +el.dataset.to, end = +(el.dataset.end ?? to);
    if (reduce) return paint(el, end);
    const t0 = performance.now();
    const step = now => { const t = from + (now - t0) / 1000; if (t >= to) return paint(el, end); paint(el, t); rafs.set(el, requestAnimationFrame(step)); };
    step(t0);
  };
  const tween = (el, to, ms = 700) => {
    cancelAnimationFrame(rafs.get(el) || 0);
    const from = parseFloat(el.style.getPropertyValue('--t')); if (reduce || isNaN(from)) return paint(el, to);
    const t0 = performance.now();
    const step = now => { const p = clamp((now - t0) / ms); paint(el, from + (to - from) * eo(p)); if (p < 1) rafs.set(el, requestAnimationFrame(step)); };
    step(t0);
  };
  $$('[data-replay]').forEach(b => b.addEventListener('click', () => { const el = $(b.dataset.replay); if (el) play(el); }));
  $$('[data-seg]').forEach(g => g.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('button', g).forEach(x => x.setAttribute('aria-pressed', x === b)); tween($(g.dataset.seg), +b.dataset.t);
  }));
  $$('[data-masks]').forEach(i => i.addEventListener('change', () => i.closest('.ds-stage').classList.toggle('ds-masks', i.checked)));

  /* ---------- overview: outlines placed from the live hero's own layout ---------- */
  const frameDoc = fr => { try { return fr.contentDocument; } catch (e) { return null; } };
  const placeHots = box => {
    const fr = $('iframe', box), doc = frameDoc(fr); if (!doc) return;
    const hero = $('.hero-in', doc); if (!hero) return;
    const prev = hero.style.getPropertyValue('--t'), chip = $('.ev.focal', doc), cx = chip && chip.style.getPropertyValue('--cx'), cy = chip && chip.style.getPropertyValue('--cy');
    hero.style.setProperty('--t', '7.5'); if (chip) { chip.style.setProperty('--cx', '0px'); chip.style.setProperty('--cy', '0px'); }
    $$('.ds-hot', box).forEach(a => {
      const el = $(a.dataset.sel, doc); if (!el) return;
      const r = el.getBoundingClientRect(), pad = el.ownerSVGElement ? 10 : 0;
      a.style.setProperty('--l', r.left - pad + 'px'); a.style.setProperty('--tp', r.top - pad + 'px'); a.style.setProperty('--wd', r.width + pad * 2 + 'px'); a.style.setProperty('--ht', r.height + pad * 2 + 'px');
      a.dataset.ready = ''; a.classList.toggle('ds-hot--r', r.left + 150 > num(box, '--w'));
    });
    if (prev) hero.style.setProperty('--t', prev); else hero.style.removeProperty('--t');
    if (chip) { cx ? chip.style.setProperty('--cx', cx) : chip.style.removeProperty('--cx'); cy ? chip.style.setProperty('--cy', cy) : chip.style.removeProperty('--cy'); }
  };
  const ov = $('.ds-ov');
  if (ov) {
    const box = $('.ds-fitbox', ov), fr = $('iframe', box);
    const go = () => { placeHots(box); setTimeout(() => placeHots(box), 900); };
    fr.addEventListener('load', go); if (frameDoc(fr) && frameDoc(fr).readyState === 'complete') go();
    $('[data-outline]', ov).addEventListener('change', e => ov.classList.toggle('is-outlined', e.target.checked));
  }

  /* ---------- layout: drag the width of the live hero ---------- */
  const lay = $('.ds-lay');
  if (lay) {
    const box = $('.ds-fitbox', lay), fr = $('iframe', box), rng = $('#ds-w'), out = $('#ds-wout'), rd = k => $(`[data-r="${k}"]`, lay);
    const read = () => {
      const d = frameDoc(fr), win = fr.contentWindow; if (!d || !win) return;
      const w = +rng.value, hero = $('.hero-in', d), res = $('.res', d), copy = $('.copy', d); if (!hero || !res) return;
      rd('mode').textContent = w >= 1280 ? 'Three columns' : w >= 720 ? 'Stacked' : 'Phone, Results only';
      rd('unit').textContent = parseFloat(win.getComputedStyle(res).fontSize).toFixed(2) + ' px';
      rd('tw').textContent = Math.round(copy.getBoundingClientRect().width) + ' px';
      rd('pad').textContent = parseFloat(win.getComputedStyle(hero).paddingLeft).toFixed(1) + ' px';
      rd('gap').textContent = w >= 1280 ? parseFloat(win.getComputedStyle(hero).columnGap).toFixed(1) + ' px' : 'n/a';
    };
    const apply = () => {
      const w = +rng.value; out.textContent = w + ' px';
      box.style.setProperty('--w', w + 'px'); box.style.setProperty('--h', (w < 720 ? 780 : 900) + 'px');
      refit(); requestAnimationFrame(() => requestAnimationFrame(read));
    };
    rng.addEventListener('input', apply); fr.addEventListener('load', () => { apply(); setTimeout(read, 700); });
  }

  /* ---------- motion: scrub the live hero and follow its clock ---------- */
  const mo = $('.ds-mo');
  if (mo) {
    const fr = $('iframe', mo), rng = $('[data-scrub]', mo), out = $('[data-tout]', mo), ph = $('[data-ph]', mo), rp = $('[data-hero-rp]', mo);
    const X = t => ((t + 2) / 11.5 * 100).toFixed(2) + '%', hero = () => { const d = frameDoc(fr); return d && $('.hero-in', d); };
    let drag = false, onscreen = false;
    const show = t => { out.textContent = t > 7.5 ? 'live' : t.toFixed(2) + ' s'; ph.style.setProperty('--x', X(t > 7.5 ? 7.5 + ((t - 7.5) % 2) : t)); };
    rng.addEventListener('input', () => { drag = true; const h = hero(); if (h && h.seek) h.seek(+rng.value); show(+rng.value); });   // seek() pauses the hero on that frame
    ['change', 'pointerup', 'blur'].forEach(ev => rng.addEventListener(ev, () => { drag = false; }));
    rp.addEventListener('click', () => { drag = false; const d = frameDoc(fr), b = d && $('.rp', d); if (b) b.click(); });
    const tick = () => {
      if (!onscreen) return;
      const h = hero();
      if (h && !drag) { const t = parseFloat(h.style.getPropertyValue('--t')); if (!isNaN(t)) { rng.value = Math.min(7.5, t); show(t); } }
      requestAnimationFrame(tick);
    };
    new IntersectionObserver(([e]) => { onscreen = e.isIntersecting; if (onscreen) requestAnimationFrame(tick); }).observe(mo);
  }

  /* ---------- pipeline: a small live loop on the diagram ---------- */
  const pipe = $('[data-pipe]');
  if (pipe) {
    const NS = 'http://www.w3.org/2000/svg', flow = $('[data-flow]', pipe), L = $('.seg-l', pipe), R = $('.seg-r', pipe), lenL = L.getTotalLength(), lenR = R.getTotalLength();
    const mk = (tag, a, p = flow) => { const n = document.createElementNS(NS, tag); for (const k in a) n.setAttribute(k, a[k]); p.appendChild(n); return n; };
    const BLUE = '#1B3A93', dotsR = Array.from({ length: 4 }, () => mk('circle', { r: 2.9, fill: BLUE })), dotsL = Array.from({ length: 3 }, () => mk('circle', { r: 2.9, fill: BLUE }));
    const post = mk('g'); mk('rect', { x: -13, y: -7, width: 26, height: 14, rx: 5, fill: '#fff', stroke: BLUE, 'stroke-width': 1.8 }, post); mk('path', { d: 'M-7 -2H6M-7 2.5H1', stroke: '#8D9AC2', 'stroke-width': 1.6, 'stroke-linecap': 'round' }, post);
    const coin = on => { const g = mk('g'); mk('circle', { r: 8, fill: on ? '#F5B323' : '#C5CCDA', stroke: on ? '#0B1020' : '#8A93A6', 'stroke-width': 1.5 }, g); const t = mk('text', { y: 3.6, 'text-anchor': 'middle', 'font-size': 10.5, 'font-weight': 900, fill: on ? '#0B1020' : '#7B8499', 'font-family': 'Archivo,Arial,sans-serif' }, g); t.textContent = '$'; return g; };
    const gold = coin(true), grey = coin(false);
    const at = (p, len, f) => p.getPointAtLength(len * f), sm = x => x * x * (3 - 2 * x);
    const ambient = (list, p, len, gap, D, t) => list.forEach((d, j) => { const t0 = j * gap, f = t >= t0 ? ((t - t0) % (list.length * gap)) / D : -1; if (f >= 0 && f < 1) { const a = at(p, len, f); d.setAttribute('cx', a.x); d.setAttribute('cy', a.y); d.setAttribute('opacity', .85 * Math.min(1, f * 8, (1 - f) * 8)); } else d.setAttribute('opacity', 0); });
    const put = (g, p, len, f) => { if (f > 0 && f < 1) { const a = at(p, len, f); g.setAttribute('transform', `translate(${a.x},${a.y})`); g.setAttribute('opacity', Math.min(1, f * 8, (1 - f) * 8)); } else g.setAttribute('opacity', 0); };
    const frame = t => {
      ambient(dotsR, R, lenR, .4, .95, t); ambient(dotsL, L, lenL, .85, 1.15, t);
      const q = (t % 4.2) / .95; if (q < 1) { const a = at(L, lenL, sm(q)), b = at(L, lenL, Math.min(1, sm(q) + .01)); post.setAttribute('transform', `translate(${a.x},${a.y}) rotate(${Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI}) scale(${1 - .35 * seg(q, .85, 1)})`); post.setAttribute('opacity', Math.min(1, q * 8)); } else post.setAttribute('opacity', 0);
      put(gold, R, lenR, (t % 3.2) / .75); put(grey, R, lenR, ((t + 1.6) % 3.2) / .75);
    };
    let on = false, t0 = 0;
    const loop = now => { if (!on) return; frame((now - t0) / 1000 + 1); requestAnimationFrame(loop); };
    if (reduce) { frame(1.9); put(gold, R, lenR, .55); put(grey, R, lenR, .2); } else {
      new IntersectionObserver(([e]) => { on = e.isIntersecting; if (on) { t0 = performance.now(); requestAnimationFrame(loop); } }).observe(pipe);
      frame(1.9);
    }
  }

  /* ---------- cursor: it follows the pointer ---------- */
  const pg = $('[data-play]');
  if (pg) {
    const cur = $('.ds-play-cur', pg), rip = $('.rip', cur), em = parseFloat(getComputedStyle(pg).fontSize), tip = { x: .32 * em, y: .27 * em };
    let x = 60, y = 70, down = false;
    const draw = () => { cur.style.transform = `translate(${x - tip.x}px,${y - tip.y}px) scale(${down ? .88 : 1})`; };
    pg.addEventListener('pointermove', e => { const r = pg.getBoundingClientRect(); x = e.clientX - r.left; y = e.clientY - r.top; draw(); });
    pg.addEventListener('pointerdown', e => {
      down = true; draw(); if (reduce) return;
      const t0 = performance.now(), step = now => { const p = clamp((now - t0) / 600); rip.style.setProperty('--rip', p); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step);
    });
    const up = () => { down = false; draw(); }; pg.addEventListener('pointerup', up); pg.addEventListener('pointercancel', up); pg.addEventListener('pointerleave', up);
    draw();
  }

  /* ---------- controls: Pause and Play swap their label ---------- */
  $$('.ctl[data-demo] .pp').forEach(b => b.addEventListener('click', () => {
    const paused = b.querySelector('span').textContent === 'Pause';
    b.querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause'); b.querySelector('span').textContent = paused ? 'Play' : 'Pause';
  }));
})();
