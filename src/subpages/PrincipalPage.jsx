import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function PrincipalPage() {
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
                  Message from the Principal
                </h1>
                <p>
                  A message from Hameed Ramzan Qarni, Principal of Linz College D.I.Khan.
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
                    Message from the Principal
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
                    MESSAGE FROM THE PRINCIPAL
                  </span>
                  <h2>
                    Welcome to Linz College
                  </h2>
                  <p className="rector-intro">
                    Welcome to Linz College D.I.Khan, a residential college in Dera Ismail Khan.
                  </p>
                  <div className="rector-message-text">
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        Linz College was established in 2015 to provide students in D.I.Khan with a residential learning environment. We are proud of the students who learn and grow as part of our college community.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        We believe every student has a spark that only needs the right guidance to shine. Our teachers work closely with students and parents to build a strong academic foundation, good character and the confidence to face the future.
                      </span>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        From Playgroup to Matric, and in FSc Pre-Medical, Pre-Engineering and ICS, our aim is the same: to help every student reach his or her full potential in a focused and caring learning environment.
                      </span>
                    </p>
                    <p>
                      <br />
                    </p>
                    <p>
                      To our students: be curious, work hard and never stop learning. To our parents: thank you for trusting us with your children. We will continue to work with you to give them the best possible education.
                    </p>
                    <p>
                      I invite you to visit our campus, meet our staff and see for yourself how Linz can become a second home for your child.
                    </p>
                    <p>
                    </p>
                    <p>
                    </p>
                    <p>
                    </p>
                    <p>
                      <span style={{ "fontSize": "0.9rem" }}>
                        I pray to Almighty Allah for guidance and success for all our students and their families.
                      </span>
                    </p>
                  </div>
                  <div className="rector-signature">
                    <strong>
                      Hameed Ramzan Qarni
                    </strong>
                    {" "}
                    <span>
                      Principal
                    </span>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="rector-photo-wrap">
                    <div className="rector-photo-pattern"></div>
                    <img src="/images/linz/principal.jpg" alt="Hameed Ramzan Qarni" className="rector-photo" />
                    <div className="rector-photo-caption">
                      <span>
                        Message from the Principal
                      </span>
                      {" "}
                      <strong>
                        Hameed Ramzan Qarni
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
