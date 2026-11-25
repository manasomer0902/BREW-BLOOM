
import SEO from '../components/SEO';
import { useState } from 'react';
import {
  CalendarDays,
  Clock3,
  Users,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

import businessInfo from '../data/businessInfo';
import './Reservations.css';

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2 Guests',
    occasion: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservationMessage = `
Hello ${businessInfo.name}!

I'd like to request a table reservation.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'Not provided'}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Occasion: ${formData.occasion || 'Not specified'}
Special Request: ${formData.message || 'None'}

Please let me know if this slot is available.

Thank you!
    `.trim();

    const whatsappURL = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(reservationMessage)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="reservations-page">
      <SEO
        title="Reserve a Table | BREW & BLOOM"
        description="Request a table reservation at BREW & BLOOM and plan your next dining experience."
      />

      {/* Hero */}
      <section className="reservation-hero">
        <div className="reservation-hero-overlay"></div>

        <div className="container reservation-hero-content">
          <span className="reservation-eyebrow">A TABLE IS WAITING</span>

          <h1>
            Reserve Your <span>Experience</span>
          </h1>

          <p>
            Good food deserves good company. Plan your visit and let us
            take care of the rest.
          </p>

          <a href="#reservation-form" className="reservation-scroll-link">
            Make a Reservation <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* Reservation Form */}
      <section
        className="reservation-section section-padding"
        id="reservation-form"
      >
        <div className="container reservation-layout">

          <div className="reservation-info">
            <span className="reservation-eyebrow">
              YOUR MOMENT, OUR PLEASURE
            </span>

            <h2>
              Make Every Visit <span>Special.</span>
            </h2>

            <p>
              Whether it is a casual catch-up, a family dinner or a special
              celebration, we'd love to have you with us.
            </p>

            <div className="reservation-info-image">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
                alt="Elegant restaurant dining table"
              />
            </div>

            <div className="reservation-note glass-card">
              <CalendarDays size={22} />

              <div>
                <h3>Reservation Requests</h3>
                <p>
                  Your request will be sent to our team through WhatsApp.
                  Our team will contact you to confirm availability.
                </p>
              </div>
            </div>
          </div>

          <div className="reservation-form-card glass-card">
            <div className="reservation-form-heading">
              <span className="reservation-eyebrow">BOOK YOUR TABLE</span>
              <h2>Reservation Details</h2>
              <p>Fill in the details below to request your table.</p>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form">

              {/* Name */}
              <div className="reservation-input-group">
                <label htmlFor="name">Full Name *</label>

                <div className="reservation-input-wrapper">
                  <User size={18} />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="reservation-input-group">
                <label htmlFor="phone">Phone Number *</label>

                <div className="reservation-input-wrapper">
                  <Phone size={18} />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9+\-\s()]{7,20}"
                    title="Enter a valid phone number"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="reservation-input-group">
                <label htmlFor="email">Email Address</label>

                <div className="reservation-input-wrapper">
                  <Mail size={18} />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Date and Time */}
              <div className="reservation-form-row">

                <div className="reservation-input-group">
                  <label htmlFor="date">Reservation Date *</label>

                  <div className="reservation-input-wrapper">
                    <CalendarDays size={18} />

                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={getTodayDate()}
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="reservation-input-group">
                  <label htmlFor="time">Preferred Time *</label>

                  <div className="reservation-input-wrapper">
                    <Clock3 size={18} />

                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

              </div>

              {/* Guests and Occasion */}
              <div className="reservation-form-row">

                <div className="reservation-input-group">
                  <label htmlFor="guests">Number of Guests *</label>

                  <div className="reservation-input-wrapper">
                    <Users size={18} />

                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7 Guests</option>
                      <option>8 Guests</option>
                      <option>9+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="reservation-input-group">
                  <label htmlFor="occasion">Occasion</label>

                  <div className="reservation-input-wrapper">
                    <CalendarDays size={18} />

                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                    >
                      <option value="">Select occasion</option>
                      <option>Casual Dining</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Family Gathering</option>
                      <option>Business Meeting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Special Requests */}
              <div className="reservation-input-group">
                <label htmlFor="message">Special Requests</label>

                <div className="reservation-textarea-wrapper">
                  <MessageSquare size={18} />

                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Any special requests or preferences?"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="reservation-submit-btn">
                Request Reservation <ArrowRight size={18} />
              </button>

              <p className="reservation-form-disclaimer">
                Submitting this form sends a reservation request through
                WhatsApp. Your table is not confirmed until our team responds.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="reservation-bottom">
        <div className="container">
          <p>WE LOOK FORWARD TO WELCOMING YOU</p>

          <h2>
            Good Food. Great Company. <span>Beautiful Moments.</span>
          </h2>
        </div>
      </section>

    </main>
  );
}

export default Reservations;
