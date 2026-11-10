import { site } from "../siteConfig";

const SOCIALS = [
  ["tiktok", "TikTok", "fa-brands fa-tiktok"],
  ["instagram", "Instagram", "fa-brands fa-instagram"],
  ["facebook", "Facebook", "fa-brands fa-facebook-f"],
  ["youtube", "YouTube", "fa-brands fa-youtube"],
];
const EXT = { target: "_blank", rel: "noopener noreferrer" };

export default function Footer() {
  return (
    <footer>
      <footer className="islamabad-footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="footer-brand">
                <a href="/" className="footer-logo">
                  <img src={site.logo} alt={site.name} style={{ background: "#fff", borderRadius: 14, padding: 6, height: 72, width: "auto" }} />
                </a>
                <h3>{site.name}</h3>
                <span className="footer-campus">Residential Campus · Est. {site.established}</span>
                <p>Quality education from Playgroup to FSc, affiliated with {site.board}.</p>
                <div className="footer-social">
                  {SOCIALS.filter(([k]) => site.social[k]).map(([k, label, icon]) => (
                    <a key={k} href={site.social[k]} {...EXT} aria-label={label}>
                      <i className={icon}></i>
                    </a>
                  ))}
                  <a href={site.whatsapp.link} {...EXT} aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/academics">Academics</a></li>
                  <li><a href="/admissions">Admissions</a></li>
                  <li><a href="/campus-life">Campus Life</a></li>
                  <li><a href="/news">News &amp; Events</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/prospectus">Prospectus</a></li>
                  <li><a href={site.downloads.admissionForm} {...EXT}>Admission Form (PDF)</a></li>
                  <li><a href="/facilities">Facilities</a></li>
                  <li><a href="/principal">Principal&apos;s Message</a></li>
                  <li><a href="/faq">FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-column footer-contact">
                <h4>Contact Us</h4>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-location-dot"></i> <span>{site.address}</span>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-envelope"></i> <a href={`mailto:${site.email}`}>{site.email}</a>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-solid fa-phone"></i> <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
                </div>
                <div className="footer-contact-item">
                  <i className="fa-brands fa-whatsapp"></i> <a href={site.whatsapp.link} {...EXT}>{site.whatsapp.display}</a>
                </div>
                <a href="/contact" className="footer-contact-btn">
                  Contact Us <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div>
              <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );
}