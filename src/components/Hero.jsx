
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          WELCOME TO BREW & BLOOM
          <span className="hero-eyebrow-line" />
        </span>

        <h1>
          Where Every Bite
          <br />
          Becomes a <span>Memory.</span>
        </h1>

        <p>
          A little indulgence, a little warmth, and a whole lot of flavour.
          Discover a dining experience made to be remembered.
        </p>

        <div className="hero-actions">
          <Link to="/menu" className="hero-primary-btn">
            Explore Our Menu
            <ArrowUpRight size={17} />
          </Link>

          <Link to="/reservations" className="hero-secondary-btn">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-bottom">
          <span>CRAFTED WITH PASSION · SERVED WITH LOVE</span>
          <span className="hero-scroll">
            SCROLL TO EXPLORE
            <ArrowDown size={15} />
          </span>
        </div>
      </div>

      <div className="hero-decoration">
        <span>EST.</span>
        <strong>2026</strong>
      </div>
    </section>
  );
}

export default Hero;
