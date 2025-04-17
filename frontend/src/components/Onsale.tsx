import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Onsale.css";
import ProductCard from "./ProductCard";
import { fetchProducts, fetchProductsByCategory, Product } from "../api/products";

type Categories = "clothing" | "swimwear" | "accessories";

const OnSale: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Categories>("clothing");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Error loading products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleCategoryChange = async (category: Categories) => {
    setSelectedCategory(category);
    try {
      setLoading(true);
      // Chuyển đổi category string thành category ID tương ứng
      const categoryId = getCategoryId(category);
      const data = await fetchProductsByCategory(categoryId);
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Error loading products by category');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Hàm helper để chuyển đổi category string thành ID
  const getCategoryId = (category: Categories): number => {
    switch (category) {
      case "clothing":
        return 1;
      case "swimwear":
        return 2;
      case "accessories":
        return 3;
      default:
        return 1;
    }
  };

  const renderProducts = () => {
    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error loading products: {error}</div>;
    if (!Array.isArray(products) || products.length === 0) return <div>No products available.</div>;

    return products.map((product) => (
      <Link
        key={product.id}
        to={`/product/${product.id}`}
        className="product-card-link"
      >
        <div className="product">
          <ProductCard 
            product={{
              name: product.name,
              img: product.productItems[0]?.image?.image_url || '/placeholder.jpg',
              price: parseFloat(product.productItems[0]?.price || '0')
            }} 
          />
          <p className="product-price">
            {parseFloat(product.productItems[0]?.price || '0').toFixed(2)} $
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
