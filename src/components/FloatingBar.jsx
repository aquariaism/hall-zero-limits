import { useState } from "react";
import "../Styles/floatingBar.css";

function FloatingBar() {
  const [active, setActive] = useState("Creator");

  const buttons = ["Creator", "Font & Color", "Details", "Score"];

  return (
    <div className="floating-bar">
      <div className="floating-logo">W.</div>

      <div className="floating-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={`floating-btn ${active === btn ? "active" : ""}`}
            onClick={() => setActive(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <button className="floating-visit">Visit Site</button>
    </div>
  );
}

export default FloatingBar;
