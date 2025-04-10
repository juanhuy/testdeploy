import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "../styles/dashboard.css";

const data = [
  { name: "Jan", orders: 50, users: 30, promotions: 20, products: 40 },
  { name: "Feb", orders: 70, users: 50, promotions: 40, products: 60 },
  { name: "Mar", orders: 90, users: 60, promotions: 50, products: 80 },
  { name: "Apr", orders: 60, users: 40, promotions: 30, products: 50 },
  { name: "May", orders: 100, users: 80, promotions: 60, products: 90 },
];

const orders = [
  { id: "325092", date: "16 Jul 2022", price: "$1297" },
  { id: "927383", date: "16 Jul 2022", price: "$2255" },
  { id: "368585", date: "27 Jun 2022", price: "$666" },
  { id: "585410", date: "24 Jun 2022", price: "$1381" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="filters">
        <label>
          From: <input type="date" />
        </label>
        <label>
          To: <input type="date" />
        </label>
      </div>

      <div className="dashboard-stats">
        <div className="stat-box">
          <h3>Orders</h3>
          <p>200</p>
        </div>
        <div className="stat-box">
          <h3>Users</h3>
          <p>150</p>
        </div>
        <div className="stat-box">
          <h3>Promotions</h3>
          <p>50</p>
        </div>
        <div className="stat-box">
          <h3>Products</h3>
          <p>300</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <h3>Analytics</h3>
        <AreaChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="orders" stroke="#27A4F2" fill="#27A4F2" />
          <Area type="monotone" dataKey="users" stroke="#3EAEF4" fill="#3EAEF4" />
          <Area type="monotone" dataKey="promotions" stroke="#6586E6" fill="#6586E6" />
          <Area type="monotone" dataKey="products" stroke="#9FD7F9" fill="#9FD7F9" />
        </AreaChart>
      </div>

      <div className="todo-section">
        <h3>To Do</h3>
        <h4>Orders To Approve</h4>
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <a href="#">#{order.id}</a> placed at {order.date}, with total price of <span>{order.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;