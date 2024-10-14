import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com'






const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');

    let notify = document.querySelector('.notification')
    notify.textContent = `Subscribed with ${email}`
    notify.style.animation = 'sub 3s ease'

    // // const sendEmail = (e) => {
    //   e.preventDefault();
    
      emailjs
        .sendForm('service_pk7rr4x', 'template_1vhzaea', form.current, 
        '_wTVOIl31jQM0_gWn',
        )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    // };

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
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/wishlist">Wishlist </Link></li>
            <li><Link to="/auth">Manage Account</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Info</h2>
          <p>Email: noreplybeautyface@gmail.com</p>
          <p>Phone: +234 701 319 9799</p>
          <p>Address: 123 Beauty Street, Ibadan, Nigeria</p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com/Ahmaakor"  className="social-icon facebook" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF}  />
            </a>
            <a href="https://twitter.com/ahmaakor" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://instagram.com/ahmaakor" className="social-icon instagram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://tiktok.com/@ahmadabduljeleel" className="social-icon tiktok" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-section newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="newsletter-form" ref = {form}> 
          <input
            type="email"
            name="to_name"
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
