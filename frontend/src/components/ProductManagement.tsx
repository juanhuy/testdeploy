import React, { useEffect, useState } from 'react';
import '../styles/ProductManagement.css';
import Pagination from '../components/Pagination';

type ProductItem = {
  id: number;
  price: number;
  image: {
    image_url: string;
  };
};

type Product = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  productItems: ProductItem[];
};

type Category = {
  id: number;
  name: string;
  parent_id: number | null;
};

const ProductManagement = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    image: '',
    category_id: 0,
    description: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Lỗi khi tải sản phẩm:', err));

    fetch('http://localhost:3001/api/categories')
      .then(res => {
        if (!res.ok) throw new Error('Không thể tải danh mục');
        return res.json();
      })
      .then(data => setCategories(data))
      .catch(err => console.error('Lỗi khi tải danh mục:', err));
  }, []);

  const getCategoryName = (categoryId: number): string => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.name : 'Không rõ';
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Xác nhận xoá sản phẩm này?')) {
      fetch(`http://localhost:3001/api/products/${id}`, { method: 'DELETE' })
        .then(res => {
          if (res.ok) setProducts(prev => prev.filter(p => p.id !== id));
        })
        .catch(err => console.error('Lỗi xoá sản phẩm:', err));
    }
  };

  const handleCategoryChange = (productId: number, newCategoryId: number) => {
    fetch(`http://localhost:3001/api/products/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category_id: newCategoryId }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Lỗi cập nhật danh mục');
        setProducts(prev =>
          prev.map(p =>
            p.id === productId ? { ...p, category_id: newCategoryId } : p
          )
        );
      })
      .catch(err => console.error('Lỗi khi đổi danh mục:', err));
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.productItems?.[0]?.price || 0,
      image: product.productItems?.[0]?.image?.image_url || '',
      category_id: product.category_id,
      description: product.description || '',
    });
    setShowForm(true);
  };

  const handleFormSubmit = () => {
    if (editingProduct) {
      fetch(`http://localhost:3001/api/products/${editingProduct.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(updated => {
          setProducts(prev =>
            prev.map(p => (p.id === updated.id ? updated : p))
          );
          setShowForm(false);
          setEditingProduct(null);
        })
        .catch(err => console.error('Lỗi khi cập nhật sản phẩm:', err));
    } else {
      fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(res => res.json())
        .then(newProduct => {
          setProducts(prev => [...prev, newProduct]);
          setShowForm(false);
        })
        .catch(err => console.error('Lỗi khi thêm sản phẩm:', err));
    }
  };
  const totalCount = products.length;
  const totalPages = Math.ceil(totalCount / limit);
  const start = (page - 1) * limit;
  const currentProducts = products.slice(start, start + limit);
  return (
    <div className="product-table-container">
      {showForm && (
        <div className="form-popup">
          <h3>{editingProduct ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h3>
          <label>
            Product Name:
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={formData.price}
              onChange={e =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
            />
          </label>
          <label>
            Image (URL):
            <input
              type="text"
              value={formData.image}
              onChange={e =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </label>
          <label>
            Description:
            <textarea
              rows={3}
              value={formData.description}
              onChange={e =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Mô tả sản phẩm"
            />
          </label>
          <label>
            Category:
            <select
              value={formData.category_id}
              onChange={e =>
                setFormData({
                  ...formData,
                  category_id: Number(e.target.value),
                })
              }
            >
              <option value="">-- Select Category --</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </label>
          <div style={{ marginTop: '10px' }}>
            <button className="btn-edit" onClick={handleFormSubmit}>
              Save
            </button>
            <button className="btn-delete" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {!showForm && (
        <>
          <table className="product-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((p, index) => (
                <tr key={p.id}>
                  <td style={{ textAlign: 'center' }}>{start + index + 1}</td>
                  <td>{p.name || 'Không có tên'}</td>
                  <td>
                    {p.productItems?.[0]?.price
                      ? `${p.productItems[0].price.toLocaleString()}₫`
                      : 'Không rõ'}
                  </td>
                  <td>{getCategoryName(p.category_id)}</td>
                  <td>
                    <select
                      value={p.category_id}
                      onChange={e =>
                        handleCategoryChange(p.id, Number(e.target.value))
                      }
                    >
                      <option value="">-- Chọn danh mục --</option>
                      {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {p.productItems?.[0]?.image?.image_url ? (
                      <img src={p.productItems[0].image.image_url} alt={p.name} width={60} height={60} />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>
                  <td>
                    <button className="btn-edit" onClick={() => handleEdit(p)}>
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            {totalPages > 1 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
              />
            )}
            <button
              className="btn-add"
              onClick={() => {
                setFormData({
                  name: '',
                  price: 0,
                  image: '',
                  category_id: categories[0]?.id || 0,
                  description: '',
                });
                setEditingProduct(null);
                setShowForm(true);
              }}
            >
              + Add Product
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductManagement;