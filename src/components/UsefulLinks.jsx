export default function UsefulLinks() {
  return (
    <section className="islamabad-useful-links">
      <div className="container">
        <div className="useful-links-header text-center reveal active">
          <span className="section-tag">
            QUICK RESOURCES
          </span>
          <h2>
            Useful
            {" "}
            <span>
              Links
            </span>
          </h2>
          <p>
            Quick access to key college information for students and parents.
          </p>
        </div>
        <div className="row g-3 mt-4">
          <div className="col-lg-4 col-md-6">
            <a href="/downloads/prospectus.pdf" target="_blank" rel="noopener noreferrer" className="useful-link-card reveal active">
              <img src="/images/linz/building.jpg" alt="Linz College prospectus" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  01
                </span>
                <h3>
                  Prospectus
                </h3>
                <p>
                  Explore our programs, college information and admission details.
                </p>
                <span className="useful-link-action">
                  Read More
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/admissions" className="useful-link-card reveal active">
              <img src="/images/linz/classroom.jpg" alt="Classroom at Linz College" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  02
                </span>
                <h3>
                  Admissions
                </h3>
                <p>
                  Find admission information and learn how to apply to Linz College.
                </p>
                <span className="useful-link-action">
                  Explore Admissions
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/academics" className="useful-link-card reveal active">
              <img src="/images/linz/lab-computer.jpg" alt="Linz College academic programs" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  03
                </span>
                <h3>
                  Academics
                </h3>
                <p>
                  Explore school classes, Intermediate programs and learning facilities.
                </p>
                <span className="useful-link-action">
                  Explore Academics
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/facilities" rel="noopener" className="useful-link-card reveal active">
              <img src="/images/linz/library.jpg" alt="Facilities" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  04
                </span>
                <h3>
                  Facilities
                </h3>
                <p>
                  Separate female section, library, labs, sports, cafeteria and hostel.
                </p>
                <span className="useful-link-action">
                  Explore
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="/faq" className="useful-link-card reveal active">
              <img src="/images/linz/lab-computer.jpg" alt="FAQs" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  05
                </span>
                <h3>
                  FAQs
                </h3>
                <p>
                  Answers to common questions about admissions and the college.
                </p>
                <span className="useful-link-action">
                  Read FAQs
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://www.tiktok.com/@linz.college.d.i" target="_blank" rel="noopener" className="useful-link-card reveal active">
              <img src="/images/linz/sports.jpg" alt="Linz College students at a campus event" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  06
                </span>
                <h3>
                  Follow Us
                </h3>
                <p>
                  Watch campus highlights and updates on our TikTok and Instagram pages.
                </p>
                <span className="useful-link-action">
                  Visit TikTok
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
