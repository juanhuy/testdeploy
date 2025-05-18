import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import "../styles/Swimwear.css";

const SwimwearPage = () => {
  const { category } = useParams(); // nếu bạn dùng /swimwear/:category sau này
  const categoryIdsToUse = [2]; // Swimwear ID từ database của bạn

  const [filters, setFilters] = useState<FilterOptions>({});
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setIsFiltering(true);
  };

  const handleClearFilters = () => {
    setFilters({});
    setIsFiltering(false);
  };

  // Reset filter khi category trên URL thay đổi
  useEffect(() => {
    setFilters({});
    setIsFiltering(false);
  }, [category]);

  return (
    <main className="swimwear-page">
      <Breadcrumb title="Swimwear" />
      <div className="content-container">
        <Sidebar
          onFilterChange={handleFilterChange}
          allowedCategories={["Swimwear"]}
        />
        <div className="right-content">
          {isFiltering && (
            <div style={{ marginBottom: "16px", textAlign: "right" }}>
              <button className="filter-btn" onClick={handleClearFilters}>
                Xóa bộ lọc
              </button>
            </div>
          )}

          <div className="clothing-wrapper">
            {isFiltering ? (
              <FilteredProductList
                filters={filters}
                parentCategoryId={2} // Swimwear
              />
            ) : (
              <ProductList categoryIds={categoryIdsToUse} />
            )}
          </div>

          <div className="pagination-container">
            <Pagination />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SwimwearPage;
