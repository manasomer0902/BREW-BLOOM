
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './MenuCategories.css';

const categories = [
  {
    id: 1,
    name: 'Starters',
    description: 'Small bites, unforgettable beginnings.',
    count: '20 ITEMS',
    image:
      'https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Main Course',
    description: 'Comforting classics and signature plates.',
    count: '20 ITEMS',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Pizza & Burgers',
    description: 'Freshly made favourites with a twist.',
    count: '20 ITEMS',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    name: 'Desserts',
    description: 'A little sweetness for every occasion.',
    count: '20 ITEMS',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    name: 'Coffee & Beverages',
    description: 'Your favourite moments, served in a cup.',
    count: '20 ITEMS',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85',
  },
];

function MenuCategories() {
  return (
    <section className="categories-section">
      <div className="categories-container">

        <div className="categories-heading">
          <div>
            <span className="categories-eyebrow">
              <span />
              EXPLORE OUR MENU
            </span>

            <h2>
              Something for <em>Every Craving</em>
            </h2>

            <p>
              From the first bite to the last sip, discover something
              delicious for every mood and every moment.
            </p>
          </div>

          <Link to="/menu" className="categories-all-link">
            View Full Menu
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              to="/menu"
              className="category-card"
              key={category.id}
              aria-label={`Explore ${category.name} menu`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
                loading="lazy"
              />

              <div className="category-overlay" />

              <div className="category-content">
                <span className="category-count">{category.count}</span>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="category-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="categories-footer">
          <span />
          <p>FRESH INGREDIENTS · THOUGHTFUL CREATIONS · GOOD TIMES</p>
          <span />
        </div>

      </div>
    </section>
  );
}

export default MenuCategories;
