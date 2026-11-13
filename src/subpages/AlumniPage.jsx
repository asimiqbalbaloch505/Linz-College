import { useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const categories = [
  {
    id: "wall-of-fame",
    eyebrow: "LINZ COLLEGE ALUMNI",
    title: "Wall of Fame",
    description: "Celebrating the journeys and milestones of Linz College graduates.",
    icon: "fa-trophy",
    entries: [
      {
        name: "Alumni Profile — Sample 01",
        image: "/images/linz/principal.jpg",
        imageAlt: "Linz College community member at a college event",
        year: "Add graduation year",
        highlight: "Add verified role or achievement",
        description: "Sample profile layout. Replace with an alumnus's approved name, graduation year and verified story before publishing.",
      },
      {
        name: "Alumni Profile — Sample 02",
        image: "/images/linz/campus.jpg",
        imageAlt: "Linz College campus",
        year: "Add graduation year",
        highlight: "Add verified study or career milestone",
        description: "A second sample profile to show how a graduate's journey can be featured. Add confirmed details and a portrait with permission.",
      },
      {
        name: "Alumni Profile — Sample 03",
        image: "/images/linz/building.jpg",
        imageAlt: "Linz College building",
        year: "Add graduation year",
        highlight: "Add verified contribution or distinction",
        description: "A third sample profile layout for celebrating alumni contributions. Replace this sample copy with an approved achievement.",
      },
    ],
  },
  {
    id: "board-toppers",
    eyebrow: "BOARD RESULTS",
    title: "Board Toppers & Position Holders",
    description: "Recognising students for outstanding school and Intermediate board examination results.",
    icon: "fa-medal",
    entries: [
      {
        name: "SSC Annual-I First Position",
        image: "/images/linz/ssc-position-holder.jpg",
        imageAlt: "Linz College award poster showing an SSC Annual-I first position with 1163 out of 1200 marks",
        year: "SSC Annual-I",
        highlight: "1st Position · 1163 / 1200",
        description: "The supplied Linz College award poster recognises a student with first position in SSC Annual-I and 1163 out of 1200 marks. The student's name and result year were not legible in the supplied image.",
      },
      {
        name: "Board Topper — Sample 02",
        image: "/images/linz/result.jpg",
        imageAlt: "Linz College student achievement poster",
        year: "Add examination year",
        highlight: "Add verified marks or distinction",
        description: "Sample layout for another board position holder. Replace the sample image and details with college-confirmed information.",
      },
      {
        name: "Board Topper — Sample 03",
        image: "/images/linz/campus-life.jpg",
        imageAlt: "Students participating in a Linz College event",
        year: "Add examination year",
        highlight: "Add class, board and confirmed position",
        description: "Third sample board-results profile. Publish only after the result and student details are confirmed.",
      },
    ],
  },
  {
    id: "mdcat-achievers",
    eyebrow: "MEDICAL ENTRY TEST",
    title: "MDCAT Achievers",
    description: "Celebrating dedication and achievement in the medical college admission test.",
    icon: "fa-award",
    entries: [
      {
        name: "Abu Sufiyan",
        image: "/images/linz/result.jpg",
        imageAlt: "Linz College recognition poster for Abu Sufiyan, MDCAT 2026 top achiever",
        year: "MDCAT 2026",
        highlight: "177/180 — recognition shown on the college poster",
        description: "Linz College celebrates Abu Sufiyan, recognised in the supplied college poster as an MDCAT 2026 top achiever with a score of 177/180.",
      },
      {
        name: "MDCAT Achiever — Sample 02",
        image: "/images/linz/classroom.jpg",
        imageAlt: "Linz College students preparing for examinations",
        year: "Add test year",
        highlight: "Add confirmed score or admission milestone",
        description: "Sample MDCAT-achiever layout. Replace with a verified student's approved name, result and next step.",
      },
      {
        name: "MDCAT Achiever — Sample 03",
        image: "/images/linz/campus.jpg",
        imageAlt: "Linz College campus",
        year: "Add test year",
        highlight: "Add confirmed score or admission milestone",
        description: "A third sample layout for an MDCAT achievement. Add confirmed details and an approved student photo before publishing.",
      },
    ],
  },
];

function AchievementCarousel({ category }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const entry = category.entries[activeIndex];
  const isSample = entry.name.includes("Sample");

  const showEntry = (index) => {
    setActiveIndex((index + category.entries.length) % category.entries.length);
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) showEntry(activeIndex + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <section id={category.id} className="alumni-carousel-section">
      <div className="container">
        <div className="alumni-carousel-heading">
          <div>
            <span className="section-eyebrow">{category.eyebrow}</span>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </div>
          <div className="alumni-carousel-controls">
            <button type="button" aria-label={`Previous ${category.title}`} onClick={() => showEntry(activeIndex - 1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button type="button" aria-label={`Next ${category.title}`} onClick={() => showEntry(activeIndex + 1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <article
          className="alumni-slide"
          aria-live="polite"
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="alumni-slide-photo">
            <img src={entry.image} alt={entry.imageAlt} />
            {isSample && <span className="alumni-sample-badge">SAMPLE PROFILE</span>}
          </div>
          <div className="alumni-slide-content">
            <span className="alumni-slide-eyebrow">
              <i className={`fa-solid ${category.icon}`}></i>
              {" "}
              {isSample ? "SAMPLE ENTRY — REPLACE WITH VERIFIED DETAILS" : category.eyebrow}
            </span>
            <h3>{entry.name}</h3>
            <div className="alumni-slide-facts">
              <div>
                <span>YEAR</span>
                <strong>{entry.year}</strong>
              </div>
              <div>
                <span>HIGHLIGHT</span>
                <strong>{entry.highlight}</strong>
              </div>
            </div>
            <p>{entry.description}</p>
            <div className="alumni-slide-quote">
              {isSample
                ? "Sample content only — replace with confirmed student or alumni information before publication."
                : "Proud moments from the Linz College community."}
            </div>
            <div className="alumni-slide-pagination">
              <div className="alumni-slide-dots" aria-label={`${category.title} slides`}>
                {category.entries.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    className={index === activeIndex ? "active" : ""}
                    aria-label={`Show ${category.title} example ${index + 1}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    onClick={() => showEntry(index)}
                  />
                ))}
              </div>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(category.entries.length).padStart(2, "0")}</span>
            </div>
          </div>
        </article>
        <p className="alumni-swipe-hint">
          <i className="fa-solid fa-left-right"></i>
          {" "}
          Use the arrows, choose a dot, or swipe to browse
        </p>
      </div>
    </section>
  );
}

export default function AlumniPage() {
  return (
    <>
      <Header />
      <main>
        <section className="inner-page-hero">
          <div className="container">
            <div className="inner-page-hero-content">
              <span className="inner-page-eyebrow">LINZ COLLEGE D.I.KHAN</span>
              <h1>Alumni &amp; Wall of Fame</h1>
              <p>Celebrating alumni journeys, board position holders and MDCAT achievers.</p>
              <div className="inner-page-breadcrumb">
                <a href="/">Home</a>
                {" "}
                <i className="fa-solid fa-chevron-right"></i>
                {" "}
                <a href="/about">About</a>
                {" "}
                <i className="fa-solid fa-chevron-right"></i>
                {" "}
                <span>Alumni</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="alumni-category-nav" aria-label="Alumni achievements">
          <div className="container">
            {categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                <i className={`fa-solid ${category.icon}`}></i>
                {" "}
                {category.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="alumni-sample-notice" role="note">
          <div className="container">
            <i className="fa-solid fa-circle-info"></i>
            {" "}
            Sample entries are clearly labelled. Replace them with verified results, approved names and photos before publishing.
          </div>
        </div>

        {categories.map((category) => (
          <AchievementCarousel key={category.id} category={category} />
        ))}

        <section className="alumni-community-cta">
          <div className="container">
            <div className="alumni-community-card">
              <div className="alumni-community-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <span className="section-eyebrow">STAY CONNECTED</span>
                <h2>Share a Linz College achievement.</h2>
                <p>Contact the college to submit a verified result, alumni milestone or approved photo.</p>
              </div>
              <a href="mailto:hameedkerni@gmail.com?subject=Linz%20College%20Achievement" className="btn-campus-primary">
                Share an Achievement
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
