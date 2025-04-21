// src/pages/OrderManagement.tsx
import React, { useEffect, useState } from 'react';

type Order = {
  id: number;
  customer_name: string;
  total_price: number;
  status: string;
  created_at: string; 
};

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('Lỗi khi tải đơn hàng:', err));
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm('Xác nhận xoá đơn hàng này?')) {
      fetch(`http://localhost:3001/api/orders/${id}`, { method: 'DELETE' })
        .then(res => {
          if (res.ok) setOrders(orders.filter(o => o.id !== id));
        })
        .catch(err => console.error('Lỗi khi xoá đơn hàng:', err));
    }
  };

  return (
    <div>
      <h2>Quản lý đơn hàng</h2>
      <table>
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
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer_name}</td>
              <td>{order.total_price?.toLocaleString()}₫</td>
              <td>{order.status}</td>
              <td>{new Date(order.created_at).toLocaleString('vi-VN')}</td>
              <td>
                <button style={{ backgroundColor: '#2196f3', color: '#fff', marginRight: '8px' }}>
                  Chi tiết
                </button>
                <button
                  style={{ backgroundColor: '#f44336', color: '#fff' }}
                  onClick={() => handleDelete(order.id)}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
