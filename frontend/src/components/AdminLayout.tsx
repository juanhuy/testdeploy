// src/components/AdminLayout.tsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/AdminLayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="logo">ADMIN</div>
        <ul className="menu">
          <li><Link to="/admin/products">📦 Product</Link></li>
          <li><Link to="/admin/orders">🛒 Order</Link></li>
        </ul>
      </aside>

      <div className="main">
      
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;