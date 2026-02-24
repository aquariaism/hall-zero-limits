import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import "../Styles/section.css";

function Section() {
  const images = [img1, img2, img3];

  return (
    <div className="preview-wrapper">
      {images.map((img, index) => (
        <div key={index} className="preview-card">
          <img src={img} alt={`Preview ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Section;