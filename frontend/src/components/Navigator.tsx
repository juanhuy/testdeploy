
import "../styles/navigator.css";
import React from 'react';
function Navigator() {
  return (
    <header>
      <nav>
        <ul className="nav_link left">
          <li className="drop-down-menu">
            <a href="#">CLOTHING</a>
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
            <a href="#">SWIMWEAR</a>
            <ul className="drop-down">
              <li>Bikinis</li>
              <li>One piece</li>
            </ul>
          </li>
          <li className="drop-down-menu">
            <a href="#">ACCESSORIES</a>
            <ul className="drop-down">
              <li>Jewelry</li>
              <li>Shoes and Beach Bags</li>
            </ul>
          </li>
          <li><a href="#">SALE</a></li>
        </ul>
      </nav>
      <p>LOGO here</p>
      <nav>
        <ul className="nav_link right">
          <li><a href="#">My account</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><a href="#">Shipping cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigator;
