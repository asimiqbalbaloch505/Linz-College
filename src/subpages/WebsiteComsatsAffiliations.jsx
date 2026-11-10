import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteComsatsAffiliations() {
  return (
    <>
      <form method="post" data-sf-nesting-track-id="1.1">
        <Header />
        <main>
          <section className="inner-page-hero academics-hero">
            <div className="container">
              <div className="inner-page-hero-content">
                <div className="inner-page-eyebrow">
                  COMSATS UNIVERSITY ISLAMABAD
                </div>
                <h1>
                  Affiliations
                </h1>
                <p>
                  Institutions affiliated with COMSATS University Islamabad and committed to quality education, professional development and academic excellence.
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    COMSATS Affiliations
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="affiliation-intro">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-7">
                  <span className="affiliation-eyebrow">
                    CUI AFFILIATION
                  </span>
                  <h2>
                    Extending the reach of
                    {" "}
                    <strong>
                      quality education.
                    </strong>
                  </h2>
                  <p>
                    COMSATS University Islamabad extends its academic outreach through affiliated institutions committed to delivering high-quality and skill-based education.
                  </p>
                  <p>
                    These institutions provide students with opportunities for academic development, professional growth and preparation for the needs of a dynamic world.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="affiliation-stat-card">
                    <div className="affiliation-stat-icon">
                      <i className="fa-solid fa-building-columns"></i>
                    </div>
                    <span>
                      AFFILIATED INSTITUTION
                    </span>
                    {" "}
                    <strong>
                      01
                    </strong>
                    <p>
                      Affiliated institute currently presented on the CUI affiliations page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="affiliated-institution-section">
            <div className="container">
              <div className="affiliated-section-heading">
                <span>
                  OUR AFFILIATION
                </span>
                <h2>
                  Faisalabad Institute of
                  {" "}
                  <strong>
                    Science and Technology
                  </strong>
                </h2>
              </div>
              <div className="affiliated-institution-card">
                <div className="affiliated-institution-image">
                  <img src="/images/img-ccc972c30d.jpg" alt="Faisalabad Institute of Science and Technology" />
                  {" "}
                  <span className="affiliated-institution-tag">
                    FIST
                  </span>
                </div>
                <div className="affiliated-institution-content">
                  <span className="affiliated-institution-label">
                    AFFILIATED INSTITUTION
                  </span>
                  <h3>
                    Faisalabad Institute of Science and Technology (FIST)
                  </h3>
                  <p>
                    Faisalabad Institute of Science and Technology (FIST), first and only institute affiliated with COMSATS University Islamabad (CUI), is a purpose-built institution committed to delivering high-quality, skill-based education that meets the needs of today’s dynamic world.
                  </p>
                  <p>
                    With a focus on academic excellence, professional growth, and ethical leadership, FIST offers cutting-edge programs in Software Engineering, Computer Science, Business Administration, Psychology, Media &amp; Communication Studies, and Accounting &amp; Finance.
                  </p>
                  <div className="affiliated-programs">
                    <span>
                      PROGRAMS
                    </span>
                    <div className="affiliated-program-list">
                      <span>
                        Software Engineering
                      </span>
                      {" "}
                      <span>
                        Computer Science
                      </span>
                      {" "}
                      <span>
                        Business Administration
                      </span>
                      {" "}
                      <span>
                        Psychology
                      </span>
                      {" "}
                      <span>
                        Media &amp; Communication Studies
                      </span>
                      {" "}
                      <span>
                        Accounting &amp; Finance
                      </span>
                    </div>
                  </div>
                  <a href="https://fist.edu.pk/" className="affiliated-visit-btn" target="_blank" rel="noopener noreferrer">
                    Visit FIST
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </section>
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
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "position": "absolute", "left": "-1px" }}></table>
    </>
  );
}
