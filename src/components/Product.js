// import React from 'react';
// import ProductList from './ProductList';
// import '../styles/Product.css';

// const categories = [
//   { name: "Clothing", subcategories: ["Men's Clothing", "Women's Clothing", "Kids' Clothing", "Baby Clothing"] },
//   { name: "Footwear", subcategories: ["Men's Shoes", "Women's Shoes", "Kids' Shoes", "Baby Shoes"] },
//   { name: "Accessories", subcategories: ["Watches", "Caps & Hats", "Bags & Purses", "Sunglasses"] },
//   { name: "Sportswear", subcategories: ["Activewear", "Sports Shoes", "Gym Bags"] },
//   { name: "Others", subcategories: ["Unisex Clothing", "Seasonal Collections", "New Arrivals", "Sale Items"] },
// ];

// const Product = ({ cartItems, setCartItems }) => {
//   return (
//     <div className="product">
//       <div className="sidebar">
//         <div className="search">
//           <input type="search" name="search" id="search" placeholder="Search for goods..." />
//         </div>
//         <div className="product-categories">
//           {categories.map((category) => (
//             <div key={category.name} className="product-category">
//               <h4>{category.name}</h4>
//               <ul>
//                 {category.subcategories.map((sub) => (
//                   <li key={sub} className="subcategory">{sub}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="main">
//         <ProductList setCartItems={setCartItems} />
//       </div>
//     </div>
//   );
// };

// export default Product; 



import React from 'react';
import logo from './logo.png';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faMale, faFemale, faChild, faBaby, faTshirt, faShoePrints, faClock, faBagShopping, faHatCowboy, faShoppingCart, faTachometerAlt, faHeart, faSignInAlt, faFilter} from '@fortawesome/free-solid-svg-icons';
import '../styles/Product.css';

const categories = [
  { name: 'All', icon: faTh },
  { name: 'Men Clothing', icon: faMale },
  { name: 'Women Clothing', icon: faFemale },
  { name: 'Kids Clothing', icon: faChild },
  { name: 'Baby Clothing', icon: faBaby },
  { name: 'Clothes', icon: faTshirt },
  { name: 'Shoes', icon: faShoePrints },
  { name: 'Watches', icon: faClock },
  { name: 'Bags', icon: faBagShopping },
  { name: 'Caps', icon: faHatCowboy },
];

const Header = () => (
  <header className="productHeader">
    <Link to="/" className="logoa">
      <div className="header-title">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </Link>

    <nav className="nav-links">
      <Link to="/cart" className="nav-link">
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="tooltip">Cart</div>
      </Link>

      <Link to="/dashboard" className="nav-link">
        <FontAwesomeIcon icon={faTachometerAlt} />
        <div className="tooltip">Dashboard</div>
      </Link>

      <Link to="/wishlist" className="nav-link">
        <FontAwesomeIcon icon={faHeart} />
        <div className="tooltip">Wishlist</div>
      </Link>

      <Link to="/auth" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} />
        <div className="tooltip">Sign Up/In</div>
      </Link>
    </nav>

  </header>
);

const Hero = () => (
  <section className="productHero">
    <h1>Welcome to Our Store!</h1>
    <p>Discover the best products with amazing deals!</p>
  </section>
);

const Product = ({ cartItems, setCartItems }) => {
  return (
    <>
      <Header />
      <div className="product">
        <div className="sidebar">
          <h3>Our Store</h3>
          <div className="product-categories">
            {categories.map((category, index) => (
              <div className="product-category" key={index}>
                <FontAwesomeIcon icon={category.icon} className="product-category-icon"/> {category.name}
              </div>
            ))}
          </div>
        </div>
        <div className="main">
          <Hero />
          <div className="search-filter">
            <div class="search-container">
              <input type="search" name="search" id="search" placeholder="Search for goods..." required />
              <button type="submit" for="search" class="search-button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>

            <div className="filter-container">
              <label htmlFor="filter-by" className="filter-label">
                <FontAwesomeIcon icon={faFilter} /> Sort by:
              </label>
              <select id="filter-by" name="filter" className="filter-select">
                <option value="none"></option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="new">New</option>
                <option value="rating">Rating</option>
              </select>
            </div>
  
          </div>
          <ProductList setCartItems={setCartItems} />
        </div>
      </div>
    </>
  );
};

export default Product;
