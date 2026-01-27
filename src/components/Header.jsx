import "../styles/header.css";

function AwwwardsHeader() {
  return (
    <header className="aw-header">
      {/* LEFT */}
      <div className="aw-left">
        <span className="aw-logo">w.</span>

        <nav className="aw-nav">
          <a href="#">Explore</a>
          <a href="#">Directory</a>
          <a href="#">Academy <span className="new">NEW</span></a>
          <a href="#">Jobs</a>
          <a href="#">Market</a>
        </nav>
      </div>

      {/* CENTER */}
      <div className="aw-search">
        <input
          type="text"
          placeholder="Search by Inspiration"
        />
      </div>

      {/* RIGHT */}
      <div className="aw-right">
        <a href="#">Log in</a>
        <a href="#">Sign Up</a>
        <button className="pro">Be Pro</button>
        <button className="submit">Submit Website</button>
      </div>
    </header>
  );
}

export default AwwwardsHeader;
