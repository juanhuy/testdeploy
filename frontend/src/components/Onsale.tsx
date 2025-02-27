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
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-8a6a877359.jpg', price: '46.50 $', oldPrice: '93.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-1d8aacd5d3.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-81534c5f39.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-a40dffa10c.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/12/ezgif-5-a5ad287329.jpg', price: '46.50 $', oldPrice: '93.00 $' }
    ],
    swimwear: [
      { name: 'OLA BIKINI SHIMMER', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: '55.00 $', oldPrice: '110.00 $' },
      { name: 'KAIMA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: '51.00 $', oldPrice: '103.00 $' },
      { name: 'CELESTIAL HALTER TOP - BLACK', img: 'https://stitched-lb.com/wp-content/uploads/2024/05/ezgif-6-d2c2ef9fa5-533x800.jpg', price: '74.00 $', oldPrice: '148.00 $' },
      { name: 'AKAL BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/6409a86c03b0f-533x800.jpg', price: '51.50 $', oldPrice: '103.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-3-d9f0fa1afb-565x800.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/07/Screenshot2023-06-23at2.29.50PM_2048x2048-1-533x800.webp', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/02/KAIMA.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2024/08/Capture.png', price: '46.50 $', oldPrice: '93.00 $' }
    ],
    accessories: [
      { name: 'NONI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df1691f5ce-640x640.png', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'SUNNY', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df2f85a976-640x640.png', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'HATSUN', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629dfd8b99cd4-640x640.png', price: '35.00 $', oldPrice: '70.00 $' },
      { name: 'GRETA', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df66c752a2-640x640.png', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df46861cd3-640x640.png', price: '21.00 $', oldPrice: '42.00 $' },
    ]
  };
  // Hàm xử lý khi người dùng chọn một danh mục
  const handleCategoryChange = (category: keyof Categories) => {
    setSelectedCategory(category);
  };

  // Hàm hiển thị các sản phẩm của danh mục đã chọn
  const renderProducts = (category: keyof Categories) => {
    return categories[category].map((product, index) => (
      <div key={index} className="product">
        <img src={product.img} alt={product.name} />
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price} <span className="old-price">{product.oldPrice}</span></p>
      </div>
    ));
  };

  return (
    <div className="home-container">
      <h1 className="section-title">ON SALE</h1>

      <div className="categories">
        <button onClick={() => handleCategoryChange('clothing')}>Clothing</button>
        <button onClick={() => handleCategoryChange('swimwear')}>Swimwear</button>
        <button onClick={() => handleCategoryChange('accessories')}>Accessories</button>
      </div>

      <div className="category-products">
        {renderProducts(selectedCategory)}
      </div>
    </div>
  );
};

export default OnSale;
