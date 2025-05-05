import React from "react";
import { useCart } from "../contexts/CartContext";
import ShoppingCartPopup from "./ShoppingCartPopup";

const CartPopupWrapper = ({
  cartOpen,
  setCartOpen,
}: {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}) => {
  const { cart, updateQuantity, removeItem } = useCart(); // ✅ Sửa tại đây

  return (
    <ShoppingCartPopup
      isOpen={cartOpen}
      onClose={() => setCartOpen(false)}
      cartItems={cart}
      updateQuantity={updateQuantity} // ✅ Không còn lỗi
      removeItem={removeItem}
    />
  );
};

export default CartPopupWrapper;
