
import { useState } from 'react';

import SEO from '../components/SEO';
import businessInfo from '../data/businessInfo';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  MessageCircle,
} from 'lucide-react';

import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    businessInfo.email
  )}`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactMessage = `
Hello ${businessInfo.name}!

I'd like to get in touch.

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const whatsappURL = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(
      contactMessage
    )}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="contact-page">

      <SEO
        title="Contact Us | BREW & BLOOM"
        description="Get in touch with BREW & BLOOM for enquiries, feedback and location information."
      />

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="container contact-hero-content">
          <span className="contact-eyebrow">
            WE'D LOVE TO HEAR FROM YOU
          </span>

          <h1>
            Let's Start a <span>Conversation.</span>
          </h1>

          <p>
            Questions, feedback or just want to say hello?
            We're always happy to connect.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-section section-padding">
        <div className="container">

          <div className="contact-heading">
            <span className="contact-eyebrow">GET IN TOUCH</span>

            <h2 className="section-heading">
              We'd Love to <span className="gold-text">Connect.</span>
            </h2>

            <p className="section-subtitle">
              Find us, call us or drop us a message. Your next
              favourite café experience is just a conversation away.
            </p>
          </div>

          <div className="contact-info-grid">

            {/* ADDRESS */}
            <div className="contact-info-card glass-card">
              <div className="contact-icon">
                <MapPin size={23} />
              </div>

              <h3>Visit Us</h3>
              <p>{businessInfo.address}</p>

              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions <ArrowUpRight size={15} />
              </a>
            </div>

            {/* PHONE */}
            <div className="contact-info-card glass-card">
              <div className="contact-icon">
                <Phone size={23} />
              </div>

              <h3>Call Us</h3>
              <p>+91 {businessInfo.phone}</p>

              <a href={`tel:${businessInfo.phone}`}>
                Call Now <ArrowUpRight size={15} />
              </a>
            </div>

            {/* EMAIL */}
            <div className="contact-info-card glass-card">
              <div className="contact-icon">
                <Mail size={23} />
              </div>

              <h3>Email Us</h3>
              <p>{businessInfo.email}</p>

              <a
                href={emailUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email <ArrowUpRight size={15} />
              </a>
            </div>

            {/* OPENING HOURS */}
            <div className="contact-info-card glass-card">
              <div className="contact-icon">
                <Clock size={23} />
              </div>

              <h3>Opening Hours</h3>

              <div className="contact-hours-list">
                {businessInfo.openingHours.map((item) => (
                  <div key={item.day}>
                    <span>{item.day}</span>
                    <strong>{item.time}</strong>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM + IMAGE */}
      <section className="contact-message-section">
        <div className="container contact-message-layout">

          <div className="contact-image-side">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
              alt="Freshly brewed coffee at a café"
              loading="lazy"
            />

            <div className="contact-image-caption glass-card">
              <span>BREW & BLOOM</span>
              <h3>Every conversation starts with a cup.</h3>
            </div>
          </div>

          <div className="contact-form-card glass-card">

            <div className="contact-form-heading">
              <span className="contact-eyebrow">
                SEND US A MESSAGE
              </span>

              <h2>Let's Talk.</h2>

              <p>
                Fill in the details and our team will be happy to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="contact-input-group">
                <label htmlFor="contact-name">Your Name *</label>

                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Email Address *</label>

                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-subject">Subject *</label>

                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-message">Your Message *</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message <Send size={17} />
              </button>

              <p className="contact-form-note">
                Your message will open in WhatsApp for you to review and send.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="contact-location-section section-padding">
        <div className="container">

          <div className="contact-location-heading">
            <span className="contact-eyebrow">COME SAY HELLO</span>

            <h2 className="section-heading">
              Find Your Way to <span className="gold-text">Us.</span>
            </h2>
          </div>

          <div className="contact-location-card glass-card">

            <div className="contact-location-image">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85"
                alt="Warm and welcoming café interior"
                loading="lazy"
              />
            </div>

            <div className="contact-location-details">
              <MapPin size={27} />

              <div>
                <h3>{businessInfo.name}</h3>
                <p>{businessInfo.address}</p>

                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Location <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="contact-bottom">
        <div className="container">
          <MessageCircle size={32} />

          <p>GOOD FOOD IS BETTER WHEN SHARED</p>

          <h2>
            See You <span>Soon.</span>
          </h2>
        </div>
      </section>

    </main>
  );
}

export default Contact;
