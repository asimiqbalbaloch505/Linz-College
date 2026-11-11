import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Faculties from "../components/Faculties";

export default function WebsiteComsatsAcademics() {
  return (
    <>
      <form method="post" data-sf-nesting-track-id="1.1">
        <Header />
        <main>
          <section className="inner-page-hero">
            <div className="container">
              <div className="inner-page-hero-content">
                <span className="inner-page-eyebrow">
                  COMSATS UNIVERSITY ISLAMABAD
                </span>
                <h1>
                  COMSATS Academics
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
                <img src="/images/linz/campus.jpg" alt="COMSATS Academics" />
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
                    Discover academic opportunities across diverse disciplines at COMSATS University Islamabad.
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
                    COMSATS
                  </span>
                </h2>
                <p>
                  A diverse academic environment supported by experienced faculty and a wide range of degree programs.
                </p>
              </div>
              <div className="row g-3">
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-chalkboard-user"></i>
                    </div>
                    <div className="academic-counter-number">
                      <span className="academic-counter" data-target="2767">
                        2,767
                      </span>
                      {" "}
                      <small>
                        +
                      </small>
                    </div>
                    <h3>
                      Faculty Members
                    </h3>
                    <p>
                      Experienced faculty contributing to teaching and academic excellence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-users"></i>
                    </div>
                    <div className="academic-counter-number">
                      <span className="academic-counter" data-target="4032">
                        4,032
                      </span>
                    </div>
                    <h3>
                      Student Teacher Ratio
                    </h3>
                    <p>
                      Academic community reflected in the university's published statistics.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="academic-counter-card">
                    <div className="academic-counter-icon">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div className="academic-counter-number">
                      <span className="academic-counter" data-target="20">
                        20
                      </span>
                    </div>
                    <h3>
                      Degree Programs
                    </h3>
                    <p>
                      Undergraduate and postgraduate academic opportunities.
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
