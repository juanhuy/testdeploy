import "../styles/Navbar.css";
import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar-container">
        {/* Left - Menu */}
        <nav className="nav-section left">
          <ul className="nav_link">
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

        {/* Center - Logo */}
        <div className="nav-logo">
          <img className="navbar-logo" src="src/assets/logo.png" alt="Logo" />
        </div>

        {/* Right - Actions */}
        <nav className="nav-section right">
          <ul className="nav_link">
            <li><Link to="/myaccount">My account</Link></li>
            <li><Link to="/shoppingcart">Shopping Cart</Link></li>
            <li><Link to="/admin">Admin Page</Link></li>
            <li><Link to="/login">Log In/Log Out</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
