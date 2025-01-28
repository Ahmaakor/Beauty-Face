import React from 'react';
import empty from './new-images/package.png'
import '../styles/Wishlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClose } from '@fortawesome/free-solid-svg-icons';

const Wishlist = ({ wishlistItems, setWishlistItems, addToCart }) => {
  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist); 
  };

  return (   
    <div className="wishlist-container">
      <h2>My Wishlists</h2>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.imageUrl} alt={item.title} className="item-image" />

              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              </button>
              <button
                className="remove-from-wishlist"
                onClick={() => handleRemoveFromWishlist(item.id)}
              >
                <FontAwesomeIcon icon={faClose} className="cart-icon" />
              </button>
          </div>
        ))
      ) : (
        <div className="place">
          <img src={empty} alt="empty" className="empty" />
          <p className="place-holder">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
