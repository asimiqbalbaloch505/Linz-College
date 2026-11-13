# Handover: Linz College D.I.Khan website

## What this is
Static React + Vite site for Linz College D.I.Khan (Playgroup to FSc, residential, Main Diyal Road, Dera Ismail Khan). The layout and CSS came from a university template and were fully rebranded. Content is the client's but some of it is still placeholder (see Launch checklist).

## Commands
- `npm install`, `npm run dev` (http://localhost:5173), `npm run build`
- `node tools/check.mjs` = QA (banned words, broken internal links, missing files). `node tools/check.mjs --unused` lists unused images.
- `node tools/optimize-images.mjs` turns photos in `_incoming/` into `public/images/linz/*.jpg`.

## Pages
/ (Home.jsx), /about, /academics, /admissions, /alumni, /campus-life, /news, /contact, /faq, /principal, /facilities (library, 4 labs, sports, cafeteria, hostel). Prospectus and admission form are PDFs, not pages.

## Working
Responsive header with mobile menu, FAQ tabs and search, carousels, back-to-top, anchor scroll, PDF downloads, contact map, WhatsApp links.

## Known placeholders / demo content (replace before launch)
- The homepage video section now features the client-supplied "Linz college students" YouTube video in three cards. Replace the repeated video and thumbnail when additional college videos are supplied.
- Testimonials: Asim Iqbal's FSc Pre-Medical/hostel review is a draft and must be approved by him before publication.
- Alumni & Wall of Fame page includes swipeable Wall of Fame, Board Toppers and MDCAT Achievers carousels. The Abu Sufiyan MDCAT poster is verified supplied content; all other entries are labelled samples and need verified names/results and approved photos before publication.
- The homepage hero and welcome-section images remain unchanged. New supplied campus, activity, sports, board-position and admissions images are used on their corresponding pages. The supplied 2026 scholarship/admission-test flyers are dated or marked as archives; no hostel/cafeteria photos (placeholder.svg).
- Email is the principal's Gmail; client may want a college email.
- Many "Explore"/"View" buttons still point to `/unavailable`.
- Colors are still the template's teal/navy; the supplied logo is brown/gold.

## Tasks for Copilot (one prompt each, in this order)
### T1 QA baseline
"Read .github/copilot-instructions.md, HANDOVER.md and THEME-GUIDE.md. Run `npm run build` and `node tools/check.mjs`. Fix everything check.mjs reports without changing the visual design. Update THEME-GUIDE.md so its 'Inner pages' section matches src/routes.json and the current page files. Summarize what you changed. Do nothing else."

### T2 Dead links
"Replace every link to /unavailable with the most relevant real route (/academics, /admissions, /campus-life, /facilities, /contact, /faq) or a PDF in /downloads, or remove the button/card if nothing fits (keep the grid balanced). Then delete src/Unavailable.jsx and its route and the fallback in App.jsx so unknown paths show a simple styled 404 page that links home. Run check.mjs."

### T3 Data-driven Testimonials
"Move the cards of src/components/Testimonials.jsx into src/data/testimonials.js ({ name, role, text, photo }) and render them from the array. If the array is empty the whole section must not render. Keep markup and classes. Use real client-approved testimonials when provided. Keep the homepage video cards in sync with client-supplied Linz College videos."

### T4 Faculty section (only if the client approves; the user will paste the table)
"Create src/data/faculty.js from this table: <PASTE TABLE>. Add an 'Our Faculty' section (id='faculty') to AboutPage using the existing table/card classes, with a department filter. Header About menu already links to /about#faculty."

### T5 Rebrand colors
"Propose a green/gold palette from public/images/logo.png (deep green, mid green, light green, gold). Show the mapping from the current teal/navy hex values to the new ones and wait for my approval. After approval: write a one-off Node script that applies the mapping to public/theme.css and src/styles/custom.css, keep text contrast at least 4.5:1, then check every route visually."

### T6 Mobile QA
"At widths 360, 390, 768 and 1024, open every route and fix overflow, overlaps and clipped text using only src/styles/custom.css. List each fix."

### T7 SEO and meta
"Add a usePageMeta hook so each route sets document.title and meta description; add Open Graph tags and a logo-based share image in index.html; add public/robots.txt that disallows all for now; make sure every img has meaningful alt text."

### T8 Performance
"Lazy-load route components with React.lazy and Suspense, add loading='lazy' and decoding='async' to below-the-fold images, and run `node tools/check.mjs --unused` then delete unused images (list them first). Re-run the build and report bundle sizes."

### T9 Hero video (when the client sends the file)
"Add an optional hero video: public/videos/hero.mp4 (muted, loop, playsInline, preload='metadata', poster /images/hero.jpg). Keep the photo as fallback and for prefers-reduced-motion."

### T10 Deploy (the user does this)
Push to a private GitHub repo, import it in Vercel (Vite preset, build `npm run build`, output `dist`), open /faq and /about directly to test vercel.json, keep noindex until launch, add the domain later.

## Launch checklist
- [ ] Add Linz College videos if supplied; real testimonials; real photos (hostel, cafeteria, labs); email
- [ ] Facebook / YouTube links in siteConfig.js (empty strings are hidden)
- [ ] Remove the noindex meta tag in index.html; update robots.txt
- [ ] `node tools/check.mjs` passes with 0 issues
- [ ] Admission/contact details confirmed by the client

## Info still needed from the client
Official fee/admission details (shared via WhatsApp for now), timings, real numbers (students, teachers), principal's title (Dr./Mr.), Physics lab confirmation, hostel details, news/events, results and position-holder photos, YouTube channel, domain and email.