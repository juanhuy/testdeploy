import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import ShoppingCartPopup from "./ShoppingCartPopup";
import { useCart } from "../contexts/CartContext";
import { FilterOptions } from "./Sidebar";

type ProductItem = {
  id: number;
  price: number;
  size?: string;
  color?: { name: string };
  image: { image_url: string };
  product: {
    name: string;
    category_id: number;
  };
};

type Product = {
  id: number; // Added 'id' property
  name: string;
  img: string;
  price: number;
};

type Props = {
  product: Product;
  onBuy: () => void; 
};

type FilteredProductListProps = {
  filters: FilterOptions;
  parentCategoryId: number;
  allowedSubcategoryIds?: number[];
};

const FilteredProductList: React.FC<FilteredProductListProps> = ({
  filters,
  parentCategoryId,
  allowedSubcategoryIds,
}) => {
  const [productItems, setProductItems] = useState<ProductItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/product-items");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: ProductItem[] = await res.json();

        console.log("🔥 All products:", data);
        console.log("📦 All product category_ids:", data.map((p) => p.product.category_id));
        console.log("🎯 Current filters:", JSON.stringify(filters, null, 2));
        console.log("📂 parentCategoryId:", parentCategoryId);
        console.log("📂 allowedSubcategoryIds:", allowedSubcategoryIds);

        let filtered = data;

        // ✅ Lọc theo subcategory nếu có
        if (filters.subcategory && !isNaN(Number(filters.subcategory))) {
          const subId = Number(filters.subcategory);
          filtered = filtered.filter((item) => item.product.category_id === subId);
        } else {
          // ✅ Nếu không có subcategory, lọc theo parent hoặc allowedSubcategoryIds
          filtered = filtered.filter((item) => {
            const match = item.product.category_id === parentCategoryId || allowedSubcategoryIds?.includes(item.product.category_id);
            if (match) {
              console.log("✅ MATCH category:", item.product.name, "->", item.product.category_id);
            } else {
              console.log("❌ SKIP category:", item.product.name, "->", item.product.category_id);
            }
            return match;
          });
        }

        console.log("✅ After category/allowedSubcategoryIds filter:", filtered);

        // ✅ Lọc theo khoảng giá
        const min = filters.minPrice ? Number(filters.minPrice) : undefined;
        const max = filters.maxPrice ? Number(filters.maxPrice) : undefined;
        console.log("💰 Price range: min =", min, "max =", max);

        if (typeof min === "number" && !isNaN(min)) {
          filtered = filtered.filter((item) => item.price >= min);
          console.log("💸 After min price filter:", filtered);
        }

        if (typeof max === "number" && !isNaN(max)) {
          filtered = filtered.filter((item) => item.price <= max);
          console.log("💸 After max price filter:", filtered);
        }

        // ✅ Lọc theo màu
        if (filters.color) {
          filtered = filtered.filter((item) => item.color?.name.toLowerCase() === filters.color!.toLowerCase());
          console.log("🎨 After color filter:", filtered);
        }

        // ✅ Lọc theo size
        if (filters.size) {
          filtered = filtered.filter((item) => item.size?.toLowerCase() === filters.size!.toLowerCase());
          console.log("📏 After size filter:", filtered);
        }

        console.log("✅ Final filtered products:", filtered);
        setProductItems(filtered);
      } catch (error) {
        console.error("❌ Error loading products:", error);
      }
    };

    fetchProducts();
  }, [filters, parentCategoryId, allowedSubcategoryIds]);

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

export default FilteredProductList;
