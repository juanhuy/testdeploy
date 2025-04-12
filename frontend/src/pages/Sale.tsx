// import React from "react";
import "../styles/global.css";
import '../styles/Sale.css';
import SaleProductList from "../components/SaleProductList";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
// import Clothing from "../components/Clothing";

const Sale = () => {
    return (
      <main className="sale-page">
        <Breadcrumb title="Sale" />
          <div className="content-container">
              <Sidebar /> {/* Sidebar bên trái */}
              <div className="right-content">
                  <div className="clothing-wrapper">
                      <SaleProductList />
                  </div>
                  <div className="pagination-container">
                      <Pagination/>
                  </div>
              </div>
          </div>
      </main>
    );
  };
  
  export default Sale;