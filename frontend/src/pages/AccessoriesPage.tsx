// import React from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css"; 
import Pagination from "../components/Pagination";
// import Clothing from "../components/Clothing";

const AccessoriesPage = () => {
  return (
    <main className="accessories-page">
      <Breadcrumb title="Accessories" />
        <div className="content-container">
            <Sidebar /> {/* Sidebar bên trái */}
            <div className="right-content">
                <div className="clothing-wrapper">
                    <ProductList />
                </div>
                <div className="pagination-container">
                    <Pagination/>
                </div>
            </div>
        </div>
    </main>
  );
};

export default AccessoriesPage;
