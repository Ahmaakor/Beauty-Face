// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';
// import '../styles/Cart.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import empty from './new-images/add-to-cart.png';

// const Cart = ({ cartItems, setCartItems }) => {
//   const [isOrderPlaced, setIsOrderPlaced] = useState(false);
//   const [showPopover, setShowPopover] = useState(false);
//   const [customerInfo, setCustomerInfo] = useState({
//     name: '', // Add name field
//     email: '', 
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//   });
//   const popoverRef = useRef(null); // Reference for the popover

//   const handleQuantityChange = (item, delta) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.map((i) =>
//         i.id === item.id ? { ...i, quantity: Math.max(i.quantity + delta, 1) } : i
//       );
//       localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const handleRemoveFromCart = (itemId) => {
//     setCartItems((prevItems) => {
//       const updatedCart = prevItems.filter((i) => i.id !== itemId);
//       localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const handlePlaceOrder = () => {
//     setShowPopover(true); // Show the popover for user details input
//   };

//   const handleSubmitOrder = (e) => {
//     e.preventDefault();
//     setIsOrderPlaced(true);
//     setShowPopover(false);

//     const emailParams = {
//       to_email: customerInfo.email,
//       from_name: 'Beauty Face',
//       phone: customerInfo.phone,
//       address: customerInfo.address,
//       city: customerInfo.city,
//       state: customerInfo.state,
//       order_details: cartItems.map((item) => `${item.title} (${item.quantity} x $${item.price})`).join(', '),
//       total_price: (totalPrice + shippingFee).toFixed(2), // Add shipping fee to total
//       customer_name: customerInfo.name, // Include customer's name
//     };

//     // Send email to both the customer and you (admin)
//     emailjs.send('service_lwil6zg', 'template_n1qgkth', emailParams, '_wTVOIl31jQM0_gWn')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//       }, (err) => {
//         console.log('FAILED...', err);
//       });

//     // Clear cart
//     const existingHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || [];
//     const newPurchase = cartItems.map((item) => ({
//       title: item.title,
//       quantity: item.quantity,
//       price: item.price,
//       date: new Date().toISOString(),
//     }));
//     const updatedHistory = [...existingHistory, ...newPurchase];
//     localStorage.setItem('purchaseHistory', JSON.stringify(updatedHistory));
//     setCartItems([]);
//   };

//   const handleCancel = () => {
//     setShowPopover(false);
//   };

//   const handleClickOutside = (e) => {
//     if (popoverRef.current && !popoverRef.current.contains(e.target)) {
//       setShowPopover(false);
//     }
//   };

//   useEffect(() => {
//     // Add event listener to close the popover when clicking outside
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const shippingFee = 5.00; // Define a fixed shipping fee
//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <>
//       <div className="cart-container">
//         <div className="cart-list">
//           <h2>My Cart</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.imageUrl} alt={item.title} className="item-image" />
//                 <div className="quantity">
//                   <h4>{item.title}</h4>
//                   <div className="quantity inner">
//                     <p>Price: ${item.price.toFixed(2)}</p>
//                     <div className="quantity-control">
//                       <button onClick={() => handleQuantityChange(item, -1)}>-</button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => handleQuantityChange(item, 1)}>+</button>
//                     </div>
//                   </div>
//                   <button className="remove-from-cart" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="place">
//               <img src={empty} alt="empty" className="empty" />
//               <p className="place-holder">Your cart is empty.</p>
//               <Link to="/product">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
//             </div>
//           )}
//         </div>
//         <div className="cart-sidebar">
//           <h3>Total: ${(totalPrice + shippingFee).toFixed(2)}</h3>
//           <button onClick={handlePlaceOrder} className="place-order-btn">Place Order</button>
//           {isOrderPlaced && <p className="order-success">Order placed successfully!</p>}
//         </div>
//       </div>

//       {showPopover && (
//         <div className="popover" ref={popoverRef}>
//           <h2>Enter Shipping Information</h2>
//           <form onSubmit={handleSubmitOrder}>
//             <label>Name:</label>
//             <input type="text" required value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
//             <label>Email:</label>
//             <input type="email" required value={customerInfo.email} onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} />
//             <label>Phone:</label>
//             <input type="text" required value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
//             <label>Address:</label>
//             <input type="text" required value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} />
//             <label>City:</label>
//             <input list="cities" required value={customerInfo.city} onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })} />
//             <datalist id="cities">
//               <option value="Lagos" />
//               <option value="Abuja" />
//               <option value="Ibadan" />
//               <option value="Kano" />
//             </datalist>
//             <label>State:</label>
//             <input list="states" required value={customerInfo.state} onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })} />
//             <datalist id="states">
//               <option value="Lagos" />
//               <option value="Abuja" />
//               <option value="Oyo" />
//               <option value="Kano" />
//             </datalist>
//             <button type="submit">Submit Order</button>
//           </form>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import empty from './new-images/add-to-cart.png';

const Cart = ({ cartItems, setCartItems }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
  });
  const popoverRef = useRef(null);

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
    setShowPopover(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    setShowPopover(false);


    const emailParams = {
      to_name: customerInfo.name,
      to_email: customerInfo.email,
      from_name: 'Beauty Face',
      phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
      state: customerInfo.state,
      order_details: cartItems.map((item) => `${item.quantity}  ${item.title} = (${item.quantity} * ${item.price.toFixed(2)})   =  $ ${(item.price*item.quantity).toFixed(2)}`).join(' \n '),
      total_price: totalPrice.toFixed(2),
      customer_name: customerInfo.name,
    };

    emailjs.send('service_lwil6zg', 'template_n1qgkth', emailParams, '_wTVOIl31jQM0_gWn')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

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

  const handleCancel = () => {
    setShowPopover(false);
  };

  const handleClickOutside = (e) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Removed shipping fee

  return (
    <>
      <div className="cart-container">
        <div className="cart-list">
          <h2>My Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.title} className="item-image" />
                <div className="quantity">
                  <h4>{item.title}</h4>
                  <div className="quantity inner">
                    <p>Price: ${item.price.toFixed(2)}</p>
                    <div className="quantity-control">
                      <button onClick={() => handleQuantityChange(item, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-from-cart" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))
          ) : (
            <div className="place">
              <img src={empty} alt="empty" className="empty" />
              <p className="place-holder">Your cart is empty.</p>
              <Link to="/product">Shop Now <FontAwesomeIcon icon={faArrowRight} /></Link>
            </div>
          )}
        </div>
        <div className="cart-sidebar">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handlePlaceOrder} className="place-order-btn">Place Order</button>
          {isOrderPlaced && <p className="order-success">Order placed successfully!</p>}
        </div>
      </div>

      {showPopover && (
        <div className="popover show" ref={popoverRef}>
          <div className={`modal-content ${showPopover ? 'show' : 'hide'}`}>
            <span className="close" onClick={handleCancel}>&times;</span>
            <h2>Order Information</h2>
            <form onSubmit={handleSubmitOrder}>
              <label>Name:</label>
              <input type="text" required value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
              <label>Email:</label>
              <input type="email" required value={customerInfo.email} onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} />
              <label>Phone:</label>
              <input type="text" required value={customerInfo.phone} onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })} />
              <label>Address:</label>
              <input type="text" required value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} />
              <label>City:</label>
              <input list="cities" required value={customerInfo.city} onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })} />
              <datalist id="cities">
                <option value="Lagos" />
                <option value="Abuja" />
                <option value="Ibadan" />
                <option value="Kano" />
              </datalist>
              <label>State:</label>
              <input list="states" required value={customerInfo.state} onChange={(e) => setCustomerInfo({ ...customerInfo, state: e.target.value })} />
              <datalist id="states">
                <option value="Lagos" />
                <option value="Abuja" />
                <option value="Oyo" />
                <option value="Kano" />
              </datalist>
              <button type="submit">Submit Order</button>

              
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

