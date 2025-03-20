import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Hiển thị 12 sản phẩm trên mỗi trang

  useEffect(() => {
    const data: Product[] = [
      { id: 1, name: "Primrose Earrings", price: 125, originalPrice: 250, image: "src/assets/image1.jpg" },
      { id: 2, name: "Citrus Earrings", price: 75, originalPrice: 150, image: "src/assets/image2.jpg" },
      { id: 3, name: "Apple Slice Earrings", price: 75, originalPrice: 150, image: "src/assets/image3.jpg" },
      { id: 4, name: "Flower Hoops Earrings", price: 75, originalPrice: 150, image: "src/assets/image4.jpg" },
      { id: 5, name: "Lemon Earrings", price: 60, originalPrice: 120, image: "src/assets/image5.jpg" },
      { id: 6, name: "Marigold Earrings", price: 57, originalPrice: 115, image: "src/assets/image6.jpg" },
      { id: 7, name: "Pear Earrings", price: 75, originalPrice: 150, image: "src/assets/image7.jpg" },
      { id: 8, name: "Sparkle Earrings", price: 62, originalPrice: 125, image: "src/assets/image8.jpg" },
      { id: 9, name: "Gold Hoop Earrings", price: 75, originalPrice: 150, image: "src/assets/image9.jpg" },
      { id: 10, name: "Diamond Stud Earrings", price: 125, originalPrice: 250, image: "src/assets/image10.jpg" },
      { id: 11, name: "Pearl Drop Earrings", price: 57, originalPrice: 115, image: "src/assets/image11.jpg" },
      { id: 12, name: "Ruby Heart Earrings", price: 60, originalPrice: 120, image: "src/assets/image12.jpg" },
      { id: 13, name: "Greta", price: 98, originalPrice: 140, image: "src/assets/image13.jpg" },
      { id: 14, name: "Hatsun", price: 70, originalPrice: 100, image: "src/assets/image14.jpg" },
      { id: 15, name: "Sunny", price: 98, originalPrice: 140, image: "src/assets/image15.jpg" },
      { id: 16, name: "Noni", price: 98, originalPrice: 140, image: "src/assets/image16.jpg" },
      { id: 17, name: "Bridgette", price: 98, originalPrice: 140, image: "src/assets/image17.jpg" }
    ];
    setProducts(data);
  }, []);

  // Tính toán index để phân trang
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="product-container">
      {selectedProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <div className="product-price">
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
            <span className="discount-price">${product.price.toFixed(2)}</span>
          </div>
        </div>
      ))}

      {/* Phân trang */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button disabled={currentPage * itemsPerPage >= products.length} onClick={() => setCurrentPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
