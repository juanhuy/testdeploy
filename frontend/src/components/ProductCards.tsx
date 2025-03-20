import "../styles/productcard.css";
import "../styles/global.css";
import React from 'react';
// export type Product ={
//     product_name: string;
//     product_image1: string;
//     product_image2: string;
//     product_price: number;
//     product_old_price: number;
// }
//
// export const product : Product = {
//     product_name: "Name",
//     product_image1: "/image/home/bestseller/img1.png",
//     product_image2: "/image/home/bestseller/img2.png",
//     product_price: 200,
//     product_old_price: 300,
// }

function ProductCards() {
    return (
            <div className="product-card">
                <div className="product">
                    <span className="sale-badge">SALE</span>
                    <img src="/image/home/bestseller/img1.png" alt="Product 4"/>
                    <h3>Noni</h3>
                    <p className="price"><s>$98.00</s> <strong>$49.00</strong></p>
                   <button>Add to card</button>
                </div>
            </div>
    );
}

// <ProductCards product={product} />;
export default ProductCards;