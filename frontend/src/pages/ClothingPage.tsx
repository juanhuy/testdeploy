import React, { useState } from "react";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css";
import "../styles/Clothing.css";
import Pagination from "../components/Pagination";

const ClothingPage = () => {
  const clothingCategoryIds = [1, 4, 5, 6, 7, 8, 11];

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

  return (
    <main className="clothing-page">
      <Breadcrumb title="Clothing" />
      <div className="content-container">
        <Sidebar
          onFilterChange={handleFilterChange}
          allowedCategories={["Clothing"]}
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
                parentCategoryId={1}
                allowedSubcategoryIds={[4, 5, 6, 7, 8, 11]}
              />
            ) : (
              <ProductList categoryIds={clothingCategoryIds} />
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

export default ClothingPage;
