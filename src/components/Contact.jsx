import { site } from "../siteConfig";

const EXT = { target: "_blank", rel: "noopener noreferrer" };

export default function Contact() {
  return (
    <section className="islamabad-contact-section">
      <div className="container">
        <div className="contact-section-header text-center reveal active">
          <span className="section-tag">GET IN TOUCH</span>
          <h2>
            We&apos;re Here <span>to Help</span>
          </h2>
          <p>Have a question about admissions or the college? Message us on WhatsApp or send an email.</p>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-lg-5">
            <div className="contact-info-panel reveal active">
              <span className="contact-panel-label">LINZ COLLEGE D.I.KHAN</span>
              <h3>Let&apos;s start a conversation.</h3>
              <p className="contact-intro">
                Whether you are a prospective student, parent or visitor, our team is here to assist you with your queries.
              </p>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <span>ADDRESS</span>
                  <p>{site.address}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <span>PHONE</span> <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa-brands fa-whatsapp"></i></div>
                <div>
                  <span>WHATSAPP</span> <a href={site.whatsapp.link} {...EXT}>{site.whatsapp.display}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <span>EMAIL</span> <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
              </div>
              <a href="/contact" className="contact-campus-link">
                Contact Us <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form-panel reveal active">
              <iframe
                title={`${site.name} location map`}
                src={site.map.embed}
                style={{ border: 0, width: "100%", height: "100%", minHeight: 380 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="contact-quick-bar reveal active">
          <div className="contact-quick-item">
            <i className="fa-brands fa-whatsapp"></i>
            <div>
              <strong>Admission Enquiries</strong> <span>Message us on WhatsApp</span>
            </div>
          </div>
          <div className="contact-quick-item">
            <i className="fa-solid fa-map-location-dot"></i>
            <div>
              <strong>Our Location</strong> <span>Main Diyal Road, D.I.Khan</span>
            </div>
          </div>
          <div className="contact-quick-item">
            <i className="fa-solid fa-headset"></i>
            <div>
              <strong>Need Assistance?</strong> <span>Call {site.phone.display}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}