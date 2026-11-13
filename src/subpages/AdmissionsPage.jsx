import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function AdmissionsPage() {
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
                  Admissions
                </h1>
                <p>
                  Download the admission form, or message us on WhatsApp.
                </p>
                <div className="inner-page-breadcrumb">
                  <a href="/">
                    Home
                  </a>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                  {" "}
                  <span>
                    Admissions
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="admission-snapshot-section">
            <div className="container">
              <div className="admission-snapshot-header">
                <div className="section-eyebrow">
                  ADMISSIONS AT A GLANCE
                </div>
                <h2>
                  Your Journey Starts Here
                </h2>
                <p>
                  Explore the opportunities waiting for you at Linz College D.I.Khan.
                </p>
              </div>
              <div className="admission-stats-strip">
                <div className="admission-stat">
                  <div className="admission-stat-icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="admission-stat-content">
                    <div className="admission-stat-number">
                      2015
                    </div>
                    <div className="admission-stat-title">
                      Established
                    </div>
                  </div>
                </div>
                <div className="admission-stat">
                  <div className="admission-stat-icon">
                    <i className="fa-solid fa-user-graduate"></i>
                  </div>
                  <div className="admission-stat-content">
                    <div className="admission-stat-number">
                      4
                    </div>
                    <div className="admission-stat-title">
                      Science &amp; Computer Labs
                    </div>
                  </div>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="/downloads/admission-form.pdf" className="admission-stat admission-stat-link">
                  <div className="admission-stat-icon admission-stat-icon-gold">
                    <i className="fa-solid fa-chart-column"></i>
                  </div>
                  <div className="admission-stat-content">
                    <div className="admission-stat-link-title">
                      Admission Form
                    </div>
                    <div className="admission-stat-link-text">
                      Download PDF
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right admission-stat-arrow"></i>
                </a>
              </div>
            </div>
          </section>
          <section className="admissions-welcome-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-5">
                  <div className="admissions-welcome-visual admissions-open-visual">
                    <img src="/images/linz/building.jpg" alt="Linz College campus building" />
                    <div className="admissions-welcome-accent"></div>
                    <div className="admissions-welcome-badge">
                      <i className="fa-solid fa-graduation-cap"></i>
                      <div>
                        <span>
                          LINZ COLLEGE D.I.KHAN
                        </span>
                        {" "}
                        <strong>
                          Your Future Starts Here
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="admissions-welcome-content">
                    <div className="section-eyebrow">
                      BEGIN YOUR JOURNEY
                    </div>
                    <h2>
                      Your Journey
                      {" "}
                      <span>
                        Starts Here
                      </span>
                    </h2>
                    <p className="admissions-welcome-intro">
                      Linz College welcomes students who want a quality education in a residential campus, from Playgroup to FSc.
                    </p>
                    <p>
                      At Linz College, students become part of a caring academic community where learning, character and personal growth come together. Explore our programs and take the first step towards your future.
                    </p>
                    <div className="admissions-welcome-highlights">
                      <div className="welcome-highlight">
                        <div className="welcome-highlight-icon">
                          <i className="fa-solid fa-medal"></i>
                        </div>
                        <div>
                          <strong>
                            Quality Education
                          </strong>
                          {" "}
                          <span>
                            Playgroup to Matric and FSc
                          </span>
                        </div>
                      </div>
                      <div className="welcome-highlight">
                        <div className="welcome-highlight-icon">
                          <i className="fa-solid fa-users"></i>
                        </div>
                        <div>
                          <strong>
                            Residential Campus
                          </strong>
                          {" "}
                          <span>
                            A place to study and stay
                          </span>
                        </div>
                      </div>
                      <div className="welcome-highlight">
                        <div className="welcome-highlight-icon">
                          <i className="fa-solid fa-arrow-up-right-dots"></i>
                        </div>
                        <div>
                          <strong>
                            Science Labs
                          </strong>
                          {" "}
                          <span>
                            Physics, Chemistry, Biology and Computer
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="#admission-options" className="btn-campus-primary">
                      Explore Admission Options
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="admissions-options-section" id="admission-options">
            <div className="container">
              <div className="admissions-options-heading">
                <div className="section-eyebrow">
                  FIND YOUR PATH
                </div>
                <h2>
                  Explore Admissions
                </h2>
                <p>
                  Choose the program that matches your goals and take the next step towards your future.
                </p>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <a href="/academics" className="admission-path-card">
                    <div className="admission-path-top">
                      <div className="admission-path-icon">
                        <i className="fa-solid fa-graduation-cap"></i>
                      </div>
                      <span className="admission-path-number">
                        01
                      </span>
                    </div>
                    <h3>
                      School
                    </h3>
                    <p>
                      Playgroup, Primary, Middle and Matric (SSC) classes in a focused learning environment.
                    </p>
                    <div className="admission-path-link">
                      Explore Programs
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="/academics" className="admission-path-card">
                    <div className="admission-path-top">
                      <div className="admission-path-icon">
                        <i className="fa-solid fa-user-graduate"></i>
                      </div>
                      <span className="admission-path-number">
                        02
                      </span>
                    </div>
                    <h3>
                      FSc
                    </h3>
                    <p>
                      FSc Pre-Medical and Pre-Engineering for students who are preparing for higher education.
                    </p>
                    <div className="admission-path-link">
                      Explore Programs
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="/academics" className="admission-path-card">
                    <div className="admission-path-top">
                      <div className="admission-path-icon">
                        <i className="fa-solid fa-microscope"></i>
                      </div>
                      <span className="admission-path-number">
                        03
                      </span>
                    </div>
                    <h3>
                      ICS
                    </h3>
                    <p>
                      Intermediate in Computer Science (ICS) for students who want to build skills in computing.
                    </p>
                    <div className="admission-path-link">
                      Explore Programs
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="admission-resources">
                <div className="admission-resources-title">
                  <span>
                    ADMISSION RESOURCES
                  </span>
                  <p>
                    Everything you need to plan your application.
                  </p>
                </div>
                <div className="admission-resource-links">
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923424803706">
                    <i className="fa-solid fa-file-invoice-dollar"></i>
                    {" "}
                    Fee Details (WhatsApp)
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  {" "}
                  <a href="/downloads/prospectus.pdf" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-book-open"></i>
                    {" "}
                    Prospectus
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  {" "}
                  <a target="_blank" rel="noopener noreferrer" href="/downloads/admission-form.pdf">
                    <i className="fa-solid fa-rotate-left"></i>
                    {" "}
                    Admission Form
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  {" "}
                  <a href="/faq">
                    <i className="fa-solid fa-globe"></i>
                    {" "}
                    FAQs
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  {" "}
                  <a href="/contact">
                    <i className="fa-solid fa-list-check"></i>
                    {" "}
                    Contact Us
                    {" "}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="admissions-apply-cta">
                <div>
                  <span>
                    READY TO TAKE THE NEXT STEP?
                  </span>
                  <h3>
                    Apply to Linz College
                  </h3>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="/downloads/admission-form.pdf" className="btn-campus-primary">
                  Download Admission Form
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </section>
          <section className="why-cui-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-6">
                  <div className="why-cui-content">
                    <div className="section-eyebrow">
                      WHY LINZ
                    </div>
                    <h2>
                      More Than a
                      {" "}
                      <span>
                        College
                      </span>
                    </h2>
                    <p className="why-cui-intro">
                      Join a caring college community in D.I.Khan and discover opportunities that help every student reach his or her potential.
                    </p>
                    <p>
                      At Linz College, students learn from dedicated teachers in every department, from sciences to languages, and become part of an environment that encourages learning and growth.
                    </p>
                    <div className="why-cui-highlights">
                      <div className="why-cui-item">
                        <div className="why-cui-icon">
                          <i className="fa-solid fa-chalkboard-user"></i>
                        </div>
                        <div>
                          <strong>
                            Dedicated Teachers
                          </strong>
                          {" "}
                          <span>
                            Teachers for every department.
                          </span>
                        </div>
                      </div>
                      <div className="why-cui-item">
                        <div className="why-cui-icon">
                          <i className="fa-solid fa-users"></i>
                        </div>
                        <div>
                          <strong>
                            Residential Campus
                          </strong>
                          {" "}
                          <span>
                            A place to study and stay.
                          </span>
                        </div>
                      </div>
                      <div className="why-cui-item">
                        <div className="why-cui-icon">
                          <i className="fa-solid fa-rocket"></i>
                        </div>
                        <div>
                          <strong>
                            Labs &amp; Library
                          </strong>
                          {" "}
                          <span>
                            Hands-on learning and quiet study.
                          </span>
                        </div>
                      </div>
                    </div>
                    <a href="/about" className="btn-campus-primary">
                      Discover Linz
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="why-cui-visual">
                    <img src="/images/linz/students.jpg" alt="Linz College students learning together" />
                    <div className="why-cui-overlay">
                      <div className="why-cui-overlay-icon">
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div>
                        <span>
                          LINZ COLLEGE
                        </span>
                        {" "}
                        <strong>
                          Shape Your Future
                        </strong>
                      </div>
                    </div>
                    <div className="why-cui-accent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="admissions-help-section">
            <div className="container">
              <div className="admissions-help-heading">
                <div className="section-eyebrow">
                  NEED HELP?
                </div>
                <h2>
                  We're Here to
                  {" "}
                  <span>
                    Help You
                  </span>
                </h2>
                <p>
                  Find answers to common questions, or message us on WhatsApp for admission help.
                </p>
              </div>
              <div className="row g-3">
                <div className="col-lg-4 col-md-6">
                  <a href="/faq" className="admission-help-card">
                    <div className="admission-help-card-top">
                      <div className="admission-help-icon">
                        <i className="fa-solid fa-circle-question"></i>
                      </div>
                      <span className="admission-help-number">
                        01
                      </span>
                    </div>
                    <h3>
                      Frequently Asked Questions
                    </h3>
                    <p>
                      Find answers to common questions about admissions, programs and the college.
                    </p>
                    <div className="admission-help-link">
                      View FAQs
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923424803706" className="admission-help-card">
                    <div className="admission-help-card-top">
                      <div className="admission-help-icon">
                        <i className="fa-solid fa-circle-play"></i>
                      </div>
                      <span className="admission-help-number">
                        02
                      </span>
                    </div>
                    <h3>
                      WhatsApp Enquiry
                    </h3>
                    <p>
                      Message us for admission information, fees and other details.
                    </p>
                    <div className="admission-help-link">
                      Message Us
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4 col-md-6">
                  <a href="#" className="admission-help-card">
                    <div className="admission-help-card-top">
                      <div className="admission-help-icon">
                        <i className="fa-solid fa-street-view"></i>
                      </div>
                      <span className="admission-help-number">
                        03
                      </span>
                    </div>
                    <h3>
                      Visit Our Campus
                    </h3>
                    <p>
                      Call us or message us to arrange a visit to Linz College D.I.Khan.
                    </p>
                    <div className="admission-help-link">
                      Main Diyal Road, D.I.Khan
                      {" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
              <div className="admission-help-bottom">
                <div className="admission-help-bottom-icon">
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div>
                  <span>
                    STILL HAVE QUESTIONS?
                  </span>
                  {" "}
                  <strong>
                    Our admissions team is here to assist you.
                  </strong>
                </div>
                <a href="/contact" className="admission-help-contact">
                  Contact Admissions
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
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "left": "-1px", "position": "absolute" }}></table>
    </>
  );
}
