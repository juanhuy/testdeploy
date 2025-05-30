import React, { useEffect, useState } from "react";
import "../styles/CategoryAdminPage.css";
import Pagination from "../components/Pagination";
type Category = {
  id: number;
  name: string;
};

const CategoryAdminPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [newName, setNewName] = useState("");
  const [newCategoryName, setNewCategoryName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  // Lấy danh sách danh mục
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to load categories:", err));
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
        if (!res.ok) throw new Error("Update failed");
        return res.json();
      })
      .then(updated => {
        setCategories(prev =>
          prev.map(cat => (cat.id === updated.id ? updated : cat))
        );
        setEditingCategory(null);
        alert("Update successful");
      })
      .catch(err => alert("Update error: " + err.message));
  };

  // Gửi POST thêm danh mục
  const handleAdd = () => {
    if (!newCategoryName.trim()) {
      alert("Please enter a category name");
      return;
    }

    fetch("http://localhost:3001/api/categories/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategoryName }),
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
        alert("Added successfully");
      })
      .catch(err => alert("Add error: " + err.message));
  };

  // Gửi DELETE xóa danh mục
  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    fetch(`http://localhost:3001/api/categories/${id}/delete`, {
      method: "DELETE",
    })
      .then(res => {
        if (!res.ok) throw new Error("Delete failed");
        setCategories(prev => prev.filter(cat => cat.id !== id));
        alert("Delete successful");
      })
      .catch(err => alert("Delete error: " + err.message));
  };
  const totalCount = categories.length;
  const totalPages = Math.ceil(totalCount / limit);
  const start = (page - 1) * limit;
  const currentCategories = categories.slice(start, start + limit);
  return (
    <div className="product-table-container">
      <h2 className="product-table-title">Category Management</h2>

      <div className="add-category-form">
        <input
          type="text"
          placeholder="New category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button className="btn-add" onClick={handleAdd}>Add Category</button>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((cat) => (
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
              <td>
                {editingCategory?.id === cat.id ? (
                  <>
                    <button className="btn-edit" onClick={handleUpdate}>Save</button>
                    <button className="btn-cancel" onClick={() => setEditingCategory(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => handleEditClick(cat)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(cat.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      )}
    </div>
  );
};

export default CategoryAdminPage;
