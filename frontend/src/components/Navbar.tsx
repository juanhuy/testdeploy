import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaShoppingCart,
  FaUserShield,
  FaSignInAlt,
  FaSearch,
} from "react-icons/fa";

type NavbarProps = {
  onCartClick?: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onCartClick }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate(); // ✅ Điều hướng

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchText.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchText.trim())}`);
      setShowSearch(false);
    }
  };

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

        {/* Right - Icons */}
        <nav className="nav-section right">
          <ul className="nav_link icon-links">
            <li><Link to="/myaccount" title="My Account"><FaUser /></Link></li>
            <li>
              <button
                onClick={() => setShowSearch(prev => !prev)}
                title="Search"
                className="icon-button"
              >
                <FaSearch />
              </button>
            </li>
            <li>
              <button onClick={onCartClick} title="Shopping Cart" className="cart-button">
                <FaShoppingCart />
              </button>
            </li>
            <li><Link to="/admin" title="Admin Page"><FaUserShield /></Link></li>
            <li><Link to="/login" title="Login"><FaSignInAlt /></Link></li>
          </ul>
        </nav>
      </div>

      {/* Overlay nền mờ */}
      {showSearch && (
        <div
          className="search-overlay"
          onClick={() => setShowSearch(false)}
        ></div>
      )}

      {/* Popup tìm kiếm full màn hình */}
      <div className={`search-popup-container ${showSearch ? "show" : ""}`}>
        <button
          type="button"
          className="close-search"
          onClick={() => setShowSearch(false)}
        >
          ✕
        </button>

        <form className="search-popup" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Navbar;
