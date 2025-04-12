import React from 'react';
import Bikinis from '../components/Bikinis';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';
import '../styles/Swimwear.css';
import Pagination from '../components/Pagination';
const Swimwear = () => {
    return (
        <main className="swimear-page">
        <Breadcrumb title="Swimwear" />
        <div className="content-container">
            <Sidebar />
            <div className="product-container">
                <Bikinis/>
            </div>
                <Pagination />
        </div>
        </main>

    );
  };
  
  export default Swimwear;