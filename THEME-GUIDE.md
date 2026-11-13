# Theme guide

Use this to build new pages in exactly the same look and feel as the existing site.

## Rules
- Stack: React + Vite, JSX (`className`, not `class`). No TypeScript, no Tailwind, no extra CSS framework.
- Global stylesheet: `public/theme.css` (linked in `index.html`). It already has Bootstrap-style grid/utilities (`container`, `row`, `col-*`, `d-flex`...) plus the custom theme. Reuse its classes. Put any NEW css in `src/styles/custom.css`; never edit `theme.css`.
- Every page uses the shared `<Header />` and `<Footer />` and `<BackToTop />` from `src/components`, with page content inside `<main>`. Start a new page by copying an existing file in `src/subpages/` (for example `WebsiteComsatsAffiliations.jsx`) and replacing the content.
- Icons: Font Awesome classes (`fa-solid fa-...`). Images go in `public/images/` and are referenced as `/images/name.ext`.
- Do not invent a new design: reuse the section patterns below (hero, eyebrow + heading, cards, grids, buttons).

## Behaviour contracts (`src/behaviors.js`: keep this markup so it keeps working)
- Carousel: `.carousel` > `.carousel-inner` > `.carousel-item` (one has `active`). Controls: `button[data-bs-slide="prev|next"]`, dots: `button[data-bs-slide-to="N"]`. `data-bs-ride="carousel"` plus `data-bs-interval` = autoplay.
- FAQ: `.faq-tab[data-faq-category=X]`, `.faq-category[data-category=X]` (one has `active`), `.faq-item` > `button.faq-question` + `.faq-answer > .faq-answer-inner`; search input `#faqSearch`, clear button `#faqClear`.
- Anchor links `href="#id"` scroll smoothly to the element with that id.
- Header mobile menu (`src/components/Header.jsx`): each entry is `li.mega-dropdown#uniqueId` > `a.nav-link` + `div.mega-menu`. Keep this structure when editing the menu.
- `BackToTop` appears after scrolling 300px.

## Design tokens
### CSS variables (:root)
- `--bs-primary-rgb`: 50,93,136
- `--bs-body-font-weight`: 400
- `--bs-body-line-height`: 1.5
- `--bs-body-color`: #3e3f3a
- `--bs-body-bg`: #fff
- `--bs-emphasis-color-rgb`: 0,0,0
- `--bs-secondary-color`: rgba(62,63,58,0.75)
- `--bs-secondary-bg`: #f8f5f0
- `--bs-link-color-rgb`: 147,197,75
- `--bs-link-hover-color-rgb`: 118,158,60
- `--bs-border-width`: 1px
- `--bs-border-color-translucent`: rgba(0,0,0,0.175)
- `--bs-border-radius`: 0.375rem
- `--bs-carousel-control-icon-filter`: 
- `--fa-family-brands`: "Font Awesome 7 Brands"
### Most used colors
- `#ffffff` (190x)
- `#0b858d` (106x)
- `#073b4c` (99x)
- `#e5b83d` (81x)
- `#e3b33d` (78x)
- `#087f8c` (78x)
- `#55c3c6` (45x)
- `#63c4c7` (34x)
- `#082f43` (30x)
- `#58c5ca` (23x)
- `#163b49` (20x)
- `#f7f9fa` (19x)
- `#71818a` (17x)
- `#eef8f8` (15x)
### Fonts
- `inherit` (5x)
- `"Font Awesome 7 Pro"` (3x)
- `var(--_fa-family)` (2x)
- `"Font Awesome 7 Brands"` (2x)
- `"Font Awesome 6 Free"` (2x)
- `"Segoe UI",sans-serif` (1x)
- @font-face families: Font Awesome 7 Brands, Font Awesome 7 Pro, Inter
### Breakpoints
- `(max-width:767px)` (56x)
- `(max-width:991px)` (47x)
- `(max-width:420px)` (11x)
- `(max-width:480px)` (10x)
- `(max-width:400px)` (9x)
- `(min-width:992px)` (7x)
- `(prefers-reduced-motion:reduce)` (7x)
- `(max-width:991.98px)` (5x)
### Class name prefixes
- `fa-*` (121 classes): fa-solid, fa-arrow-right, fa-brands, fa-arrow-right-long
- `campus-*` (83 classes): campus-news-card, campus-news-image, campus-news-date, campus-news-body
- `admission-*` (61 classes): admission-menu, admission-highlight, admission-btn, admission-path-card
- `islamabad-*` (33 classes): islamabad-footer, islamabad-section-header, islamabad-stat, islamabad-stat-divider
- `contact-*` (23 classes): contact-detail, contact-person-card, contact-person-top, contact-number
- `library-*` (21 classes): library-highlight, library-highlight-icon, library-content, library-intro
- `research-*` (20 classes): research-menu, research-highlight, research-btn, research-link-card
- `faq-*` (18 classes): faq-item, faq-question, faq-number, faq-question-text
- `student-*` (17 classes): student-menu, student-highlight, student-btn, student-service-hero
- `admissions-*` (16 classes): admissions-alumni-video, admissions-welcome-section, admissions-welcome-visual, admissions-welcome-accent
- `about-*` (15 classes): about-menu, about-highlight, about-btn, about-leader-card
- `sports-*` (15 classes): sports-facility-card, sports-facility-icon, sports-facility-highlight, sports-facility-highlight-icon
- `col-*` (14 classes): col-lg-3, col-md-6, col-lg-4, col-lg-6
- `service-*` (14 classes): service-icon, service-content, service-number, service-arrow
- `academic-*` (12 classes): academic-department-card, academic-counter-card, academic-counter-icon, academic-counter-number
- `faculty-*` (12 classes): faculty-modern-card, faculty-card-header, faculty-icon, faculty-title
- `footer-*` (11 classes): footer-contact-item, footer-column, footer-brand, footer-logo
- `rector-*` (11 classes): rector-card, rector-message-section, rector-light-section, rector-section-label
- `incharge-*` (11 classes): incharge-message-section, incharge-profile, incharge-profile-image, incharge-profile-overlay
- `welcome-*` (10 classes): welcome-highlight, welcome-stat, welcome-stat-divider, welcome-highlight-icon
- `why-*` (10 classes): why-cui-item, why-cui-icon, why-cui-section, why-cui-content
- `affiliated-*` (10 classes): affiliated-institution-section, affiliated-section-heading, affiliated-institution-card, affiliated-institution-image

## Homepage sections (in order)
### 1. section.islamabad-hero#home ("Linz College — Knowledge That Lights the Way.")
```
section.islamabad-hero#home
  img.islamabad-hero-video
  div.islamabad-hero-overlay
  div.islamabad-hero-glow
  div.container.h-100
    div.row.h-100.align-items-center
      div.col-xl-8.col-lg-9
  a.islamabad-scroll
    span.islamabad-mouse
      span.islamabad-wheel
    span
```
### 2. section.islamabad-welcome-section#welcome ("A Place to Learn, Discover & Lead.")
```
section.islamabad-welcome-section#welcome
  div.container
    div.row.align-items-center.g-5
      div.col-lg-6  x2
    div.islamabad-welcome-stats.reveal.active
      div.welcome-stat
      div.welcome-stat-divider
      div.welcome-stat
      div.welcome-stat-divider
      div.welcome-stat
      div.welcome-stat-divider
      div.welcome-stat
```
The homepage video section is rendered by `src/components/CollegeVideos.jsx` after the Wall of Fame section. Its cards link to the client-supplied Linz College YouTube video; replace the repeated cards and thumbnail when additional college videos are supplied.

### 3. section.islamabad-faculties-section#faculty ("Programs & Learning")
```
section.islamabad-faculties-section#faculty
  div.container
    div.islamabad-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.mt-4
      div.col-xl-4.col-lg-4  x3
```
### 4. section.islamabad-admissions-section#admissions ("Start Your Journey With Us")
```
section.islamabad-admissions-section#admissions
  div.container
    div.islamabad-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.mt-4
      div.col-lg-4  x3
    div.admission-resources.reveal.active
      div.admission-resource-heading
      div.admission-resource-links
      div.admission-apply
```
### 5. section.islamabad-campus-life-section#campus-life ("Life Beyond the Classroom")
```
section.islamabad-campus-life-section#campus-life
  div.container
    div.islamabad-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.align-items-stretch
      div.col-lg-6  x2
    div.campus-life-bottom.reveal.active
      a  x4
```
### 6. section.islamabad-library-section#library ("Knowledge in Your Hands")
```
section.islamabad-library-section#library
  div.container
    div.row.g-4.align-items-center
      div.col-lg-6  x2
    div.library-resource-bar.reveal.active
      a  x4
```
### 7. section.islamabad-news-section#news-events ("What's Happening at Linz College")
```
section.islamabad-news-section#news-events
  div.container
    div.islamabad-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.mt-4
      div.col-lg-7
      div.col-lg-5
```
### 8. section.wall-of-fame-section ("Celebrating Achievements")
```
section.wall-of-fame-section
  div.container
    div.wall-of-fame-heading
    div.row.g-4
      div.col-lg-4.col-md-6  x3
    div.wall-of-fame-footer
```
### 9. section.islamabad-leadership-section ("Inspiring Excellence, Leading the Future")
```
section.islamabad-leadership-section
  div.container
    div.leadership-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.mt-4
      div.col-lg-6  x2
```
### 10. section.islamabad-services-section ("Everything You Need, All in One Campus")
```
section.islamabad-services-section
  div.container
    div.services-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-3.mt-4
      div.col-lg-3.col-md-6  x4
      div.col-lg-4.col-md-6  x4
```
### 11. section.islamabad-useful-links ("Useful Links")
```
section.islamabad-useful-links
  div.container
    div.useful-links-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-3.mt-4
      div.col-lg-4.col-md-6  x6
```
### 12. section.islamabad-testimonials-section#testimonials ("What Our Community Says")
```
section.islamabad-testimonials-section#testimonials
  div.container
    div.testimonials-header.text-center.reveal
      span.section-tag
      h2
      p
    div.testimonial-slider-wrap
      div.carousel.slide#campusTestimonials
```
### 13. section.islamabad-contact-section ("We're Here to Help")
```
section.islamabad-contact-section
  div.container
    div.contact-section-header.text-center.reveal
      span.section-tag
      h2
      p
    div.row.g-4.mt-4
      div.col-lg-5
      div.col-lg-7
    div.contact-quick-bar.reveal.active
      div.contact-quick-item  x3
```

## Inner pages (what each page is made of)
- **linz-college-alumni**: section.inner-page-hero ("Alumni & Wall of Fame")  |  nav.alumni-category-nav ("Wall of Fame, Board Toppers, MDCAT Achievers")  |  section.alumni-carousel-section#wall-of-fame  |  section.alumni-carousel-section#board-toppers  |  section.alumni-carousel-section#mdcat-achievers  |  section.alumni-community-cta ("Share a Linz College achievement")
- **website-about-comsats**: section.inner-page-hero ("About Islamabad Campus")  |  section.about-inner-intro ("An Innovative Institution of Learning")  |  section.about-vision-section ("Building a National Presence")  |  section.about-mission-section ("Knowledge with Purpose")  |  section.about-history-section ("A Legacy of Excellence")  |  section.about-leadership-section ("Islamabad Campus Leadership")  |  section.about-admin-section#administrative-offices ("Administrative Offices")
- **website-campus-life**: section.inner-page-hero ("Campus Life")  |  section.campus-life-banner-section ("Discover Your Campus. Discover Yourself.")  |  section.campus-life-content-section#achievements ("Our Achievements")  |  section.campus-sports-section ("Stay Active. Stay Connected.")
- **website-comsats-academics**: section.inner-page-hero ("COMSATS Academics")  |  section.academics-banner-section ("Knowledge. Innovation. Impact.")  |  section.academics-overview-section ("Learning at COMSATS")  |  section.academic-departments-section ("Faculties & Departments")  |  section.academic-support-section#centers ("Centers & Offices")  |  section.course-catalog-section ("Course Catalog")
- **website-comsats-admissions**: section.inner-page-hero ("Admissions")  |  section.admission-snapshot-section ("Your Journey Starts Here")  |  section.admissions-welcome-section ("Your Journey Starts Here")  |  section.admissions-options-section#admission-options ("Explore Admissions")  |  section.why-cui-section ("More Than a University")  |  section.admission-glance-section ("A University of Opportunity")  |  section.admission-timeline-section ("Fall 2026 Admission Timeline")  |  section.admission-test-info-section ("NAT / NTS Test Information")  |  section.admissions-help-section ("We're Here to Help You")  |  section.admissions-alumni-section ("Alumni Testimonials")
- **website-comsats-affiliations**: section.inner-page-hero.academics-hero ("Affiliations")  |  section.affiliation-intro ("Extending the reach of quality education.")  |  section.affiliated-institution-section ("Faisalabad Institute of Science and Technology")
- **website-comsats-cafeteria**: section.inner-page-hero.student-service-hero ("Student Service Center")  |  section.student-service-intro ("A Place to Relax & Refresh")  |  section.student-foodhall-section ("State-of-the-Art Food Hall")
- **website-comsats-news**: section.inner-page-hero ("Campus News")  |  section.featured-news-section ("Pre-First-Year Admissions Open")  |  section.campus-news-section ("Latest Campus News")
- **website-contact-us**: section.inner-page-hero.contact-hero ("Contact Us")  |  section.contact-main-section ("How can we help?")
- **website-frequently-asked-questions**: section.inner-page-hero.faq-hero ("Frequently Asked Questions")  |  section.faq-main-section ("Frequently Asked Questions")
- **website-incharge-campus**: section.inner-page-hero ("InCharge Campus")  |  section.incharge-message-section ("Welcome to COMSATS Islamabad")
- **website-junaid-zaidi-library**: section.inner-page-hero ("Junaid Zaidi Library")  |  section.library-intro-section ("Junaid Zaidi Library")
- **website-prospectus**: section.inner-page-hero.prospectus-hero ("Prospectus")  |  section.modern-prospectus-section#offices ("Prospectus & Admission Guides")
- **website-rector-comsats**: section.inner-page-hero ("Message from Rector")  |  section.rector-message-section.rector-light-section ("Message by Message from Rector")
- **website-sports-wellness**: section.inner-page-hero ("Sports & Wellness Facilities")  |  section.sports-intro-section ("Move. Play. Thrive.")  |  section.sports-feature-section.outdoor-sports-section ("Outdoor Sports Facilities")  |  section.sports-feature-section.indoor-sports-section ("Indoor Sports Facilities")  |  section.funfairs-section ("Campus Funfairs")

### Skeleton: website-comsats-affiliations
```
main
  section.inner-page-hero.academics-hero
    div.container
      div.inner-page-hero-content
        div.inner-page-eyebrow
        h1
        p
        div.inner-page-breadcrumb
  section.affiliation-intro
    div.container
      div.row.align-items-center.g-5
        div.col-lg-7
        div.col-lg-5
  section.affiliated-institution-section
    div.container
      div.affiliated-section-heading
        span
        h2
      div.affiliated-institution-card
        div.affiliated-institution-image
        div.affiliated-institution-content
```
### Skeleton: website-frequently-asked-questions
```
main
  section.inner-page-hero.faq-hero
    div.container
      div.inner-page-hero-content
        span.inner-page-eyebrow
        h1
        p
        div.inner-page-breadcrumb
  section.faq-main-section
    div.container
      div.faq-heading
        div.section-eyebrow
        h2
        p
      div.faq-search-wrapper
        i.fa-solid.fa-magnifying-glass
        input#faqSearch
        button#faqClear
      div.faq-tabs
        button.faq-tab.active
        button.faq-tab  x2
      div.faq-category.active#faq-general
        div.faq-item  x25
      div.faq-category.sf-hidden#faq-admission
      div.faq-category.sf-hidden#faq-scholarships
      div.faq-no-results.sf-hidden#faqNoResults
```
