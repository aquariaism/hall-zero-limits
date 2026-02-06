import "../styles/hero.css";

function Hero() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="hero">
      <p className="hero-subtitle">
        Site of the Day – {formattedDate}
      </p>

      <h1 className="hero-title">
        THE HALL OF ZERO<br />LIMITS
      </h1>

      <div className="hero-credit">
        <div className="credit-logo">dogstudio</div>
        <div className="credit-pro1">dogstudio</div>
        <span className="credit-pro2">PRO</span>
      </div>
    </section>
  );
}

export default Hero;


