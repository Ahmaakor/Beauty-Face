import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import '../styles/Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import banner1 from './new-images/Doublebanner.png'
import banner2 from './new-images/Doublebanner2.png'

import fashion1 from './new-images/fashion (1).png'
import fashion2 from './new-images/fashion (2).png'
import fashion3 from './new-images/fashion (3).png'
import fashion4 from './new-images/fashion (4).png'
import fashion5 from './new-images/fashion (5).png'
import fashion6 from './new-images/fashion (6).png'
import fashion7 from './new-images/fashion (7).png'

const Homepage = ({ cartItems, setCartItems}) => {

    const addToCart = (item) => {
        setCartItems((prevItems) => {
          const itemExists = prevItems.find((i) => i.id === item.id);
          let updatedCart;
    
          if (itemExists) {
            updatedCart = prevItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
          } else {
            updatedCart = [...prevItems, { ...item, quantity: 1 }];
          }
    
          localStorage.setItem('cartItems', JSON.stringify(updatedCart));
          return updatedCart;
        });
      };

  return(
    <>
    <div className='hero'>
        <div className='hero-display'>
            
        </div>
    </div>

    <h1>Monthly Deals</h1>

    <div className='banner-section'>
      <img src={banner1} alt="product-image" className="banner" />
      <img src={banner2} alt="product-image" className="banner" />
    </div>
    <h1>Fashion Forwards</h1>

    <div className='fashion-section'>
      {/* <img src={lady} alt="product-image" className="banner" />
      <img src={gents} alt="product-image" className="banner" />
      <img src={watch} alt="product-image" className="banner" /> */}

      <div className='fashion-card'>
        <img src={fashion7} alt="product-image" />
        <p>
          Kid wears
        </p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
      <div className='fashion-card'>
        <img src={fashion1} alt="product-image" />
        <p>
          Caps
        </p>
        <Link to="/product">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
      <div className='fashion-card'>
        <img src={fashion3} alt="product-image"/>
        <p>
          Watches
        </p>
        <Link to="/product">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
      <div className='fashion-card'>
        <img src={fashion4} alt="product-image" />
        <p>
          Men wears 
        </p>
        <Link to="/product">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
      <div className='fashion-card'>
        <img src={fashion6} alt="product-image" />
        <p>
          Ladies wears
        </p>
        <Link to="/product">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
      <div className='fashion-card'>
        <img src={fashion2} alt="product-image"/>
        <p>
          Shoe
        </p>
        <Link to="/product">
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </Link>
      </div>
    </div>

    {/* <h1>Our Products</h1>
      <ProductList setCartItems={setCartItems} /> */}
    </>
  );
};

export default Homepage;
