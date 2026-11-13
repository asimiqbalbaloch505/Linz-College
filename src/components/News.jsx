export default function News() {
  return (
    <section className="islamabad-news-section" id="news-events">
      <div className="container">
        <div className="islamabad-section-header text-center reveal active">
          <span className="section-tag">
            CAMPUS UPDATES
          </span>
          <h2>
            What's Happening at
            {" "}
            <span>
              Linz College D.I.Khan
            </span>
          </h2>
          <p>
            Stay connected with the latest announcements, achievements, activities and upcoming events at Linz College D.I.Khan.
          </p>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-lg-7">
            <div className="news-panel reveal active">
              <div className="news-panel-header">
                <div>
                  <span>
                    LATEST NEWS
                  </span>
                  <h3>
                    Campus News &amp; Updates
                  </h3>
                </div>
                <a href="/news">
                  View All
                  {" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <a href="/images/linz/admissions-open-2026-27.jpg" target="_blank" rel="noopener noreferrer" className="news-item">
                <div className="news-image">
                  <img src="/images/linz/admissions-open-2026-27.jpg" alt="Linz College pre-first-year admissions announcement for 2026–27" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    Session 2026–27
                  </div>
                  <h4>
                    Admissions Open for Pre-First Year
                  </h4>
                  <p>
                    View the college announcement for pre-first-year admissions for the 2026–27 session.
                  </p>
                  <span className="news-read">
                    Read More
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </a>
              {" "}
              <a href="/images/linz/ssc-position-holder.jpg" target="_blank" className="news-item" rel="noopener noreferrer">
                <div className="news-image">
                  <img src="/images/linz/ssc-position-holder.jpg" alt="Linz College SSC Annual-I first-position award poster showing 1163 out of 1200 marks" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    SSC Annual-I
                  </div>
                  <h4>
                    Celebrating an SSC First Position
                  </h4>
                  <p>
                    The supplied award poster recognises a first position with 1163 out of 1200 marks.
                  </p>
                  <span className="news-read">
                    Read More
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </a>
              {" "}
              <a href="/images/linz/student-project-exhibition.jpg" target="_blank" className="news-item" rel="noopener noreferrer">
                <div className="news-image">
                  <img src="/images/linz/student-project-exhibition.jpg" alt="Linz College students presenting a classroom project exhibition" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    College Activities
                  </div>
                  <h4>
                    Students Share Their Project Work
                  </h4>
                  <p>
                    A glimpse of student participation and project work at Linz College.
                  </p>
                  <span className="news-read">
                    Read More
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="events-panel reveal active">
              <div className="events-header">
                <div>
                  <span>
                    MARK YOUR CALENDAR
                  </span>
                  <h3>
                    Upcoming Events
                  </h3>
                </div>
                <i className="fa-regular fa-calendar-days"></i>
              </div>
              <a href="/news" className="event-item" rel="noopener noreferrer">
                <div className="event-date">
                  <strong>
                    TBA
                  </strong>
                  {" "}
                  <span>
                    Soon
                  </span>
                </div>
                <div className="event-content">
                  <span>
                    Events
                  </span>
                  <h4>
                    Event to be announced
                  </h4>
                  <p>
                    Event details will be added here.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              {" "}
              <a href="/news" className="event-item" rel="noopener noreferrer">
                <div className="event-date">
                  <strong>
                    TBA
                  </strong>
                  {" "}
                  <span>
                    Soon
                  </span>
                </div>
                <div className="event-content">
                  <span>
                    Events
                  </span>
                  <h4>
                    Event to be announced
                  </h4>
                  <p>
                    Event details will be added here.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              {" "}
              <a href="#" className="event-item" target="_blank" rel="noopener noreferrer">
                <div className="event-date">
                  <strong>
                    TBA
                  </strong>
                  {" "}
                  <span>
                    Soon
                  </span>
                </div>
                <div className="event-content">
                  <span>
                    Events
                  </span>
                  <h4>
                    Event to be announced
                  </h4>
                  <p>
                    Event details will be added here.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              {" "}
              <a href="/news" className="events-button">
                View All Events
                {" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
