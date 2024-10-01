import React from 'react';
import '../styles/Wishlist.css';

const Wishlist = ({ wishlistItems, setWishlistItems, addToCart }) => {
  const handleRemoveFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist); // Update state to re-render
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlists</h2>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.imageUrl} alt={item.title} className="item-image" />
            <div>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
              <button
                className="remove-from-wishlist"
                onClick={() => handleRemoveFromWishlist(item.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="place-holder">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
