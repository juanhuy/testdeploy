<<<<<<< HEAD
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Home /> {/* Hiển thị Home */}
    </div>
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import ProductPage from "./pages/ProductPage";
// ...import các page khác nếu có

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<div>Dashboard</div>} />
          <Route path="products" element={<ProductPage />} />
          {/* ...các route khác: orders, users, v.v. */}
        </Route>

        {/* Route gốc, ví dụ: trang chủ */}
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes>
    </BrowserRouter>
>>>>>>> b32e009e222af6d715c47291abd3bce31259fb55
  );
}

export default App;
