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
          <div id="campusTestimonials" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="testimonial-slide">
                  <div className="testimonial-image">
                    <img src="/images/linz/asim-iqbal.png" alt="Portrait of Asim Iqbal, Linz College alumnus" loading="lazy" />
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
                      ALUMNI REVIEW - DRAFT FOR ASIM'S APPROVAL
                    </span>
                    <h3>
                      My time at Linz College was an important part of my student life.
                    </h3>
                    <p>
                      I studied FSc Pre-Medical at Linz College and stayed in the hostel. Living on campus helped me focus on my studies and feel part of college life. I am grateful for the people and memories from my time there.
                    </p>
                    <div className="testimonial-person">
                      <div>
                        <strong>
                          Asim Iqbal
                        </strong>
                        {" "}
                        <span>
                          FSc Pre-Medical Alumnus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
