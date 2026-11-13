import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const NEWS = [
  {
    category: "ADMISSIONS",
    title: "Pre-First-Year Admissions Open for 2026–27",
    date: "Session 2026–27",
    image: "/images/linz/admissions-open-2026-27.jpg",
    alt: "Linz College announcement for pre-first-year admissions for 2026–27",
  },
  {
    category: "SCHOLARSHIPS · ARCHIVE",
    title: "Scholarship Cum Admission Test Notice",
    date: "15 March 2026 · Past notice",
    image: "/images/linz/scholarship-test-2026.jpg",
    alt: "Linz College scholarship cum admission test flyer dated 15 March 2026",
    summary: "This flyer announced a test on 15 March 2026, a past date. Contact the college for current scholarship information.",
  },
  {
    category: "SCHOLARSHIPS · NOTICE",
    title: "FSc Part-I Scholarship Test Flyer",
    date: "Year not stated on flyer",
    image: "/images/linz/scholarship-notice.jpg",
    alt: "Linz College FSc Part-I scholarship test flyer with separate August dates for girls and boys",
    summary: "The flyer lists 8 August for girls and 9 August for boys but does not state a year. Confirm any upcoming dates with the college.",
  },
  {
    category: "ADMISSIONS · ARCHIVE",
    title: "Talent Hunt and Admissions Campaign",
    date: "Archived · Session 2025–26",
    image: "/images/linz/admissions-campaign-2025-26.jpg",
    alt: "Archived Linz College admissions and talent hunt announcement for session 2025–26",
    summary: "A previous session announcement, retained as an archive. See Admissions for current application information.",
  },
  {
    category: "CAMPUS LIFE",
    title: "Parent-Teacher Meeting at Linz College",
    date: "Event date to be confirmed",
    image: "/images/linz/campus-building-3.jpg",
    alt: "Linz College courtyard prepared for a parent-teacher meeting",
  },
  {
    category: "STUDENT ACTIVITIES",
    title: "Students Present Classroom Projects",
    date: "Event date to be confirmed",
    image: "/images/linz/student-project-exhibition.jpg",
    alt: "Linz College students presenting a classroom project exhibition",
  },
  {
    category: "COLLEGE EVENTS",
    title: "Students Perform at a Cultural Event",
    date: "Event date to be confirmed",
    image: "/images/linz/cultural-event.jpg",
    alt: "Linz College students performing at a cultural event",
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="inner-page-hero">
          <div className="container">
            <div className="inner-page-hero-content">
              <span className="inner-page-eyebrow">
                LINZ COLLEGE D.I.KHAN
              </span>
              <h1>
                Campus News
              </h1>
              <p>
                Updates and information from Linz College.
              </p>
              <div className="inner-page-breadcrumb">
                <a href="/">
                  Home
                </a>
                {" "}
                <i className="fa-solid fa-chevron-right"></i>
                {" "}
                <span>
                  News &amp; Events
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-news-section">
          <div className="container">
            <div className="featured-news-wrapper">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <a href="/images/linz/admissions-open-2026-27.jpg" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linz/admissions-open-2026-27.jpg" alt="Linz College pre-first-year admissions announcement for 2026–27" />
                  </a>
                  <div className="featured-news-overlay"></div>
                  <div className="featured-news-caption">
                    <span className="featured-news-badge">
                      LINZ COLLEGE
                    </span>
                    <h2>
                      Pre-First-Year Admissions Open
                    </h2>
                    <p>
                      Session 2026–27
                    </p>
                    <a target="_blank" rel="noopener noreferrer" href="/images/linz/admissions-open-2026-27.jpg" className="btn-campus-primary">
                      View News
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="campus-news-section">
          <div className="container">
            <div className="campus-news-heading">
              <div className="section-eyebrow">
                CAMPUS UPDATES
              </div>
              <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
                <div>
                  <h2>
                    Latest Campus
                    {" "}
                    <span>
                      News
                    </span>
                  </h2>
                  <p>
                    News and announcements will be posted here. Dates will appear once confirmed.
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {NEWS.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.title}>
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <a href={item.image} target="_blank" rel="noopener noreferrer" aria-label={`Open image: ${item.alt}`}>
                        <img src={item.image} alt={item.alt} />
                      </a>
                      <span className="campus-news-date">
                        {item.date}
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        {item.category}
                      </span>
                      <h3>
                        {item.title}
                      </h3>
                      {item.summary && <p>{item.summary}</p>}
                      <a target="_blank" rel="noopener noreferrer" href={item.image} className="campus-news-link">
                        View News
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
