import "../styles/global.css"
import '../styles/SaleProductList.css';
import React from 'react';
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

type Product = {id: number, name: string; img: string; price: number;};

const saleProducts: Product[] = [
    {id: 1, name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2023/07/641dd35dbafb9-533x800.jpg", price: 210.0},
    { id:2,name: "CARO BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2023/07/641dd486d70f5-533x800.jpg", price: 245.0},
    { id:3,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2025/03/7ALA2-280x420.jpg", price: 210.0},
    { id:4,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2025/03/GREEN-280x420.jpg", price: 210.0},
    { id:5,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2025/03/ATILA-BLUE.avif", price: 210.0},
    { id:6,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2025/03/SENSEL.jpg", price: 210.0},
    { id:7,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2023/09/primrose-earrings-large-fuchsia-64f719c9ddaf8-234x300.jpg", price: 210.0},
    { id:8,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2023/09/CITRUS-PINK-234x300.jpg", price: 210.0},
    { id:9,name: "ALTIA BIKINI", img: "https://stitched-lb.com/wp-content/uploads/2023/09/LEMON-234x300.jpeg", price: 210.0},
  ];

function SaleProductList() {
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
                {saleProducts.map((product, index) => (
                    <ProductCard key={index} product={product} onBuy={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                ))}
            </div>
        </div>
    </div>
    );
}

export default SaleProductList;