# Project: Linz College D.I.Khan website

React + Vite, plain JSX (no TypeScript, no Tailwind, no UI library). Static site, English only, deployed on Vercel.

## Names and facts (do not change)
- Official name: **Linz College D.I.Khan** (short: Linz). Tagline: "Knowledge That Lights the Way".
- Never write "COMSATS", "CUI", "Islamabad", "Rector", "BISE", "affiliated" or "Linz School & College". Do not mention any board affiliation.
- Contact data lives in `src/siteConfig.js`; import `{ site }` instead of hard-coding phone, email, address, WhatsApp or social links.
- Programs: Playgroup to Matric (Primary, Middle), FSc Pre-Medical, FSc Pre-Engineering, ICS. Labs: Physics, Chemistry, Biology, Computer. Facilities: library, labs, sports, cafeteria, hostel. No transport. Never invent fees, timings, dates, numbers, results or staff.

## Structure
- `src/Home.jsx` composes the section components in `src/components/`. `Header`, `Footer` and `BackToTop` are shared.
- Inner pages are `src/subpages/*Page.jsx`, registered in `src/subpages/index.js` (slug -> component) and `src/routes.json` ({ path, slug }). `src/App.jsx` builds the routes and sets `body[data-page]` from the slug.
- Styling: `public/theme.css` (large, generated: never edit or reformat it) and `src/styles/custom.css` (all new CSS goes here).
- Behaviour (carousel, FAQ tabs and search, smooth anchors) is in `src/behaviors.js` and depends on existing class names. See "Behaviour contracts" in THEME-GUIDE.md.
- Images: `public/images/linz/` (our photos), `public/images/logo.png`, `public/images/hero.jpg`. PDFs: `public/downloads/`.

## Rules
1. Reuse existing markup and class names from a similar section; do not invent a new design (see THEME-GUIDE.md).
2. Internal links are root-relative (`/about`). External and PDF links use `target="_blank" rel="noopener noreferrer"`. The prospectus and admission form link straight to their PDFs. There is no prospectus page and no WhatsApp page.
3. The class `sf-hidden` means `display:none !important` (leftover from page capture). Remove it from anything that should be visible.
4. Write valid React JSX: `className`, self-closing tags, escaped `&`, `{'{'}`.
5. No new npm packages unless asked. No secrets. Keep the `noindex` meta tag in `index.html` until the user asks to launch.
6. Photos go through `node tools/optimize-images.mjs` (source files in `_incoming/`, which is git-ignored).
7. After every change run `npm run build` and `node tools/check.mjs`; both must pass.
8. Make small commits with clear messages.