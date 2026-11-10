export default function CampusLife() {
  return (
    <section className="islamabad-campus-life-section" id="campus-life">
      <div className="container">
        <div className="islamabad-section-header text-center reveal active">
          <span className="section-tag">
            STUDENT EXPERIENCE
          </span>
          <h2>
            Life Beyond
            {" "}
            <span>
              the Classroom
            </span>
          </h2>
          <p>
            From sports and events to hostel life and student support, Linz College offers an environment where students can learn, connect, grow and make lasting memories.
          </p>
        </div>
        <div className="row g-4 align-items-stretch mt-4">
          <div className="col-lg-6">
            <div className="campus-life-feature reveal active">
              <img src="/images/linz/students.jpg" alt="Student life at Linz College D.I.Khan" />
              <div className="campus-life-feature-overlay"></div>
              <div className="campus-life-feature-content">
                <span>
                  LINZ COLLEGE D.I.KHAN
                </span>
                <h3>
                  A Campus Built for Your Experience
                </h3>
                <p>
                  Discover a vibrant community, good facilities and opportunities that make student life meaningful beyond academics.
                </p>
                <a href="/campus-life" className="campus-life-btn">
                  Explore Campus Life
                  {" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="campus-life-grid">
              <a href="/facilities#hostel" className="campus-life-card life-affairs reveal active">
                <div className="campus-life-icon">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <div className="campus-life-card-content">
                  <span>
                    RESIDENTIAL
                  </span>
                  <h3>
                    Hostel
                  </h3>
                  <p>
                    A residential setting for students who live away from home.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square campus-life-arrow"></i>
              </a>
              {" "}
              <a href="/facilities#sports" className="campus-life-card life-sports reveal active">
                <div className="campus-life-icon">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <div className="campus-life-card-content">
                  <span>
                    WELLNESS
                  </span>
                  <h3>
                    Sports
                  </h3>
                  <p>
                    Sports and recreational activities that promote fitness, teamwork and a balanced student life.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square campus-life-arrow"></i>
              </a>
              {" "}
              <a href="/facilities#labs" className="campus-life-card life-health reveal active">
                <div className="campus-life-icon">
                  <i className="fa-solid fa-flask"></i>
                </div>
                <div className="campus-life-card-content">
                  <span>
                    LEARNING
                  </span>
                  <h3>
                    Science &amp; Computer Labs
                  </h3>
                  <p>
                    Physics, Chemistry, Biology and Computer labs for hands-on learning.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square campus-life-arrow"></i>
              </a>
              {" "}
              <a href="/facilities#cafeteria" className="campus-life-card life-services reveal active">
                <div className="campus-life-icon">
                  <i className="fa-solid fa-mug-hot"></i>
                </div>
                <div className="campus-life-card-content">
                  <span>
                    CAMPUS SERVICES
                  </span>
                  <h3>
                    Cafeteria
                  </h3>
                  <p>
                    A campus cafeteria with snacks and meals, and spaces for students to relax and connect.
                  </p>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square campus-life-arrow"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="campus-life-bottom reveal active">
          <a href="/facilities#library">
            <i className="fa-solid fa-users"></i>
            {" "}
            Library
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/campus-life#achievements">
            <i className="fa-solid fa-trophy"></i>
            {" "}
            Achievements
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/news">
            <i className="fa-solid fa-newspaper"></i>
            {" "}
            News &amp; Events
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          {" "}
          <a href="/contact">
            <i className="fa-solid fa-phone"></i>
            {" "}
            Contact Us
            {" "}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
