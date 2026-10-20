# Seenpaid hero

Static site, no build step. Deployed on Vercel from `main`.

| Path | File | What it is |
|---|---|---|
| `/` | `index.html` | The hero section (v4), one self-contained file. |
| `/designsystem` | `designsystem.html` | The hero's design system: foundations, primitives and every component, with tokens. |

`vercel.json` sets `cleanUrls`, so `designsystem.html` is served at `/designsystem`.

`designsystem.html` embeds a copy of the hero's stylesheet (between the `BEGIN hero CSS` and `END hero CSS` comments) so its specimens are the real components. When `index.html` changes, re-copy that block.
