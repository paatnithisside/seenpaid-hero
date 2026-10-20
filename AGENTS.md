# Working on the Seenpaid design (guide for AI agents)

This repo holds the redesigned Seenpaid landing-page hero and the design system behind it. Use it as the reference when redesigning the rest of the Seenpaid site or app so everything feels like one product.

## Read in this order
1. `docs/seenpaid_landing_page_copy_visual_brief.md`: the copy and visual brief for the whole landing page. Part II section 5 lists the sections still to design after the hero.
2. `docs/Seenpaid-landing-page-conversion-review.pdf`: the conversion review of the live page, and the reasons behind the brief.
3. `designsystem.html` (live at `/designsystem`): colours, type, layout, shape, motion, icons, pills and every hero component, each with its tokens. Open it in a browser; it is the spec.
4. `index.html` (live at `/`): the finished hero. It is the source of truth for every value.

## Design rules (keep them on every new section)
- Flat `--canvas` background. No dot patterns, gradients or textures behind compositions.
- One accent: deep navy `--blue`. Green only for verified states (published, matched). Gold only for the coin.
- All surfaces use the light theme, including data panels.
- Archivo, variable. Headline in weight 800 at width 84%. Figures tabular.
- Pills for small interactive things; boards use a 1.4em radius and soft shadows, never hard outlines.
- Copy loads first; UI that depends on data shows a skeleton, then resolves one piece at a time. Motion is calm, ease-out, and respects `prefers-reduced-motion` (show the finished frame).
- Figures shown in visuals are sample data and labelled as such. Do not promise revenue growth. Check security and integration claims with the product owner before publishing.
- Do not use an open-source UI kit or component library (shadcn, MUI, Chakra, Bootstrap and similar). Build from plain HTML, CSS and a little JS, as this repo does. Tailwind, icon sets and animation libraries are fine.

## How the code works
- Each page is a single self-contained HTML file, no build step.
- The hero runs on one clock: the script sets `--t` (seconds) on `.hero-in` and the CSS derives every state from it with `calc()`. `document.querySelector('.hero-in').seek(t)` shows any frame.
- Only 19 values are real CSS variables (`:root` in `index.html`). The design system page names the other values as proposed tokens (`--gold`, `--radius-pill`, `--shadow-board`, ...). Promote them to variables when you build new pages.

## Keeping the design system page in sync
`designsystem.html` is generated from `index.html` by `design-system-source/`. After changing the hero or the tokens:

    node design-system-source/build.mjs

Then open `designsystem.html` and check it before committing.

## Deploy
Static site on Vercel, deployed from `main`. `vercel.json` enables clean URLs (`/designsystem`). No build command.
