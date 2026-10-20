# Design system page generator

Builds `../designsystem.html` from the hero (`../index.html`).
Tooling only; nothing here is needed to view the site.

    node build.mjs

- `extract.mjs` reads the hero's CSS, icon symbols and each component's markup, so specimens are the real thing.
- `tokens.mjs`, `tokens-type.mjs` hold every token (variables and proposed names for literals) and the contrast maths.
- `sec-found.mjs`, `sec-comp.mjs` hold the content of each screen. `docs.css`, `docs.js` are the page chrome and behaviour.
- After changing the hero, run `node build.mjs`, check the page, then commit and push `designsystem.html`.
