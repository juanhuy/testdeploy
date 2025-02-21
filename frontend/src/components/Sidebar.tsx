import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        backgroundColor: "#000", // Nền đen
        color: "#fff",           // Chữ trắng
        minHeight: "100vh",      // Chiều cao tối thiểu bằng chiều cao màn hình
        width: "150px",          // Chiều rộng
      }}
      className="w-96 p-8"
    >
      <div className="text-4xl font-bold border-b border-gray-700 mb-4">
        ADMIN PAGE
      </div>

      <nav>
        <ul className="space-y-2 text-lg">
          <li>
            <Link 
              to="/admin/products" 
              style={{ color: "#fff" }} 
              className="hover:underline hover:text-gray-300">
              PRODUCT
            </Link>
          </li>
          <li>
            <Link 
              to="/admin/orders" 
              style={{ color: "#fff" }} 
              className="hover:underline hover:text-gray-300"
              >
              ORDER
            </Link>
          </li>
          <li>
            <Link 
                to="/admin/users" 
                style={{ color: "#fff" }} 
                className="hover:underline hover:text-gray-300"
                >
              USER
            </Link>
          </li>
          <li>
          <Link
            to="/admin/categories"
            style={{ color: "#fff" }} 
            className="hover:underline hover:text-gray-300"
          >
          CATEGORY
          </Link>

          </li>
          <li>
            <Link to="/admin/promotions" 
            style={{ color: "#fff" }} 
            className="hover:underline hover:text-gray-300">
              PROMOTION
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
