import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteRectorComsats() {
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
                  Message from Rector
                </h1>
                <p>
                  Message, leadership, office functions and responsibilities of the Rector of COMSATS University Islamabad.
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
                    Message from Rector
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="rector-message-section rector-light-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-7">
                  <span className="rector-section-label">
                    MESSAGE FROM THE RECTOR
                  </span>
                  <h2>
                    Message by Message from Rector
                  </h2>
                  <p className="rector-intro">
                    Welcome to COMSATS University Islamabad (CUI) — a forward-looking, multi-campus public university shaping the future of education, research, and innovation in Pakistan and beyond.
                  </p>
                  <div className="rector-message-text">
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        As Rector of this distinguished institution, spanning seven campuses across the country, it is both an honour and a responsibility to lead a university where knowledge transcends boundaries and potential is transformed into impact. CUI stands at the intersection of academic excellence, technological advancement, and societal responsibility.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        At COMSATS University Islamabad, we are committed to cultivating an ecosystem that champions creativity, critical inquiry, interdisciplinary thinking, and lifelong learning. Our academic rigor is purposefully aligned with the development of ethical, socially responsible, and globally competitive individuals—graduates who not only excel professionally but also contribute meaningfully to society.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        As you explore our digital presence, you will encounter the breadth and depth of CUI’s diverse academic programs, cutting-edge research initiatives, industry linkages, and a vibrant campus life set within our lush green environments. Whether you are a prospective student, an academic collaborator, an industry partner, or a visitor seeking insight into our vision, we invite you to engage deeply and discover the distinctive COMSATS experience.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      CUI is more than an institution of higher learning; it is a dynamic community of scholars, innovators, researchers, and professionals united by a shared mission—to generate knowledge, advance technology, and address real-world challenges. Our pursuit of excellence extends far beyond classrooms and laboratories, embedding resilience, leadership, and adaptability in everything we do.
                    </p>
                    <p>
                      In response to the evolving demands of the Fifth Industrial Revolution, COMSATS University Islamabad emphasizes human-centric, sustainable, and ethically grounded education that integrates advanced technologies with societal needs. Our academic and research programs equip graduates with future-ready skills, adaptability, and leadership capacity, enabling them to collaborate effectively with intelligent technologies while addressing complex economic, environmental, and social challenges. Through this approach, CUI prepares its graduates to compete globally and contribute responsibly to inclusive and sustainable development.
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        To our students, faculty, and staff: I encourage you to embrace ambition, curiosity, and collaboration. Every member of the CUI community plays a vital role in shaping our collective future. Our faculty, administration, and support systems remain fully committed to enabling your academic, professional, and personal growth.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        I am confident that you will be inspired by the achievements, distinguished faculty, research output, and world-class infrastructure of COMSATS University Islamabad. Your engagement and feedback are invaluable as we continue to refine our mission of developing true professionals and global leaders in thought and action.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        Thank you for choosing COMSATS University Islamabad as your partner in education, research, and innovation. Together, let us shape a future driven by knowledge, excellence, and a shared commitment to national and global progress.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        I pray to Almighty Allah for guidance and success in our collective endeavours and look forward to even greater achievements in the years ahead.
                      </span>
                    </p>
                  </div>
                  <div className="rector-signature">
                    <strong>
                      Prof. Dr. Raheel Qamar
                    </strong>
                    {" "}
                    <span>
                      Rector
                    </span>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="rector-photo-wrap">
                    <div className="rector-photo-pattern"></div>
                    <img src="data:application/octet-stream;base64," alt="Prof. Dr. Raheel Qamar" className="rector-photo" />
                    <div className="rector-photo-caption">
                      <span>
                        Message from Rector
                      </span>
                      {" "}
                      <strong>
                        Prof. Dr. Raheel Qamar
                      </strong>
                    </div>
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
      <table cellSpacing="0" cellPadding="0" role="presentation" className="gstl_50 gssb_c" style={{ "width": "2px", "display": "none", "top": "0px", "position": "absolute", "left": "-1px" }}></table>
    </>
  );
}
