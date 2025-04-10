// src/AdminPage.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Sidebar3 from "../components/Sidebar3";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Categories from "./Categories";
import Orders from "./Orders";
import Promotions from "./Promotions";

import "../styles/adminpage.css";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="sidebar3">
        <Sidebar3 />
      </div>
      <div className="content-wrapper">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="promotions" element={<Promotions />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminPage;
