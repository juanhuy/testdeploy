import React, { useState } from "react";
import '../styles/navbar.css';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/logo.png" alt="Logo" className="logo-img" />
      </div>
    </header>
  );
};

export default Navbar;
