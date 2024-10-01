import React, { useState } from 'react';
// import ProductList from './ProductList';
import '../styles/Cart.css';

const Cart = ({ cartItems, setCartItems}) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);



  const handleQuantityChange = (item, delta) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((i) =>
        i.id === item.id ? { ...i, quantity: Math.max(i.quantity + delta, 1) } : i
      );

      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((i) => i.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    // alert('Payment successful! Thank you for your order.');
    let notify = document.querySelector('.notification')
    notify.textContent = ('Payment successful! Thank you for your order.')
    notify.style.animation = 'order 2s ease'

    const existingHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
    const newPurchase = cartItems.map((item) => ({
      title: item.title,
      quantity: item.quantity,
      price: item.price,
      date: new Date().toISOString(), 
    }));

    const updatedHistory = [...existingHistory, ...newPurchase];
    localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));

    setCartItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="cart-container">
        <div className="cart-list">
          <h2>My Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="item-image" />
                <div>
                  <h4>{item.title}</h4>
                  <div>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                  </div>
                  </div>
                  <button className="remove-from-cart" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="place-holder">Your cart is empty.</p>
          )}
        </div>
        <div className="cart-sidebar">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder} className="place-order-btn">
            Place Order
          </button>
          {isOrderPlaced && <p className="order-success">Order placed successfully!</p>}
        </div>
      </div>
      {/* <ProductList setCartItems={setCartItems} /> */}
    </>
  );
};

export default Cart;
