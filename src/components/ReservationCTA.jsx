
import { Link } from 'react-router-dom';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import './ReservationCTA.css';

function ReservationCTA() {
  return (
    <section className="reservation-cta">
      <div className="reservation-cta-background" />
      <div className="reservation-cta-overlay" />

      <div className="reservation-cta-content">
        <span className="reservation-cta-eyebrow">
          <span />
          YOUR TABLE IS WAITING
          <span />
        </span>

        <h2>
          Make Room for
          <br />
          <em>Beautiful Moments.</em>
        </h2>

        <p>
          Whether it's a casual catch-up, a special celebration,
          or simply a meal worth slowing down for, we'd love
          to have you with us.
        </p>

        <Link to="/reservations" className="reservation-cta-button">
          <CalendarDays size={18} />
          Reserve Your Table
          <ArrowUpRight size={17} />
        </Link>

        <span className="reservation-cta-note">
          GOOD FOOD · GREAT COMPANY · UNFORGETTABLE MOMENTS
        </span>
      </div>
    </section>
  );
}

export default ReservationCTA;
