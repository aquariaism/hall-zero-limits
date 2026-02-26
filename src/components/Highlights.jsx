import img1 from "../assets/imgH1.jpg";
import videoFile from "../assets/vid1.mp4";
import "../Styles/highlights.css";

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <span className="highlights-label">Elements</span>
        <h2>
          See the highlights <br /> of this website.
        </h2>
      </div>

      <div className="highlights-grid">
        {/* Image Card */}
        <div className="highlight-card">
          <img src={img1} alt="Highlight 1" />
        </div>

        {/* Video Card */}
        <div className="highlight-card">
          <video
            src={videoFile}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
}

export default Highlights;