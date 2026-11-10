import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function WebsiteInchargeCampus() {
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
                  InCharge Campus
                </h1>
                <p>
                  Message from the InCharge Islamabad Campus
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
                    InCharge Campus
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="incharge-message-section">
            <div className="container">
              <div className="row align-items-center g-5">
                <div className="col-lg-5">
                  <div className="incharge-profile">
                    <div className="incharge-profile-image">
                      <img src="data:application/octet-stream;base64," alt="Prof. Dr. Majid Iqbal Khan" />
                      <div className="incharge-profile-overlay"></div>
                    </div>
                    <div className="incharge-profile-card">
                      <div className="incharge-profile-icon">
                        <i className="fa-solid fa-user-tie"></i>
                      </div>
                      <div>
                        <span>
                          Message from Incharge Campus
                        </span>
                        {" "}
                        <strong>
                          Prof. Dr. Majid Iqbal Khan
                        </strong>
                        {" "}
                        <small>
                          COMSATS University Islamabad
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="incharge-message-content">
                    <div className="section-eyebrow">
                      MESSAGE FROM THE INCHARGE
                    </div>
                    <h2>
                      Welcome to
                      {" "}
                      <span>
                        COMSATS Islamabad
                      </span>
                    </h2>
                    <div className="incharge-message">
                      <div className="incharge-quote-icon">
                        <i className="fa-solid fa-quote-left"></i>
                      </div>
                      <p style={{ "margin": "0px 0px 15px", "fontSize": "14.4px", "padding": "0px", "lineHeight": "1.85" }}>
                        <font color="#687a82" face="Segoe UI, sans-serif">
                          <span style={{ "fontSize": "12px" }}>
                            Guided by a distinguished faculty trained at the world's leading universities, our students learn, research, and grow in an environment built for excellence. We are proud to be ranked among Pakistan's top universities, with a thriving research culture, globally connected partnerships, and a strong placement record at leading national and multinational organizations.
                          </span>
                        </font>
                      </p>
                      <p style={{ "margin": "0px 0px 15px", "fontSize": "14.4px", "padding": "0px", "lineHeight": "1.85" }}>
                        <span style={{ "fontSize": "12px", "color": "rgb(104,122,130)", "fontFamily": "\"Segoe UI\",sans-serif" }}>
                          Beyond rankings, what truly defines us is our commitment to the well-being of our students and faculty — fostering a supportive, inclusive, and inspiring community where every individual can flourish.
                        </span>
                      </p>
                      <p style={{ "margin": "0px 0px 15px", "fontSize": "14.4px", "padding": "0px", "lineHeight": "1.85" }}>
                        <span style={{ "fontSize": "12px", "color": "rgb(104,122,130)", "fontFamily": "\"Segoe UI\",sans-serif" }}>
                          To every student who walks through our gates: this is your moment. Dream big, work hard, and know that an entire campus stands behind you.
                        </span>
                      </p>
                      <p style={{ "margin": "0px 0px 15px", "fontSize": "14.4px", "padding": "0px", "lineHeight": "1.85" }}>
                        <span style={{ "fontSize": "12px", "color": "rgb(104,122,130)", "fontFamily": "\"Segoe UI\",sans-serif" }}>
                          <span style={{ "fontWeight": "bolder" }}>
                            May Allah Almighty bless our endeavours and grant us success in serving knowledge, our students, and our nation. Ameen.
                          </span>
                        </span>
                      </p>
                      <p style={{ "fontSize": "clamp(0.98rem,1vw,1.08rem)", "lineHeight": "1.9", "color": "rgb(71,85,105)", "letterSpacing": "0.2px", "textWrap": "pretty", "maxWidth": "75ch", "fontFamily": "Inter,sans-serif" }}>
                        Best regards,
                        <br />
                        <span style={{ "fontWeight": "bolder" }}>
                          Prof. Dr. Majid Iqbal Khan
                          <br />
                          InCharge Islamabad Campus
                          <br />
                          COMSATS University Islamabad.
                        </span>
                      </p>
                    </div>
                    <div className="incharge-signature">
                      <div className="incharge-signature-line"></div>
                      <div>
                        <span>
                          Best regards,
                        </span>
                        {" "}
                        <strong>
                          Prof. Dr. Majid Iqbal Khan
                        </strong>
                        {" "}
                        <small>
                          InCharge Islamabad Campus
                          <br />
                          COMSATS University Islamabad
                        </small>
                      </div>
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
