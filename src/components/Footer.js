import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Beauty Face is your ultimate destination for trendy bags, stylish shoes, and fashionable apparel. Our mission is to empower individuals through fashion, helping you express your unique style and boost your confidence with every outfit. Discover our curated collections and elevate your wardrobe with the latest trends that celebrate your individuality.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist </Link></li>
            <li><Link to="/auth">Manage Account</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Info</h2>
          <p>Email: ahmaakor@gmail.com</p>
          <p>Phone: +234 701 319 9799</p>
          <p>Address: 123 Beauty Street, Ibadan, Nigeria</p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com/Ahmaakor" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" />
            </a>
            <a href="https://tiktok.com/ahmadabduljeleel" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
            </a>
            <a href="https://instagram.com/ahmaakor" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-section newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Beauty Face. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
