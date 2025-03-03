import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";  
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Promotions from "./pages/Promotions";

import "./styles/app.css"; // Chứa .main-content và .content-wrapper

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
