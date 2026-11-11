import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteComsatsNews() {
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
                  Campus News
                </h1>
                <p>
                  Your College; Your News!
                  <br />
                  Stay Informed
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <a href="/about">
                    About
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
                <div id="featuredNewsCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="6000" data-bs-pause="false">
                  <div className="featured-news-indicators">
                    <button type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1"></button>
                    {" "}
                    <button type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    {" "}
                    <button type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    {" "}
                    <button type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    {" "}
                    <button type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item sf-hidden"></div>
                    <div className="carousel-item sf-hidden"></div>
                    <div className="carousel-item active">
                      <img src="/images/linz/campus.jpg" alt="Prospectus and admission form" />
                      <div className="featured-news-overlay"></div>
                      <div className="featured-news-caption">
                        <span className="featured-news-badge">
                          ADMISSIONS
                        </span>
                        <h2>
                          Prospectus and Admission Form Available to Download
                        </h2>
                        <p>
                          Download the prospectus and admission form from our website, or message us on WhatsApp for details.
                        </p>
                        <a target="_blank" rel="noopener noreferrer" href="/downloads/prospectus.pdf" className="btn-campus-primary">
                          Download Prospectus
                          {" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="carousel-item sf-hidden"></div>
                    <div className="carousel-item sf-hidden"></div>
                  </div>
                  <button className="featured-news-control prev" type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide="prev">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  {" "}
                  <button className="featured-news-control next" type="button" data-bs-target="#featuredNewsCarousel" data-bs-slide="next">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
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
                      Stay updated with the latest news, announcements and achievements from Linz College D.I.Khan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/linz/classroom.jpg" alt="Prospectus and admission form" />
                      {" "}
                      <span className="campus-news-date">
                        Available now
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        ADMISSIONS
                      </span>
                      <h3>
                        <a target="_blank" rel="noopener noreferrer" href="/downloads/prospectus.pdf">
                          Prospectus and Admission Form Available to Download
                        </a>
                      </h3>
                      <a target="_blank" rel="noopener noreferrer" href="/downloads/admission-form.pdf" className="campus-news-link">
                        Admission Form
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/linz/lab-computer.jpg" alt="Follow Linz College on social media" />
                      {" "}
                      <span className="campus-news-date">
                        Follow us
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        SOCIAL MEDIA
                      </span>
                      <h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/linzcollegedikhan/">
                          Follow Linz College on TikTok and Instagram
                        </a>
                      </h3>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@linz.college.d.i" className="campus-news-link">
                        TikTok
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/linz/library.jpg" alt="Admission enquiries" />
                      {" "}
                      <span className="campus-news-date">
                        Message us
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        ENQUIRIES
                      </span>
                      <h3>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923424803706">
                          Admission Enquiries Are Welcome
                        </a>
                      </h3>
                      <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923424803706" className="campus-news-link">
                        WhatsApp
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
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
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "left": "-1px", "position": "absolute" }}></table>
    </>
  );
}
