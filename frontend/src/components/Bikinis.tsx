
import React from 'react';
import '../styles/Bikinis.css';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
type Product = { name: string; img: string; price: number;};

const bikinis: Product[] = [
    { name: 'ALTIA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 245.00},
    { name: 'CARO BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 245.00},
    { name: 'Corriente Maxi Skirt', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 250.00},
    { name: 'ETIA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 210.00},
    { name: 'INANI BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 210.00},
    { name: 'Isla One Piece', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 215.00 },
  ]

  const Bikinis: React.FC = () => {
    return (
      <div className="shop-container">
        <div className="order-by">
          <select id="sort">
            <option value="popularity">Sort by Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        <div className="product-list">
          <div className="product-grid">
            {bikinis.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Bikinis;
