import SEO from '../components/SEO';

import { ArrowUpRight, Heart, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: <Heart size={23} />,
    title: 'Made with Passion',
    description:
      'Every dish is prepared with care, creativity and a genuine love for good food.',
  },
  {
    icon: <Leaf size={23} />,
    title: 'Fresh Ingredients',
    description:
      'We believe memorable food begins with thoughtfully selected ingredients.',
  },
  {
    icon: <Sparkles size={23} />,
    title: 'Beautiful Experiences',
    description:
      'From the first welcome to the final bite, every detail matters to us.',
  },
];

function About() {
  return (
    <div className="about-page">

    <SEO
        title="Our Story | About BREW & BLOOM"
        description="Discover the story, passion and experience behind BREW & BLOOM."
    />
      {/* Page Hero */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-eyebrow">THE HEART OF BREW & BLOOM</span>

          <h1>
            More Than Just
            <span> A Meal.</span>
          </h1>

          <p>
            A place where thoughtful flavours, warm conversations and
            beautiful moments come together.
          </p>

          <span className="about-hero-bottom">
            OUR STORY · EST. 2026
          </span>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section-padding">
        <div className="container about-story-grid">
        <div className="about-story-image">
        <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant restaurant interior with warm lighting"
        />

        <span className="about-image-label">
            A PLACE TO SLOW DOWN
        </span>
        </div>

          <div className="about-story-content">
            <span className="about-eyebrow">
              <span /> A LITTLE ABOUT US
            </span>

            <h2>
              A place where
              <span> flavours </span>
              meet
              <span> feelings.</span>
            </h2>

            <p>
              At BREW & BLOOM, we believe the best moments happen around a
              table. From carefully crafted dishes to freshly brewed coffee,
              everything is created to make ordinary moments feel special.
            </p>

            <p>
              We bring together comforting flavours, a welcoming atmosphere
              and a little touch of elegance to create a place you'll always
              want to return to.
            </p>

            <Link to="/menu" className="about-text-link">
              EXPLORE OUR MENU
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="about-values section-padding">
        <div className="container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT MAKES US DIFFERENT</span>

            <h2>
              The little things
              <span> matter.</span>
            </h2>

            <p>
              Good food is just the beginning. It's the thought, care and
              experience behind it that make every visit memorable.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <article className="about-value-card glass-card" key={value.title}>
                <span className="about-value-number">
                  0{index + 1}
                </span>

                <div className="about-value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="about-cta">
        <div className="container about-cta-content">
          <span className="about-eyebrow">YOUR TABLE IS WAITING</span>

          <h2>
            Come for the food.
            <span> Stay for the feeling.</span>
          </h2>

          <p>
            Make your next meal a little more memorable.
          </p>

          <Link to="/reservations" className="about-cta-button">
            Reserve a Table
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
