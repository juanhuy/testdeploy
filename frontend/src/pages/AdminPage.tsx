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
    <>
      <Sidebar3 />
        <div className="content-wrapper">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="promotions" element={<Promotions />} />
        </Routes>

        </div>
    </>
  );
};

export default AdminPage;
