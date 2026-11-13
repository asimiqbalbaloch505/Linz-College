import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Faculties from "../components/Faculties";

export default function AcademicsPage() {
  return (
    <>
      <form method="post" data-sf-nesting-track-id="1.1">
        <Header />
        <main>
          <section className="inner-page-hero">
            <div className="container">
              <div className="inner-page-hero-content">
                <span className="inner-page-eyebrow">
                  LINZ COLLEGE D.I.KHAN
                </span>
                <h1>
                  Academics at Linz College
                </h1>
                <p>
                  Exploring the frontiers of knowledge
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Academics
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="academics-banner-section">
            <div className="container">
              <div className="academics-banner">
                <img src="/images/linz/campus.jpg" alt="Linz College campus" />
                <div className="academics-banner-overlay"></div>
                <div className="academics-banner-content">
                  <span>
                    ACADEMIC EXCELLENCE
                  </span>
                  <h2>
                    Knowledge.
                    <br />
                    Innovation. Impact.
                  </h2>
                  <p>
                    Explore school classes through Matric and Intermediate programs at Linz College D.I.Khan.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="academics-overview-section">
            <div className="container">
              <div className="academics-overview-heading">
                <div className="section-eyebrow">
                  ACADEMIC EXCELLENCE
                </div>
                <h2>
                  Learning at
                  {" "}
                  <span>
                    Linz College
                  </span>
                </h2>
                <p>
                Linz College offers education from Playgroup to Matric, along with FSc Pre-Medical, FSc Pre-Engineering and ICS.
                </p>
              </div>
              <div className="row g-3">
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div className="academic-counter-number">
                      School
                    </div>
                    <h3>
                      School Classes
                    </h3>
                    <p>
                      Playgroup, Primary, Middle and Matric.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="academic-counter-number">
                      FSc &amp; ICS
                    </div>
                    <h3>
                      Intermediate Programs
                    </h3>
                    <p>
                      FSc Pre-Medical, FSc Pre-Engineering and ICS.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="academic-counter-number">
                      4
                    </div>
                    <h3>
                      Science &amp; Computer Labs
                    </h3>
                    <p>
                      Physics, Chemistry, Biology and Computer labs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Faculties />
        </main>
        <Footer />
        <div id="Modalsearch" className="modal fade sf-hidden" role="dialog" data-sf-nesting-track-id="1.1.4">
          <div className="modal-dialog modal-lg sf-hidden" data-sf-nesting-track-id="1.1.4.1">
            <div className="modal-content sf-hidden" data-sf-nesting-track-id="1.1.4.1.1">
              <div className="modal-body sf-hidden" data-sf-nesting-track-id="1.1.4.1.1.2"></div>
            </div>
          </div>
        </div>
        <input type="hidden" />
      </form>
      <BackToTop />
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "left": "-1px", "position": "absolute" }}></table>
    </>
  );
}
