import React, { useState } from "react";
import "../styles/global.css";
import '../styles/Sale.css';
import SaleProductList from "../components/SaleProductList";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import Pagination from "../components/Pagination";


const Sale: React.FC = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalCount, setTotalCount] = useState(0);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setIsFiltering(true);
    setPage(1);
  };
  const handleClearFilters = () => {
    setFilters({});
    setIsFiltering(false);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / limit);
  return (
    <main className="sale-page">
      <Breadcrumb title="Sale" />
      <div className="content-container">
        {/* Optional Sidebar filters */}
        <Sidebar onFilterChange={handleFilterChange} allowedCategories={["Sale"]} />
        <div className="right-content">
          {isFiltering && (
            <div style={{ marginBottom: 16, textAlign: "right" }}>
              <button className="filter-btn" onClick={handleClearFilters}>
                Delete Filter
              </button>
            </div>
          )}
          <div className="clothing-wrapper">
            <SaleProductList
              filters={filters}
              page={page}
              limit={limit}
              onTotalCountChange={setTotalCount}
            />
          </div>

          {totalPages > 1 && (
            <div className="pagination-container">
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
  //   return (
  //     <main className="sale-page">
  //       <Breadcrumb title="Sale" />
  //         <div className="content-container">
  //             <Sidebar onFilterChange={function (filters: FilterOptions): void {
  //           throw new Error("Function not implemented.");
  //         } } /> {/* Sidebar bên trái */}
  //             <div className="right-content">
  //                 <div className="clothing-wrapper">
  //                     <SaleProductList />
  //                 </div>
  //                 <div className="pagination-container">
  //                     <Pagination page={0} totalPages={0} onChange={function (newPage: number): void {
  //               throw new Error("Function not implemented.");
  //             } }/>
  //                 </div>
  //             </div>
  //         </div>
  //     </main>
  //   );
  // };
  
  export default Sale;

