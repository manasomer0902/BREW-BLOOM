
import {
  ArrowUpRight,
  ArrowUp,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import businessInfo from '../data/businessInfo';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    businessInfo.email
  )}`;

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              BREW <span>&</span> BLOOM
            </Link>

            <p className="footer-tagline">
              {businessInfo.tagline}.
            </p>

            <p className="footer-description">
              A place where beautiful flavours, warm conversations
              and unforgettable moments come together.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/manasomer09/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Globe size={17} />
              </a>

              <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="footer-links">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/menu">Our Menu</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* CONTACT DETAILS */}
          <div className="footer-links">
            <h3>Get In Touch</h3>

            <a
              href={businessInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <MapPin size={16} />
              <span>{businessInfo.address}</span>
            </a>

            <a
              href={`tel:${businessInfo.phone}`}
              className="footer-contact-link"
            >
              <Phone size={16} />
              <span>{businessInfo.phone}</span>
            </a>

            <a
              href={emailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <Mail size={16} />
              <span>{businessInfo.email}</span>
            </a>
          </div>

          {/* RESERVATION CTA */}
          <div className="footer-reservation">
            <span className="footer-eyebrow">
              A TABLE IS WAITING
            </span>

            <h3>
              Make your next
              <em> moment special.</em>
            </h3>

            <Link
              to="/reservations"
              className="footer-reserve-btn"
            >
              Reserve a Table
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">

          <p>
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>

          <p className="footer-credit">
            Crafted with care.
          </p>

          <button
            className="footer-top-btn"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={15} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
