import React from 'react';
import ProductList from './ProductList';
import '../styles/Homepage.css';

const Product = ({ cartItems, setCartItems}) => {

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
        <h1>Our Products</h1>
        <ProductList setCartItems={setCartItems} />
    </>
  );
};

export default Product;
