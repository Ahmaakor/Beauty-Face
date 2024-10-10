import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Wishlist from './components/Wishlist';
import Authentication from './components/Authentication';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [user, setUser] = useState(localStorage.getItem('user') || null);
  const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishlistItems')) || []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

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

      return updatedCart;
    });
  };

  return (
    <Router>
      <Header user={user} setUser={setUser} cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
      <Routes>
        <Route path="/" element={<Homepage setCartItems={setCartItems} setWishlistItems={setWishlistItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/dashboard" element={<Dashboard cartItems={cartItems} />} />
        <Route path="/auth" element={<Authentication setUser={setUser} />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
