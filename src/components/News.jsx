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
              <a href="/prospectus" className="news-item" rel="noopener noreferrer">
                <div className="news-image">
                  <img src="/images/linz/building.jpg" alt="Prospectus and admission form" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    Available now
                  </div>
                  <h4>
                    Prospectus and Admission Form Available to Download
                  </h4>
                  <p>
                    Download the prospectus and admission form from our website, or message us on WhatsApp for details.
                  </p>
                  <span className="news-read">
                    Read More
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </a>
              {" "}
              <a href="https://www.instagram.com/linzcollegedikhan/" className="news-item" rel="noopener noreferrer">
                <div className="news-image">
                  <img src="/images/linz/students.jpg" alt="Follow Linz College on social media" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    Follow us
                  </div>
                  <h4>
                    Follow Linz College on TikTok and Instagram
                  </h4>
                  <p>
                    Follow our TikTok and Instagram pages for the latest updates from the college.
                  </p>
                  <span className="news-read">
                    Read More
                    {" "}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </a>
              {" "}
              <a href="https://wa.me/923424803706" className="news-item" rel="noopener noreferrer">
                <div className="news-image">
                  <img src="/images/linz/classroom.jpg" alt="Admission enquiries" loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-date">
                    <i className="fa-regular fa-calendar"></i>
                    {" "}
                    Message us
                  </div>
                  <h4>
                    Admission Enquiries Are Welcome
                  </h4>
                  <p>
                    Message us on WhatsApp or send an email for admission information.
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
