import { useState, useEffect, useRef } from "react";
import { site } from "../siteConfig";

const EXT = { target: "_blank", rel: "noopener noreferrer" };

function Col({ title, items, cls }) {
  return (
    <div className={cls}>
      <h6>{title}</h6>
      {items.map(([label, href, ext]) => (
        <a key={label} href={href} {...(ext ? EXT : {})}>
          {label}
        </a>
      ))}
    </div>
  );
}

function MegaHeader({ title, badge }) {
  return (
    <>
      <div className="mega-header">
        <span className="text-uppercase">{title}</span> <span className="badge-programs">{badge}</span>
      </div>
      <hr className="m-0" />
    </>
  );
}

function MegaFooter({ href, text, note }) {
  return (
    <div className="mega-footer">
      <a href={href}>{text}</a> <small>{note}</small>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    menuRef.current?.querySelectorAll("li.mega-dropdown").forEach((li) => {
      li.classList.toggle("show", li.id === openMenu);
    });
  }, [openMenu]);

  const handleNavClick = (e) => {
    const mobile = window.matchMedia("(max-width: 991.98px)").matches;
    const toggle = e.target.closest("li.mega-dropdown > a.nav-link");
    if (toggle) {
      e.preventDefault();
      if (mobile) {
        const key = toggle.parentElement.id;
        setOpenMenu((cur) => (cur === key ? null : key));
      }
      return;
    }
    if (mobile && e.target.closest("a[href]")) {
      setOpen(false);
      setOpenMenu(null);
    }
  };

  return (
    <header>
      <style>{`@media (max-width: 991.98px) { .mega-dropdown.show > .mega-menu { display: block !important; opacity: 1 !important; visibility: visible !important; pointer-events: auto !important; transform: none !important; left: auto !important; top: auto !important; } }`}</style>
      <nav className="navbar navbar-expand-lg floating-nav">
        <div className="container px-0">
          <a className="navbar-brand d-flex align-items-center active" href="/">
            <img src={site.logo} alt={`${site.name} logo`} style={{ height: 52, width: "auto" }} />
            <div className="ms-2">
              <div className="logo-title">LINZ</div>
              <small>COLLEGE D.I.KHAN</small>
            </div>
          </a>{" "}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ color: "#0b4f5c" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div ref={menuRef} onClick={handleNavClick} className={"collapse navbar-collapse" + (open ? " show" : "")} id="menu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mega-dropdown" id="academicsMenu">
                <a className="nav-link" href="#">Academics</a>
                <div className="mega-menu p-0">
                  <MegaHeader title="Our Programs" badge="Playgroup – FSc" />
                  <div className="row g-5 p-4">
                    <Col cls="col-12 col-md-6 col-lg-4" title="SCHOOL" items={[["Playgroup & Primary", "/academics"], ["Middle Section", "/academics"], ["Matric (SSC)", "/academics"]]} />
                    <Col cls="col-12 col-md-6 col-lg-4" title="COLLEGE (HSSC)" items={[["FSc Pre-Medical", "/academics"], ["FSc Pre-Engineering", "/academics"], ["ICS", "/academics"]]} />
                    <Col cls="col-12 col-md-6 col-lg-4" title="RESOURCES" items={[["Prospectus", "/prospectus"], ["Science & Computer Labs", "/facilities#labs"], ["Library", "/facilities#library"]]} />
                  </div>
                  <MegaFooter href="/academics" text="View all academics" note={`🎓 ${site.name}`} />
                </div>
              </li>
              <li className="nav-item mega-dropdown" id="admissionMenu">
                <a href="#" className="nav-link">Admissions</a>
                <div className="mega-menu admission-menu" id="admissionMega">
                  <MegaHeader title="Admissions" badge="Prospectus & Form Available" />
                  <div className="container-fluid p-4">
                    <div className="row">
                      <Col cls="col-lg-4" title="GET STARTED" items={[["Admission Information", "/admissions"], ["Admission Form (PDF)", site.downloads.admissionForm, true], ["Prospectus (PDF)", site.downloads.prospectus, true]]} />
                      <Col cls="col-lg-4" title="HELPFUL LINKS" items={[["FAQs", "/faq"], ["Message Us on WhatsApp", site.whatsapp.link, true], ["Email Us", `mailto:${site.email}`]]} />
                      <div className="col-lg-4">
                        <div className="admission-highlight">
                          <small>ENQUIRIES</small>
                          <h4>Join Linz College</h4>
                          <p>For admission details, message us on WhatsApp or send an email.</p>
                          <a href={site.whatsapp.link} {...EXT} className="admission-btn">WhatsApp Us →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MegaFooter href="/admissions" text="Explore Admissions" note="🎓 Your Future Starts Here" />
                </div>
              </li>
              <li className="nav-item mega-dropdown" id="studentMenu">
                <a href="#" className="nav-link">Campus Life</a>
                <div className="mega-menu student-menu" id="studentMega">
                  <MegaHeader title="Campus Life" badge="Residential Campus" />
                  <div className="container-fluid p-4">
                    <div className="row">
                      <Col cls="col-lg-4" title="FACILITIES" items={[["Library", "/facilities#library"], ["Science & Computer Labs", "/facilities#labs"], ["Sports", "/facilities#sports"], ["Cafeteria", "/facilities#cafeteria"], ["Hostel", "/facilities#hostel"]]} />
                      <Col cls="col-lg-4" title="STUDENT LIFE" items={[["Campus Life", "/campus-life"], ["News & Events", "/news"], ["Achievements", "/campus-life#achievements"]]} />
                      <div className="col-lg-4">
                        <div className="student-highlight">
                          <small>STAY CONNECTED</small>
                          <h4>Follow Us</h4>
                          <p>Follow Linz College on Instagram and TikTok for the latest updates.</p>
                          <a href={site.social.instagram} {...EXT} className="student-btn">Instagram →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MegaFooter href="/campus-life" text="Explore Campus Life" note="🎓 Learn • Connect • Succeed" />
                </div>
              </li>
              <li className="nav-item mega-dropdown" id="aboutMenu">
                <a href="#" className="nav-link">About</a>
                <div className="mega-menu about-menu" id="aboutMega">
                  <MegaHeader title={`About ${site.name}`} badge={`Since ${site.established}`} />
                  <div className="container-fluid p-4">
                    <div className="row">
                      <Col cls="col-lg-4" title="THE COLLEGE" items={[["Our Story", "/about"], ["Principal's Message", "/principal"], ["Faculty", "/about#faculty"]]} />
                      <Col cls="col-lg-4" title="COMMUNITY" items={[["News & Events", "/news"], ["FAQs", "/faq"], ["Contact Us", "/contact"]]} />
                      <div className="col-lg-4">
                        <div className="about-highlight">
                          <small>OUR STORY</small>
                          <h4>Quality Education in D.I.Khan</h4>
                          <p>A residential institution affiliated with {site.board}.</p>
                          <div className="row text-center mt-4">
                            <div className="col-4"><h5>{site.established}</h5><small>Founded</small></div>
                            <div className="col-4"><h5>40+</h5><small>Staff</small></div>
                            <div className="col-4"><h5>4</h5><small>Labs</small></div>
                          </div>
                          <a href="/about" className="about-btn">Discover More →</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MegaFooter href="/about" text="Learn More About Us" note="🌍 Excellence • Character • Success" />
                </div>
              </li>
            </ul>
            <div className="navbar-actions d-flex align-items-center gap-3">
              <a className="status-pill" href={site.downloads.prospectus} {...EXT} style={{ textDecoration: "none" }}>
                Download Prospectus
              </a>{" "}
              <a className="apply-btn" href={site.whatsapp.link} {...EXT}>WhatsApp Us →</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}