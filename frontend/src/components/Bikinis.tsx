import React, { useState } from 'react';
import '../styles/Navbar.css';

const OnSale: React.FC = () => {
  type Category = {
    name: string;
    img: string;
    price: string;
    oldPrice: string;
  };

  type Categories = {
    clothing: Category[];
    swimwear: Category[];
    accessories: Category[];
  };

  const [selectedCategory, setSelectedCategory] = useState<keyof Categories>('clothing');

  const categories: Categories = {
    clothing: [
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-97b83b6352.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-78432ed3af.jpg', price: '72.50 $', oldPrice: '145.00 $' },
    ],
    swimwear: [
      { name: 'OLA BIKINI SHIMMER', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: '55.00 $', oldPrice: '110.00 $' },
      { name: 'KAIMA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: '51.00 $', oldPrice: '103.00 $' },
      { name: 'CELESTIAL HALTER TOP', img: 'https://stitched-lb.com/wp-content/uploads/2024/05/ezgif-6-d2c2ef9fa5-533x800.jpg', price: '74.00 $', oldPrice: '148.00 $' },
    ],
    accessories: [
      { name: 'NONI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df1691f5ce-640x640.png', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'SUNNY', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df2f85a976-640x640.png', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'HATSUN', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629dfd8b99cd4-640x640.png', price: '35.00 $', oldPrice: '70.00 $' },
    ]
  };

  return (
    <><div class="swimwear-header">
          <a href="/" class="back-home">
              ←
          </a>
          <h1>Swimwear</h1>
      </div><div className="shop-container">
              {/* Sidebar */}
              <div className="sidebar">
                  <h2>Shop by Categories</h2>
                  <ul>
                      <li onClick={() => setSelectedCategory('clothing')}>Clothing</li>
                      <li onClick={() => setSelectedCategory('swimwear')}>Swimwear</li>
                      <li onClick={() => setSelectedCategory('accessories')}>Accessories</li>
                  </ul>
              </div>

              {/* Danh sách sản phẩm */}
              <div className="product-list">
                  {categories[selectedCategory].map((product, index) => (
                      <div key={index} className="product-card">
                          <img src={product.img} alt={product.name} className="product-image" />
                          <div className="product-info">
                              <p className="product-name">{product.name}</p>
                              <p className="product-price">
                                  {product.price} <span className="old-price">{product.oldPrice}</span>
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div></>
  );
};

export default OnSale;
