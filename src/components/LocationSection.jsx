
import {
  MapPin,
  Clock3,
  Phone,
  Mail,
  ArrowUpRight,
  Navigation,
} from 'lucide-react';

import businessInfo from '../data/businessInfo';
import './LocationSection.css';

function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-container">

        <div className="location-heading">
          <span className="location-eyebrow">
            <span />
            COME FIND US
          </span>

          <h2>
            Your Next Favourite <em>Spot.</em>
          </h2>

          <p>
            Good food, warm hospitality and a welcoming space.
            We'd love to see you here.
          </p>
        </div>

        <div className="location-grid">

          <div className="location-info">

            {/* LOCATION */}
            <div className="location-info-card">
              <div className="location-icon">
                <MapPin size={21} />
              </div>

              <div>
                <h3>Our Location</h3>

                <p>
                  {businessInfo.name}
                  <br />
                  {businessInfo.address}
                </p>

                <a
                  href={businessInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-action-link"
                >
                  Get Directions <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="location-info-card">
              <div className="location-icon">
                <Clock3 size={21} />
              </div>

              <div className="location-hours">
                <h3>Opening Hours</h3>

                {businessInfo.openingHours.map((item) => (
                  <div
                    className="location-hour-row"
                    key={item.day}
                  >
                    <span>{item.day}</span>
                    <strong>{item.time}</strong>
                  </div>
                ))}

                <span className="location-demo-note">
                  Illustrative timings — to be confirmed
                </span>
              </div>
            </div>

            {/* PHONE */}
            <div className="location-info-card">
              <div className="location-icon">
                <Phone size={21} />
              </div>

              <div>
                <h3>Call Us</h3>

                <a href={`tel:${businessInfo.phone}`}>
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="location-info-card">
              <div className="location-icon">
                <Mail size={21} />
              </div>

              <div>
                <h3>Email Us</h3>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(businessInfo.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {businessInfo.email}
                </a>
              </div>
            </div>

          </div>

          {/* GOOGLE MAP */}
          <div className="location-map-wrapper">
            <div className="location-map">
              <iframe
                title="BREW & BLOOM location in Connaught Place"
                src="https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="location-map-footer">
              <span>
                <Navigation size={15} />
                CONNAUGHT PLACE, NEW DELHI
              </span>

              <a
                href={businessInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location-map-pending"
              >
                OPEN IN MAPS
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default LocationSection;
