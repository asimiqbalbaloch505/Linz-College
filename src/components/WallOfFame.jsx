const highlights = [
  {
    label: "OUR COMMUNITY",
    title: "Wall of Fame",
    description: "Celebrating the journeys and milestones of Linz College alumni.",
    image: "/images/linz/campus-building-5.jpg",
    alt: "Linz College campus building and courtyard",
    icon: "fa-trophy",
    href: "/alumni#wall-of-fame",
  },
  {
    label: "ACADEMIC HONOURS",
    title: "Board Toppers",
    description: "Recognising outstanding board results and position holders from our school and college.",
    image: "/images/linz/ssc-position-holder.jpg",
    alt: "Linz College SSC Annual-I first-position award poster",
    icon: "fa-medal",
    href: "/alumni#board-toppers",
  },
  {
    label: "ENTRANCE TEST SUCCESS",
    title: "MDCAT Achievers",
    description: "Celebrating Linz students' effort and achievement in medical entry tests.",
    image: "/images/linz/result.jpg",
    alt: "Linz College MDCAT achievement poster",
    icon: "fa-award",
    href: "/alumni#mdcat-achievers",
  },
];

export default function WallOfFame() {
  return (
    <section className="wall-of-fame-section">
      <div className="container">
        <div className="wall-of-fame-heading">
          <span className="section-eyebrow">LINZ COLLEGE ACHIEVEMENTS</span>
          <h2>
            Celebrating
            {" "}
            <span>Achievements</span>
          </h2>
          <p>
            Explore alumni stories, board position holders and MDCAT achievements from the Linz College community.
          </p>
        </div>
        <div className="row g-4">
          {highlights.map((highlight, index) => (
            <div className="col-lg-4 col-md-6" key={highlight.title}>
              <a className="wall-of-fame-card" href={highlight.href}>
                <div className="wall-of-fame-image">
                  <img src={highlight.image} alt={highlight.alt} loading="lazy" />
                  <span className="wall-of-fame-badge">
                    <i className={`fa-solid ${highlight.icon}`}></i>
                    {" "}
                    {highlight.label}
                  </span>
                  <span className="wall-of-fame-number">0{index + 1}</span>
                </div>
                <div className="wall-of-fame-card-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                  <span className="wall-of-fame-link">
                    Explore
                    {" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="wall-of-fame-footer">
          <p>Are you a Linz College alumnus? Share your news and milestones with us.</p>
          <a href="/alumni" className="btn-campus-primary">
            Visit Alumni &amp; Wall of Fame
            {" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
