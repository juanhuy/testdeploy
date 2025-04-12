import React from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css"; 
import Pagination from "../components/Pagination";

const AccessoriesPage = () => {
  return (
    <main className="accessories-page">
      <Breadcrumb title="Accessories" />
      <div className="content-container">
        <Sidebar /> {/* Sidebar bên trái */}
        <div className="product-container">
          <ProductList />
        </div>
          <Pagination/>
      </div>
    </main>
  );
};

export default AccessoriesPage;
