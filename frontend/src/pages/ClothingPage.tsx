import React from "react";
import Sidebar from "../components/Sidebar";
import Clothing from "../components/Clothing";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css"; 
import Pagination from "../components/Pagination";

const ClothingPage = () => {
  return (
    <main className="clothing-page">
      <Breadcrumb title="Clothing" />
      <div className="content-container">
        <Sidebar /> {/* Sidebar bên trái */}
        <div className="product-container">
          <Clothing/>
        </div>
        <div className="pagination-container">
          <Pagination/>
        </div>
      </div>
    </main>
  );
};

export default ClothingPage;
