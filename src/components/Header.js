import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from './20240925_183417.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const Header = ({ user, cartCount, wishlistCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logoa">
        <div className="header-title">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Link>

      <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
        <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
        <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>
          Wishlist <span className="cart-count">{wishlistCount}</span>
        </Link>
        <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" /> Cart  <span className="cart-count">{cartCount}</span>
        </Link>
        <Link to="/auth" className="auth-icon-mobile"  onClick={() => setIsMenuOpen(false)}>
          <FontAwesomeIcon icon={faSignInAlt} className="auth-icon" />
        </Link>
      </nav>

      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} tabindex='0'>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;
