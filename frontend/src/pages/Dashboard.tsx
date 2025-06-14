import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const AdminDashboard: React.FC = () => {
  const [type, setType] = useState("day");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10)); // yyyy-MM-dd

  const [stats, setStats] = useState({
    categories: 0,
    products: 0,
    orders: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [catRes, userRes] = await Promise.all([
          fetch("http://localhost:3001/api/categories"),
<<<<<<< HEAD
          fetch("http://localhost:3001/api/products"),
          fetch("http://localhost:3001/api/orders/count"),
          fetch("http://localhost:3001/api/users/count"),
=======
          fetch("http://localhost:3001/api/users"),
>>>>>>> origin/cuong_routes
        ]);

        const [catData, userData] = await Promise.all([
          catRes.json(),
          userRes.json(),
        ]);

<<<<<<< HEAD
       setStats({
  categories: Array.isArray(catData) ? catData.length : 0,
  products: typeof prodData.totalCount === 'number' ? prodData.totalCount : 0,

  orders: typeof orderData.count==='number' ? orderData.count : 0,
  users: typeof userData.count=== 'number' ? userData.count : 0,
});

=======
        setStats({
          categories: Array.isArray(catData) ? catData.length : 0,
          products: 0,
          orders: 0,
          users: Array.isArray(userData) ? userData.length : 0,
        });
>>>>>>> origin/cuong_routes
      } catch (err) {
        console.error("Failed to load statistics:", err);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [prodRes, orderRes] = await Promise.all([
          fetch(`http://localhost:3001/api/statistics/products?type=${type}&date=${date}`),
          fetch(`http://localhost:3001/api/statistics/orders?type=${type}&date=${date}`),
        ]);

        const prodData = await prodRes.json();
        const orderData = await orderRes.json();

        setStats(prev => ({
          ...prev,
          products: prodData.totalInStock || 0,
          orders: orderData.totalOrders || 0,
        }));

      } catch (err) {
        setStats(prev => ({
          ...prev,
          products: 0,
          orders: 0,
        }));
        console.error("Failed to load statistics:", err);
      }
    };

    fetchStats();
  }, [type, date]);
  
  return (
    <div className="dashboard-container">
      <h1>Chào mừng đến trang quản trị</h1>
      
      <div className="dashboard-filter">
        <select
          className="dashboard-select"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
        <input
          className="dashboard-input"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>

      <div className="stats-boxes">
        <div className="stat-box">
          <h2>Danh mục</h2>
          <p>{stats.categories}</p>
        </div>
        <div className="stat-box">
          <h2>Sản phẩm</h2>
          <p>{stats.products}</p>
        </div>
        <div className="stat-box">
          <h2>Đơn hàng</h2>
          <p>{stats.orders}</p>
        </div>
        <div className="stat-box">
          <h2>Người dùng</h2>
          <p>{stats.users}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
