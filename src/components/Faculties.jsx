export default function Faculties() {
  return (
    <section id="faculty" className="islamabad-faculties-section">
      <span id="programs" className="faculty-anchor" />
      <span id="school" className="faculty-anchor" />
      <span id="playgroup" className="faculty-anchor" />
      <span id="middle" className="faculty-anchor" />
      <span id="matric" className="faculty-anchor" />
      <span id="college" className="faculty-anchor" />
      <span id="intermediate" className="faculty-anchor" />
      <span id="pre-medical" className="faculty-anchor" />
      <span id="pre-engineering" className="faculty-anchor" />
      <span id="ics" className="faculty-anchor" />
      <span id="labs" className="faculty-anchor" />
      <div className="container">
        <div className="islamabad-section-header text-center reveal active">
          <span className="section-tag">
            ACADEMICS
          </span>
          <h2>
            Programs &amp;
            {" "}
            <span>
              Learning
            </span>
          </h2>
          <p>
            Explore school classes, Intermediate programs and learning facilities at Linz College D.I.Khan.
          </p>
        </div>
        <div className="row g-4 mt-4 justify-content-center align-items-stretch">
          <div className="col-lg-4 col-md-6">
            <div className="faculty-modern-card faculty-architecture reveal active">
              <div className="faculty-card-header">
                <div className="faculty-icon">
                  <i className="fa-solid fa-school"></i>
                </div>
                <div className="faculty-title">
                  <span>
                    SCHOOL
                  </span>
                  <h3>
                    School Section
                  </h3>
                </div>
              </div>
              <div className="faculty-departments">
                <div className="department-item">
                  <span><i className="fa-solid fa-child"></i> Playgroup &amp; Primary</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="department-item">
                  <span><i className="fa-solid fa-book-open"></i> Middle Section</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="department-item">
                  <span><i className="fa-solid fa-book"></i> Matric (SSC)</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="faculty-card-footer">
                <span>
                  Playgroup to Matric
                </span>
                <a href="/admissions">
                  Explore
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="faculty-modern-card faculty-business reveal active">
              <div className="faculty-card-header">
                <div className="faculty-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className="faculty-title">
                  <span>
                    INTERMEDIATE
                  </span>
                  <h3>
                    College Programs
                  </h3>
                </div>
              </div>
              <div className="faculty-departments">
                <div className="department-item">
                  <span><i className="fa-solid fa-flask"></i> FSc Pre-Medical</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="department-item">
                  <span><i className="fa-solid fa-atom"></i> FSc Pre-Engineering</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className="department-item">
                  <span><i className="fa-solid fa-laptop-code"></i> ICS</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="faculty-card-footer">
                <span>
                  3 Programs
                </span>
                <a href="/admissions">
                  Explore
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="faculty-modern-card faculty-engineering reveal active">
              <div className="faculty-card-header">
                <div className="faculty-icon">
                  <i className="fa-solid fa-flask-vial"></i>
                </div>
                <div className="faculty-title">
                  <span>
                    LEARNING FACILITIES
                  </span>
                  <h3>
                    Science &amp; Computer Labs
                  </h3>
                </div>
              </div>
              <div className="faculty-departments">
                <a href="/facilities#labs" className="department-item">
                  <span><i className="fa-solid fa-atom"></i> Physics</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="/facilities#labs" className="department-item">
                  <span><i className="fa-solid fa-vial"></i> Chemistry</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="/facilities#labs" className="department-item">
                  <span><i className="fa-solid fa-dna"></i> Biology</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <a href="/facilities#labs" className="department-item">
                  <span><i className="fa-solid fa-computer"></i> Computer</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="faculty-card-footer">
                <span>
                  4 Labs
                </span>
                <a href="/facilities#labs">
                  Explore
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
