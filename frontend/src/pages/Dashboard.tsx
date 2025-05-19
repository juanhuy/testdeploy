import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    categories: 0,
    products: 0,
    orders: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [catRes, prodRes, orderRes, userRes] = await Promise.all([
          fetch("http://localhost:3001/api/categories"),
          fetch("http://localhost:3001/api/products"),
          fetch("http://localhost:3001/api/orders"),
          fetch("http://localhost:3001/api/users"),
        ]);

        const [catData, prodData, orderData, userData] = await Promise.all([
          catRes.json(),
          prodRes.json(),
          orderRes.json(),
          userRes.json(),
        ]);

        setStats({
          categories: catData.length,
          products: prodData.length,
          orders: orderData.length,
          users: userData.length,
        });
      } catch (err) {
        console.error("Lỗi tải thống kê:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>👋 Chào mừng đến trang quản trị</h1>
      <div className="stats-boxes">
        <div className="stat-box">
          <h2>📁 Danh mục</h2>
          <p>{stats.categories}</p>
        </div>
        <div className="stat-box">
          <h2>📦 Sản phẩm</h2>
          <p>{stats.products}</p>
        </div>
        <div className="stat-box">
          <h2>🛒 Đơn hàng</h2>
          <p>{stats.orders}</p>
        </div>
        <div className="stat-box">
          <h2>👤 Người dùng</h2>
          <p>{stats.users}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
