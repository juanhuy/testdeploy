import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "../styles/Onsale.css";
import ProductCard from "./ProductCard";
import { fetchProductsByCategory, Product } from "../../api/products";

type Categories = "clothing" | "swimwear" | "accessories";

const OnSale: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categories>("clothing");

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["onSaleProducts", selectedCategory],
    queryFn: () => fetchProductsByCategory(selectedCategory, true),
  });

  const handleCategoryChange = (category: Categories) => {
    setSelectedCategory(category);
  };

  const renderProducts = () => {
    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products: {(error as Error).message}</div>;
    if (!Array.isArray(products) || products.length === 0) return <div>No products available.</div>;

    return products.map((product) => (
      <Link
        key={product.Id}
        to={`/product/${product.Id}`}
        className="product-card-link"
      >
        <div className="product">
          <ProductCard product={{
            name: product.Name,
            img: product.Img,
            price: product.Price
          }} />
          <p className="product-price">
            {product.Price.toFixed(2)} $
            {product.AdditionalInfo?.oldPrice && (
              <span className="old-price">{product.AdditionalInfo.oldPrice.toFixed(2)} $</span>
            )}
          </p>
        </div>
      </Link>
    ));
  };

  return (
    <div className="home-container">
      <h1 className="section-title">ON SALE</h1>

      <div className="categories">
        <button
          onClick={() => handleCategoryChange("clothing")}
          className={selectedCategory === "clothing" ? "active" : ""}
        >
          Clothing
        </button>
        <button
          onClick={() => handleCategoryChange("swimwear")}
          className={selectedCategory === "swimwear" ? "active" : ""}
        >
          Swimwear
        </button>
        <button
          onClick={() => handleCategoryChange("accessories")}
          className={selectedCategory === "accessories" ? "active" : ""}
        >
          Accessories
        </button>
      </div>

      <div className="category-products">{renderProducts()}</div>
    </div>
  );
};

export default OnSale;