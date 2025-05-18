import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import ShoppingCartPopup from "./ShoppingCartPopup";
import { useCart } from "../contexts/CartContext";
import { FilterOptions } from "./Sidebar";

export type ProductItem = {
  id: number;
  price: number;
  size?: string;
  color?: { name: string };
  image: { image_url: string };
  product: { name: string; category_id: number };
};

interface FilteredProductListProps {
  filters: FilterOptions;
  parentCategoryId: number;
  allowedSubcategoryIds?: number[];
  page: number;
  limit: number;
  onTotalCountChange?: (n: number) => void;
}

const FilteredProductList: React.FC<FilteredProductListProps> = ({
  filters,
  parentCategoryId,
  allowedSubcategoryIds,
  page,
  limit,
  onTotalCountChange,
}) => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/product-items");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: ProductItem[] = await res.json();

        // filter by category/subcategory
        let filtered = filters.subcategory
          ? data.filter(
              item =>
                item.product.category_id === Number(filters.subcategory)
            )
          : data.filter(
              item =>
                item.product.category_id === parentCategoryId ||
                allowedSubcategoryIds?.includes(item.product.category_id)
            );

        // filter by price
        if (filters.minPrice)
          filtered = filtered.filter(
            item => item.price >= Number(filters.minPrice)
          );
        if (filters.maxPrice)
          filtered = filtered.filter(
            item => item.price <= Number(filters.maxPrice)
          );
        // filter by color
        if (filters.color)
          filtered = filtered.filter(
            item =>
              item.color?.name.toLowerCase() ===
              filters.color!.toLowerCase()
          );
        // filter by size
        if (filters.size)
          filtered = filtered.filter(
            item =>
              item.size?.toLowerCase() === filters.size!.toLowerCase()
          );

        setProductItems(filtered);
        onTotalCountChange?.(filtered.length);
      } catch (err) {
        console.error("Error loading filtered products:", err);
      }
    })();
  }, [
    filters,
    parentCategoryId,
    allowedSubcategoryIds,
    onTotalCountChange,
  ]);

  // slicing
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

export default FilteredProductList;
