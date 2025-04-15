import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "../styles/Bikinis.css";
import "../styles/global.css";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

type Product = {
  name: string;
  img: string;
  price: number;
};

type SortOption = "popularity" | "price-low" | "price-high";

const fetchBikinis = async (sort: SortOption, page: number, limit: number): Promise<{ products: Product[]; total: number }> => {
  const sortParam = sort === "price-low" ? "price-asc" : sort === "price-high" ? "price-desc" : "popularity";
  const response = await fetch(`/api/products?category=swimwear&sort=${sortParam}&page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error("Failed to fetch bikinis");
  return response.json();
};

const Bikinis: React.FC = () => {
  const [sort, setSort] = useState<SortOption>("popularity");
  const [page, setPage] = useState(1);
  const limit = 6; // Matches original number of items displayed

  const { data, isLoading, error } = useQuery({
    queryKey: ["bikinis", sort, page],
    queryFn: () => fetchBikinis(sort, page, limit),
  });

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / limit);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as SortOption);
    setPage(1); // Reset to first page on sort change
  };

  return (
    <div className="shop-container">
      <div className="order-by">
        <select id="sort" value={sort} onChange={handleSortChange}>
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {isLoading ? (
          <div>Loading bikinis...</div>
        ) : error ? (
          <div>Error loading bikinis</div>
        ) : (
          <div className="product-grid">
            {products.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
      <div className="pagination">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Bikinis;