import React, { useState } from 'react';
import '../styles/Navbar.css';

const CustomNavbar: React.FC = () => {
  // State để theo dõi danh mục hiện tại
  const [selectedCategory, setSelectedCategory] = useState<keyof Categories>('clothing');

  // Dữ liệu của từng danh mục sản phẩm
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

  const categories: Categories = {
    clothing: [
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '46.50 $', oldPrice: '93.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '46.50 $', oldPrice: '93.00 $' }
    ],
    swimwear: [
      { name: 'OLA BIKINI SHIMMER', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '55.00 $', oldPrice: '110.00 $' },
      { name: 'KAIMA BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '51.00 $', oldPrice: '103.00 $' },
      { name: 'CELESTIAL HALTER TOP - BLACK', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '74.00 $', oldPrice: '148.00 $' },
      { name: 'AKAL BIKINI', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '51.50 $', oldPrice: '103.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '46.50 $', oldPrice: '93.00 $' }
    ],
    accessories: [
      { name: 'NONI', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'SUNNY', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'HATSUN', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '35.00 $', oldPrice: '70.00 $' },
      { name: 'GRETA', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '49.00 $', oldPrice: '98.00 $' },
      { name: 'DEXTER KNIT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '21.00 $', oldPrice: '42.00 $' },
      { name: 'TEDDI SHIRT-SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '89.00 $', oldPrice: '178.00 $' },
      { name: 'LETTIE MICRO SKIRT', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '72.50 $', oldPrice: '145.00 $' },
      { name: 'ABIGAIL DRESS', img: 'https://stitched-lb.com/wp-content/uploads/2023/11/ezgif-4-65d54fe911.jpg', price: '46.50 $', oldPrice: '93.00 $' }
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

      {/* #YouveBeenStitched */}
      <div className="stitched-container">
        <h2>#YouveBeenStitched</h2>
        <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener norferrer" className="instagram-link">
          <p className='instagram-container'>FOLLOW US ON INSTAGRAM</p>
        </a>
      </div>

      {/* Follow Us on Instagram */}
      <div className="instagram-container">
        <div className="instagram-photos">
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/468801123_18293763880234186_3886852729240463466_nfull.webp" alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/466630837_18291452107234186_6683339765308237086_nfull.webp" alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/466040031_18291036994234186_3859030666903875910_nfull.webp" alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/468801123_18293763880234186_3886852729240463466_nfull.webp" alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/466630837_18291452107234186_6683339765308237086_nfull.webp" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <h3>SHOP NOW</h3>
            <ul>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Swimwear</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div>
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="#">My account</a></li>
              <li><a href="#">Get in Touch</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Price Match Policy</a></li>
            </ul>
          </div>
          <div>
            <h3>STAY UP-TO-DATE</h3>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">SIGN UP</button>
            </form>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Stitched © 2024 | Designed & Developed by TEDMOB.COM</p>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
