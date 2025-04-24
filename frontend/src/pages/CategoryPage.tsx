import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import "../styles/CategoryPage.css"; // 👈 CSS riêng cho trang này

type Product = {
  id: number;
  name: string;
  productItems: {
    price: number;
    image: {
      image_url: string;
    };
  }[];
};

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (categoryName) {
      setLoading(true);
      fetch(`http://localhost:3001/api/products?category=${categoryName}`)
        .then((res) => {
          if (!res.ok) throw new Error("Lỗi khi lấy sản phẩm");
          return res.json();
        })
        .then((data) => setProducts(data))
        .catch((err) => console.error("Lỗi fetch:", err))
        .finally(() => setLoading(false));
    }
  }, [categoryName]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", textTransform: "uppercase" }}>
        {categoryName}
      </h1>

      {loading ? (
        <p>Đang tải sản phẩm...</p>
      ) : products.length === 0 ? (
        <p style={{ marginTop: "40px", color: "#666", fontSize: "18px" }}>
          🛒 Danh mục hiện tại chưa có sản phẩm.
        </p>
      ) : (
        <div className="category-product-container" style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {products.map((product) => (
            <div className="category-product-card" key={product.id}>
              <img
                src={product.productItems?.[0]?.image?.image_url}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>{product.productItems?.[0]?.price}₫</p>
              <div className="category-buy-btn">
                <button>BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
