import React, { useState } from "react";

// Định nghĩa kiểu dữ liệu Product
interface Product {
  id: number;
  name: string;
  value: number;
  description: string;
  all_rate: number;
  category_id: number;
}

// Component Form để thêm/sửa sản phẩm
const ProductForm = ({
  initialData,
  onSubmit,
  onCancel,
}: {
  initialData?: Product;
  onSubmit: (data: Product) => void;
  onCancel: () => void;
}) => {
  const [product, setProduct] = useState<Product>(
    initialData || { id: Date.now(), name: "", value: 0, description: "", all_rate: 0, category_id: 1 }
  );

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "value" || name === "all_rate" || name === "category_id" ? Number(value) : value,
    }));
  };

  // Xử lý submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{initialData ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Tên sản phẩm:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Giá:</label>
        <input
          type="number"
          name="value"
          value={product.value}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Mô tả:</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Danh mục (ID):</label>
        <input
          type="number"
          name="category_id"
          value={product.category_id}
          onChange={handleChange}
          className="border p-2 w-full rounded-md"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
        >
          Hủy
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Lưu
        </button>
      </div>
    </form>
  );
};

// Component ProductTable chính
const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Áo thun nam", value: 200000, description: "Áo cotton mềm mại", all_rate: 4.5, category_id: 1 },
    { id: 2, name: "Quần jeans nữ", value: 350000, description: "Quần jeans thời trang", all_rate: 4.7, category_id: 2 },
  ]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Xóa sản phẩm
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Chỉnh sửa sản phẩm
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // Thêm mới sản phẩm
  const handleAdd = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  // Xử lý khi submit form
  const handleFormSubmit = (data: Product) => {
    if (editingProduct) {
      setProducts((prev) => prev.map((p) => (p.id === data.id ? data : p)));
    } else {
      const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      setProducts([...products, { ...data, id: newId }]);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="flex gap-5">
      {/* Bảng danh sách sản phẩm */}
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">PRODUCT</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 border-b text-left">ID</th>
                <th className="px-6 py-3 border-b text-left">Tên sản phẩm</th>
                <th className="px-6 py-3 border-b text-left">Giá</th>
                <th className="px-6 py-3 border-b text-left">Mô tả</th>
                <th className="px-6 py-3 border-b text-left">Danh mục (ID)</th>
                <th className="px-6 py-3 border-b text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b">{product.id}</td>
                  <td className="px-6 py-3 border-b">{product.name}</td>
                  <td className="px-6 py-3 border-b">{product.value} VND</td>
                  <td className="px-6 py-3 border-b">{product.description} VND</td>
                  <td className="px-6 py-3 border-b">{product.category_id}</td>
                  <td className="px-6 py-3 border-b">
                    <button onClick={() => handleEdit(product)} className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition">Sửa</button>
                    <button onClick={() => handleDelete(product.id)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mt-4">
          <button onClick={handleAdd} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">Thêm sản phẩm</button>
        </div>
      </div>

      {showForm && <ProductForm initialData={editingProduct || undefined} onSubmit={handleFormSubmit} onCancel={handleCancel} />}
    </div>
  );
};

export default ProductTable;
