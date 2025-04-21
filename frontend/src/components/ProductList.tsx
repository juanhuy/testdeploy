import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";

type ProductItem = {
  id: number;
  price: number;
  image: { image_url: string };
  product: { name: string };
};

function ProductList() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/product-items")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched ProductItems:", data);
        setProductItems(data);
      })
      .catch((err) => {
        console.error("Error loading product items:", err);
      });
  }, []);

  return (
    <div>
      <div className="order-by">
        <select id="sort">
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        <div className="product-grid">
          {productItems.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                name: item.product.name,
                img: item.image.image_url,
                price: item.price,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
