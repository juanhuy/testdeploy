// src/pages/CheckoutPage.tsx
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import "../styles/CheckoutPage.css";

const CheckoutPage: React.FC = () => {
  const { cart, updateQuantity, removeItem } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    const payload = {
      user_id: 1, // giả định user đăng nhập có id là 1
      shipping_address_id: 3, // giả định địa chỉ giao hàng đã lưu có id là 3
      shipping_method_id: 2, // giả định phương thức giao hàng có id là 2
      order_status_id: 1, // trạng thái mới tạo
      order_total: total.toFixed(2),
      order_items: cart.map((item) => ({
        product_item_id: item.id,
        quantity: item.quantity.toString(),
        price: item.price.toFixed(2),
      })),
    };

    try {
      const res = await fetch("http://localhost:3001/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Đặt hàng thất bại");

      alert("Đặt hàng thành công!");
      // TODO: Clear cart nếu cần
    } catch (err) {
      alert("Đặt hàng thất bại. Vui lòng thử lại.");
      console.error(err);
    }
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <>
          <div className="checkout-form">
            <h3>Thông tin giao hàng</h3>
            <label>Họ tên:</label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
            <label>Email:</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label>Số điện thoại:</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <label>Địa chỉ:</label>
            <textarea
              rows={3}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            ></textarea>
          </div>

          <ul className="checkout-list">
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} className="checkout-img" />
                <div className="checkout-info">
                  <h4>{item.name}</h4>
                  <p>{item.price.toLocaleString()}₫</p>
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.id)}>
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-summary">
            <strong>Total: </strong> <span>{total.toLocaleString()}₫</span>
          </div>

          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Đặt hàng
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
