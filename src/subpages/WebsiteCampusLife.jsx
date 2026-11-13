import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteCampusLife() {
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
                  Campus Life
                </h1>
                <p>
                  Learn, grow and make lasting memories at Linz College.
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Campus Life
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="campus-life-banner-section">
            <div className="container">
              <div className="campus-life-banner">
                <img src="/images/linz/annual-celebration.jpg" alt="Linz College campus illuminated for an annual celebration" />
                <div className="campus-life-banner-overlay"></div>
                <div className="campus-life-banner-content">
                  <span>
                    LIFE BEYOND THE CLASSROOM
                  </span>
                  <h2>
                    Discover Your Campus.
                    <br />
                    Discover Yourself.
                  </h2>
                </div>
              </div>
            </div>
          </section>
          <section id="achievements" className="campus-life-content-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="campus-life-feature-image">
                    <img src="/images/linz/student-project-exhibition.jpg" alt="Linz College students presenting a science project at an exhibition" />
                    <div className="campus-life-image-overlay"></div>
                    <div className="campus-life-image-badge">
                      <i className="fa-solid fa-users"></i>
                      <div>
                        <strong>
                          Achievements
                        </strong>
                        {" "}
                        <span>
                          Celebrating Our Students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="campus-life-content">
                    <div className="section-eyebrow">
                      OUR ACHIEVEMENTS
                    </div>
                    <h2>
                      Our
                      {" "}
                      <span>
                        Achievements
                      </span>
                    </h2>
                    <p>
                      Students at Linz College take part in academic and campus activities in a residential learning environment.
                    </p>
                    <p>
                      The college offers education from Playgroup through FSc, with sports, a library and science and computer labs on campus.
                    </p>
                    <p>
                      For more information about our results, please contact us.
                    </p>
                    <a href="/contact" className="btn-campus-primary">
                      Contact Us
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="campus-sports-section">
            <div className="container">
              <div className="campus-sports-heading">
                <div className="section-eyebrow">
                  SPORTS &amp; WELLNESS
                </div>
                <h2>
                  Stay Active.
                  {" "}
                  <span>
                    Stay Connected.
                  </span>
                </h2>
                <p>
                  Explore sports and wellness opportunities designed to promote a healthy, active and engaging campus life.
                </p>
              </div>
              <div className="row align-items-stretch g-4">
                <div className="col-lg-7">
                  <div className="campus-sports-feature">
                    <img src="/images/linz/sports-day.jpg" alt="Students taking part in an outdoor sports day at Linz College" />
                    <div className="campus-sports-overlay"></div>
                    <div className="campus-sports-feature-content">
                      <span>
                        CAMPUS WELLNESS
                      </span>
                      <h3>
                        A Campus Life Beyond the Classroom
                      </h3>
                      <p>
                        Discover opportunities to stay active, participate in sports and connect with the Linz College community.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="campus-sports-facilities">
                    <div className="sports-facility-card">
                      <div className="sports-facility-icon">
                        <i className="fa-solid fa-futbol"></i>
                      </div>
                      <div>
                        <strong>
                          Sports Activities
                        </strong>
                        {" "}
                        <span>
                          Opportunities for students to participate in sports and recreation.
                        </span>
                      </div>
                    </div>
                    <div className="sports-facility-card">
                      <div className="sports-facility-icon">
                        <i className="fa-solid fa-dumbbell"></i>
                      </div>
                      <div>
                        <strong>
                          Fitness &amp; Wellness
                        </strong>
                        {" "}
                        <span>
                          Activities that encourage a healthy and active lifestyle.
                        </span>
                      </div>
                    </div>
                    <div className="sports-facility-card">
                      <div className="sports-facility-icon">
                        <i className="fa-solid fa-people-group"></i>
                      </div>
                      <div>
                        <strong>
                          Student Participation
                        </strong>
                        {" "}
                        <span>
                          Engage with fellow students through activities and campus events.
                        </span>
                      </div>
                    </div>
                    <div className="sports-facility-card">
                      <div className="sports-facility-icon">
                        <i className="fa-solid fa-heart-pulse"></i>
                      </div>
                      <div>
                        <strong>
                          Healthy Campus Life
                        </strong>
                        {" "}
                        <span>
                          Supporting physical wellbeing alongside academic development.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="campus-sports-cta">
                <div className="campus-sports-cta-icon">
                  <i className="fa-solid fa-person-running"></i>
                </div>
                <div>
                  <span>
                    GET INVOLVED
                  </span>
                  {" "}
                  <strong>
                    Make the most of your campus experience.
                  </strong>
                </div>
                <a href="/facilities#sports" className="btn-campus-primary">
                  Explore More
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
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
