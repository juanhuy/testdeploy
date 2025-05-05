import React, { useState } from "react";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import "../styles/AccessoriesPage.css";

const AccessoriesPage = () => {
  const [filters, setFilters] = useState<FilterOptions>({ category: "Accessories" });
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters({
      ...newFilters,
      category: "Accessories", // Giữ cố định category là Accessories
    });
    setIsFiltering(true);
  };

  return (
    <main className="accessories-page">
      <Breadcrumb title="Accessories" />
      <div className="content-container">
        <Sidebar
          onFilterChange={handleFilterChange}
          allowedCategories={["Accessories"]}
        />
        <div className="right-content">
          <div className="clothing-wrapper">
            {isFiltering ? (
              <FilteredProductList
                filters={filters}
                parentCategoryId={3}
                allowedSubcategoryIds={[9, 10]} // Jewelry và ShoesAndBags
              />
            ) : (
              <ProductList categoryIds={[3]} />
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

export default AccessoriesPage;
