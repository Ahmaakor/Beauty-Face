import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from './20240925_183417.png'

const Header = ({ user, cartCount, wishlistCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50px, add the 'scrolled' class
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <Link to="/" className='logoa'>
      <div className="header-title">
        <img src={logo} alt='Logo' className='logo' />
      </div>
      </Link>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cart">
          Cart <span className="cart-count">{cartCount}</span>
        </Link>
        <Link to="/wishlist">
          Wishlist <span className="cart-count">{wishlistCount}</span>
        </Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </nav>
    </header>
  );
};

export default Header;
