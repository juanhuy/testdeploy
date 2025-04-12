// import React from "react";
import Sidebar from "../components/Sidebar";
import Clothing from "../components/Clothing";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css"; 
import Pagination from "../components/Pagination";
import "../styles/Clothing.css";
const ClothingPage = () => {
  return (
    <main className="clothing-page">
      <Breadcrumb title="Clothing" />
      <div className="content-container">
        <Sidebar /> {/* Sidebar bên trái */}
        <div className="right-content">
            <div className="clothing-wrapper">
              <Clothing />
            </div>
          <div className="pagination-container"> 
            <Pagination/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClothingPage;
