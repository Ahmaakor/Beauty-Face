import React from 'react';
import ProductList from './ProductList';
import '../styles/Homepage.css';
import banner1 from './new-images/Doublebanner.png'
import banner2 from './new-images/Doublebanner2.png'

// import lady from './new-images/LADIES.png'
// import gents from './new-images/GENT.png'
// import watch from './new-images/ACCESSORIES.png'

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
        <p>
          Kid wears
        </p>
      </div>
      <div className='fashion-card'>
        <p>
          Caps
        </p>
      </div>
      <div className='fashion-card'>
        <p>
          Watches
        </p>
      </div>
      <div className='fashion-card'>
        <p>
          Men wears 
        </p>
      </div>
      <div className='fashion-card'>
        <p>
          Ladies wears
        </p>
      </div>
      <div className='fashion-card'>
        <p>
          Shoe
        </p>
      </div>
    </div>

    <h1>Our Products</h1>
      <ProductList setCartItems={setCartItems} />
    </>
  );
};

export default Homepage;
