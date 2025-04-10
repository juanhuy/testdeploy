import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBoxOpen, FaList, FaShoppingCart, FaUsers, FaTags, FaCog } from "react-icons/fa";
import "../styles/Sidebar3.css"; // Đảm bảo import CSS đúng

const Sidebar = () => {
  return (
    <div className="sidebar"> {/* Đảm bảo có class này */}
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/dashboard" className="flex items-center gap-2 block p-2 hover:bg-gray-700">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="flex items-center gap-2 block p-2 hover:bg-gray-700">
              <FaBoxOpen /> Products
            </Link>
          </li>
          <li>
            <Link to="/admin/categories" className="flex items-center gap-2 block p-2 hover:bg-gray-700">
              <FaList /> Categories
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="flex items-center gap-2 block p-2 hover:bg-gray-700">
              <FaShoppingCart /> Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/promotions" className="flex items-center gap-2 block p-2 hover:bg-gray-700">
              <FaTags /> Promotions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;