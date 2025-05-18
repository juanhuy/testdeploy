import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";
import "../styles/Clothing.css";

// Ánh xạ tên danh mục URL sang ID
const mapCategoryToId = (category: string): number | null => {
  const map: Record<string, number> = {
    blazer: 4,
    cardigan: 5,
    skirt: 6,
    jacket: 7,
    dress: 8,
    denim: 11,
    shorts: 13,
  };
  return map[category.toLowerCase()] ?? null;
};

// Danh sách các danh mục con của Clothing (parentId = 1)
const clothingSubcategoryIds = [4, 5, 6, 7, 8, 11, 13];

const ClothingPage = () => {
  const { category } = useParams();
  const categoryIdFromUrl = category ? mapCategoryToId(category) : null;

  const categoryIdsToUse =
    categoryIdFromUrl !== null ? [categoryIdFromUrl] : clothingSubcategoryIds;

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

  // Reset bộ lọc mỗi khi URL category thay đổi
  useEffect(() => {
    setFilters({});
    setIsFiltering(false);
  }, [category]);

  // Nếu URL sai danh mục (không khớp trong map)
  if (category && categoryIdFromUrl === null) {
    return (
      <main className="clothing-page">
        <Breadcrumb title="Clothing" />
        <p style={{ padding: 24 }}>Không tìm thấy danh mục phù hợp.</p>
      </main>
    );
  }

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

          {isFiltering ? (
            <FilteredProductList
              filters={filters}
              parentCategoryId={1} // ID của Clothing
              allowedSubcategoryIds={clothingSubcategoryIds}
            />
          ) : (
            <ProductList categoryIds={categoryIdsToUse} />
          )}
        </div>
      </div>
    </main>
  );
};

export default ClothingPage;
