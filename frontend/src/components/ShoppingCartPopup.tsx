import React from 'react';
import '../styles/ShoppingCartPopup.css';
 

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const ShoppingCartPopup: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>

      {/* Popup */}
      <div className={`shopping-cart-popup ${isOpen ? 'open' : ''}`}>
        <div className="header">
          <h3>Shopping cart</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="content">
          <p>No products in the cart.</p>
          <button className="return-btn">RETURN TO SHOP</button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPopup;
