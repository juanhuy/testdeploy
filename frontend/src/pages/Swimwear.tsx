import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar, { FilterOptions } from '../components/Sidebar';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import FilteredProductList from '../components/FilteredProductList';
import '../styles/Swimwear.css';

const Swimwear = () => {
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
    <main className="swimear-page">
      <Breadcrumb title="Swimwear" />
      <div className="content-container">
        <Sidebar onFilterChange={handleFilterChange} allowedCategories={["Swimwear"]} />
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
                parentCategoryId={2}
                allowedSubcategoryIds={[20, 21, 22, 23]}
              />
            ) : (
              <ProductList categoryIds={[2]} />
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

export default Swimwear;
