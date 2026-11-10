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
            Quick access to important information, forms and resources for students and parents.
          </p>
        </div>
        <div className="row g-3 mt-4">
          <div className="col-lg-4 col-md-6">
            <a href="/prospectus" className="useful-link-card reveal active">
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
            <a href="/downloads/admission-form.pdf" rel="noopener" className="useful-link-card reveal active">
              <img src="/images/linz/classroom.jpg" alt="Admission form" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  02
                </span>
                <h3>
                  Admission Form
                </h3>
                <p>
                  Download the admission form and apply to Linz College.
                </p>
                <span className="useful-link-action">
                  Download
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-md-6">
            <a href="https://wa.me/923424803706" rel="noopener" className="useful-link-card reveal active">
              <img src="/images/linz/students.jpg" alt="WhatsApp enquiry" loading="lazy" />
              <div className="useful-link-overlay"></div>
              <div className="useful-link-content">
                <span className="useful-link-number">
                  03
                </span>
                <h3>
                  WhatsApp Us
                </h3>
                <p>
                  Message us for admission and general enquiries.
                </p>
                <span className="useful-link-action">
                  Message Us
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
                  Library, science labs, sports, cafeteria and hostel.
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
              <img src="/images/linz/sports.jpg" alt="Linz College on TikTok" loading="lazy" />
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
