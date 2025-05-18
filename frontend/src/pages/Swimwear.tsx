import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar, { FilterOptions } from '../components/Sidebar';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import FilteredProductList from '../components/FilteredProductList';
import '../styles/Swimwear.css';

const Swimwear = () => {
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
//     <main className="swimear-page">
//       <Breadcrumb title="Swimwear" />
//       <div className="content-container">
//         <Sidebar onFilterChange={handleFilterChange} allowedCategories={["Swimwear"]} />
//         <div className="right-content">
//           {isFiltering && (
//             <div style={{ marginBottom: "16px", textAlign: "right" }}>
//               <button className="filter-btn" onClick={handleClearFilters}>
//                 Xóa bộ lọc
//               </button>
//             </div>
//           )}

//           <div className="clothing-wrapper">
//             {isFiltering ? (
//               <FilteredProductList
//                 filters={filters}
//                 parentCategoryId={3}
//                 allowedSubcategoryIds={[20, 21]} page={0} limit={0}              />
//             ) : (
//               <ProductList categoryIds={[3, 20, 21]} page={0} limit={0} />
//             )}
//           </div>

//           <div className="pagination-container">
//             <Pagination page={0} totalPages={0} onChange={function (newPage: number): void {
//               throw new Error('Function not implemented.');
//             } } />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

export default Swimwear;
