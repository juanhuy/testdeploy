// import React from "react";
// import { ShoppingBag, Heart, Search, User, ChevronDown, Shirt, Sun, Briefcase, Percent } from "lucide-react";
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       {/* Left - Menu */}
//       <div className="navbar-menu">
//         <NavItem icon={<Shirt size={20} />} text="CLOTHING" />
//         <NavItem icon={<Sun size={20} />} text="SWIMWEAR" />
//         <NavItem icon={<Briefcase size={20} />} text="ACCESSORIES" />
//         <NavItem icon={<Percent size={20} />} text="SALE" />
//       </div>

//       {/* Logo */}
//       <img className="navbar-logo" src="src/assets/logo.png" alt="Logo" />



//       {/* Right - Icons */}
//       <div className="navbar-icons">
//         <CurrencySelector />
//         <User size={20} className="icon" />
//         <Search size={20} className="icon" />
//         <IconWithBadge icon={<Heart size={20} />} count={0} />
//         <IconWithBadge icon={<ShoppingBag size={20} />} count={0} />
//         <span className="cart-total">$0.00</span>
//       </div>
//     </nav>
//   );
// };

// // Component Menu Item
// const NavItem = ({ icon, text }: { icon: JSX.Element; text: string }) => (
//   <div className="nav-item">
//     {icon} <span>{text}</span> <ChevronDown size={14} />
//   </div>
// );

// // Component Icon có Badge
// const IconWithBadge = ({ icon, count }: { icon: JSX.Element; count: number }) => (
//   <div className="icon-badge">
//     {icon}
//     {count > 0 && <span className="badge">{count}</span>}
//   </div>
// );

// // Component Chọn Tiền Tệ
// const CurrencySelector = () => (
//   <select className="currency-selector">
//     <option>USD</option>
//     <option>EUR</option>
//     <option>VND</option>
//   </select>
// );

// export default Navbar;

import React, { useState } from 'react';
// import { FaFacebook, FaInstagram } from 'react-icons/fa';
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

      {/* #YouveBeenStitched */}
      <div className="stitched-container">
        <h2>#YouveBeenStitched</h2>
        <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener norferrer" className="instagram-link">
          <p className='instagram-container'>FOLLOW US ON INSTAGRAM</p>
        </a>
      </div>

      {/* Under follow Us on Instagram */}
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
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/465014964_18289747729234186_5057716534431768962_nfull.webp" alt="Instagram" />
          </a>
          <a href="https://www.instagram.com/p/DCGX7gUswHB/" target="_blank" rel="noopener noreferrer">
            <img src="https://stitched-lb.com/wp-content/uploads/sb-instagram-feed-images/464874879_18289582120234186_2759425204800171193_nfull.webp" alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-container">
        <div className="footer-links">
          <div>
            <img src="https://stitched-lb.com/wp-content/uploads/2024/07/Stitched-white@4x.png" alt="Stitcheb-lb" />
          </div>
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
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                {/*<FaInstagram size={24} color="white" />*/}
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                {/*<FaFacebook size={24} color="white" />*/}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>STITCHED © 2024 | DESIGNED & DEVELOPED BY 
            <a href="https://www.tedmob.com" target="_blank" rel="noopener noreferrer" className="instagram-link"> TEDMOB.COM</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CustomNavbar;
