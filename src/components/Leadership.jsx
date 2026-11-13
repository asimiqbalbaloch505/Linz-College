export default function Leadership() {
  return (
    <section className="islamabad-leadership-section">
      <div className="container">
        <div className="leadership-section-header text-center reveal active">
          <span className="section-tag">
            CAMPUS LEADERSHIP
          </span>
          <h2>
            Inspiring Excellence,
            {" "}
            <span>
              Leading the Future
            </span>
          </h2>
          <p>
            Hear from the founder and principal guiding Linz College D.I.Khan towards academic excellence and a brighter future for our students.
          </p>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-lg-6">
            <article className="leadership-card rector-card reveal active">
              <div className="leadership-photo">
                <img src="/images/linz/principal.jpg" alt="Hameed Ramzan Qarni" loading="lazy" />
                <div className="photo-gradient"></div>
                <div className="photo-role">
                  Message from the Principal
                </div>
                <div className="photo-name">
                  <h3>
                    Hameed Ramzan Qarni
                  </h3>
                  <span>
                    Principal
                  </span>
                </div>
              </div>
              <div className="leadership-content">
                <div className="leadership-content-top">
                  <span className="leadership-label">
                    MESSAGE FROM THE PRINCIPAL
                  </span>
                  <div className="leadership-quote">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                </div>
                <div className="leadership-message">
                  <p>
                    We believe every student has a spark that only needs the right guidance to shine. Our teachers work closely with students and parents to build a strong academic foundation, good character and the confidence to face the future.
                  </p>
                </div>
                <a href="/principal" className="leadership-link">
                  <span>
                    Read Full Message
                  </span>
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </article>
          </div>
          <div className="col-lg-6">
            <article className="leadership-card campus-card reveal active">
              <div className="leadership-photo">
                <img src="/images/linz/classroom.jpg" alt="Linz College D.I.Khan classroom" loading="lazy" />
                <div className="photo-gradient"></div>
                <div className="photo-role">
                  Our Founding Vision
                </div>
                <div className="photo-name">
                  <h3>
                    Linz College D.I.Khan
                  </h3>
                  <span>
                    Established April 2015
                  </span>
                </div>
              </div>
              <div className="leadership-content">
                <div className="leadership-content-top">
                  <span className="leadership-label">
                    OUR VISION
                  </span>
                  <div className="leadership-quote cyan">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                </div>
                <div className="leadership-message">
                  <p>
                    Established in 2015, Linz College provides a residential learning environment for students in D.I.Khan.
                  </p>
                </div>
                <a href="/principal" className="leadership-link cyan">
                  <span>
                    Read More
                  </span>
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
