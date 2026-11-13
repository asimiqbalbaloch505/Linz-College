const videoUrl = "https://www.youtube.com/watch?v=Da3wXxg2G9k";
const videoThumbnail = "https://i.ytimg.com/vi/Da3wXxg2G9k/hqdefault.jpg";

const videos = [
  { title: "Linz College Students", position: "center" },
  { title: "Linz College Students", position: "center 44%" },
  { title: "Linz College Students", position: "center 56%" },
];

export default function CollegeVideos() {
  return (
    <section className="home-videos-section" id="college-videos">
      <div className="container">
        <div className="home-videos-heading">
          <span className="section-eyebrow">LINZ COLLEGE VIDEOS</span>
          <h2>
            A Look Inside <span>Linz College</span>
          </h2>
          <p>Watch highlights featuring students and life at Linz College.</p>
        </div>
        <div className="row g-4">
          {videos.map((video, index) => (
            <div className="col-lg-4 col-md-6" key={`${video.title}-${index}`}>
              <a
                className="home-video-card"
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Watch ${video.title} on YouTube`}
              >
                <div className="home-video-thumbnail">
                  <img
                    src={videoThumbnail}
                    alt="Linz College students at an awards event"
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: video.position }}
                  />
                  <span className="home-video-play" aria-hidden="true">
                    <i className="fa-solid fa-play"></i>
                  </span>
                </div>
                <div className="home-video-content">
                  <span>Video</span>
                  <h3>{video.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="home-videos-footer">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="btn-campus-primary home-videos-button">
            Watch on YouTube
            {" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
