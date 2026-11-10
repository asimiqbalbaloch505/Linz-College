import { Fragment } from "react";
import { site } from "../siteConfig";

const STATS = [
  ["2015", "Established"],
  ["40+", "Faculty & Staff"],
  ["4", "Science & Computer Labs"],
  ["BISE", "D.I.Khan Affiliated"],
];

export default function Hero() {
  return (
    <section className="islamabad-hero" id="home">
      <img className="islamabad-hero-video" src="/images/hero.jpg" alt={`${site.name} campus`} />
      <div className="islamabad-hero-overlay"></div>
      <div className="islamabad-hero-glow"></div>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-xl-8 col-lg-9">
            <div className="islamabad-hero-content reveal active">
              <span className="islamabad-hero-badge">
                <span className="badge-dot"></span> RESIDENTIAL INSTITUTION · D.I.KHAN
              </span>
              <h1>
                Linz <span>College</span>
                <br />
                Knowledge That <span>Lights the Way.</span>
              </h1>
              <p>
                A residential institution in Dera Ismail Khan, affiliated with BISE D.I.Khan, offering quality education from Playgroup to FSc.
              </p>
              <div className="islamabad-hero-buttons">
                <a href={site.whatsapp.link} target="_blank" rel="noopener noreferrer" className="islamabad-btn-primary">
                  Admission Enquiry <i className="fa-brands fa-whatsapp"></i>
                </a>{" "}
                <a href="#faculty" className="islamabad-btn-outline">
                  Explore Programs <i className="fa-solid fa-arrow-down-long"></i>
                </a>
              </div>
              <div className="islamabad-hero-stats">
                {STATS.map(([n, label], i) => (
                  <Fragment key={label}>
                    {i > 0 && <div className="islamabad-stat-divider"></div>}
                    <div className="islamabad-stat">
                      <h3>{n}</h3>
                      <span>{label}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#welcome" className="islamabad-scroll">
        <span className="islamabad-mouse">
          <span className="islamabad-wheel"></span>
        </span>{" "}
        <span>SCROLL TO EXPLORE</span>
      </a>
    </section>
  );
}