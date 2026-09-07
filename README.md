# siviez.com

A local travel guide to **Siviez**, a small alpine village at 1730 m in Valais,
Switzerland — the quiet gateway to the **4 Vallées** ski area. The site also
presents **Rosablanche C34**, a ski-in/ski-out apartment for 7.

Live at **[siviez.com](https://siviez.com)** · Part of
[PUPVANH Projects](https://pupvanh.vercel.app).

---

## Tech stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | [Astro](https://astro.build/) (static site)        |
| Hosting      | [Vercel](https://vercel.com/) — auto-deploy on push |
| Analytics    | Vercel Web Analytics + custom events               |
| Sitemap      | `@astrojs/sitemap` (auto-generated on build)       |
| Languages    | English (default), Dutch, French — client-side switch |
| Fonts        | Playfair Display · JetBrains Mono · Inter (Google Fonts) |

No database, no CMS, no build step beyond Astro. Content lives directly in the
`.astro` page files.

---

## Project structure

```
siviez.com/
├── public/                     # Static assets, served as-is at the site root
│   ├── favicon.svg
│   ├── robots.txt              # Points crawlers to the sitemap
│   ├── logo/
│   │   └── siviez-bergen.png   # Mountain wordmark used in the nav
│   └── photos/                 # All photography, grouped by theme
│       ├── hero/               # Homepage hero (responsive variants)
│       ├── hike/               # Hiking trails & summer scenery
│       ├── ski/                # Winter & 4 Vallées
│       ├── apartment/          # Rosablanche C34 apartment
│       └── village/            # Siviez village, lakes, nature
│
├── src/
│   ├── components/
│   │   └── SiviezNav.astro     # Shared top navigation (logo + links + language)
│   ├── layouts/
│   │   └── Layout.astro        # HTML shell: <head>, meta, fonts, analytics
│   ├── pages/                  # One file = one route
│   │   ├── index.astro         # Homepage (/) — village overview + 4 sections
│   │   ├── hike.astro          # /hike  — hiking guide
│   │   ├── ski.astro           # /ski   — winter & ski area
│   │   └── appartement.astro   # /appartement — the apartment (Airbnb)
│   └── styles/
│       └── global.css          # Global styles & CSS variables
│
├── astro.config.mjs            # Astro config (site URL, sitemap integration)
├── vercel.json                 # Redirects (www → apex)
├── package.json
└── README.md                   # You are here
```

---

## Photo naming convention

Photos are grouped into `public/photos/<theme>/` and named **descriptively**,
in English, lowercase, hyphen-separated:

```
public/photos/hike/hikers-alpine-valley-cleuson.jpg
public/photos/village/mountain-chapel-siviez.jpg
public/photos/apartment/rosablanche-c34-balcony-view.jpg
```

**Why:** descriptive names are readable for other developers, help SEO
(filenames are a ranking signal), and make Google Image search work. Never use
camera defaults like `IMG_1234.jpg`.

When adding a photo:

1. Drop the file in the matching `public/photos/<theme>/` folder.
2. Give it a descriptive name: `theme-subject-detail.jpg`.
3. Reference it in the page with a full, descriptive `alt` text.

---

## Pages & routes

| Route           | File                     | Purpose                          |
| --------------- | ------------------------ | -------------------------------- |
| `/`             | `pages/index.astro`      | Village overview, 4 entry points |
| `/hike`         | `pages/hike.astro`       | Hiking guide (trails, bisses)    |
| `/ski`          | `pages/ski.astro`        | Winter & 4 Vallées ski area      |
| `/appartement`  | `pages/appartement.astro`| Rosablanche C34 apartment        |

The **navigation** lives in `src/components/SiviezNav.astro` and is included on
every page. The **`<head>`** (meta tags, Open Graph, fonts, analytics) lives in
`src/layouts/Layout.astro`.

---

## Languages

The site is written in English and switches to Dutch/French **client-side**
(a language toggle in the nav, stored in `localStorage` under `siviez-lang`).
Text that should translate carries a `data-i18n="key"` attribute; the
translation dictionaries live in a `<script>` block at the bottom of each page.

> Note: this is client-side only. Search engines index the English (default)
> content. Per-language URLs (`/en/`, `/fr/`, `/nl/`) with `hreflang` are a
> future improvement, not yet implemented.

---

## Local development

Requires [Node.js](https://nodejs.org/) 18 or newer.

```bash
npm install     # install dependencies (first time only)
npm run dev     # start local dev server
```

The site opens at **http://localhost:4321**. Edits reload automatically.

```bash
npm run build   # production build into dist/
npm run preview # preview the production build locally
```

---

## Deployment

Every push to the `main` branch **auto-deploys to Vercel** (~30–60 s).
No manual step. The sitemap and robots.txt are served automatically.

After a build, verify:

- `https://siviez.com/sitemap-index.xml` — the generated sitemap
- `https://siviez.com/robots.txt` — points to the sitemap

---

## Conventions & notes for contributors

- **One route per file** in `src/pages/`. The filename is the URL.
- **Descriptive photo names**, grouped by theme (see above).
- **Every `<img>` needs an `alt`** — describe what's in the photo.
- **Don't reuse a photo across pages** where it changes meaning; each photo
  should suit its context.
- **Analytics events** use `data-track="event_name"` attributes; a small script
  per page forwards clicks to Vercel Analytics.
- **CSS variables** (colours, fonts) are defined once in `global.css`.

---

© 2026 · Hosted by Luc · Built by Pepijn Vanhauwere · Part of PUPVANH Projects
