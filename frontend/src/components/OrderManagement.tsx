import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/OrderManagement.css';
import InvoiceButton from "../components/InvoiceButton";

enum OrderStatus {
  PENDING = 'pending',
  SHIPPING = 'shipping',
  COMPLETED = 'completed',
}

type Order = {
  id: number;
  user: { fullName: string } | null;
  order_total: number;
  status: string | 'pending';
  orderDate: string;
};


const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/admin/api/orders')
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => {
        console.error('Lỗi khi tải đơn hàng:', err);
        setOrders([]);
      });
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm('Xác nhận xoá đơn hàng này?')) {
      fetch(`http://localhost:3001/admin/api/orders/${id}`, { method: 'DELETE' })
        .then((res) => {
          if (res.ok && orders) {
            setOrders(orders.filter((o) => o.id !== id));
          }
        })
        .catch((err) => console.error('Lỗi khi xoá đơn hàng:', err));
    }
  };

  const handleDetail = (id: number) => {
    navigate(`/admin/orders/${id}`);
  };

  return (
    <div className="order-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Khách hàng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
            <th>Ngày đặt</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.user?.fullName || 'Khách hàng'}</td>
                <td>{(order.order_total ?? 0).toLocaleString()}₫</td>
                <td>{order.status || OrderStatus.PENDING}</td>
                <td>{order.orderDate ? new Date(order.orderDate).toLocaleString('vi-VN') : ''}</td>
                <td>
                  <button className="order-button btn-detail" onClick={() => handleDetail(order.id)}>Chi tiết</button>
                  <button className="order-button btn-delete" onClick={() => handleDelete(order.id)}>Xoá</button>
                  <InvoiceButton id={order.id} />

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>Không có đơn hàng nào.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
