import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    // Sử dụng flex để chia bố cục ngang
    <div className="flex min-h-screen">
      {/* Phần Sidebar bên trái */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Phần nội dung bên phải (chiếm phần còn lại) */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Outlet sẽ hiển thị ProductPage, OrderPage, v.v. */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
