import React, { useEffect, useState } from "react";
import "../styles/CategoryAdminPage.css";

type Category = {
  id: number;
  name: string;
  parent?: {
    id: number;
    name: string;
  } | null;
};

const CategoryAdminPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [newName, setNewName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [selectedParentId, setSelectedParentId] = useState<number | null>(null);

  // Lấy danh sách danh mục
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Lỗi tải danh mục:", err));
  }, []);

  // Bắt đầu sửa
  const handleEditClick = (category: Category) => {
    setEditingCategory(category);
    setNewName(category.name);
  };

  // Gửi PUT cập nhật danh mục
  const handleUpdate = () => {
    if (!editingCategory) return;

    fetch(`http://localhost:3001/api/categories/${editingCategory.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Cập nhật thất bại");
        return res.json();
      })
      .then(updated => {
        setCategories(prev =>
          prev.map(cat => (cat.id === updated.id ? updated : cat))
        );
        setEditingCategory(null);
        alert("✔ Cập nhật thành công");
      })
      .catch(err => alert("❌ Lỗi cập nhật: " + err.message));
  };

  // Gửi POST thêm danh mục
  const handleAdd = () => {
    if (!newCategoryName.trim()) {
      alert("❗ Vui lòng nhập tên danh mục");
      return;
    }

    fetch("http://localhost:3001/api/categories/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategoryName, parent_id: selectedParentId }),
    })
      .then(async res => {
        if (!res.ok) {
          const errText = await res.text();
          throw new Error(`(${res.status}) ${errText}`);
        }
        return res.json();
      })
      .then((created: Category) => {
        setCategories(prev => [...prev, created]);
        setNewCategoryName("");
        setSelectedParentId(null);
        alert("✔ Thêm thành công");
      })
      .catch(err => alert("❌ Lỗi thêm: " + err.message));
  };

  // Gửi DELETE xóa danh mục
  const handleDelete = (id: number) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa?")) return;

    fetch(`http://localhost:3001/api/categories/${id}/delete`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) throw new Error("Xóa thất bại");
        setCategories(prev => prev.filter(cat => cat.id !== id));
        alert("🗑️ Xóa thành công");
      })
      .catch(err => alert("❌ Lỗi xóa: " + err.message));
  };

  return (
    <div className="product-table-container">
      <h2 className="product-table-title">Quản lý danh mục</h2>

      <div className="add-category-form">
        <input
          type="text"
          placeholder="Tên danh mục mới"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <select
          value={selectedParentId ?? ""}
          onChange={(e) =>
            setSelectedParentId(e.target.value ? parseInt(e.target.value) : null)
          }
        >
          <option value="">-- Không có danh mục cha --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button className="btn-add" onClick={handleAdd}>
          ➕ Thêm danh mục
        </button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Danh mục cha</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>
                {editingCategory?.id === cat.id ? (
                  <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  cat.name
                )}
              </td>
              <td>{cat.parent ? cat.parent.name : "(Không có)"}</td>
              <td>
                {editingCategory?.id === cat.id ? (
                  <>
                    <button className="btn-edit" onClick={handleUpdate}>
                      💾 Lưu
                    </button>
                    <button className="btn-cancel" onClick={() => setEditingCategory(null)}>
                      ❌ Hủy
                    </button>
                  </>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => handleEditClick(cat)}>
                      ✏️ Sửa
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(cat.id)}>
                      🗑️ Xóa
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryAdminPage;
