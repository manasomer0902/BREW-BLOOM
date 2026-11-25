import SEO from '../components/SEO';

import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import './Menu.css';

const menuCategories = [
  'All',
  'Starters',
  'Main Course',
  'Pizza & Burgers',
  'Desserts',
  'Coffee & Beverages',
];

const menuData = [
  {
    category: 'Starters',
    items: [
      ['Crispy Cottage Cheese', 249, 'Golden paneer bites served with a creamy house dip.', 'Bestseller'],
      ['Loaded Nachos', 229, 'Crunchy tortilla chips topped with cheese, salsa and jalapeños.', 'Popular'],
      ['Peri Peri Fries', 179, 'Crispy fries tossed in our signature peri peri seasoning.'],
      ['Truffle Cheese Balls', 269, 'Golden cheese-filled bites with a delicate truffle aroma.', 'Chef Special'],
      ['Classic Bruschetta', 219, 'Toasted bread topped with tomatoes, basil and olive oil.'],
      ['Garlic Bread Supreme', 199, 'Freshly baked garlic bread with herbs and melted cheese.'],
      ['Stuffed Mushroom Caps', 259, 'Mushrooms filled with seasoned cheese and herbs.'],
      ['Mexican Cheese Quesadilla', 279, 'Grilled tortillas filled with vegetables and melted cheese.'],
      ['Crispy Corn Cups', 189, 'Crunchy sweet corn tossed with spices and fresh herbs.'],
      ['Paneer Tikka Skewers', 289, 'Marinated paneer grilled with peppers and aromatic spices.'],
      ['Veg Spring Rolls', 199, 'Crispy rolls filled with seasoned vegetables.'],
      ['Honey Chilli Potato', 219, 'Crispy potatoes glazed with sweet and spicy sauce.'],
      ['Cheese Jalapeño Poppers', 249, 'Golden bites filled with creamy cheese and jalapeños.'],
      ['Mediterranean Hummus', 239, 'Smooth hummus served with toasted pita and olive oil.'],
      ['Crispy Onion Rings', 169, 'Golden battered onion rings with a smoky dipping sauce.'],
      ['Stuffed Garlic Mushrooms', 269, 'Juicy mushrooms filled with garlic butter and cheese.'],
      ['Tandoori Broccoli', 249, 'Char-grilled broccoli with a creamy spiced marinade.'],
      ['Thai Chilli Paneer', 279, 'Paneer tossed in a tangy Thai-inspired chilli glaze.'],
      ['Classic Caesar Salad', 259, 'Crisp lettuce, parmesan, croutons and Caesar dressing.'],
      ['BBQ Cottage Cheese Bites', 269, 'Smoky paneer bites coated in our house barbecue glaze.'],
    ],
  },
  {
    category: 'Main Course',
    items: [
      ['Creamy Tuscan Pasta', 349, 'Creamy pasta with herbs, vegetables and parmesan.', 'Bestseller'],
      ['Grilled Veggie Bowl', 299, 'A wholesome bowl of grilled vegetables and fresh greens.'],
      ['Paneer Makhani', 329, 'Soft paneer in a rich, buttery tomato gravy.'],
      ['Mushroom Alfredo Pasta', 359, 'Pasta tossed in creamy Alfredo sauce with mushrooms.'],
      ['Classic Veg Lasagna', 379, 'Layers of pasta, vegetables, cheese and rich tomato sauce.', 'Chef Special'],
      ['Thai Green Curry', 349, 'Aromatic coconut curry served with steamed rice.'],
      ['Veggie Pesto Pasta', 339, 'Fresh basil pesto pasta with seasonal vegetables.'],
      ['Dal Makhani', 299, 'Slow-cooked black lentils finished with butter and cream.'],
      ['Shahi Paneer', 339, 'Paneer in a mildly spiced royal cashew gravy.'],
      ['Mexican Burrito Bowl', 319, 'Rice, beans, vegetables, salsa and creamy dressing.'],
      ['Schezwan Fried Rice', 269, 'Wok-tossed rice with vegetables and spicy Schezwan sauce.'],
      ['Classic Veg Hakka Noodles', 259, 'Stir-fried noodles with fresh vegetables.'],
      ['Mushroom Risotto', 379, 'Creamy Italian rice with mushrooms and parmesan.'],
      ['Paneer Lababdar', 339, 'Paneer in a rich tomato and aromatic spice gravy.'],
      ['Mediterranean Rice Bowl', 329, 'Herbed rice with roasted vegetables and hummus.'],
      ['Four Cheese Ravioli', 399, 'Pasta parcels filled with cheese in a creamy sauce.'],
      ['Veggie Thai Noodles', 289, 'Noodles tossed with vegetables and Thai-inspired flavours.'],
      ['Spinach Corn Bake', 329, 'Spinach and sweet corn baked under a cheese topping.'],
      ['Classic Chole Rice', 249, 'Spiced chickpea curry served with steamed rice.'],
      ['Grilled Paneer Steak', 399, 'Herb-marinated paneer served with vegetables and sauce.'],
    ],
  },
  {
    category: 'Pizza & Burgers',
    items: [
      ['Gourmet Margherita', 399, 'Classic mozzarella, basil and rich tomato sauce.', 'Bestseller'],
      ['Farmhouse Pizza', 449, 'A colourful mix of peppers, onions, mushrooms and olives.'],
      ['Four Cheese Pizza', 499, 'A decadent blend of four delicious cheeses.', 'Popular'],
      ['Peri Peri Paneer Pizza', 469, 'Spicy paneer, peppers and a peri peri sauce.'],
      ['BBQ Veggie Pizza', 449, 'Roasted vegetables with smoky barbecue sauce.'],
      ['Mexican Fiesta Pizza', 459, 'Jalapeños, corn, salsa and a spicy cheese blend.'],
      ['Pesto Garden Pizza', 479, 'Basil pesto, fresh vegetables and mozzarella.'],
      ['Classic Veggie Burger', 279, 'A juicy veggie patty with lettuce and house sauce.'],
      ['Crispy Paneer Burger', 329, 'Crispy paneer, fresh slaw and creamy dressing.'],
      ['Mushroom Swiss Burger', 349, 'Grilled mushrooms, Swiss-style cheese and caramelised onions.'],
      ['Smoky BBQ Burger', 319, 'A veggie patty with smoky barbecue sauce.'],
      ['Mexican Crunch Burger', 329, 'A crunchy patty with salsa and jalapeño dressing.'],
      ['Double Cheese Burger', 369, 'A double veggie patty with extra melted cheese.'],
      ['Peri Peri Veg Burger', 299, 'A spicy veggie patty with peri peri mayo.'],
      ['Classic Paneer Pizza', 449, 'Marinated paneer with peppers and mozzarella.'],
      ['Tandoori Delight Pizza', 469, 'Tandoori vegetables with a creamy spiced sauce.'],
      ['Olive & Artichoke Pizza', 499, 'Mediterranean-inspired toppings with mozzarella.'],
      ['Spicy Schezwan Pizza', 449, 'A fusion pizza with vegetables and Schezwan sauce.'],
      ['Cottage Cheese Sliders', 299, 'Mini paneer burgers with a tangy house dressing.'],
      ['Loaded Cheese Burger', 349, 'A hearty veggie burger with a generous cheese filling.'],
    ],
  },
  {
    category: 'Desserts',
    items: [
      ['Chocolate Indulgence', 249, 'Rich chocolate dessert made for your sweetest moments.', 'Bestseller'],
      ['Classic Cheesecake', 229, 'Smooth cheesecake with a buttery biscuit base.'],
      ['Belgian Chocolate Brownie', 199, 'Warm, fudgy brownie with rich chocolate flavour.', 'Popular'],
      ['Tiramisu Delight', 279, 'Coffee-soaked layers with a light mascarpone cream.'],
      ['Red Velvet Slice', 249, 'Soft red velvet sponge with cream cheese frosting.'],
      ['Lotus Biscoff Cheesecake', 299, 'Creamy cheesecake topped with Biscoff spread.'],
      ['Chocolate Lava Cake', 229, 'Warm chocolate cake with a molten centre.'],
      ['Classic Apple Pie', 219, 'Buttery pastry filled with cinnamon-spiced apples.'],
      ['Strawberry Panna Cotta', 239, 'Silky Italian cream dessert with strawberry topping.'],
      ['Blueberry Cheesecake', 269, 'Creamy cheesecake finished with blueberry compote.'],
      ['Belgian Waffle', 229, 'Golden waffle served with chocolate sauce.'],
      ['Nutella Pancakes', 259, 'Fluffy pancakes layered with chocolate hazelnut spread.'],
      ['Mango Mousse', 199, 'Light and airy mousse with tropical mango flavour.'],
      ['Caramel Custard', 189, 'Classic baked custard with golden caramel.'],
      ['Oreo Mud Pie', 249, 'Chocolate cream dessert with crunchy Oreo pieces.'],
      ['Classic Gulab Jamun', 159, 'Soft milk dumplings in fragrant sugar syrup.'],
      ['Sizzling Brownie', 299, 'Warm brownie served with ice cream and chocolate sauce.'],
      ['Fresh Fruit Parfait', 219, 'Layers of fresh fruit, cream and crunchy granola.'],
      ['Vanilla Bean Ice Cream', 149, 'Creamy vanilla ice cream with a delicate aroma.'],
      ['Chocolate Chip Cookie Skillet', 279, 'Warm cookie skillet with chocolate chips and ice cream.'],
    ],
  },
  {
    category: 'Coffee & Beverages',
    items: [
      ['Signature Cappuccino', 159, 'Freshly brewed espresso topped with silky milk foam.', 'Bestseller'],
      ['Iced Caramel Latte', 189, 'Chilled espresso, milk and a touch of caramel.'],
      ['Classic Espresso', 119, 'A bold, rich shot of freshly extracted coffee.'],
      ['Café Americano', 139, 'Espresso balanced with hot water.'],
      ['Classic Caffè Latte', 169, 'Espresso with smooth steamed milk.'],
      ['Mocha Frappe', 219, 'Blended coffee with chocolate and creamy milk.'],
      ['Vanilla Cold Coffee', 199, 'Chilled coffee blended with vanilla and milk.', 'Popular'],
      ['Hazelnut Latte', 199, 'Smooth espresso with aromatic hazelnut flavour.'],
      ['Classic Hot Chocolate', 189, 'Rich chocolate blended into warm creamy milk.'],
      ['Matcha Latte', 219, 'Japanese-inspired matcha with creamy milk.'],
      ['Fresh Lemon Iced Tea', 149, 'Refreshing iced tea with fresh lemon.'],
      ['Peach Iced Tea', 159, 'Chilled tea infused with sweet peach flavour.'],
      ['Virgin Mojito', 179, 'Mint, lime and sparkling refreshment.'],
      ['Blue Lagoon Cooler', 189, 'A refreshing citrus cooler with a vibrant twist.'],
      ['Mango Smoothie', 199, 'A creamy smoothie made with mango and milk.'],
      ['Strawberry Milkshake', 199, 'Fresh strawberry flavour blended with chilled milk.'],
      ['Oreo Milkshake', 219, 'A creamy milkshake with crunchy Oreo cookies.'],
      ['Classic Masala Chai', 99, 'Traditional Indian tea with aromatic spices.'],
      ['Fresh Orange Juice', 169, 'Freshly prepared orange juice.'],
      ['Berry Blast Smoothie', 229, 'A refreshing blend of mixed berries and yoghurt.'],
    ],
  },
];

// Converts dish names into consistent local image filenames.
// Example: Cheese Jalapeño Poppers -> cheese-jalapeno-poppers.jpg
const createImagePath = (name) => {
  const fileName = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `/images/menu/${fileName}.jpg`;
};

const menuItems = menuData.flatMap((group) =>
  group.items.map((item, index) => ({
    id: `${group.category}-${index + 1}`,
    name: item[0],
    price: item[1],
    description: item[2],
    tag: item[3] || '',
    category: group.category,
    image: createImagePath(item[0]),
  }))
);

function MenuCard({ item, onOrder }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        {!imageFailed ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="menu-image-placeholder">
            <span className="placeholder-decoration">✦</span>
            <span className="placeholder-label">BREW & BLOOM</span>
            <h4>{item.name}</h4>
            <span className="placeholder-caption">
              FOOD PHOTOGRAPH COMING SOON
            </span>
          </div>
        )}

        {item.tag && (
          <span className="menu-card-tag">{item.tag}</span>
        )}
      </div>

      <div className="menu-card-content">
        <div className="menu-card-heading">
          <h3>{item.name}</h3>
          <span className="menu-card-price">₹{item.price}</span>
        </div>

        <div className="menu-card-tags">
          <span>{item.category}</span>

          {item.tag && (
            <span className="featured-tag">{item.tag}</span>
          )}
        </div>

        <p>{item.description}</p>

        <button
          className="menu-order-button"
          type="button"
          onClick={() => onOrder(item)}
          aria-label={`Order ${item.name} on WhatsApp`}
        >
          Order on WhatsApp
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category === activeCategory;

      const search = searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const orderOnWhatsApp = (item) => {
    // Replace with your actual WhatsApp number.
    // Use country code, without +, spaces or hyphens.
    const phoneNumber = '7007527711';

    const message = [
      `Hey! I want to order ${item.name} from BREW & BLOOM.`,
      '',
      `Category: ${item.category}`,
      `Price: ₹${item.price}`,
      '',
      'Please let me know the availability.',
    ].join('\n');

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="menu-page">
          <SEO
            title="Our Menu | BREW & BLOOM"
            description="Explore the BREW & BLOOM menu, featuring delicious starters, main courses, pizzas, burgers, desserts and beverages."
          />
      <section className="menu-hero">
        <div className="menu-hero-content">
          <span className="menu-eyebrow">
            MADE WITH LOVE, SERVED WITH JOY
          </span>

          <h1>
            A Menu Full of
            <br />
            <span>Little Wonders.</span>
          </h1>

          <p>
            Explore a collection of comforting classics,
            creative flavours and delightful treats.
          </p>

          <span className="menu-hero-count">
            100 REASONS TO VISIT US
          </span>
        </div>
      </section>

      <section className="menu-main">
        <div className="menu-container">
          <div className="menu-intro">
            <div>
              <span className="menu-eyebrow">
                EXPLORE OUR SELECTION
              </span>
              <h2>Something for Every Craving.</h2>
            </div>

            <p>
              From the first bite to the final sip,
              there's always something special waiting.
            </p>
          </div>

          <div className="menu-search">
            <Search size={19} />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search dishes, desserts, coffee..."
              aria-label="Search menu"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="menu-filters">
            {menuCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category ? 'active' : ''
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
                {category === 'All' && <span>100</span>}
              </button>
            ))}
          </div>

          <div className="menu-results">
            <span>SHOWING {filteredItems.length} ITEMS</span>
            <span>
              {activeCategory === 'All' ? 'FULL MENU' : activeCategory}
            </span>
          </div>

          {filteredItems.length > 0 ? (
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onOrder={orderOnWhatsApp}
                />
              ))}
            </div>
          ) : (
            <div className="menu-empty">
              <h3>No dishes found</h3>
              <p>
                Try another search or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('All');
                }}
              >
                View Full Menu
              </button>
            </div>
          )}

          <div className="menu-disclaimer">
            <p>
              BREW & BLOOM sample portfolio menu. Items and prices
              are illustrative and can be customized for the final business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Menu;
