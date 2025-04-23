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
    const { cart } = useCart(); // 👉 lấy cart từ context
  
    return (
      <ShoppingCartPopup
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            cartItems={cart} // 👉 truyền cart vào popup
            updateQuantity={function (id: number, newQuantity: number): void {
                throw new Error("Function not implemented.");
            } } removeItem={function (id: number): void {
                throw new Error("Function not implemented.");
            } }      />
    );
  };
  export default CartPopupWrapper; // ✅ default expor