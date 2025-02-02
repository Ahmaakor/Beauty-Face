// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Homepage from './components/Homepage';
// import Product from './components/Product';
// import Cart from './components/Cart';
// import Dashboard from './components/Dashboard';
// import Wishlist from './components/Wishlist';
// import Authentication from './components/Authentication';
// import './App.css';

// const App = () => {
//   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
//   const [user, setUser] = useState(localStorage.getItem('user') || null);
//   const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishlistItems')) || []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   useEffect(() => {
//     localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const itemExists = prevItems.find((i) => i.id === item.id);
//       let updatedCart;

//       if (itemExists) {
//         updatedCart = prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         updatedCart = [...prevItems, { ...item, quantity: 1 }];
//       }

//       return updatedCart;
//     });
//   };

//   return (
//     <Router>
//       <Header user={user} setUser={setUser} cartCount={cartItems.length} wishlistCount={wishlistItems.length} />
//       <Routes>
//         <Route path="/" element={<Homepage setCartItems={setCartItems} setWishlistItems={setWishlistItems} />} />
//         <Route path="/product" element={<Product setCartItems={setCartItems} setWishlistItems={setWishlistItems} />} />
//         <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
//         <Route path="/dashboard" element={<Dashboard cartItems={cartItems} />} />
//         <Route path="/auth" element={<Authentication setUser={setUser} />} />
//         <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} addToCart={addToCart} />} />
//       </Routes>
      
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Product from './components/Product';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Wishlist from './components/Wishlist';
import Authentication from './components/Authentication';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishlistItems')) || []);
  const [user, setUser] = useState(localStorage.getItem('user') || null);

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

  // const addToWishlist = (item) => {
  //   const existingWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  //   let notify = document.querySelector('.notification');
    
  //   if (!existingWishlist.some((i) => i.id === item.id)) {
  //     const updatedWishlist = [...existingWishlist, item];
  //     localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
  //     setWishlistItems(updatedWishlist);
  
  //     setAnimationAlert('alert');
  //     setTimeout(() => {
  //       setAnimationAlert('wish1'); 
  //     }, 500);
  
  //     notify.textContent = `${item.title} has been added to your wishlist!`;
  //     notify.style.animation = `${animationAlert} 2s ease`; 
  
  //   } else {
  //     notify.textContent = `${item.title} is already in your wishlist.`;
  //     notify.style.animation = `already 2s ease`; 
  //   }
  //   setAnimationAlert('alert');
  
  
  // };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Homepage 
              user={user} 
              setUser={setUser} 
              cartItems={cartItems} 
              wishlistItems={wishlistItems} 
              setCartItems={setCartItems} 
              setWishlistItems={setWishlistItems} 
            />  
          } 
        />
        <Route path="/product" element={<Product setCartItems={setCartItems} setWishlistItems={setWishlistItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} addToCart={addToCart} />} />
        <Route path="/dashboard" element={<Dashboard cartItems={cartItems} />} />
        <Route path="/auth" element={<Authentication setUser={setUser} />} />
      </Routes>
      
    </Router>
  );
};

export default App;
