import React, { useState } from "react";
import Table from "../components/Table";
import EditForm from "../components/EditForm";
import SearchBar from "../components/SearchBar"; // Import SearchBar
import "../styles/orders.css";

const Orders = () => {
  const [data, setData] = useState([
    { id: 101, orderDate: "2025-02-01", order_total: "$50", user_id: 1, shipping_address_id: 10, shipping_method_id: 2, order_status_id: 1 },
    { id: 102, orderDate: "2025-02-03", order_total: "$100", user_id: 2, shipping_address_id: 11, shipping_method_id: 1, order_status_id: 2 },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [editingItem, setEditingItem] = useState(null);
  const [adding, setAdding] = useState(false);

  const columns = [
    { key: "id", header: "ID" },
    { key: "orderDate", header: "Order Date" },
    { key: "order_total", header: "Total" },
    { key: "user_id", header: "User ID" },
    { key: "shipping_address_id", header: "Shipping Address ID" },
    { key: "shipping_method_id", header: "Shipping Method ID" },
    { key: "order_status_id", header: "Order Status ID" },
  ];

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.orderDate.includes(query) ||
        item.order_total.toLowerCase().includes(lowerCaseQuery) ||
        item.user_id.toString().includes(query)
    );
    setFilteredData(filtered);
  };

  const handleEdit = (item) => setEditingItem(item);

  const handleSave = (updatedItem) => {
    if (updatedItem.id) {
      setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    } else {
      const newId = data.length ? Math.max(...data.map((item) => item.id)) + 1 : 1;
      setData([...data, { ...updatedItem, id: newId }]);
    }
    setEditingItem(null);
    setAdding(false);
    setFilteredData(data);
  };

  const handleCancel = () => {
    setEditingItem(null);
    setAdding(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      setFilteredData(newData);
    }
  };

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h1 className="title">Orders</h1>
        <button className="btn-add" onClick={() => setAdding(true)}>Add Order</button>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Display Table with filtered data */}
      <Table data={filteredData} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      {(editingItem || adding) && (
        <EditForm
          initialData={
            editingItem || {
              orderDate: "",
              order_total: "",
              user_id: "",
              shipping_address_id: "",
              shipping_method_id: "",
              order_status_id: "",
            }
          }
          onSave={handleSave}
          onCancel={handleCancel}
          title={editingItem ? "Edit Order" : "Add Order"}
        />
      )}
    </div>
  );
};

export default Orders;