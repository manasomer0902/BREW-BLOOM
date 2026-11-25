
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Food Enthusiast',
    initials: 'AS',
    review:
      'Beautiful ambience, delicious food and genuinely warm hospitality. The perfect place to spend a relaxed evening.',
  },
  {
    id: 2,
    name: 'Ananya Mehta',
    role: 'Regular Guest',
    initials: 'AM',
    review:
      'From the presentation to the flavours, everything feels thoughtfully done. The coffee and desserts are my favourites!',
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'Weekend Visitor',
    initials: 'RK',
    review:
      'A lovely dining experience with a beautiful atmosphere. Definitely a place I would love to visit again.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="testimonials-heading">
          <span className="testimonials-eyebrow">
            <span />
            KIND WORDS
            <span />
          </span>

          <h2>
            Moments That <em>Speak</em>
          </h2>

          <p>
            Good food brings people together. Beautiful experiences
            give them something to remember.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <div className="testimonial-card-top">
                <Quote size={34} className="testimonial-quote-icon" />

                <div className="testimonial-stars" aria-label="Five stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="testimonial-review">
                “{item.review}”
              </p>

              <div className="testimonial-divider" />

              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {item.initials}
                </div>

                <div>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="testimonials-note">
          SAMPLE TESTIMONIALS FOR WEBSITE DEMONSTRATION
        </p>

      </div>
    </section>
  );
}

export default Testimonials;
