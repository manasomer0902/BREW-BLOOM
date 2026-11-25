
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import './SignatureDishes.css';

const dishes = [
  {
    id: 1,
    name: 'Creamy Tuscan Pasta',
    category: 'CHEF’S SPECIAL',
    description:
      'Silky cream sauce, sun-dried tomatoes, parmesan and fresh herbs.',
    price: '₹349',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85',
    alt: 'Creamy Italian pasta with herbs',
  },
  {
    id: 2,
    name: 'Gourmet Margherita',
    category: 'HOUSE FAVOURITE',
    description:
      'Classic tomato, creamy mozzarella, fresh basil and a crisp crust.',
    price: '₹399',
    image:
      'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
    alt: 'Freshly baked Margherita pizza',
  },
  {
    id: 3,
    name: 'Chocolate Indulgence',
    category: 'SWEET FINISH',
    description:
      'A rich chocolate dessert crafted for your sweetest moments.',
    price: '₹249',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    alt: 'Rich chocolate dessert cake',
  },
];

function SignatureDishes() {
  return (
    <section className="signature-section">
      <div className="signature-container">

        <div className="signature-heading">
          <div>
            <span className="signature-eyebrow">
              <span />
              A TASTE OF SOMETHING SPECIAL
            </span>

            <h2>
              Our Signature <em>Creations</em>
            </h2>

            <p>
              Thoughtfully prepared, beautifully presented and
              made to turn every visit into a memorable experience.
            </p>
          </div>

          <Link to="/menu" className="signature-view-all">
            Explore Full Menu
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="signature-grid">
          {dishes.map((dish) => (
            <article className="signature-card" key={dish.id}>
              <div className="signature-image-wrapper">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  className="signature-image"
                  loading="lazy"
                />

                <span className="signature-category">
                  {dish.category}
                </span>

                <span className="signature-image-star">
                  <Star size={14} fill="currentColor" />
                </span>
              </div>

              <div className="signature-card-content">
                <div className="signature-title-row">
                  <h3>{dish.name}</h3>
                  <span className="signature-price">{dish.price}</span>
                </div>

                <p>{dish.description}</p>

                <Link to="/menu" className="signature-card-link">
                  Discover More
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="signature-bottom">
          <span />
          <p>GOOD FOOD. BEAUTIFUL MOMENTS. ALWAYS.</p>
          <span />
        </div>

      </div>
    </section>
  );
}

export default SignatureDishes;
