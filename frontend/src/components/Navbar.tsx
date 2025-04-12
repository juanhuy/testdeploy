import "../styles/Navbar.css";
// import React from 'react';
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
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Bodysuits</a></li>
                <li><a href="#">Bottoms</a></li>
                <li><a href="#">Coats & Jackets</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Jumpsuits</a></li>
                <li><a href="#">Knitwear</a></li>
                <li><a href="#">Loungewear</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Skirts</a></li>
                <li><a href="#">Tops</a></li>

              </ul>
            </li>
            <li className="drop-down-menu">
              <Link to="/swimwear">SWIMWEAR</Link>
              <ul className="drop-down">
                <li><a href="#">Bikinis</a></li>
                <li><a href="#">One piece</a></li>

              </ul>
            </li>
            <li className="drop-down-menu">
              <Link to="/accessories">ACCESSORIES</Link>
              <ul className="drop-down">
                <li><a href="#">Jewelry</a></li>
                <li><a href="#">Shoes and Beach Bags</a></li>

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
