import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteComsatsCafeteria() {
  return (
    <>
      <form method="post" data-sf-nesting-track-id="1.1">
        <Header />
        <main>
          <section className="inner-page-hero student-service-hero">
            <div className="container">
              <div className="inner-page-hero-content">
                <span className="inner-page-eyebrow">
                  COMSATS UNIVERSITY ISLAMABAD
                </span>
                <h1>
                  Student Service Center
                </h1>
                <p>
                  Quality Food, Comfortable Spaces &amp; Everyday Convenience
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <a href="/campus-life">
                    Campus Life
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Student Service Center
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="student-service-intro">
            <div className="container">
              <div className="student-service-intro-grid">
                <div className="student-service-image">
                  <div className="student-service-image-wrap">
                    <img src="/images/img-b3d287094a.jpg" alt="COMSATS Student Service Center" />
                    <div className="student-service-image-label">
                      <span>
                        CAMPUS DINING
                      </span>
                      {" "}
                      Student Service Center
                    </div>
                  </div>
                </div>
                <div className="student-service-content">
                  <div className="section-eyebrow">
                    FOOD &amp; STUDENT SERVICES
                  </div>
                  <h2>
                    A Place to
                    {" "}
                    <span>
                      Relax &amp; Refresh
                    </span>
                  </h2>
                  <p>
                    A food-street style catering service consisting of shops and kiosks having a wide range of quality snacks and meals, at modest prices, is available throughout the day on the Campus.
                  </p>
                  <p>
                    Students can relax and enjoy their breaks over a cup of coffee or tea.
                  </p>
                  <div className="student-service-highlight">
                    <div className="student-service-highlight-icon">
                      <i className="fa-solid fa-utensils"></i>
                    </div>
                    <div>
                      <strong>
                        Wide Range of Food Options
                      </strong>
                      {" "}
                      <span>
                        Quality snacks and meals available throughout the day.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="student-foodhall-section">
            <div className="container">
              <div className="student-foodhall-card">
                <div className="student-foodhall-content">
                  <div className="section-eyebrow">
                    FACULTY &amp; VISITORS
                  </div>
                  <h2>
                    State-of-the-Art
                    {" "}
                    <span>
                      Food Hall
                    </span>
                  </h2>
                  <p>
                    For faculty members and visitors, a state-of-the-art food hall has been established, where a variety of hot meals are available on a self-service basis.
                  </p>
                  <p>
                    The food hall provides a clean and relaxing environment where quality meals are available at subsidized rates.
                  </p>
                  <div className="foodhall-features">
                    <div className="foodhall-feature">
                      <div className="foodhall-feature-icon">
                        <i className="fa-solid fa-bowl-food"></i>
                      </div>
                      <div>
                        <strong>
                          Hot Meals
                        </strong>
                        {" "}
                        <span>
                          Variety of meals available
                        </span>
                      </div>
                    </div>
                    <div className="foodhall-feature">
                      <div className="foodhall-feature-icon">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                      </div>
                      <div>
                        <strong>
                          Subsidized Rates
                        </strong>
                        {" "}
                        <span>
                          Affordable dining options
                        </span>
                      </div>
                    </div>
                    <div className="foodhall-feature">
                      <div className="foodhall-feature-icon">
                        <i className="fa-solid fa-chair"></i>
                      </div>
                      <div>
                        <strong>
                          Relaxing Environment
                        </strong>
                        {" "}
                        <span>
                          Clean and comfortable setting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="student-foodhall-visual">
                  <div className="student-foodhall-visual-inner">
                    <i className="fa-solid fa-utensils"></i>
                    {" "}
                    <span>
                      FOOD HALL
                    </span>
                    {" "}
                    <strong>
                      Eat. Relax. Connect.
                    </strong>
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
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "left": "-1px", "position": "absolute" }}></table>
    </>
  );
}
