import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import "../styles/AccessoriesPage.css";

// Ánh xạ tên category con sang ID
const mapCategoryToId = (category: string): number | null => {
  const map: Record<string, number> = {
    jewelry: 9,
    shoesandbags: 10,
  };
  return map[category.toLowerCase()] ?? null;
};

// ✅ Bao gồm cả danh mục cha Accessories (id = 3)
const accessoriesCategoryIds = [3, 9, 10];

const AccessoriesPage = () => {
  const { category } = useParams(); // nếu dùng /accessories/:category
  const categoryIdFromUrl = category ? mapCategoryToId(category) : null;

  const categoryIdsToUse =
    categoryIdFromUrl !== null ? [categoryIdFromUrl] : accessoriesCategoryIds;

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

  useEffect(() => {
    setFilters({});
    setIsFiltering(false);
  }, [category]);

  if (category && categoryIdFromUrl === null) {
    return (
      <main className="accessories-page">
        <Breadcrumb title="Accessories" />
        <p style={{ padding: 24 }}>Không tìm thấy danh mục phù hợp.</p>
      </main>
    );
  }

  return (
    <main className="accessories-page">
      <Breadcrumb title="Accessories" />
      <div className="content-container">
        <Sidebar
          onFilterChange={handleFilterChange}
          allowedCategories={["Accessories"]}
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
                parentCategoryId={3} // Accessories
                allowedSubcategoryIds={accessoriesCategoryIds}
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

export default AccessoriesPage;
