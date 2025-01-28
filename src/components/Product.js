import React from 'react';
import ProductList from './ProductList';
import '../styles/Product.css';

const Product = ({ cartItems, setCartItems}) => {

    // const addToCart = (item) => {
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
    
    //       localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    //       return updatedCart;
    //     });
    // };

  return(
    <>
  
      <div className="product">
        <div className="sidebar">
          {/* <h1>Our Products</h1> */}
          <div className="search">
            <input type="search" name="search" id="search" placeholder="Search for goods..."/ >
          </div>
          <div className="product-categories">
            <div className="product-category">
              Men wears   
            </div>
            <div className="product-category">
              Women wears   
            </div>
            <div className="product-category">
              Kids wears   
            </div>
            <div className="product-category">
              Watches  
            </div>
            <div className="product-category">
              Kid ss   
            </div>
          </div>
        </div>
        <div className="main">
          <ProductList setCartItems={setCartItems} />
        </div>
      </div>
    </>
  );
};

export default Product;
