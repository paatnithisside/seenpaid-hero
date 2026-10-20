# Seenpaid hero and design system

Static site, no build step, deployed on Vercel from `main`.

| Path | File | What it is |
|---|---|---|
| `/` | `index.html` | The hero section (v4), one self-contained file. |
| `/designsystem` | `designsystem.html` | The hero's design system: foundations, primitives and every component, with tokens. |

Also here:
- `docs/` has the copy and visual brief and the conversion review that the design came from.
- `AGENTS.md` tells an AI agent how to continue the redesign in the same style.
- `design-system-source/` generates `designsystem.html` from `index.html` (`node design-system-source/build.mjs`).

`vercel.json` sets `cleanUrls`, so `designsystem.html` is served at `/designsystem`.
