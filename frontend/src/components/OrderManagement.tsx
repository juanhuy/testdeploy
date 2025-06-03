import React, { useEffect, useState } from 'react';
import '../styles/OrderManagement.css';

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
      .catch(err => console.error('Error loading order:', err));
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      fetch(`http://localhost:3001/api/orders/${id}`, { method: 'DELETE' })
        .then(res => {
          if (res.ok) setOrders(orders.filter(o => o.id !== id));
        })
        .catch(err => console.error('Error deleting order:', err));
    }
  };

  return (
    <div className="order-container">
     

      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Order Date</th>
            <th>Action</th>
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
                <button className="order-button btn-detail">Detail</button>
                <button className="order-button btn-delete" onClick={() => handleDelete(order.id)}>
                  Delete
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
