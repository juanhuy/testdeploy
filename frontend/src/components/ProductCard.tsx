import "../styles/productcard.css";
import "../styles/global.css";
import React from "react";

type Product = {
  // id: number;
  name: string;
  img: string;
  price: number;
};

type Props = {
  product: Product;
  onBuy: () => void; 
};

const ProductCard: React.FC<Props> = ({ product, onBuy }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />

      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}₫</p>
      </div>

      {}
      <button className="buy-btn" onClick={onBuy}>
        BUY NOW
      </button>
    </div>
  );
};

export default ProductCard;