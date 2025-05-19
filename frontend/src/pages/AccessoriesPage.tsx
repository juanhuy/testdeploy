<<<<<<< HEAD

import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
>>>>>>> origin/huy_giaodien_fix
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
<<<<<<< HEAD
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalCount, setTotalCount] = useState(0);

  const [filters, setFilters] = useState<FilterOptions>({ category: "Accessories" });
=======
  const { category } = useParams(); // nếu dùng /accessories/:category
  const categoryIdFromUrl = category ? mapCategoryToId(category) : null;

  const categoryIdsToUse =
    categoryIdFromUrl !== null ? [categoryIdFromUrl] : accessoriesCategoryIds;

  const [filters, setFilters] = useState<FilterOptions>({});
>>>>>>> origin/huy_giaodien_fix
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setIsFiltering(true);
    setPage(1);
  };
  const handleClearFilters = () => {
    setFilters({});
    setIsFiltering(false);
    setPage(1); // Reset page
  };
  const totalPages = Math.ceil(totalCount / limit);

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
    <main className="swimwear-page">
      <Breadcrumb title="Swimwear" />
      <div className="content-container">
        <Sidebar
          onFilterChange={handleFilterChange}
          allowedCategories={["Swimwear"]}
        />
        <div className="right-content">
          {isFiltering && (
<<<<<<< HEAD
            <div style={{ marginBottom: 16, textAlign: 'right' }}>
              <button className="filter-btn" onClick={handleClearFilters}>
                Delete Filter
=======
            <div style={{ marginBottom: "16px", textAlign: "right" }}>
              <button className="filter-btn" onClick={handleClearFilters}>
                Xóa bộ lọc
>>>>>>> origin/huy_giaodien_fix
              </button>
            </div>
          )}

          <div className="clothing-wrapper">
            {isFiltering ? (
              <FilteredProductList
                filters={filters}
<<<<<<< HEAD
                parentCategoryId={3}
                allowedSubcategoryIds={[20, 21]}
                page={page}
                limit={limit}
                onTotalCountChange={setTotalCount}
              />
            ) : (
              <ProductList
                categoryIds={[3, 20, 21]}
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
=======
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
>>>>>>> origin/huy_giaodien_fix
        </div>
      </div>
    </main>
  );
};

//   return (
//     <main className="accessories-page">
//       <Breadcrumb title="Accessories" />
//       <div className="content-container">
//         <Sidebar
//           onFilterChange={handleFilterChange}
//           allowedCategories={["Accessories"]}
//         />
//         <div className="right-content">
//           <div className="clothing-wrapper">
//             {isFiltering ? (
//               <FilteredProductList
//                 filters={filters}
//                 parentCategoryId={1}
//                 allowedSubcategoryIds={[4, 5]} // Jewelry và ShoesAndBags
//                 page={0} limit={0}              />
//             ) : (
//               <ProductList categoryIds={[1, 4, 5]} page={0} limit={0} />
//             )}
//           </div>
//           <div className="pagination-container">
//             <Pagination page={0} totalPages={0} onChange={function (newPage: number): void {
//               throw new Error("Function not implemented.");
//             } } />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export default AccessoriesPage;
