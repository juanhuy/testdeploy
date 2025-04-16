import "../styles/productcard.css";
import "../styles/global.css";
import React from 'react';

type Product = {
  name: string; img: string; price: number;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price} $</p>
      </div>
    </div>
  );
};

export default ProductCard;