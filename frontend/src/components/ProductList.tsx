import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import ShoppingCartPopup from "./ShoppingCartPopup";
import { useCart } from "../contexts/CartContext";

export type ProductItem = {
  id: number;
  price: number;
  image: { image_url: string };
  product: { name: string; category_id: number };
};

interface ProductListProps {
  categoryIds: number[];
  page: number;
  limit: number;
  onTotalCountChange?: (n: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  categoryIds,
  page,
  limit,
  onTotalCountChange,
}) => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    fetch("http://localhost:3001/api/product-items")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: ProductItem[]) => {
        const filtered = data.filter(item =>
          categoryIds.includes(item.product.category_id)
        );
        setProductItems(filtered);
        onTotalCountChange?.(filtered.length);
      })
      .catch(err => console.error("Error loading product items:", err));
  }, [categoryIds, onTotalCountChange]);

  // slicing client-side
  const start = (page - 1) * limit;
  const currentItems = productItems.slice(start, start + limit);

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
      <div className="product-container">
        {currentItems.length === 0 ? (
          <p className="no-product">Không có sản phẩm nào phù hợp.</p>
        ) : (
          currentItems.map(item => (
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
