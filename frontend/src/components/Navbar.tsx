

import "../styles/Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <header>
      {/* Left - Navbar */}
      <nav>
        <ul className="nav_link left">
          <li className="drop-down-menu">
          <Link to="/clothing">CLOTHING</Link>
            <ul className="drop-down">
              <li>Blazers</li>
              <li>Bodysuits</li>
              <li>Bottoms</li>
              <li>Coats & Jackets</li>
              <li>Denim</li>
              <li>Dresses</li>
              <li>Jumpsuits</li>
              <li>Knitwear</li>
              <li>Loungewear</li>
              <li>Shorts</li>
              <li>Skirts</li>
              <li>Tops</li>
            </ul>
          </li>
          <li className="drop-down-menu">
          <Link to="/swimwear">SWIMWEAR</Link>
            <ul className="drop-down">
              <li>Bikinis</li>
              <li>One piece</li>
            </ul>
          </li>
          <li className="drop-down-menu">
          <Link to="/accessories">ACCESSORIES</Link>
            <ul className="drop-down">
              <li>Jewelry</li>
              <li>Shoes and Beach Bags</li>
            </ul>
          </li>
          <li><Link to="/sale">SALE</Link></li>
        </ul>
      </nav>
      {/* Logo */}
      <img className="navbar-logo" src="src/assets/logo.png" alt="Logo" />
      {/* Right - Icons */}
      <nav>
        <ul className="nav_link right">
        <li><Link to="/myaccount">My account</Link></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><Link to="/shoppingcart">Shopping Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

