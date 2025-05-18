
import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
import Sidebar, { FilterOptions } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import FilteredProductList from "../components/FilteredProductList";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import "../styles/AccessoriesPage.css";

const AccessoriesPage = () => {
  const [page, setPage] = useState(1);
  const limit = 12;
  const [totalCount, setTotalCount] = useState(0);

  const [filters, setFilters] = useState<FilterOptions>({ category: "Accessories" });
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters({
      ...newFilters,
      category: "Accessories", // Giữ cố định category là Accessories
    });
    setIsFiltering(true);
    setPage(1);
  };
  const handleClearFilters = () => {
    setFilters({});
    setIsFiltering(false);
    setPage(1); // Reset page
  };
  const totalPages = Math.ceil(totalCount / limit);

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
            <div style={{ marginBottom: 16, textAlign: 'right' }}>
              <button className="filter-btn" onClick={handleClearFilters}>
                Xóa bộ lọc
              </button>
            </div>
          )}

          <div className="clothing-wrapper">
            {isFiltering ? (
              <FilteredProductList
                filters={filters}
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
