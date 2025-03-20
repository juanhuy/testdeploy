import React, { useState } from 'react';
import '../styles/Bikinis.css';

const OnSale: React.FC = () => {
  type Category = {
    name: string;
    img: string;
    price: number;
    oldPrice: number;
    color?: string;
    size?: string;
  };

  type Categories = {
    clothing: Category[];
    swimwear: Category[];
    accessories: Category[];
  };

  const [selectedCategory, setSelectedCategory] = useState<keyof Categories>('clothing');
  const [priceRange, setPriceRange] = useState<number>(200);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const categories: Categories = {
    clothing: [
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: 21.00, oldPrice: 42.00, color: 'Blue', size: 'M' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-97b83b6352.jpg', price: 89.00, oldPrice: 178.00, color: 'Black', size: 'L' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2024/04/ezgif-5-78432ed3af.jpg', price: 72.50, oldPrice: 145.00, color: 'Pink', size: 'S' },
    ],
    swimwear: [
      { name: 'OLA BIKINI SHIMMER', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg', price: 55.00, oldPrice: 110.00, color: 'Green', size: 'XS' },
      { name: 'KAIMA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg', price: 51.00, oldPrice: 103.00, color: 'Blue', size: 'M' },
      { name: 'CELESTIAL HALTER TOP', img: 'https://stitched-lb.com/wp-content/uploads/2024/05/ezgif-6-d2c2ef9fa5-533x800.jpg', price: 74.00, oldPrice: 148.00, color: 'Black', size: 'L' },
    ],
    accessories: [
      { name: 'NONI', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df1691f5ce-640x640.png', price: 49.00, oldPrice: 98.00 },
      { name: 'SUNNY', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629df2f85a976-640x640.png', price: 49.00, oldPrice: 98.00 },
      { name: 'HATSUN', img: 'https://stitched-lb.com/wp-content/uploads/2023/07/629dfd8b99cd4-640x640.png', price: 35.00, oldPrice: 70.00 },
    ]
  };

  const subcategories = {
    accessories: ['Bags', 'Hats', 'Jewelry'],
    clothing: ['Dresses', 'Tops', 'Bottoms'],
    swimwear: ['Bikinis', 'Cover-ups', 'One-piece', 'Pareo'],
  };

  const colors = ['Baby Blue', 'Black', 'Blue', 'Green', 'Pink', 'Multi'];
  const sizes = ['One Size', 'XS', 'S', 'M', 'L'];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <><div className="swimwear-header">
          <a href="/" className="back-home">
              ←
          </a>
          <h1>Swimwear</h1>
      </div><div className="shop-container">
              <div className="sidebar">
                  <h2>Shop by Categories</h2>
                  <ul>
                      {Object.keys(subcategories).map((category) => (
                        <li key={category}>
                          <div onClick={() => toggleCategory(category)}>
                            {category} {expandedCategories[category] ? '▲' : '▼'}
                          </div>
                          {expandedCategories[category] && (
                            <ul>
                              {subcategories[category].map((sub, index) => (
                                <li key={index} onClick={() => setSelectedCategory(category as keyof Categories)} style={{ cursor: 'pointer' }}>
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                  <input
                        type="range"
                        min="0"
                        max="200"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                  />
                  <p>Up to {priceRange} $</p>
                  <h3>Shop by Color</h3>
                  <select onChange={(e) => setSelectedColor(e.target.value)}>
                    <option value="">All Colors</option>
                    {colors.map(color => <option key={color} value={color}>{color}</option>)}
                  </select>
                  <h3>Shop by Size</h3>
                  <select onChange={(e) => setSelectedSize(e.target.value)}>
                    <option value="">All Sizes</option>
                    {sizes.map(size => <option key={size} value={size}>{size}</option>)}
                  </select>
              </div>

              <div className="product-list">
                  {categories[selectedCategory]
                    .filter(product => product.price <= priceRange)
                    .filter(product => !selectedColor || product.color === selectedColor)
                    .filter(product => !selectedSize || product.size === selectedSize)
                    .map((product, index) => (
                      <div key={index} className="product-card">
                          <img src={product.img} alt={product.name} className="product-image" />
                          <div className="product-info">
                              <p className="product-name">{product.name}</p>
                              <p className="product-price">
                                  {product.price} $ <span className="old-price">{product.oldPrice} $</span>
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div></>
  );
};

export default OnSale;
