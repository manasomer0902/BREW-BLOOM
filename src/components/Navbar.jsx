
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Our Story', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-main">BREW <span>&</span> BLOOM</span>
          <span className="logo-subtitle">CAFE · KITCHEN · EXPERIENCE</span>
        </Link>

        <nav
          className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
          aria-hidden={!isMenuOpen && window.innerWidth <= 760}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active-link' : ''}`
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/reservations"
            className="navbar-reserve mobile-reserve"
            onClick={closeMenu}
          >
            Reserve a Table
            <ArrowUpRight size={16} />
          </Link>
        </nav>

        <Link to="/reservations" className="navbar-reserve desktop-reserve">
          Reserve a Table
          <ArrowUpRight size={16} />
        </Link>

        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
