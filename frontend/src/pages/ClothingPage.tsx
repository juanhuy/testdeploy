import React, { useState } from "react";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/AccessoriesPage.css";
import "../styles/Clothing.css";
import Pagination from "../components/Pagination";

const ClothingPage: React.FC = () => {
  const clothingCategoryIds = [1, 4, 5, 6, 7, 8, 11];

  // Pagination state
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalCount, setTotalCount] = useState(0);

  // Filter state
  const [filters, setFilters] = useState<FilterOptions>({});
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setIsFiltering(true);
    setPage(1); // reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({});
    setIsFiltering(false);
    setPage(1); // reset to first page
  };

  // Compute total pages
  const totalPages = Math.ceil(totalCount / limit);

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
            <div style={{ marginBottom: 16, textAlign: "right" }}>
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
                page={page}
                limit={limit}
                onTotalCountChange={setTotalCount}
              />
            ) : (
              <ProductList
                categoryIds={clothingCategoryIds}
                page={page}
                limit={limit}
                onTotalCountChange={setTotalCount}
              />
            )}
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

export default ClothingPage;
