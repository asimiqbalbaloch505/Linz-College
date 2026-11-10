export default function Library() {
  return (
    <section className="islamabad-library-section" id="library">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="library-content reveal active">
              <span className="section-tag">
                KNOWLEDGE RESOURCES
              </span>
              <h2>
                A Library for
                {" "}
                <span>
                  Curious Minds
                </span>
              </h2>
              <p className="library-intro">
                The Linz College library is an important part of student life, offering books and a quiet environment for study, reading and personal growth.
              </p>
              <div className="library-highlights">
                <div className="library-highlight">
                  <div className="library-highlight-icon">
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <div>
                    <strong>
                      Books &amp; Reading
                    </strong>
                    {" "}
                    <span>
                      A collection of books and study material for students.
                    </span>
                  </div>
                </div>
                <div className="library-highlight">
                  <div className="library-highlight-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div>
                    <strong>
                      Study Support
                    </strong>
                    {" "}
                    <span>
                      A place to find reference books and study material for school and college classes.
                    </span>
                  </div>
                </div>
                <div className="library-highlight">
                  <div className="library-highlight-icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div>
                    <strong>
                      Learning Environment
                    </strong>
                    {" "}
                    <span>
                      A dedicated environment for study, learning and academic growth.
                    </span>
                  </div>
                </div>
              </div>
              <div className="library-buttons">
                <a href="/facilities#library" className="library-primary-btn">
                  Explore Library
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
                {" "}
                <a href="/facilities" target="_blank" rel="noopener" className="library-secondary-btn">
                  See Facilities
                  {" "}
                  <i className="fa-solid fa-vr-cardboard"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="library-visual reveal active">
              <div className="library-main-image">
                <img src="/images/linz/library.jpg" alt="Linz College library" />
              </div>
              <div className="library-floating-card">
                <div className="library-floating-icon">
                  <i className="fa-solid fa-book-open-reader"></i>
                </div>
                <div>
                  <span>
                    LINZ COLLEGE LIBRARY
                  </span>
                  {" "}
                  <strong>
                    Learn. Explore. Discover.
                  </strong>
                </div>
              </div>
              <div className="library-decoration"></div>
            </div>
          </div>
        </div>
        <div className="library-resource-bar reveal active">
          <a href="/facilities#library">
            <i className="fa-solid fa-book"></i>
            {" "}
            <span>
              Library
            </span>
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/facilities#labs">
            <i className="fa-solid fa-database"></i>
            {" "}
            <span>
              Science Labs
            </span>
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/facilities#sports">
            <i className="fa-solid fa-newspaper"></i>
            {" "}
            <span>
              Sports
            </span>
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/facilities#hostel">
            <i className="fa-solid fa-headset"></i>
            {" "}
            <span>
              Hostel
            </span>
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
