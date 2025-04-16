import React, { useState } from "react";
import Table from "../components/Table";
import EditForm from "../components/EditForm";
import SearchBar from "../components/SearchBar"; // Import SearchBar
import "../styles/promotions.css";

const Promotions = () => {
  // Dữ liệu mẫu cho Promotions
  const [data, setData] = useState([
    { id: 1, name: "Black Friday", start_at: "2025-11-20", end_at: "2025-11-27", discount_rate: "20%" },
    { id: 2, name: "Christmas Sale", start_at: "2025-12-20", end_at: "2025-12-27", discount_rate: "30%" },
  ]);

  const [filteredData, setFilteredData] = useState(data);
  const [editingItem, setEditingItem] = useState(null);
  const [adding, setAdding] = useState(false);

  // Định nghĩa cột cho bảng Promotions
  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    { key: "start_at", header: "Start At" },
    { key: "end_at", header: "End At" },
    { key: "discount_rate", header: "Discount Rate" },
  ];

  // Hàm xử lý tìm kiếm
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) || item.discount_rate.includes(query)
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
    if (window.confirm("Are you sure you want to delete this promotion?")) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      setFilteredData(newData);
    }
  };

  return (
    <div className="promotions-container">
      <div className="promotions-header">
        <h1 className="title">Promotions</h1>
        <button className="btn-add" onClick={() => setAdding(true)}>Add Promotion</button>
      </div>

      {/* Thêm thanh tìm kiếm */}
      <SearchBar onSearch={handleSearch} />

      {/* Hiển thị bảng với dữ liệu đã lọc */}
      <Table data={filteredData} columns={columns} onEdit={handleEdit} onDelete={handleDelete} />

      {(editingItem || adding) && (
        <EditForm
          initialData={editingItem || { name: "", start_at: "", end_at: "", discount_rate: "" }}
          onSave={handleSave}
          onCancel={handleCancel}
          title={editingItem ? "Edit Promotion" : "Add Promotion"}
        />
      )}
    </div>
  );
};

export default Promotions;