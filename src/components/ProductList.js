import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductList.css';

import image1 from '.././images/bab1.jpg'
import image2 from '.././images/bab3.jpg'
import image3 from '.././images/bab4.jpeg'
import image4 from '.././images/bab4.webp'
import image5 from '.././images/bab5.jpg'
import image6 from '.././images/bab6.jpeg'
import image7 from '.././images/bab7.jpg'
import image8 from '.././images/bab8.jpeg'
import image9 from '.././images/bad shoe.webp'
import image10 from '.././images/brown-watch.webp'
import image11 from '.././images/clock1.jpg'
import image12 from '.././images/clock3.jpg'
import image13 from '.././images/clock5.jpg'
import image14 from '.././images/clock6.jpg'
import image15 from '.././images/clock7.jpg'
import image16 from '.././images/clock8.jpg'
import image17 from '.././images/download.jpeg'
import image18 from '.././images/Hero-Shoe.png'
import image19 from '.././images/hoodie1.jpg'
import image20 from '.././images/hoodie2.jpg'
import image21 from '.././images/imag-2.jpeg'
import image22 from '.././images/imag-3.jpeg'
import image23 from '.././images/imag-10.jpeg'
import image24 from '.././images/nike-air-jordan.jpg'
import image25 from '.././images/nike.jpg'
import image26 from '.././images/ox-street-shoe.jpg'
import image27 from '.././images/Shoe 3.jpg'
import image28 from '.././images/Shoe 4.jpeg'
import image29 from '.././images/Shoe 5.jpg'
import image30 from '.././images/Shoe 6.webp'
import image31 from '.././images/Shoe 7.jpg'
import image32 from '.././images/Shoe 8.jpg'
import image33 from '.././images/Shoe 9.webp'
import image34 from '.././images/Shoe 11.jpg'
import image35 from '.././images/Shoe 12.jpg'
import image36 from '.././images/skye azalea.jpg'
import image37 from '.././images/sneakers.jpg'
import image38 from '.././images/sneakers3.jpg'
import image39 from '.././images/sneakers5.jpg'
import image40 from '.././images/sneakers6.jpg'

const ProductList = ({ setCartItems }) => {
  const products = [
    {
      id: 1,
      title: 'Kid Wear',
      price: 17.14,
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'Kid wear 2',
      price: 43.08,
      imageUrl: image2,
    },
    {
      id: 3,
      title: 'Kid Gown',
      price: 31.04,
      imageUrl: image3,
    },
    {
      id: 4,
      title: 'Baby Match',
      price: 19.99,
      imageUrl: image4,
    },
    {
      id: 5,
      title: 'Baby Mix',
      price: 21.89,
      imageUrl: image5,
    },
    {
      id: 6,
      title: 'Blouse',
      price: 15.03,
      imageUrl: image6,
    },
    {
      id: 7,
      title: 'Plain Shirt',
      price: 19.93,
      imageUrl: image7,
    },
    {
      id: 8,
      title: 'Shirt with Cap',
      price: 19.93,
      imageUrl: image8,
    },
    {
      id: 9,
      title: 'Bad Shoe',
      price: 69.93,
      imageUrl: image9,
    },
    {
      id: 10,
      title: 'Brown Watch',
      price: 79.99,
      imageUrl: image10,
    },
    {
      id: 11,
      title: 'Box Watch',
      price: 14.50,
      imageUrl: image11,
    },
    {
      id: 12,
      title: 'Silver Watch',
      price: 18.99,
      imageUrl: image12,
    },
    {
      id: 13,
      title: 'Minimalist Watch',
      price: 25.60,
      imageUrl: image13,
    },
    {
      id: 14,
      title: 'Vintage Watch',
      price: 22.90,
      imageUrl: image14,
    },
    {
      id: 15,
      title: 'Modern Watch',
      price: 26.50,
      imageUrl: image15,
    },
    {
      id: 16,
      title: 'Designer Watch',
      price: 29.99,
      imageUrl: image16,
    },
    {
      id: 17,
      title: 'Casual Shirt',
      price: 39.00,
      imageUrl: image17,
    },
    {
      id: 18,
      title: 'Hero Shoe',
      price: 54.00,
      imageUrl: image18,
    },
    {
      id: 19,
      title: 'Hoodie 1',
      price: 34.50,
      imageUrl: image19,
    },
    {
      id: 20,
      title: 'Hoodie 2',
      price: 32.99,
      imageUrl: image20,
    },
    {
      id: 21,
      title: 'Casual Outfit',
      price: 45.89,
      imageUrl: image21,
    },
    {
      id: 22,
      title: 'Stylish Shoe',
      price: 49.00,
      imageUrl: image22,
    },
    {
      id: 23,
      title: 'Designer Shoe',
      price: 55.99,
      imageUrl: image23,
    },
    {
      id: 24,
      title: 'Nike Air Jordan',
      price: 199.99,
      imageUrl: image24,
    },
    {
      id: 25,
      title: 'Nike Sportswear',
      price: 120.00,
      imageUrl: image25,
    },
    {
      id: 26,
      title: 'Oxford Street Shoe',
      price: 89.99,
      imageUrl: image26,
    },
    {
      id: 27,
      title: 'Jogging Shoe',
      price: 64.50,
      imageUrl: image27,
    },
    {
      id: 28,
      title: 'Race Shoe',
      price: 68.20,
      imageUrl: image28,
    },
    {
      id: 29,
      title: 'Fancy Shoe',
      price: 72.40,
      imageUrl: image29,
    },
    {
      id: 30,
      title: 'Classic Shoe',
      price: 75.99,
      imageUrl: image30,
    },
    {
      id: 31,
      title: 'Blue Shoe',
      price: 78.00,
      imageUrl: image31,
    },
    {
      id: 32,
      title: 'Training Shoe',
      price: 82.50,
      imageUrl: image32,
    },
    {
      id: 33,
      title: 'Black Shoe',
      price: 84.99,
      imageUrl: image33,
    },
    {
      id: 34,
      title: 'BlueRed Shoe',
      price: 89.99,
      imageUrl: image34,
    },
    {
      id: 35,
      title: 'Golden Nike Shoe',
      price: 92.50,
      imageUrl: image35,
    },
    {
      id: 36,
      title: 'Skye Azalea',
      price: 69.99,
      imageUrl: image36,
    },
    {
      id: 37,
      title: 'Classic Sneakers',
      price: 54.50,
      imageUrl: image37,
    },
    {
      id: 38,
      title: 'White Sneakers',
      price: 57.30,
      imageUrl: image38,
    },
    {
      id: 39,
      title: 'Air Sneakers',
      price: 59.99,
      imageUrl: image39,
    },
    {
      id: 40,
      title: 'Pink Sneakers',
      price: 62.00,
      imageUrl: image40,
    },
  ];



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

  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    const existingWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    if (!existingWishlist.some((i) => i.id === item.id)) {
      const updatedWishlist = [...existingWishlist, item];
      localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
      setWishlistItems(updatedWishlist);
      alert(`${item.title} has been added to your wishlist!`);
    } else {
      alert(`${item.title} is already in your wishlist.`);
    }
  };
  

  return (
    <div className="product-container">
      <></>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-pics">
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          </div>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button
  onClick={(event) => {
    alert(`${product.title} has being added to cart.`);
    addToCart(product);
    // event.currentTarget.style.background = 'green';
  }}
  className="add-cart-button"
>
  Add to Cart
</button>


          <FontAwesomeIcon
            icon={faHeart}
            className="wishlist-icon"
            onClick={() => addToWishlist(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
