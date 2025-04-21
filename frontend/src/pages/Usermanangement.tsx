import React, { useEffect, useState } from 'react';
import { User, UserInput } from '../types/User';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import '../styles/UserManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Lỗi khi tải người dùng:', err));
  }, []);

  const handleAdd = () => {
    setEditingUser(null);
    setShowForm(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc muốn xoá người dùng này?')) {
      fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'DELETE'
      })
        .then(res => {
          if (res.ok) {
            setUsers(users.filter(u => u.id !== id));
          } else {
            console.error('Xoá thất bại');
          }
        })
        .catch(err => console.error('Lỗi khi xoá người dùng:', err));
    }
  };

  const handleFormSubmit = (user: UserInput | User) => {
    if ('id' in user) {
      // 👉 SỬA người dùng
      fetch(`http://localhost:3001/api/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(updated => {
          setUsers(prev => prev.map(u => (u.id === updated.id ? updated : u)));
          setShowForm(false);
        })
        .catch(err => console.error('Lỗi khi cập nhật:', err));
    } else {
      // 👉 THÊM người dùng mới qua API đăng ký
      fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(res => {
          if (!res.ok) throw new Error('Thêm thất bại');
          return res.json();
        })
        .then(newUser => {
          // API trả về dạng: { status: "success", user: {...} }
          setUsers(prev => [...prev, newUser.user]); // ✅ Dùng newUser.user
          setShowForm(false);
        })
        .catch(err => {
          console.error('Lỗi khi thêm mới:', err);
          alert('Email đã tồn tại hoặc dữ liệu không hợp lệ!');
        });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className="user-management-container">
      <h2 className="user-management-title">Quản lý người dùng</h2>

      {!showForm && (
        <div className="user-management-action">
          <button className="btn-add" onClick={handleAdd}>+ Thêm người dùng</button>
        </div>
      )}

      {showForm ? (
        <UserForm
          initialData={editingUser || undefined}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      ) : (
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default UserManagement;
