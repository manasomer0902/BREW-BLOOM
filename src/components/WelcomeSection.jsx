
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './WelcomeSection.css';

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        <div className="welcome-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant restaurant dining experience"
            className="welcome-image"
          />

          <div className="welcome-image-overlay" />

          <div className="welcome-image-caption">
            <span>MORE THAN JUST A MEAL</span>
            <strong>An experience to remember.</strong>
          </div>

          <div className="welcome-image-frame" />
        </div>

        <div className="welcome-content">
          <span className="welcome-eyebrow">
            <span />
            A LITTLE ABOUT US
          </span>

          <h2>
            A place where
            <br />
            <em>flavours</em> meet
            <br />
            <em>feelings.</em>
          </h2>

          <p className="welcome-description">
            At BREW & BLOOM, we believe the best moments happen around
            a table. From carefully crafted dishes to the warmth of
            every cup, everything we create is designed to bring people
            closer.
          </p>

          <p className="welcome-description secondary">
            Whether it's a slow morning coffee, a spontaneous lunch,
            or a special evening with your favourite people, there's
            always a place for you here.
          </p>

          <div className="welcome-divider" />

          <div className="welcome-details">
            <div>
              <strong>01</strong>
              <span>Thoughtful Ingredients</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Made with Passion</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Moments Worth Sharing</span>
            </div>
          </div>

          <Link to="/about" className="welcome-link">
            Discover Our Story
            <span><ArrowUpRight size={17} /></span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default WelcomeSection;
