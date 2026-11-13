export default function Welcome() {
  return (
    <section className="islamabad-welcome-section" id="welcome">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="islamabad-welcome-visual reveal active">
              <div className="welcome-image-main">
                <img src="/images/linz/building.jpg" alt="Linz College D.I.Khan campus" />
              </div>
              <div className="welcome-experience">
                <strong>
                  10+
                </strong>
                {" "}
                <span>
                  Years of
                  <br />
                  Excellence
                </span>
              </div>
              <div className="welcome-decoration"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="islamabad-welcome-content reveal active">
              <span className="section-tag">
                LINZ COLLEGE D.I.KHAN
              </span>
              <h2>
                A Place to
                {" "}
                <span>
                  Learn, Discover &amp; Lead.
                </span>
              </h2>
              <p className="welcome-intro">
                Linz College D.I.Khan is a residential college in Dera Ismail Khan, offering education from Playgroup to FSc.
              </p>
              <p>
                Established in 2015, the college offers a residential learning environment for students from D.I.Khan and nearby areas.
              </p>
              <div className="welcome-highlights">
                <div className="welcome-highlight">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h4>
                      Academic Excellence
                    </h4>
                    <span>
                      Education from Playgroup to Matric, plus FSc Pre-Medical, Pre-Engineering and ICS.
                    </span>
                  </div>
                </div>
                <div className="welcome-highlight">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-microscope"></i>
                  </div>
                  <div>
                    <h4>
                      Science &amp; Computer Labs
                    </h4>
                    <span>
                      Physics, Chemistry, Biology and Computer labs for hands-on learning.
                    </span>
                  </div>
                </div>
                <div className="welcome-highlight">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div>
                    <h4>
                      Vibrant Campus Life
                    </h4>
                    <span>
                      Sports, events and activities for a complete student experience.
                    </span>
                  </div>
                </div>
                <div className="welcome-highlight">
                  <div className="highlight-icon">
                    <i className="fa-solid fa-person-dress"></i>
                  </div>
                  <div>
                    <h4>
                      Separate Female Section
                    </h4>
                    <span>
                      A dedicated female section is available at Linz College.
                    </span>
                  </div>
                </div>
              </div>
              <a href="/about" className="welcome-btn">
                Discover Linz College
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="islamabad-welcome-stats reveal active">
          <div className="welcome-stat">
            <i className="fa-solid fa-building-columns"></i>
            <div>
              <strong>
                2015
              </strong>
              {" "}
              <span>
                Established
              </span>
            </div>
          </div>
          <div className="welcome-stat-divider"></div>
          <div className="welcome-stat">
            <i className="fa-solid fa-flask"></i>
            <div>
              <strong>
                4
              </strong>
              {" "}
              <span>
                Science &amp; Computer Labs
              </span>
            </div>
          </div>
          <div className="welcome-stat-divider"></div>
          <div className="welcome-stat">
            <i className="fa-solid fa-users"></i>
            <div>
              <strong>
                3
              </strong>
              {" "}
              <span>
                Intermediate Programs
              </span>
            </div>
          </div>
          <div className="welcome-stat-divider"></div>
          <div className="welcome-stat">
            <i className="fa-solid fa-certificate"></i>
            <div>
              <strong>
                Residential
              </strong>
              {" "}
              <span>
                Campus
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
