import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteJunaidZaidiLibrary() {
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
                  Junaid Zaidi Library
                </h1>
                <p>
                  Knowledge in your Hands
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Junaid Zaidi Library
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="library-intro-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="library-intro-image">
                    <img src="/images/img-4759674276.jpg" alt="Junaid Zaidi Library" />
                    <div className="library-image-overlay"></div>
                    <div className="library-image-label">
                      <div className="library-image-icon">
                        <i className="fa-solid fa-book-open"></i>
                      </div>
                      <div>
                        <span>
                          COMSATS UNIVERSITY ISLAMABAD
                        </span>
                        {" "}
                        <strong>
                          Junaid Zaidi Library
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="library-intro-content">
                    <div className="section-eyebrow">
                      KNOWLEDGE &amp; LEARNING
                    </div>
                    <h2>
                      Junaid Zaidi
                      {" "}
                      <span>
                        Library
                      </span>
                    </h2>
                    <p>
                      COMSATS University Islamabad Junaid Zaidi Library is vital to the education mission of COMSATS University Islamabad.
                    </p>
                    <p>
                      Overall objective of the Junaid Zaidi Library is to select, organize, and maintain print and electronic resources that support the curriculum and information needs of COMSATS University Islamabad academic community.
                    </p>
                    <p>
                      Working in partnership with faculty, staff and students, Junaid Zaidi Library provides convenient access to quality information resources, and an environment that encourages study and personal growth.
                    </p>
                    <p>
                      Junaid Zaidi Library also provides information services which are customized to individual needs and which recognize their information requirements.
                    </p>
                    <div className="library-actions">
                      <a href="/unavailable" className="btn-campus-primary">
                        Visit Website
                        {" "}
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                      {" "}
                      <a href="https://clients.360folio.com/comsats/" target="_blank" className="btn-campus-outline">
                        Virtual Tour
                        {" "}
                        <i className="fa-solid fa-vr-cardboard"></i>
                      </a>
                    </div>
                  </div>
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
