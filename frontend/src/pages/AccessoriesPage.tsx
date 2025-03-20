import React from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import "../styles/AccessoriesPage.css"; 

const AccessoriesPage = () => {
  return (
    <main className="accessories-page">
      <div className="content-container">
        <Sidebar /> {/* Sidebar bên trái */}
        <div className="product-container">
          <ProductList />
        </div>
      </div>
    </main>
  );
};

export default AccessoriesPage;
