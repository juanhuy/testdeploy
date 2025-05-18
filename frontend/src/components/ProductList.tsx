import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import ShoppingCartPopup from "./ShoppingCartPopup";
import { useCart } from "../contexts/CartContext";

type ProductItem = {
  id: number;
  price: number;
  image: { image_url: string };
  product: {
    name: string;
    category_id: number;
  };
};

type Props = {
  categoryIds: number[];
};

const ProductList: React.FC<Props> = ({ categoryIds }) => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    console.log("📦 categoryIds prop received:", categoryIds);

    if (!categoryIds || categoryIds.length === 0) {
      console.warn("⚠️ categoryIds is empty — skipping fetch.");
      setProductItems([]);
      return;
    }

    fetch("http://localhost:3001/api/product-items")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product items.");
        return res.json();
      })
      .then((data: ProductItem[]) => {
        console.log("✅ Fetched all products:", data);
        console.log("📌 All category_ids in API:", data.map(d => d.product.category_id));

        const filtered = data.filter((item) =>
          categoryIds.includes(item.product.category_id)
        );

        console.log("🎯 Filtered products to display:", filtered);
        setProductItems(filtered);
      })
      .catch((err) => {
        console.error("❌ Error fetching product items:", err);
      });
  }, [categoryIds]);

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
        {productItems.length === 0 ? (
          <p className="no-product">Không có sản phẩm nào phù hợp.</p>
        ) : (
          productItems.map((item) => (
            <ProductCard
              key={item.id}
              product={{
                id: item.id,
                name: item.product.name,
                img: item.image.image_url,
                price: item.price,
              }}
              onBuy={() => handleBuyNow(item)}
            />
          ))
        )}
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
};

export default ProductList;
