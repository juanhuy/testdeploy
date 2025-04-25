import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import ShoppingCartPopup from "./ShoppingCartPopup";
import { useCart } from "../contexts/CartContext";

type ProductItem = {
  id: number;
  price: number;
  image: { image_url: string };
  product: { name: string };
};

function ProductList() {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Lấy thêm updateQuantity và removeItem từ CartContext
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    fetch("http://localhost:3001/api/product-items")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched ProductItems:", data);
        setProductItems(data);
      })
      .catch((err) => {
        console.error("Error loading product items:", err);
      });
  }, []);

  const handleBuyNow = (item: ProductItem) => {
    addToCart({
      id: item.id,
      name: item.product.name,
      price: item.price,
      image: item.image.image_url,
    });
    setIsCartOpen(true);
  };

  return (
    <div className="product-list-container">
      <div className="order-by">
        <select id="sort">
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="product-container">
        {productItems.map((item) => (
          <ProductCard
            key={item.id}
            product={{
              // id: item.id,
              name: item.product.name,
              img: item.image.image_url,
              price: item.price,
            }}
            onBuy={() => handleBuyNow(item)}
          />
        ))}
      </div>

      <ShoppingCartPopup
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}

export default ProductList;