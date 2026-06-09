# Mir[AI]ge — website

Static marketing landing page + a mission-control mockup. No build step: plain HTML,
the MIR[AI]GE design tokens (`colors_and_type.css` + `fonts/`), and React loaded from a CDN
with Babel transpiling the `.jsx` files in the browser.

```
website/
├── index.html          # root entry → redirects to the landing
├── colors_and_type.css # design tokens + @font-face
├── fonts/              # self-hosted woff2 (Rajdhani, Syncopate, …)
├── assets/             # logo, topology, architecture diagrams, imagery
└── ui_kits/
    ├── landing/        # public landing page  →  /
    └── mission_control/# operator console mockup  →  /console
```

## Preview locally

```bash
make site          # from repo root → http://localhost:8000
# or:
cd website && python3 -m http.server 8000
```

## Deploy

It's a fully static site — deploy `website/` to any static host.

- **Vercel / Netlify**: point the project root at `website/`. `vercel.json` already maps
  `/` → the landing and `/console` → the mission-control mockup.
- **GitHub Pages / S3 / nginx**: serve the directory as-is.

> Loaded from CDN: React 18 + Babel standalone (for in-browser JSX). For a production build
> you may want to pre-transpile the JSX and pin/self-host those scripts.
