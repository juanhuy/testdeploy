import React from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar2.css";

const Sidebar2 = () => {
  return (
    <div className="sidebar2">
      <ul>
        <li>
          <Link to="/myaccount/orders">Orders</Link>
        </li>
        <li>
          <Link to="/myaccount/address">Addresses</Link>
        </li>
        <li>
          <Link to="/myaccount/details">Account details</Link>
        </li>
        <li>
          <Link to="/myaccount/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
