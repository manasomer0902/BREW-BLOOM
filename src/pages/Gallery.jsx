import SEO from '../components/SEO';
import { useState } from 'react';
import { Camera, X, ArrowUpRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    title: 'The Dining Experience',
    category: 'INTERIOR',
    image: 'photo-1517248135467-4c7edcad34c4',
    alt: 'Elegant restaurant dining interior',
  },
  {
    id: 2,
    title: 'Freshly Crafted',
    category: 'FOOD',
    image: 'photo-1547592180-85f173990554',
    alt: 'Freshly prepared food',
  },
  {
    id: 3,
    title: 'Coffee Moments',
    category: 'COFFEE',
    image: 'photo-1495474472287-4d71bcdd2085',
    alt: 'Freshly brewed coffee',
  },
  {
    id: 4,
    title: 'A Taste of Italy',
    category: 'FOOD',
    image: 'photo-1579751626657-72bc17010498',
    alt: 'Italian style pizza',
  },
  {
    id: 5,
    title: 'Sweet Indulgence',
    category: 'DESSERTS',
    image: 'photo-1578985545062-69928b1d9587',
    alt: 'Chocolate celebration cake',
  },
  {
    id: 6,
    title: 'The Perfect Setting',
    category: 'INTERIOR',
    image: 'photo-1414235077428-338989a2e8c0',
    alt: 'Beautiful restaurant table setting',
  },
  {
    id: 7,
    title: 'Made with Love',
    category: 'FOOD',
    image: 'photo-1473093295043-cdd812d0e601',
    alt: 'Freshly prepared pasta',
  },
  {
    id: 8,
    title: 'Coffee & Conversations',
    category: 'COFFEE',
    image: 'photo-1442512595331-e89e73853f31',
    alt: 'Coffee being prepared',
  },
  {
    id: 9,
    title: 'Little Details',
    category: 'INTERIOR',
    image: 'photo-1559339352-11d035aa65de',
    alt: 'Restaurant interior details',
  },
  {
    id: 10,
    title: 'Something Sweet',
    category: 'DESSERTS',
    image: 'photo-1488477181946-6428a0291777',
    alt: 'Delicious dessert',
  },
  {
    id: 11,
    title: 'The Art of Dining',
    category: 'FOOD',
    image: 'photo-1547592180-85f173990554',
    alt: 'Beautifully presented meal',
  },
  {
    id: 12,
    title: 'Slow Mornings',
    category: 'COFFEE',
    image: 'photo-1509042239860-f550ce710b93',
    alt: 'Coffee cup on a table',
  },
];

const filters = ['ALL', 'FOOD', 'INTERIOR', 'COFFEE', 'DESSERTS'];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === 'ALL'
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeFilter);

  return (
    <div className="gallery-page">
    <SEO
      title="Gallery | BREW & BLOOM"
      description="Explore the food, coffee and welcoming interiors of BREW & BLOOM."
    />
      {/* Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">
            <Camera size={15} />
            A GLIMPSE INTO OUR WORLD
          </span>

          <h1>
            Moments Worth
            <span> Remembering.</span>
          </h1>

          <p>
            From beautiful plates to warm spaces, discover the little
            moments that make BREW & BLOOM special.
          </p>

          <span className="gallery-hero-note">
            FOOD · PEOPLE · EXPERIENCES
          </span>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-main section-padding">
        <div className="container">
          <div className="gallery-heading">
            <div>
              <span className="gallery-eyebrow">OUR VISUAL JOURNAL</span>
              <h2>
                Life at <span>BREW & BLOOM</span>
              </h2>
            </div>

            <p>
              Every picture tells a little story. Take a look around.
            </p>
          </div>

          {/* Filters */}
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredImages.map((item) => (
              <button
                type="button"
                className="gallery-card"
                key={item.id}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`}
                  alt={item.alt}
                  loading="lazy"
                />

                <span className="gallery-card-overlay">
                  <span className="gallery-card-category">
                    {item.category}
                  </span>

                  <span className="gallery-card-title">
                    {item.title}
                  </span>

                  <span className="gallery-card-icon">
                    <ArrowUpRight size={19} />
                  </span>
                </span>
              </button>
            ))}
          </div>

          <p className="gallery-count">
            SHOWING {filteredImages.length} MOMENTS
          </p>
        </div>
      </section>

      {/* Closing section */}
      <section className="gallery-bottom">
        <div className="container">
          <span className="gallery-eyebrow">COME MAKE YOUR OWN MOMENTS</span>

          <h2>
            Your story deserves
            <span> a beautiful table.</span>
          </h2>

          <a href="/reservations" className="gallery-cta">
            Reserve Your Table
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={`https://images.unsplash.com/${selectedImage.image}?auto=format&fit=crop&w=1600&q=90`}
              alt={selectedImage.alt}
            />

            <div className="gallery-lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
