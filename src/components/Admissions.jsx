export default function Admissions() {
  return (
    <section className="islamabad-admissions-section" id="admissions">
      <div className="container">
        <div className="islamabad-section-header text-center reveal active">
          <span className="section-tag">
            ADMISSIONS
          </span>
          <h2>
            Start Your
            {" "}
            <span>
              Journey With Us
            </span>
          </h2>
          <p>
            Explore our programs, admission information and resources to take the next step toward your future at Linz College D.I.Khan.
          </p>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-lg-4">
            <div className="admission-path-card admission-ug reveal active">
              <div className="admission-card-top">
                <div className="admission-icon">
                  <i className="fa-solid fa-user-graduate"></i>
                </div>
                <span className="admission-number">
                  01
                </span>
              </div>
              <div className="admission-card-content">
                <span className="admission-label">
                  SCHOOL
                </span>
                <h3>
                  Begin Your Academic Journey
                </h3>
                <p>
                  From Playgroup to Matric, build a strong foundation for your future in a focused learning environment.
                </p>
              </div>
              <a href="/academics" rel="noopener" className="admission-card-link">
                Explore School Section
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="admission-path-card admission-graduate reveal active">
              <div className="admission-card-top">
                <div className="admission-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <span className="admission-number">
                  02
                </span>
              </div>
              <div className="admission-card-content">
                <span className="admission-label">
                  FSc
                </span>
                <h3>
                  Choose Your Stream
                </h3>
                <p>
                  FSc Pre-Medical and Pre-Engineering prepare students for the next step in higher education.
                </p>
              </div>
              <a href="/academics" rel="noopener" className="admission-card-link">
                Explore FSc Programs
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="admission-path-card admission-phd reveal active">
              <div className="admission-card-top">
                <div className="admission-icon">
                  <i className="fa-solid fa-flask-vial"></i>
                </div>
                <span className="admission-number">
                  03
                </span>
              </div>
              <div className="admission-card-content">
                <span className="admission-label">
                  ICS
                </span>
                <h3>
                  Learn Computer Science
                </h3>
                <p>
                  Intermediate in Computer Science (ICS) for students who want to build skills in computing.
                </p>
              </div>
              <a href="/academics" rel="noopener" className="admission-card-link">
                Explore ICS
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="admission-resources reveal active">
          <div className="admission-resource-heading">
            <span>
              ADMISSION RESOURCES
            </span>
            <h3>
              Everything You Need to Apply
            </h3>
          </div>
          <div className="admission-resource-links">
            <a href="/downloads/prospectus.pdf" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-lines"></i>
              {" "}
              <span>
                Prospectus
              </span>
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            {" "}
            <a href="/admissions" rel="noopener">
              <i className="fa-solid fa-list-check"></i>
              {" "}
              <span>
                Admission Information
              </span>
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            {" "}
            <a href="/downloads/admission-form.pdf">
              <i className="fa-solid fa-money-check-dollar"></i>
              {" "}
              <span>
                Admission Form (PDF)
              </span>
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            {" "}
            <a href="https://wa.me/923424803706" rel="noopener">
              <i className="fa-solid fa-globe"></i>
              {" "}
              <span>
                Admission Enquiry (WhatsApp)
              </span>
              {" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
          <div className="admission-apply">
            <div>
              <strong>
                Ready to take the next step?
              </strong>
              {" "}
              <span>
                Download the admission form, or message us on WhatsApp for admission details.
              </span>
            </div>
            <a href="https://wa.me/923424803706" rel="noopener" className="admission-apply-btn">
              WhatsApp Us
              {" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
