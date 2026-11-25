import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Coffee } from 'lucide-react';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-glow"></div>

      <div className="not-found-content">
        <div className="not-found-icon">
          <Coffee size={34} />
        </div>

        <span className="not-found-eyebrow">A LITTLE DETOUR</span>

        <h1>4<span>0</span>4</h1>

        <h2>Oops! This page isn't on the menu.</h2>

        <p>
          Looks like you've wandered somewhere unexpected.
          Let's get you back to something delicious.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-home-btn">
            <Home size={17} />
            Back to Home
          </Link>

          <button
            className="not-found-back-btn"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={17} />
            Go Back
          </button>
        </div>

        <div className="not-found-footer">
          <span>BREW & BLOOM</span>
          <p>Where Every Bite Becomes a Memory.</p>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
