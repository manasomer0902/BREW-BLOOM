import { Link } from 'react-router-dom';
import { ArrowUpRight, Image } from 'lucide-react';
import './GalleryPreview.css';

const galleryImages = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85',
    alt: 'Warm and elegant restaurant interior',
    label: 'THE AMBIENCE',
    className: 'gallery-large',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=85',
    alt: 'Beautifully presented fresh food',
    label: 'FRESHLY MADE',
    className: 'gallery-small',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85',
    alt: 'Freshly prepared coffee',
    label: 'COFFEE MOMENTS',
    className: 'gallery-small',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85',
    alt: 'Elegant restaurant dining setup',
    label: 'DINING EXPERIENCE',
    className: 'gallery-wide',
  },
];

function GalleryPreview() {
  return (
    <section className="gallery-preview-section">
      <div className="gallery-preview-container">

        <div className="gallery-preview-heading">
          <div>
            <span className="gallery-preview-eyebrow">
              <span />
              A GLIMPSE INTO OUR WORLD
            </span>

            <h2>
              Moments Worth <em>Capturing.</em>
            </h2>

            <p>
              From the atmosphere to the little details, take a
              glimpse into the BREW & BLOOM experience.
            </p>
          </div>

          <Link to="/gallery" className="gallery-preview-link">
            Explore Gallery
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="gallery-preview-grid">
          {galleryImages.map((item) => (
            <Link
              to="/gallery"
              key={item.id}
              className={`gallery-preview-item ${item.className}`}
              aria-label={`Explore gallery: ${item.label}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />

              <div className="gallery-preview-overlay">
                <span>{item.label}</span>
                <ArrowUpRight size={20} />
              </div>
            </Link>
          ))}
        </div>

        <div className="gallery-preview-bottom">
          <div className="gallery-instagram-icon">
            <Image size={20} />
          </div>

          <div>
            <span>FOLLOW OUR JOURNEY</span>
            <p>@brewandbloom</p>
          </div>

          <span className="gallery-instagram-note">
            GOOD FOOD. GOOD COMPANY. GOOD MEMORIES.
          </span>
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;
