
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Products from "./Products";
import Categories from "./Categories";
import Sidebar from "../components/Sidebar3";
import "../styles/adminpage.css";

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="sidebar3">
        <Sidebar/>
      </div>
      <div className="content-wrapper">
        <Routes>
          <Route index element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};


export default AdminPage;
