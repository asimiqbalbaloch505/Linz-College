export default function Testimonials() {
  return (
    <section id="testimonials" className="islamabad-testimonials-section">
      <div className="container">
        <div className="testimonials-header text-center reveal active">
          <span className="section-tag">
            CAMPUS VOICES
          </span>
          <h2>
            What Our
            {" "}
            <span>
              Community Says
            </span>
          </h2>
          <p>
            Experiences and reflections from the parents and students who are part of the Linz College family.
          </p>
        </div>
        <div className="testimonial-slider-wrap">
          <div id="campusTestimonials" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
            <div className="carousel-inner">
              <div className="carousel-item sf-hidden"></div>
              <div className="carousel-item active">
                <div className="testimonial-slide">
                  <div className="testimonial-image">
                    <img src="/images/linz/students.jpg" alt="Sample reviewer" loading="lazy" />
                    <div className="testimonial-image-overlay"></div>
                    <div className="testimonial-image-label">
                      LINZ COLLEGE D.I.KHAN
                    </div>
                  </div>
                  <div className="testimonial-slide-content">
                    <div className="testimonial-quote">
                      <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <span className="testimonial-label">
                      PARENT EXPERIENCE
                    </span>
                    <h3>
                      Sample review: replace with a real parent review.
                    </h3>
                    <p>
                      This is a sample review. Replace this text with a real review from a parent, student or alumnus of Linz College D.I.Khan, shared with their permission.
                    </p>
                    <div className="testimonial-person">
                      <div>
                        <strong>
                          Parent Name
                        </strong>
                        {" "}
                        <span>
                          Linz College Parent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item sf-hidden"></div>
              <div className="carousel-item sf-hidden"></div>
              <div className="carousel-item sf-hidden"></div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#campusTestimonials" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              {" "}
              <span className="visually-hidden">
                Previous
              </span>
            </button>
            {" "}
            <button className="carousel-control-next" type="button" data-bs-target="#campusTestimonials" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              {" "}
              <span className="visually-hidden">
                Next
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
