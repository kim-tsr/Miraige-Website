# Mir[AI]ge — website

Static marketing landing page + a mission-control mockup for [Mir[AI]ge](https://github.com/kim-tsr).
No build step: plain HTML, the MIR[AI]GE design tokens (`colors_and_type.css` + `fonts/`),
and React loaded from a CDN with Babel transpiling the `.jsx` files in the browser.

```
.
├── index.html            # the landing page          →  /
├── *.jsx                 # landing components (Hero, SpecSheet, …)
├── colors_and_type.css   # design tokens + @font-face
├── fonts/                # self-hosted woff2 (Rajdhani, Syncopate, …)
├── assets/               # logo, topology, architecture diagrams, imagery
├── console/              # operator console mockup     →  /console
│   ├── index.html
│   └── *.jsx
└── vercel.json
```

## Preview locally

```bash
python3 -m http.server 8000
# landing  → http://localhost:8000/
# console  → http://localhost:8000/console/
```

## Deploy to Vercel

It's a fully static site — **no framework, no build step, no Next.js required.**

1. Import this repo on [vercel.com/new](https://vercel.com/new).
2. **Framework Preset: "Other"** · leave Build Command and Output Directory **empty**
   (the repo root *is* the site).
3. Deploy. `/` serves the landing, `/console` serves the mission-control mockup.

Works the same on Netlify, GitHub Pages, S3, or any static host — serve the directory as-is.

> Loaded from CDN: React 18 + Babel standalone (for in-browser JSX). It works as-is; for a
> faster production build you can pre-transpile the JSX and pin/self-host those scripts.
