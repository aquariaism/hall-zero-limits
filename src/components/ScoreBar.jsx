import "../styles/scoreBar.css";

function ScoreBar() {
  return (
    <div className="score-bar">
      {/* LEFT SCORE BOX */}
      <div className="score-box">
        <span className="score-label">SOTD</span>
        <span className="score-value">7.88</span>
        <span className="score-outof">/10</span>
      </div>

      {/* RIGHT ICONS (EXACT STYLE) */}
      <div className="score-icons">
        {/* Bookmark */}
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M6 2h12v20l-6-4-6 4z" />
        </svg>

        {/* Share */}
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7a2.5 2.5 0 000-1.39l7.02-4.11a2.5 2.5 0 10-.9-1.45L8 9.86a2.5 2.5 0 100 4.28l7.02 4.11a2.5 2.5 0 102.98-2.17z" />
        </svg>

        {/* External */}
        <svg viewBox="0 0 24 24" className="icon">
          <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14z" />
          <path d="M5 5h6V3H3v8h2z" />
          <path d="M19 19H5V9H3v12h18v-6h-2z" />
        </svg>
      </div>
    </div>
  );
}

export default ScoreBar;
