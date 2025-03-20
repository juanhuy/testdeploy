import React from "react";
import { ShoppingBag, Heart, Search, User, ChevronDown, Shirt, Sun, Briefcase, Percent } from "lucide-react";
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left - Menu */}
      <div className="navbar-menu">
        <NavItem icon={<Shirt size={20} />} text="CLOTHING" />
        <NavItem icon={<Sun size={20} />} text="SWIMWEAR" />
        <NavItem icon={<Briefcase size={20} />} text="ACCESSORIES" />
        <NavItem icon={<Percent size={20} />} text="SALE" />
      </div>

      {/* Logo */}
      <img className="navbar-logo" src="src/assets/logo.png" alt="Logo" />



      {/* Right - Icons */}
      <div className="navbar-icons">
        <CurrencySelector />
        <User size={20} className="icon" />
        <Search size={20} className="icon" />
        <IconWithBadge icon={<Heart size={20} />} count={0} />
        <IconWithBadge icon={<ShoppingBag size={20} />} count={0} />
        <span className="cart-total">$0.00</span>
      </div>
    </nav>
  );
};

// Component Menu Item
const NavItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <div className="nav-item">
    {icon} <span>{text}</span> <ChevronDown size={14} />
  </div>
);

// Component Icon có Badge
const IconWithBadge = ({ icon, count }: { icon: JSX.Element; count: number }) => (
  <div className="icon-badge">
    {icon}
    {count > 0 && <span className="badge">{count}</span>}
  </div>
);

// Component Chọn Tiền Tệ
const CurrencySelector = () => (
  <select className="currency-selector">
    <option>USD</option>
    <option>EUR</option>
    <option>VND</option>
  </select>
);

export default Navbar;
