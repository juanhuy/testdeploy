import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb"; 
import AccessoriesPage from "./pages/AccessoriesPage";
import "./styles/App.css"; 
import Home from './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <Router>
      <Navbar />
      <BreadcrumbWrapper /> {/* Thêm breadcrumb ở đây */}
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/accessories" />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

// Hàm kiểm tra route để hiển thị breadcrumb
const BreadcrumbWrapper = () => {
  const location = useLocation();
  
  // Chỉ hiển thị breadcrumb khi đang ở trang Accessories
  return location.pathname === "/accessories" ? <Breadcrumb /> : null;
};

export default App;