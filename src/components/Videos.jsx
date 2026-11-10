export default function Videos() {
  return (
    <section className="islamabad-videos-section">
      <div className="container">
        <div className="islamabad-section-header text-center reveal active">
          <span className="section-tag">
            EXPERIENCE LINZ
          </span>
          <h2>
            Explore
            {" "}
            <span>
              Our Campus
            </span>
          </h2>
          <p>
            Take a glimpse into the academic and student experience at Linz College D.I.Khan.
          </p>
        </div>
        <div className="row g-3 mt-4">
          <div className="col-lg-3 col-md-6">
            <a href="https://www.youtube.com/watch?v=ko-o0A6Cx7c" className="glightbox campus-glightbox" data-glightbox="type: video">
              <div className="campus-video-card reveal active">
                <div className="campus-video-thumbnail">
                  <img src="/images/img-e390269039.jpg" alt="Student Week 2025" loading="lazy" />
                  <div className="campus-video-overlay"></div>
                  <div className="campus-video-play">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
                <div className="campus-video-info">
                  <span>
                    Video
                  </span>
                  <h3>
                    Student Week 2025
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://www.youtube.com/watch?v=oQpaKxrjte4" className="glightbox campus-glightbox" data-glightbox="type: video">
              <div className="campus-video-card reveal active">
                <div className="campus-video-thumbnail">
                  <img src="/images/img-f7977ffceb.jpg" alt="The Sports Week" loading="lazy" />
                  <div className="campus-video-overlay"></div>
                  <div className="campus-video-play">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
                <div className="campus-video-info">
                  <span>
                    Video
                  </span>
                  <h3>
                    The Sports Week
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://www.youtube.com/watch?v=Q1RjEGqgHjA" className="glightbox campus-glightbox" data-glightbox="type: video">
              <div className="campus-video-card reveal active">
                <div className="campus-video-thumbnail">
                  <img src="/images/img-707ec862fb.jpg" alt="Department of Bio Sciences" loading="lazy" />
                  <div className="campus-video-overlay"></div>
                  <div className="campus-video-play">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
                <div className="campus-video-info">
                  <span>
                    Video
                  </span>
                  <h3>
                    Department of Bio Sciences
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <a href="https://www.youtube.com/watch?v=5-NTxD6-xBQ" className="glightbox campus-glightbox" data-glightbox="type: video">
              <div className="campus-video-card reveal active">
                <div className="campus-video-thumbnail">
                  <img src="/images/img-ee03285b1e.jpg" alt="Department of Computer Science" loading="lazy" />
                  <div className="campus-video-overlay"></div>
                  <div className="campus-video-play">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
                <div className="campus-video-info">
                  <span>
                    Video
                  </span>
                  <h3>
                    Department of Computer Science
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="campus-videos-more text-center reveal active">
        <a href="https://www.tiktok.com/@linz.college.d.i" target="_blank" rel="noopener" className="campus-videos-more-btn">
          Follow Us on TikTok
          {" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </section>
  );
}
