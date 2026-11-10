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
                  COMSATS UNIVERSITY ISLAMABAD
                </span>
                <h1>
                  Islamabad Campus News
                </h1>
                <p>
                  Your University; Your News!
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
                      <img src="data:application/octet-stream;base64," alt="Climate Change Seminar" />
                      <div className="featured-news-overlay"></div>
                      <div className="featured-news-caption">
                        <span className="featured-news-badge">
                          RESEARCH &amp; INNOVATION
                        </span>
                        <h2>
                          National Seminar on Climate Change &amp; Resilience
                        </h2>
                        <p>
                          Bringing together researchers, policymakers, and experts to discuss sustainable futures.
                        </p>
                        <a href="/news" className="btn-campus-primary">
                          View Details
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
                      Stay updated with the latest news, announcements, opportunities and achievements from COMSATS University Islamabad.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="data:," alt="MoU signing between COMSATS University Islamabad and SPS–SpinnLabs" />
                      {" "}
                      <span className="campus-news-date">
                        15 Apr 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        PARTNERSHIP
                      </span>
                      <h3>
                        <a href="/unavailable">
                          MoU signing between COMSATS University Islamabad and SPS–SpinnLabs
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        Read More
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-93a6de3bf1.jpg" alt="GLOBAL ACADEMIC LEADERSHIP: COMSATS UNIVERSITY ISLAMABAD 2026 QS SUBJECT RANKINGS" />
                      {" "}
                      <span className="campus-news-date">
                        28 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        ACADEMIC EXCELLENCE
                      </span>
                      <h3>
                        <a href="/unavailable">
                          GLOBAL ACADEMIC LEADERSHIP: COMSATS UNIVERSITY ISLAMABAD 2026 QS SUBJECT RANKINGS
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View News
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-efb96ed485.jpg" alt="From Paper to Progress: The University's Digital Governance Transformation" />
                      {" "}
                      <span className="campus-news-date">
                        28 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        DIGITAL TRANSFORMATION
                      </span>
                      <h3>
                        <a href="/unavailable">
                          From Paper to Progress: The University's Digital Governance Transformation
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View News
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-0570e8c1a2.jpg" alt="Global Excellence 2026: COMSATS University Islamabad Leading Pakistan in Academic Rankings" />
                      {" "}
                      <span className="campus-news-date">
                        28 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        GLOBAL RANKINGS
                      </span>
                      <h3>
                        <a href="/unavailable">
                          Global Excellence 2026: COMSATS University Islamabad Leading Pakistan in Academic Rankings
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View Rankings
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="data:," alt="Position Available - Chief Scientific Officer" />
                      {" "}
                      <span className="campus-news-date">
                        28 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        CAREER OPPORTUNITY
                      </span>
                      <h3>
                        <a href="/unavailable">
                          Position Available - Chief Scientific Officer
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View Details
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-a96716bc88.jpg" alt="Research Associate for PSF Project" />
                      {" "}
                      <span className="campus-news-date">
                        09 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        RESEARCH OPPORTUNITY
                      </span>
                      <h3>
                        <a href="/unavailable">
                          Research Associate for PSF Project (Dr. Muhammad Saeed)
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View Details
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-4ddb3f6b2e.jpg" alt="Final Advertisement Senior Program officer International office" />
                      {" "}
                      <span className="campus-news-date">
                        09 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        INTERNATIONAL OFFICE
                      </span>
                      <h3>
                        <a href="/unavailable">
                          Final Advertisement Senior Program Officer International Office
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View Advertisement
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="/images/img-ad573f0fdf.jpg" alt="Content Creator opportunity" />
                      {" "}
                      <span className="campus-news-date">
                        05 Mar 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        SOCIAL MEDIA
                      </span>
                      <h3>
                        <a href="/unavailable">
                          Are you a content creator? Join the CUI social media team.
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        View Details
                        {" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </article>
                </div>
                <div className="col-lg-4 col-md-6">
                  <article className="campus-news-card">
                    <div className="campus-news-image">
                      <img src="data:," alt="COMSATS University Islamabad Alumni Excellence Awards" />
                      {" "}
                      <span className="campus-news-date">
                        15 Jan 2026
                      </span>
                    </div>
                    <div className="campus-news-body">
                      <span className="campus-news-category">
                        ALUMNI
                      </span>
                      <h3>
                        <a href="/unavailable">
                          COMSATS University Islamabad Alumni Excellence Awards
                        </a>
                      </h3>
                      <a href="/unavailable" className="campus-news-link">
                        Read More
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
