import React from "react";
import "../styles/global.css";
import '../styles/Sale.css';
import SaleProductList from "../components/SaleProductList";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";

const Sale = () => {
    return (
      <main className="sale-page">
        <Breadcrumb title="Sale" />
        <div className="content-container">
          <Sidebar /> {/* Sidebar bên trái */}
          <div className="product-container">
            <SaleProductList/>
          </div>
        </div>
      </main>
    );
  };
  
  export default Sale;