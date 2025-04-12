
import React from "react";
import "../styles/Clothing.css"; // Import CSS
import ProductCard from "./ProductCard";

// Định nghĩa kiểu dữ liệu cho sản phẩm
type Product = { name: string; img: string; price: number;};

// Dữ liệu sản phẩm
const products: Product[] = [
    { name: 'ALTIA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 245.00},
    { name: 'CARO BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 245.00},
    { name: 'Corriente Maxi Skirt', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 250.00},
    { name: 'ETIA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 210.00},
    { name: 'INANI BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 210.00},
    { name: 'Isla One Piece', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 215.00 },
  
];

//Số sản phẩm mỗi trang
const PRODUCTS_PER_PAGE = 4;
const Clothing: React.FC = () => {
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
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothing;